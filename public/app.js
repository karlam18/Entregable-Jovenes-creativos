/* ===== 7. DATOS: agrega o edita tus productos aquí =====
   precio = tu precio. otras = precio en cada tienda de la competencia.
  el_Cleanser.webp color = color del frasco. forma = "" | "tall" | "wide" */
const TIENDAS = ["Medipiel", "Aruma", "Farmatodo"];   // nombres de las tiendas a comparar
const PRODUCTOS = [
  {id:1, nombre:"Gel limpiador PDRN Medicube",     cat:"Limpieza",    ml:200, precio:89500,  otras:[999999, 999999, 999999], color:"#FFFFFF", forma:"", img:"img/GelLimpiador.jpg"},
  {id:2, nombre:"Melaclear Dr Althea",            cat:"Tratamiento",    ml:20, precio:110000,  otras:[999999, 999999, 999999], color:"#FFFFFF", forma:"tall", img:"img/melaclear.jpg"},
  {id:3, nombre:"Serum vitamina C Dr Althea",    cat:"Tratamiento", ml:30,  precio:109000,  otras:[109000, 115990, 109000], color:"#FFFFFF", forma:"", img:"img/vitaminaC.jpg"},
  {id:4, nombre:"Acido hialurónico Good Molecules", cat:"Tratamiento", ml:30,  precio:51000,  otras:[999999, 999999, 999999], color:"#FFFFFF", forma:"", img:"img/AcidoHialuronico.jpg"},
  {id:5, nombre:"Crema hidratante Dr althea 345",cat:"Hidratación", ml:50,  precio:115000,  otras:[125900, 119900, 119900], color:"#FFFFFF", forma:"wide", img:"img/cremaDrAlthea.jpg"},
  {id:6, nombre:"Centella FPS 50 contiene Acido hialuronico",  cat:"Protección",  ml:50,  precio:82500,  otras:[999999, 96500, 99990], color:"#FFFFFF", forma:"tall", img:"img/CentellaBloqueadorAzul.jpg"},
  {id:7, nombre:"Cera ve Gel limpiador espumoso",     cat:"Limpieza",    ml:473, precio:86000,  otras:[110900, 110990, 110950], color:"#FFFFFF", forma:"", img:"img/GellimpiadorCeraVe.jpg"},
  {id:8, nombre:"Crema hidratante CeraVe SPF 50",        cat:"Hidratación", ml:89,  precio:82500,  otras:[999999, 999999, 999999], color:"#FFFFFF", forma:"wide", img:"img/hidratanteceravespf50.jpg"},
  {id:9, nombre:"Centella FPS 30 mineral",        cat:"Protección", ml:50,  precio:96500,  otras:[999999, 999999, 999999], color:"#FFFFFF", forma:"wide", img:"img/BloqueadorMineralCentella.jpg"},
  {id:10, nombre:"Crema Eos Vainilla",        cat:"Cuidado corporal", ml:473,  precio:65000,  otras:['N/A', 'N/A', 'N/A'], color:"#FFFFFF", forma:"wide", img:"img/EosVainilla.jpg"},
  {id:11, nombre:"Primer piel grasa Elf",        cat:"Maquillaje", ml:26,  precio:68500,  otras:['N/A', 'N/A', 'N/A'], color:"#FFFFFF", forma:"wide", img:"img/ElfPrimerAzul.jpg"},
  {id:12, nombre:"Kit SkinCare Centella",        cat:"Kits", ml:120,  precio:107000,  otras:[999999, 999999, 170000], color:"#FFFFFF", forma:"wide", img:"img/KitCentella.jpg"},
  {id:13, nombre:"INNZA depiladora de Luz pulsada",        cat:"Complementos", ml:0,  precio:364000,  otras:['N/A', 'N/A', 'N/A'], color:"#FFFFFF", forma:"wide", img:"img/INNZA.jpg"},
  {id:14, nombre:"Crema Eos Pistacho",        cat:"Cuidado corporal", ml:473,  precio:65000,  otras:['N/A', 'N/A', 'N/A'], color:"#FFFFFF", forma:"wide", img:"img/EosPistacho.jpg"},
  {id:15, nombre:"Crema Eos Beach Waves",        cat:"Cuidado corporal", ml:473,  precio:70000,  otras:['N/A', 'N/A', 'N/A'], color:"#FFFFFF", forma:"wide", img:"img/EosPlaya.jpg"},
  {id:16, nombre:"Crema Eos Natural",        cat:"Cuidado corporal", ml:473,  precio:65000,  otras:['N/A', 'N/A', 'N/A'], color:"#FFFFFF", forma:"wide", img:"img/EosNatural.jpg"},
  {id:17, nombre:"Crema Eos Malvavisco",        cat:"Cuidado corporal", ml:473,  precio:70000,  otras:['N/A', 'N/A', 'N/A'], color:"#FFFFFF", forma:"wide", img:"img/EosMamelo.jpg"},
  {id:18, nombre:"Crema Eos Strawberry",        cat:"Cuidado corporal", ml:473,  precio:65000,  otras:['N/A', 'N/A', 'N/A'], color:"#FFFFFF", forma:"wide", img:"img/EosFresa.jpg"},
  {id:19, nombre:"Crema Eos Granada Frambuesa",        cat:"Cuidado corporal", ml:473,  precio:65000,  otras:['N/A', 'N/A', 'N/A'], color:"#FFFFFF", forma:"wide", img:"img/24.avif"},
  {id:20, nombre:"Crema Eos Coconut",        cat:"Cuidado corporal", ml:473,  precio:65000,  otras:['N/A', 'N/A', 'N/A'], color:"#FFFFFF", forma:"wide", img:"img/EosCoconut.jpg"},
  {id:21, nombre:"Kiko Milano Gloss tono 17",        cat:"Maquillaje", ml:6.5,  precio:86000,  otras:['N/A', 'N/A', 'N/A'], color:"#FFFFFF", forma:"wide", img:"img/kikomilanogloss17.jpg"},
  {id:22, nombre:"Kit Medicube PDRN",        cat:"Kits", ml:120,  precio:100000,  otras:[999999, 999999,999999], color:"#FFFFFF", forma:"wide", img:"img/KitMedicubePDRN.jpg"},
  {id:23, nombre:"Bolso de mano",        cat:"Complementos", ml:0,  precio:146000,  otras:['N/A', 'N/A', 'N/A'], color:"#FFFFFF", forma:"wide", img:"img/BolsoCafe.jpg"},
];

