// Muestra los usuarios registrados (nunca muestra las contraseñas).  Uso: npm run usuarios
const { DatabaseSync } = require("node:sqlite");
const db = new DatabaseSync(require("path").join(__dirname, "tienda.db"), { readOnly: true });
const filas = db.prepare("SELECT id, usuario, creado_en FROM usuarios ORDER BY id").all();
console.log(filas.length ? "" : "Todavía no hay usuarios registrados.");
if (filas.length) console.table(filas);
