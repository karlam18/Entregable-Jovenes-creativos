// Servidor de Dermia: sirve la página y guarda los usuarios en una base de datos SQLite.
const express = require("express");
const { DatabaseSync } = require("node:sqlite");   // SQLite incluido en Node, no necesita instalar nada
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");

const PORT = process.env.PORT || 3000;

// IMPORTANTE: antes de publicar, define tu propia clave secreta (variable JWT_SECRET).
const SECRET = process.env.JWT_SECRET || "cambia-esta-clave-antes-de-publicar";
if (!process.env.JWT_SECRET) console.warn("Aviso: usando la clave secreta de ejemplo. Define JWT_SECRET antes de publicar.");

/* ===== Base de datos ===== */
const db = new DatabaseSync(path.join(__dirname, "tienda.db"));
db.exec(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario    TEXT NOT NULL UNIQUE COLLATE NOCASE,
    clave_hash TEXT NOT NULL,
    creado_en  TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  -- AGREGAR AQUÍ: más tablas (pedidos, direcciones, productos...)
`);
const buscar = db.prepare("SELECT * FROM usuarios WHERE usuario = ?");
const crear  = db.prepare("INSERT INTO usuarios (usuario, clave_hash) VALUES (?, ?)");

/* ===== Servidor ===== */
const app = express();
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));   // solo la carpeta public es visible

function iniciarSesion(res, u) {
  const token = jwt.sign({ id: u.id, usuario: u.usuario }, SECRET, { expiresIn: "7d" });
  res.cookie("sesion", token, { httpOnly: true, sameSite: "lax", maxAge: 7 * 24 * 3600 * 1000 });
}
function validar(usuario, clave) {
  if (typeof usuario !== "string" || !/^[\w.-]{3,30}$/.test(usuario)) return "El usuario debe tener de 3 a 30 caracteres (letras, números, punto, guion o guion bajo).";
  if (typeof clave !== "string" || clave.length < 6 || clave.length > 100) return "La contraseña debe tener al menos 6 caracteres.";
  return null;
}

app.post("/api/register", (req, res) => {
  const { usuario, clave } = req.body || {};
  const error = validar(usuario, clave);
  if (error) return res.status(400).json({ error });
  if (buscar.get(usuario)) return res.status(409).json({ error: "Ese usuario ya existe. Elige otro o ingresa." });
  const info = crear.run(usuario, bcrypt.hashSync(clave, 10));   // la contraseña se guarda cifrada
  iniciarSesion(res, { id: info.lastInsertRowid, usuario });
  res.json({ usuario });
});

app.post("/api/login", (req, res) => {
  const { usuario, clave } = req.body || {};
  const u = typeof usuario === "string" ? buscar.get(usuario) : null;
  if (!u || typeof clave !== "string" || !bcrypt.compareSync(clave, u.clave_hash))
    return res.status(401).json({ error: "Usuario o contraseña incorrectos." });
  iniciarSesion(res, u);
  res.json({ usuario: u.usuario });
});

app.get("/api/me", (req, res) => {
  try { res.json({ usuario: jwt.verify(req.cookies.sesion, SECRET).usuario }); }
  catch { res.status(401).json({ error: "Sin sesión" }); }
});

app.post("/api/logout", (req, res) => { res.clearCookie("sesion"); res.json({ ok: true }); });

app.listen(PORT, () => console.log(`Dermia lista en http://localhost:${PORT}`));