/* Características de cada producto (la clave es el id del producto) */
const DETALLES = {
  1:{desc:"Limpia profundamente sin dejar la piel tirante, ayudando a mantener la hidratación y una textura suave.", piel:"Todo tipo, incluida la sensible", uso:"Mañana y noche. Aplica sobre el rostro húmedo, masajea suavemente hasta formar espuma y enjuaga con abundante agua.", ingredientes:"PDRN, colágeno, niacinamida, LHA, ceramidas y ácido hialurónico.", 
    beneficios:["Elimina impurezas y exceso de grasa.", 
      "Ayuda a mejorar la apariencia de los poros.",
      "Exfolia suavemente y favorece una textura más uniforme.",
      "Ayuda a mantener la barrera de hidrataión."]},
  2:{desc:"Tratamiento iluminador que ayuda a mejorar la apariencia de manchas oscuras y unificar el tono de la piel.", piel:"Todo tipo de piel, incluso sensible.", uso:"Después de la limpieza facial, aplica una pequeña cantidad sobre las manchas o zonas con tono desigual. Úsalo como último paso de hidratación. Durante el día, acompaña con protector solar.", ingredientes:"Ácido tranexámico, niacinamida, extracto de regaliz y ácido hialurónico.",
    beneficios:["Ayuda a disminuir la apariencia de manchas.",
    "Mejora la apariencia de marcas posteriores al acné.",
    "Favorece un tono más uniforme y luminoso.",
    "Aporta hidratación y suavidad."]},
  3:{desc:"Serum iluminador que ayuda a mejorar la apariencia de manchas, opacidad y tono desigual, dejando la piel con un aspecto más radiante.", piel:"Todo tipo de piel.", uso:"Mañana o noche. Después de limpiar el rostro, aplica unas gotas y distribuye suavemente. Finaliza con hidratante. Si lo utilizas durante el día, aplica protector solar.", ingredientes:"63 % agua de espino amarillo, 5 % niacinamida, 2 % ácido tranexámico y derivados de vitamina C.", 
    beneficios:["Ayuda a mejorar la apariencia de manchas oscuras.",
      "Aporta luminosidad a la piel apagada.",
      "Favorece un tono más uniforme.",
      "Proporciona hidratación y protección antioxidante."]},
  4:{desc:"Serum hidratante que ayuda a retener la humedad, dejando la piel más suave, flexible y con apariencia saludable.", piel:"Todo tipo de piel, especialmente deshidratada.", uso:"Mañana y noche. Aplica unas gotas sobre el rostro ligeramente húmedo. Deja absorber y continúa con tu crema hidratante.", ingredientes:"Ácido hialurónico, glicerina y propanediol.", 
    beneficios:["Proporciona hidratación.",
    "Ayuda a mejorar la apariencia de líneas finas por deshidratación.",
    "Deja la piel más suave y flexible.",
    "Ayuda a mantener la humedad de la piel."]},
  5:{desc:"Crema hidratante de textura ligera que ayuda a calmar, hidratar y fortalecer la barrera cutánea sin dejar una sensación pesada.", piel:"Todo tipo de piel, especialmente sensible, mixta y con tendencia a imperfecciones.", uso:"Mañana y noche. Aplica una cantidad adecuada sobre el rostro limpio, después de tus serums. Distribuye suavemente hasta su absorción.", ingredientes:"Niacinamida, pantenol, centella asiática, ceramidas, ácido hialurónico y té verde.", 
    beneficios:["Ayuda a calmar la piel.",
    "Favorece la reparación de la barrera cutánea.",
    "Aporta hidratación sin sensación pesada.",
    "Ayuda a mejorar la apariencia de marcas e imperfecciones."]},
  6:{desc:"Protector solar de textura ligera tipo serum que protege frente a los rayos UV mientras aporta hidratación y confort a la piel.", piel:"Todo tipo de piel, especialmente normal, seca y mixta.", uso:"En la mañana, como último paso de tu rutina. Aplica generosamente sobre rostro y cuello 15 minutos antes de la exposición solar. Reaplica cada 2 horas y después de sudar, nadar o secarte con una toalla.", 
    ingredientes:"Centella asiática, pantenol y ácido hialurónico.", 
    beneficios:["Protección solar SPF 50.",
    "Ayuda a mantener la hidratación.",
    "Contribuye a calmar la piel.",
    "Textura ligera y fácil de distribuir.",
    "No deja una capa blanca visible."]},
    //img:"img/CentellaBloqueadorAzul.jpg"}
  7:{desc:"Limpieza diaria que elimina impurezas y exceso de grasa sin alterar la barrera protectora de la piel.", piel:"Piel normal a grasa.", uso:"Mañana y noche. Aplica sobre el rostro húmedo, masajea suavemente hasta formar espuma y enjuaga.", 
    ingredientes:"Tres ceramidas esenciales, niacinamida, ácido hialurónico y glicerina.", 
    beneficios:["Elimina el exceso de grasa y suciedad.",
    "Ayuda a mantener la barrera cutánea.",
    "Limpia sin dejar sensación de resequedad.",
    "No comedogénico y sin perfume."]},
  8:{desc:"Hidratante facial de uso diario que combina hidratación y protección solar para cuidar la piel durante el día.", piel:"Piel normal a seca.", uso:"Cada mañana, después de limpiar el rostro. Aplica generosamente sobre cara y cuello. Reaplica cada 2 horas durante la exposición solar.", 
    ingredientes:"Tres ceramidas esenciales, niacinamida, ácido hialurónico y óxido de zinc.", 
    beneficios:["Protección solar de amplio espectro SPF 50.",
    "Ayuda a mantener la hidratación.",
    "Fortalece la barrera protectora de la piel.",
    "Ayuda a mantener la piel suave y confortable.",
    "Fórmula no comedogénica y sin perfume."]},
  9:{desc:"Protector solar mineral que ayuda a proteger la piel de los rayos UV mientras proporciona un cuidado suave y calmante.", piel:"Todo tipo de piel, especialmente sensible.", uso:"En la mañana, como último paso de la rutina facial. Aplica una cantidad generosa y uniforme sobre rostro y cuello 15-30 minutos antes de exponerte al sol. Reaplica cada 2 horas.", 
      ingredientes:"Óxido de zinc, centella asiática, niacinamida y madecassoside.", 
      beneficios:["Protección solar mineral SPF 30.",
      "Ayuda a calmar y cuidar la piel sensible.",
      "Contribuye a mantener la barrera cutánea.",
      "Ayuda a proteger frente a los rayos UVA y UVB.",
      "Fórmula con centella asiática."]},
  10:{desc:"Hidrata profundamente la piel durante 24 horas, dejándola suave, nutrida y con un delicioso aroma a vainilla, almizcle y caramelo.", 
      piel:"Todo tipo de piel", 
      uso:"Aplica diariamente sobre la piel limpia y seca. Masajea suavemente hasta su completa absorción. Ideal después de la ducha.", 
      ingredientes:"Manteca de karité, aceite de karité, glicerina y vitamina E.", 
      beneficios:["Proporciona hasta 24 horas de hidratación.",
      "Ayuda a nutrir y suavizar la piel.",
      "Contribuye a proteger la barrera cutánea.",
      "Se absorbe rápidamente sin dejar sensación grasosa."]},
  11:{desc:"Prepara la piel para el maquillaje, ayuda a controlar el brillo y proporciona un acabado mate mientras mantiene el maquillaje en su lugar.", 
      piel:"Todo tipo de piel, especialmente mixta a grasa.", 
      uso:"Después de la hidratación facial, aplica una pequeña cantidad con las yemas de los dedos. Distribuye dando suaves toquecitos y espera 30 segundos antes de aplicar la base.", 
      ingredientes:"Niacinamida, glicerina, sílice y extracto de mirto limón.", 
      beneficios:["Ayuda a controlar la apariencia del brillo.",
      "Proporciona un acabado mate.",
      "Mejora la fijación y duración del maquillaje.",
      "Deja una sensación suave sobre la piel.",
      "Ayuda a conseguir un maquillaje más uniforme."]},
  12:{desc:"Rutina de cuidado facial diseñada para limpiar, hidratar, calmar y mejorar la apariencia de la piel, aprovechando las propiedades de la centella asiática.", 
      piel:"Piel normal, seca, mixta y sensible.", 
      uso:["Utiliza los productos siguiendo el orden de tu rutina:",
        "Limpieza facial.",
        "Tónico Centella.",
        "Ampolla Centella.",
        "Crema hidratante Centella.",
      ],
      ingredientes:"Centella asiática, pantenol, niacinamida, ácido hialurónico y ceramidas.", 
      beneficios:["Ayuda a calmar la piel y disminuir la apariencia de rojeces.",
      "Proporciona hidratación y suavidad.",
      "Favorece una barrera cutánea saludable.",
      "Ayuda a mejorar la apariencia de la textura.",
      "Aporta luminosidad y frescura al rostro.",
      "Ideal para complementar una rutina de cuidado facial."]},
  13:{desc:"Dispositivo de depilación para uso en casa que utiliza tecnología de luz pulsada intensa (IPL) para ayudar a reducir progresivamente el crecimiento del vello.", 
      piel:"Adecuada para determinados tonos de piel clara a media y vello oscuro. No es apta para todos los tonos de piel ni colores de vello.", 
      uso:["Rasura previamente la zona que deseas tratar.",
       "Asegúrate de que la piel esté limpia y completamente seca",
       "Realiza una prueba en una pequeña zona y espera 24 horas",
       "Selecciona el nivel de energía adecuado según el manual",
       "Coloca la ventana de luz en contacto completo con la piel y realiza los disparos",
       "Sigue la frecuencia de uso indicada por el fabricante."], 
      ingredientes:"Luz pulsada intensa (IPL), niveles de energía ajustables y sistema de enfriamiento (según modelo).", 
      beneficios:["Ayuda a reducir progresivamente el crecimiento del vello.",
      "Permite realizar tratamientos desde casa.",
      "Ayuda a conseguir una piel más suave.",
      "Permite tratar diferentes zonas del cuerpo.",
      "Ofrece una alternativa práctica a las sesiones frecuentes de depilación tradicional."]},
  14:{desc:"Hidrata profundamente la piel durante 24 horas, dejándola suave, nutrida y con un delicioso aroma Cálido, dulce y con un toque almendrado.", 
      piel:"Todo tipo de piel", 
      uso:"Aplica diariamente sobre la piel limpia y seca. Masajea suavemente hasta su completa absorción. Ideal después de la ducha.", 
      ingredientes:"Manteca de karité, aceite de karité, glicerina y vitamina E.", 
      beneficios:["Proporciona hasta 24 horas de hidratación.",
      "Ayuda a nutrir y suavizar la piel.",
      "Contribuye a proteger la barrera cutánea.",
      "Se absorbe rápidamente sin dejar sensación grasosa."]},
  15:{desc:"Hidrata profundamente la piel durante 24 horas, dejándola suave, nutrida y con un delicioso aroma Frutal y tropical con notas playeras", 
      piel:"Todo tipo de piel", 
      uso:"Aplica diariamente sobre la piel limpia y seca. Masajea suavemente hasta su completa absorción. Ideal después de la ducha.", 
      ingredientes:"Manteca de karité, aceite de karité, glicerina y vitamina E.", 
      beneficios:["Proporciona hasta 24 horas de hidratación.",
      "Ayuda a nutrir y suavizar la piel.",
      "Contribuye a proteger la barrera cutánea.",
      "Se absorbe rápidamente sin dejar sensación grasosa."]},
  16:{desc:"Hidrata profundamente la piel durante 24 horas, dejándola suave, nutrida y con un delicioso aroma limpio, fresco, similar a la ropa recién lavada", 
      piel:"Todo tipo de piel", 
      uso:"Aplica diariamente sobre la piel limpia y seca. Masajea suavemente hasta su completa absorción. Ideal después de la ducha.", 
      ingredientes:"Manteca de karité, aceite de karité, glicerina y vitamina E.", 
      beneficios:["Proporciona hasta 24 horas de hidratación.",
      "Ayuda a nutrir y suavizar la piel.",
      "Contribuye a proteger la barrera cutánea.",
      "Se absorbe rápidamente sin dejar sensación grasosa."]},
  17:{desc:"Hidrata profundamente la piel durante 24 horas, dejándola suave, nutrida y con un delicioso aroma dulce y reconfortante a malvavisco tostado/quemado", 
      piel:"Todo tipo de piel", 
      uso:"Aplica diariamente sobre la piel limpia y seca. Masajea suavemente hasta su completa absorción. Ideal después de la ducha.", 
      ingredientes:"Manteca de karité, aceite de karité, glicerina y vitamina E.", 
      beneficios:["Proporciona hasta 24 horas de hidratación.",
      "Ayuda a nutrir y suavizar la piel.",
      "Contribuye a proteger la barrera cutánea.",
      "Se absorbe rápidamente sin dejar sensación grasosa."]},
  18:{desc:"Hidrata profundamente la piel durante 24 horas, dejándola suave, nutrida y con un delicioso aroma dulce y jugoso, con notas de fresa y crema batida", 
      piel:"Todo tipo de piel", 
      uso:"Aplica diariamente sobre la piel limpia y seca. Masajea suavemente hasta su completa absorción. Ideal después de la ducha.", 
      ingredientes:"Manteca de karité, aceite de karité, glicerina y vitamina E.", 
      beneficios:["Proporciona hasta 24 horas de hidratación.",
      "Ayuda a nutrir y suavizar la piel.",
      "Contribuye a proteger la barrera cutánea.",
      "Se absorbe rápidamente sin dejar sensación grasosa."]},
  19:{desc:"Hidrata profundamente la piel durante 24 horas, dejándola suave, nutrida y con un delicioso aroma frutal y vibrante, con granada dulce y frambuesa ácida", 
      piel:"Todo tipo de piel", 
      uso:"Aplica diariamente sobre la piel limpia y seca. Masajea suavemente hasta su completa absorción. Ideal después de la ducha.", 
      ingredientes:"Manteca de karité, aceite de karité, glicerina y vitamina E.", 
      beneficios:["Proporciona hasta 24 horas de hidratación.",
      "Ayuda a nutrir y suavizar la piel.",
      "Contribuye a proteger la barrera cutánea.",
      "Se absorbe rápidamente sin dejar sensación grasosa."]},
  20:{desc:"Hidrata profundamente la piel durante 24 horas, dejándola suave, nutrida y con un delicioso aroma fresco y tropical, a coco limpio y agua de coco con hibisco y almizcle solar", 
      piel:"Todo tipo de piel", 
      uso:"Aplica diariamente sobre la piel limpia y seca. Masajea suavemente hasta su completa absorción. Ideal después de la ducha.", 
      ingredientes:"Manteca de karité, aceite de karité, glicerina y vitamina E.", 
      beneficios:["Proporciona hasta 24 horas de hidratación.",
      "Ayuda a nutrir y suavizar la piel.",
      "Contribuye a proteger la barrera cutánea.",
      "Se absorbe rápidamente sin dejar sensación grasosa."]},
  21:{desc:"Brillo labial de efecto 3D que aporta luminosidad y un acabado brillante con un delicado tono rosado.", 
      piel:"Todo tipo de labios.", 
      uso:"Aplica directamente sobre los labios desde el centro hacia las comisuras.", 
      ingredientes:"Aceites vegetales, vitamina E y emolientes.", 
      beneficios:["Aporta brillo efecto 3D.",
      "Ayuda a mantener los labios hidratados.",
      "Deja una textura suave y luminosa.",
      "Realza el color natural de los labios."]},
  22:{desc:"Rutina de cuidado facial que combina PDRN y colágeno para ayudar a mejorar la apariencia de la piel, aportando hidratación y luminosidad.", 
      piel:"Todo tipo de piel", 
      uso:"Utiliza los productos después de la limpieza facial, siguiendo el orden indicado para cada uno.", 
      ingredientes:"PDRN, colágeno y ácido hialurónico (según la formulación de cada producto).", 
      beneficios:["Ayuda a mejorar la apariencia de la elasticidad.",
      "Aporta hidratación y luminosidad.",
      "Favorece una apariencia más firme y saludable.",
      "Ayuda a mejorar la apariencia de líneas finas."]},
  23:{desc:"Bolso de diseño elegante y versátil, ideal para complementar tus outfits diarios o darle un toque sofisticado a tus looks especiales.", 
      piel:"Casual, diario y ocasiones especiales.", 
      uso:"Combínalo con looks casuales, formales o de noche. Su diseño permite complementar diferentes estilos.", 
      ingredientes:"Material sintético y acabados en tono burdeos.", 
      beneficios:["Diseño elegante y moderno.",
      "Amplio espacio para tus pertenencias.",
      "Versátil para diferentes ocasiones.",
      "Cierre seguro y cómodo de llevar.",
      "Complementa tu estilo personal."]},



};

/* Reglas para las cuentas del carrito (los precios ya incluyen IVA) */
const CONFIG = {
  iva: 0.19,
  envio: ' Varia segun la ciudad',                 // costo de envío
  //envioGratisDesde: 150000,    // envío gratis si el subtotal llega a este valor
  cupones: {BIENVENIDA:0.10, PIEL15:0.15}   // AGREGAR AQUÍ: más códigos (0.10 = 10%)
};
let cuponActivo = null;

/* ===== 8. LÓGICA ===== */
const $ = id => document.getElementById(id);
const money = n => "$" + n.toLocaleString("es-CO");
let cart = {};            // {idProducto: cantidad}
let session = null;       // usuario con sesión iniciada
let cat = "Todos";
let mode = "in";

/* Comunicación con el servidor (los usuarios se guardan en la base de datos) */
async function api(ruta, datos){
  try{
    const r = await fetch("/api/" + ruta, {method: datos ? "POST" : "GET", headers:{"Content-Type":"application/json"}, body: datos ? JSON.stringify(datos) : undefined});
    const j = await r.json().catch(()=>({}));
    return {ok:r.ok, ...j};
  }catch(e){ return {ok:false, error:"No hay conexión con el servidor. Revisa que esté encendido."}; }
}
async function cargarSesion(){ const r = await api("me"); if(r.ok){ session = r.usuario; renderSession(); } }

function toast(msg){ const t=$("toast"); t.textContent=msg; t.classList.add("show"); setTimeout(()=>t.classList.remove("show"),2400); }

/* Productos */
function renderChips(){
  const cats = ["Todos", ...new Set(PRODUCTOS.map(p=>p.cat))];
  $("chips").innerHTML = cats.map(c=>`<button class="chip" aria-pressed="${c===cat}" data-c="${c}">${c}</button>`).join("");
  $("chips").querySelectorAll("button").forEach(b=>b.onclick=()=>{cat=b.dataset.c;renderChips();renderGrid();});
}
function renderGrid(){
  const list = PRODUCTOS.filter(p=>cat==="Todos"||p.cat===cat);
  $("grid").innerHTML = list.map(p=>`
    <article class="card">
      <div class="shot" data-ver="${p.id}" style="background:${p.color}33">${p.img ? `<img src="${p.img}" alt="${p.nombre}">` : `<div class="bottle ${p.forma}" style="background:${p.color}"></div>`}</div>
      <div class="info">
        <h3 style="font-size:18px">${p.nombre}</h3>
        <small>${p.cat} · ${p.ml} ml</small>
        <div class="price">${money(p.precio)}</div>
        <div class="btns"><button class="btn ghost" data-ver="${p.id}">Características</button><button class="btn" data-add="${p.id}">Agregar</button></div>
      </div>
    </article>`).join("");
  $("grid").querySelectorAll("[data-add]").forEach(b=>b.onclick=()=>add(+b.dataset.add));
  $("grid").querySelectorAll("[data-ver]").forEach(b=>b.onclick=()=>verDetalle(+b.dataset.ver));
}

/* Comparador */
function renderTable(){
  const q = $("buscar").value.toLowerCase();
  $("thead").innerHTML = `<tr><th>Producto</th><th>Eterea</th>${TIENDAS.map(t=>`<th>${t}</th>`).join("")}<th>Resultado</th></tr>`;
  $("tbody").innerHTML = PRODUCTOS.filter(p=>p.nombre.toLowerCase().includes(q)).map(p=>{
    const todos = [p.precio, ...p.otras], min = Math.min(...todos);
    const cells = todos.map(v=>`<td class="${v===min?"best":""}">${money(v)}</td>`).join("");
    const res = p.precio===min ? `<span class="tag">Tenemos el mejor precio</span>` : `<span style="color:var(--muted)">Mejor: ${TIENDAS[p.otras.indexOf(min)]}</span>`;
    return `<tr><td>${p.nombre}</td>${cells}<td>${res}</td></tr>`;
  }).join("") || `<tr><td colspan="${TIENDAS.length+3}">No encontramos ese producto. Prueba con otro nombre.</td></tr>`;
}
$("buscar").oninput = renderTable;

/* Carrito */
function add(id){ cart[id]=(cart[id]||0)+1; renderCart(); toast("Agregado al carrito"); }
function renderCart(){
  const ids = Object.keys(cart);
  $("cartCount").textContent = ids.reduce((s,i)=>s+cart[i],0);
  $("lines").innerHTML = ids.length ? ids.map(i=>{
    const p = PRODUCTOS.find(x=>x.id==i);
    return `<div class="line"><b>${p.nombre}</b><span class="qty"><button data-m="${i}" aria-label="Quitar uno">−</button> ${cart[i]} <button data-p="${i}" aria-label="Agregar uno">+</button></span><span>${money(p.precio*cart[i])}</span></div>`;
  }).join("") : `<p style="color:var(--muted)">Tu carrito está vacío. Agrega un producto para empezar.</p>`;
  resumen();
  $("lines").querySelectorAll("[data-p]").forEach(b=>b.onclick=()=>{cart[b.dataset.p]++;renderCart();});
  $("lines").querySelectorAll("[data-m]").forEach(b=>b.onclick=()=>{if(--cart[b.dataset.m]<=0)delete cart[b.dataset.m];renderCart();});
}
$("btnCart").onclick = ()=>$("drawer").classList.add("open");
$("closeCart").onclick = ()=>$("drawer").classList.remove("open");
// $("checkout").onclick = ()=>{
//   if(!Object.keys(cart).length) return toast("Agrega productos antes de comprar");
//   if(!session){ $("drawer").classList.remove("open"); openLogin(); return toast("Ingresa para completar tu compra"); }
//   /* AGREGAR AQUÍ: conexión con tu pasarela de pago (Wompi, PayU, Mercado Pago, Stripe...) */
//   cart = {}; cuponActivo = null; $("coupon").value = ""; renderCart(); $("drawer").classList.remove("open");
  //toast("Compra registrada. Gracias, " + session);
// };
/* borrar si no sirve  */

// Abrir formulario de compra
$("checkout").onclick = () => {
   if(!Object.keys(cart).length) return toast("Agrega productos antes de comprar");
   if(!session){ $("drawer").classList.remove("open"); openLogin(); return toast("Ingresa para completar tu compra"); }

   if (!Object.keys(cart).length) {
    return toast("Agrega productos antes de comprar");
  }

  if (!session) {
    $("drawer").classList.remove("open");
    openLogin();
    return toast("Ingresa para completar tu compra");
  }

  // Mostrar resumen del pedido
  const ids = Object.keys(cart);

  $("resumenPedido").innerHTML = `
    <h3>Resumen de tu pedido</h3>
    ${ids.map(i => {
      const p = PRODUCTOS.find(x => x.id == i);
      return `<p>${p.nombre} x ${cart[i]} - ${money(p.precio * cart[i])}</p>`;
    }).join("")}
  `;

  $("drawer").classList.remove("open");
  $("checkoutModal").classList.add("open");
};


// Cerrar formulario
$("closeCheckout").onclick = () => {
  $("checkoutModal").classList.remove("open");
};


// Enviar pedido por WhatsApp
$("checkoutForm").onsubmit = (e) => {
  e.preventDefault();

  const nombre = $("nombreCliente").value.trim();
  const telefono = $("telefonoCliente").value.trim();
  const cedula = $("cedulaCliente").value.trim();
  const direccion = $("direccionCliente").value.trim();
  const ciudad = $("ciudadCliente").value.trim();
  const pago = $("seccionpago").value;

  const ids = Object.keys(cart);

  const productos = ids.map(i => {
    const p = PRODUCTOS.find(x => x.id == i);

    return `${p.nombre};
  

Cantidad: ${cart[i]}
Subtotal: ${money(p.precio * cart[i])}`;
  }).join("\n\n");

  const total = ids.reduce((s, i) => {
    const p = PRODUCTOS.find(x => x.id == i);
    return s + p.precio * cart[i];
  }, 0);

  const mensaje = `
¡Hola! Quiero realizar un pedido en Etérea.

DATOS DEL CLIENTE
Nombre: ${nombre}
Teléfono: ${telefono}
Cédula: ${cedula}
Dirección: ${direccion}
Ciudad: ${ciudad}

PRODUCTOS
${productos}

TOTAL: ${money(total)}


Adjuntaré mi comprobante de pago por este medio.
`;


//INFORMACION DE PAGO

//INFORMACION DE PAGO
  const numeroWhatsApp = "3137396639";

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
};


/* borrar si no sirve  */


/* Cuentas: subtotal, descuento, envío, IVA incluido y total */
function calcular(){
  const subtotal = Object.keys(cart).reduce((s,i)=>s+PRODUCTOS.find(x=>x.id==i).precio*cart[i],0);
  const pct = cuponActivo ? CONFIG.cupones[cuponActivo] : 0;
  const descuento = Math.round(subtotal*pct);
  const base = subtotal - descuento;
  const envio = (subtotal===0 || base>=CONFIG.envioGratisDesde) ? 0 : CONFIG.envio;
  const total = base + envio;
  const iva = Math.round(base - base/(1+CONFIG.iva));
  return {subtotal, pct, descuento, envio, iva, total};
}
function resumen(){
  const c = calcular();
  $("subtotal").textContent = money(c.subtotal);
  $("rowDisc").hidden = !c.descuento;
  $("discLabel").textContent = "Descuento " + Math.round(c.pct*100) + "% (" + cuponActivo + ")";
  $("disc").textContent = "-" + money(c.descuento);
  $("ship").textContent = c.subtotal && !c.envio ? "Gratis" : money(c.envio);
  $("iva").textContent = money(c.iva);
  $("total").textContent = money(c.total);
}
$("applyCoupon").onclick = ()=>{
  const code = $("coupon").value.trim().toUpperCase();
  if(CONFIG.cupones[code]){ cuponActivo = code; resumen(); toast("Código aplicado"); }
  else { cuponActivo = null; resumen(); toast("Ese código no es válido"); }
};

/* Características del producto */
let verId = null;
function verDetalle(id){
  const p = PRODUCTOS.find(x=>x.id===id), d = DETALLES[id] || {};
  verId = id;
  const shot = $("dShot");
  shot.style.background = p.color + "33";
  const botella = `<div class="bottle ${p.forma}" style="background:${p.color}"></div>`;

  if (p.img) {
    shot.innerHTML = `<img src="${p.img}" alt="${p.nombre}" class="dImg">`;
    shot.querySelector("img").onerror = () => { shot.innerHTML = botella; };
  } else {
    shot.innerHTML = botella;
  }
  $("dTitle").textContent = p.nombre;
  $("dDesc").textContent = d.desc || "";
  const filas = [["Tipo de piel",d.piel],["Cómo usarlo", Array.isArray(d.uso)
    ? `<ul>${d.uso.map(b => `<li>${b}</li>`).join("")}</ul>`
    : d.uso],["Ingredientes clave",d.ingredientes],["Beneficios", Array.isArray(d.beneficios)
    ? `<ul>${d.beneficios.map(b => `<li>${b}</li>`).join("")}</ul>`
    : d.beneficios],["Contenido",p.ml+" ml"]];
  $("dSpecs").innerHTML = filas.filter(f=>f[1]).map(f=>`<dt>${f[0]}</dt><dd>${f[1]}</dd>`).join("");
  const min = Math.min(...p.otras);
  $("dCompare").innerHTML = p.precio<=min ? "Tenemos el mejor precio frente a las otras tiendas." : `Mejor precio en otras tiendas: ${money(min)}. <a href="#comparar" id="dLink">Ver comparación</a>`;
  const l = $("dLink"); if(l) l.onclick = cerrarDetalle;
  $("dPrice").textContent = money(p.precio);
  $("detailOverlay").classList.add("open");
  history.replaceState(null,"","#producto-"+id);   // enlace directo al producto
}
function cerrarDetalle(){ $("detailOverlay").classList.remove("open"); if(location.hash.startsWith("#producto-")) history.replaceState(null,"",location.pathname); }
function abrirDesdeHash(){ const m = location.hash.match(/^#producto-(\d+)$/); if(m && PRODUCTOS.some(p=>p.id===+m[1])) verDetalle(+m[1]); }
$("dAdd").onclick = ()=>add(verId);
$("dClose").onclick = cerrarDetalle;
$("detailOverlay").onclick = e=>{ if(e.target.id==="detailOverlay") cerrarDetalle(); };
window.addEventListener("hashchange", abrirDesdeHash);

/* Login y registro: los datos van al servidor, que cifra la contraseña y guarda el usuario. */
function setMode(m){
  mode=m; $("tabIn").setAttribute("aria-selected",m==="in"); $("tabUp").setAttribute("aria-selected",m==="up");
  $("loginTitle").textContent = $("submitAuth").textContent = m==="in" ? "Ingresar" : "Crear cuenta"; $("err").textContent="";
}
function openLogin(){ $("loginOverlay").classList.add("open"); $("user").focus(); }
function renderSession(){ $("btnLogin").textContent = session ? "Salir (" + session + ")" : "Ingresar"; }
$("btnLogin").onclick = async ()=>{ if(session){ await api("logout",{}); session=null; renderSession(); toast("Sesión cerrada"); } else openLogin(); };
$("closeLogin").onclick = ()=>$("loginOverlay").classList.remove("open");
$("tabIn").onclick = ()=>setMode("in"); $("tabUp").onclick = ()=>setMode("up");
$("submitAuth").onclick = async ()=>{
  const u=$("user").value.trim(), p=$("pass").value;
  if(u.length<3) return $("err").textContent="El usuario debe tener al menos 3 caracteres.";
  if(p.length<6) return $("err").textContent="La contraseña debe tener al menos 6 caracteres.";
  $("submitAuth").disabled = true;
  const r = await api(mode==="up" ? "register" : "login", {usuario:u, clave:p});
  $("submitAuth").disabled = false;
  if(!r.ok) return $("err").textContent = r.error || "No se pudo completar. Intenta de nuevo.";
  session = r.usuario; renderSession(); $("pass").value = "";
  $("loginOverlay").classList.remove("open"); toast("Bienvenido, " + r.usuario);
};
document.addEventListener("keydown",e=>{ if(e.key==="Escape"){ $("loginOverlay").classList.remove("open"); $("drawer").classList.remove("open"); cerrarDetalle(); }});

renderChips(); renderGrid(); renderTable(); renderCart(); renderSession(); abrirDesdeHash(); cargarSesion();
