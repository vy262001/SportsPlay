// ================================
// Eventos semanales actualizados automáticamente
// ================================

function obtenerProximoDia(diaSemanaObjetivo) {
  const hoy = new Date();
  const diferencia = (diaSemanaObjetivo + 7 - hoy.getDay()) % 7;
  const proximaFecha = new Date(hoy);
  proximaFecha.setDate(hoy.getDate() + diferencia);
  return proximaFecha;
}

function formatearFecha(fecha) {
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];
  return `${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;
}

const showsSemanales = [
  { base: "WWE Monday Night Raw", dia: 1, enlace: "/HTML/destacada2.html" },
  { base: "WWE NXT", dia: 2, enlace: "/HTML/destacada2.html" },
  { base: "AEW Dynamite", dia: 3, enlace: "/HTML/FoxSportsPremium.html" },
  { base: "TNA iMPACT!", dia: 4, enlace: "https://www.youtube.com/watch?v=O7PxNoqL-8Y" },
  { base: "WWE SmackDown", dia: 5, enlace: "/HTML/destacada2.html" },
  { base: "AEW Collision", dia: 6, enlace: "/HTML/TNTUSA.html" }
];

const opcionesEventos = {};

// Agrega eventos semanales con fechas actualizadas
showsSemanales.forEach(show => {
  const fecha = obtenerProximoDia(show.dia);
  const titulo = `${show.base} ${formatearFecha(fecha)}`;
  opcionesEventos[titulo] = [
    {
      enlace: show.enlace,
      enlaceProgramacion: show.enlace
    }
  ];
});

// ================================
// Eventos especiales fijos
// ================================
Object.assign(opcionesEventos, {
  // Eventos 10/10/2025
  "Uruguay Vs República Dominicana - Amistoso": [
    { enlace: "/HTML/destacada.html" }
  ],
  "Kazajistán Vs Liechtenstein - Clasificación Mundial UEFA": [
    { enlace: "/HTML/ESPN4.html" }
  ],
  "Bolivia Vs Jordania - Amistoso": [
    { enlace: "/HTML/destacada3.html?opcion=1" }
  ],
  "Atlético Madrid Vs Inter - Amistoso": [
    { enlace: "/HTML/destacada4.html" },
    { enlace: "https://www.youtube.com/watch?v=tIp6mK7BSxM" }
  ],
  "Rusia Vs Irán - Amistoso Internacional": [
    { enlace: "/HTML/destacada3.html?opcion=3" }
  ],
  "San Lorenzo Vs San Martín SJ - Liga Argentina": [
    { enlace: "/HTML/tntsportsa.html" }
  ],
  "Kosovo Vs Eslovenia - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus7.html" }
  ],
  "Islandia Vs Ucrania - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus5.html" }
  ],
  "Irl del Norte Vs Eslovaquia - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus8.html" }
  ],
  "Suecia Vs Suiza - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus6.html" }
  ],
  "Bélgica Vs Macedonia - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus4.html" }
  ],
  "Francia Vs Azerbaiyán - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus2.html" }
  ],
  "Alemania Vs Luxemburgo - Clasificación Mundial UEFA": [
    { enlace: "/HTML/ESPN.html" },
    { enlace: "/HTML/Disneyplus3.html" }
  ],
  "Defensa y Justicia Vs Argentinos - Liga Argentina": [
    { enlace: "/HTML/ESPNPremium.html" }
  ],
  "Central Córdoba Vs Unión - Liga Argentina": [
    { enlace: "/HTML/tntsportsa.html" }
  ],
  "Newell's Vs Tigre - Liga Argentina": [
    { enlace: "/HTML/ESPNPremium.html" }
  ],
  "Chile Vs Perú - Amistoso de Selecciones": [
    { enlace: "/HTML/destacada3.html?opcion=2" }
  ],
  "Canadá Vs Australia - Amistoso de Selecciones": [
    { enlace: "/HTML/destacada7.html" }
  ],
  "Argentina Vs Venezuela - Amistoso": [
    { enlace: "/HTML/tycsports.html" },
    { enlace: "/HTML/Telefe.html" },
    { enlace: "/HTML/beinesp.html" }
  ],
  "Estados Unidos Vs Ecuador - Amistoso": [
    { enlace: "/HTML/destacada8.html" },
    { enlace: "/HTML/ECDF.html" },
    { enlace: "/HTML/TNTUSA.html" }
  ],
  "Letonia Vs Andorra - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Starplus.html" }
  ],
  "Hungría Vs Armenia - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Noruega Vs Israel - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Starplus.html" }
  ],
  "Estonia Vs Italia - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "España Vs Georgia - Clasificación Mundial UEFA": [
    { enlace: "/HTML/La1.html" }
  ],
  "Serbia Vs Albania - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Starplus.html" }
  ],
  "Bulgaria Vs Turquía - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Portugal Vs Irlanda - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Gimnasia Vs Talleres - Liga Argentina": [
    { enlace: "/HTML/ESPNPremium.html" }
  ],
  "España Vs Colombia - Mundial Sub-20": [
    { enlace: "/HTML/Dsports.html" }
  ],
  "Palmeiras Vs Juventude - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "Banfield Vs Racing - Liga Argentina": [
    { enlace: "/HTML/tntsportsa.html" }
  ],
  "México Vs Argentina - Mundial Sub-20": [
    { enlace: "/HTML/Dsports2.html" }
  ],
  "Belgrano Vs Estudiantes - Liga Argentina": [
    { enlace: "/HTML/tntsportsa.html" }
  ],
  "México Vs Colombia - Amistoso": [
    { enlace: "/HTML/destacada.html" }
  ],
  "Vélez Vs Rosario Central - Liga Argentina": [
    { enlace: "/HTML/ESPNPremium.html" }
  ],
  "Deportes Tolima Vs Envigado - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "América de Cali Vs La Equidad - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "San Marino Vs Chipre - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Escocia Vs Bielorrusia - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Feroe Vs República Checa - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Países Bajos Vs Finlandia - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Aldosivi Vs Huracán - Liga Argentina": [
    { enlace: "/HTML/ESPNPremium.html" }
  ],
  "Croacia Vs Gibraltar - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Lituania Vs Polonia - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Dinamarca Vs Grecia - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Rumanía Vs Austria - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Independiente Santa Fe Vs Llaneros - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Por definirse Vs Por definirse - Mundial Sub-20": [
    { enlace: "/HTML/Dsports.html" }
  ],
  "Instituto Vs Atl. Tucumán - Liga Argentina": [
    { enlace: "/HTML/tntsportsa.html" }
  ],
  "Rivadavia Vs Godoy Cruz - Liga Argentina": [
    { enlace: "/HTML/ESPNPremium.html" }
  ],
  "Alianza Petrolera Vs Junior - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "River Vs Sarmiento - Liga Argentina": [
    { enlace: "/HTML/tntsportsa.html" }
  ],
  "Noruega Vs Francia - Mundial Sub-20": [
    { enlace: "/HTML/Dsports.html" }
  ],
  "Bucaramanga Vs Unión Magdalena - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Independiente Vs Lanús - Liga Argentina": [
    { enlace: "/HTML/ESPNPremium.html" }
  ],
  "Rionegro Águilas Vs Pasto - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Uzbekistán Vs Uruguay - Amistoso": [
    { enlace: "/HTML/destacada.html" }
  ],
  "Montenegro Vs Liechtenstein - Amistoso": [
    { enlace: "/HTML/destacada.html" }
  ],
  "Suecia Vs Kosovo - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Macedonia Vs Kazajistán - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Eslovaquia Vs Luxemburgo - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Irlanda Vs Alemania - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Ucrania Vs Azerbaiyán - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Islandia Vs Francia - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Eslovenia Vs Suiza - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Gales Vs Bélgica - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Platense Vs Riestra - Liga Argentina": [
    { enlace: "/HTML/ESPNPremium.html" }
  ],
  "Once Caldas Vs Medellín - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Puerto Rico Vs Argentina - Amistoso": [
    { enlace: "/HTML/destacada.html" }
  ],
  "Irán Vs Tanzania - Amistoso Internacional": [
    { enlace: "/HTML/destacada.html" }
  ],
  "Fortaleza CEIF Vs Boyacá Chicó - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Venezuela Vs Belize - Amistoso": [
    { enlace: "/HTML/destacada.html" }
  ],
  "Japón Vs Brasil - Amistoso Internacional": [
    { enlace: "/HTML/destacada.html" }
  ],
  "Corea del Sur Vs Paraguay - Amistoso": [
    { enlace: "/HTML/destacada.html" }
  ],
  "Irán Vs Chile - Amistoso Internacional": [
    { enlace: "/HTML/destacada.html" }
  ],
  "Estonia Vs Moldavia - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Noruega Vs Nueva Zelanda - Amistoso": [
    { enlace: "/HTML/destacada.html" }
  ],
  "Albania Vs Jordania - Amistoso": [
    { enlace: "/HTML/destacada.html" }
  ],
  "España Vs Bulgaria - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Andorra Vs Serbia - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Italia Vs Israel - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Letonia Vs Inglaterra - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Irlanda Vs Armenia - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Portugal Vs Hungría - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Turquía Vs Georgia - Clasificación Mundial UEFA": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Nacional Vs Deportivo Cali - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Rusia Vs Bolivia - Amistoso Internacional": [
    { enlace: "/HTML/destacada.html" }
  ],
  "Colombia Vs Canadá - Amistoso Internacional": [
    { enlace: "/HTML/destacada.html" }
  ],
  "Estados Unidos Vs Australia - Amistoso": [
    { enlace: "/HTML/destacada.html" }
  ],
  "México Vs Ecuador - Amistoso": [
    { enlace: "/HTML/destacada.html" }
  ],
  "Palmeiras Vs Bragantino - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "Botafogo Vs Flamengo - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "Mirassol Vs Internacional - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "Sport Club do Recife Vs Ceará - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "Deportivo Pereira Vs Millonarios - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Santos Vs Corinthians - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "Fortaleza EC Vs Vasco da Gama - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "Atlético MG Vs Cruzeiro - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "América de Cali Vs Junior - Copa BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Grêmio Vs São Paulo - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "Vitória Vs Esporte Clube Bahia - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "Fluminense Vs Juventude - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "Union Berlin Vs Borussia M'gladbach - Bundesliga": [
    { enlace: "/HTML/DAZN3.html" }
  ],
  "Paris Saint-Germain Vs Strasbourg - Ligue 1": [
    { enlace: "/HTML/Disneyplus16.html" }
  ],
  "Oviedo Vs Espanyol - LaLiga EA Sports": [
    { enlace: "/HTML/DAZNLALIGA.html" }
  ],
  "Medellín Vs Fortaleza CEIF - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Unión Magdalena Vs Envigado - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ]
});

Object.assign(opcionesEventos, {
  "WWE Crown Jewel - 11 octubre 2025": [
    { enlace: "/HTML/destacada2.html" },
  ],
  "TNA iMPACT! 9 de octubre de 2025": [
    { enlace: "/HTML/https://www.youtube.com/watch?v=Msc7_63JoCk" },
    { enlace: "/HTML/CanalLuchaLibre.html" }
  ],
  "AEW WrestleDream 18 de octubre de 2025": [
    { enlace: "HTML/FoxSportsPremium.html" },
    { enlace: "/HTML/CanalLuchaLibre.html" }
  ],
  "AEW Full Gear 22 de noviembre de 2025": [
    { enlace: "HTML/FoxSportsPremium.html" },
    { enlace: "/HTML/CanalLuchaLibre.html" }
  ],
  "AEW Worlds End 27 de diciembre de 2025": [
    { enlace: "HTML/FoxSportsPremium.html" },
    { enlace: "/HTML/CanalLuchaLibre.html" }
  ],
  "WWE Saturday Night's Main Event 1 de noviembre de 2025": [
    { enlace: "HTML/destacada2.html" },
    { enlace: "/HTML/CanalLuchaLibre.html" }
  ],
  "WWE Survivor Series - 29 noviembre 2025": [
    { enlace: "HTML/destacada2.html" },
    { enlace: "/HTML/CanalLuchaLibre.html" }
  ]
});

// Eventos Otros (Agregar aquí los que no son ni fútbol ni lucha libre)
Object.assign(opcionesEventos, {
  // Ejemplo:
  // "Evento": [
  //   { enlace: "/HTML/Evento.html" }
  // ]
});

// ================================
// Función mostrarEventosHoy
// ================================

function mostrarEventosHoy() {
  const contenedor = document.getElementById("eventos-hoy");
  if (!contenedor) return;

  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const eventosHoy = eventos.filter(evento => {
    const inicio = new Date(evento.inicio);
    const fin = new Date(evento.fin);
    return (
      inicio.getFullYear() === hoy.getFullYear() &&
      inicio.getMonth() === hoy.getMonth() &&
      inicio.getDate() === hoy.getDate() &&
      new Date() <= fin
    );
  });

  if (eventosHoy.length === 0) {
    contenedor.parentElement.style.display = "none";
    return;
  } else {
    contenedor.parentElement.style.display = "block";
    contenedor.innerHTML = "";
  }

  eventosHoy.sort((a, b) => new Date(a.inicio) - new Date(b.inicio));

  eventosHoy.forEach(evento => {
    const ahora = new Date();
    const inicio = new Date(evento.inicio);
    const fin = new Date(evento.fin);
    const estaEnVivo = ahora >= inicio && ahora <= fin;

    // buscamos el índice en el array original de eventos (si coincide título+inicio+fin)
    const indexOriginal = eventos.findIndex(e =>
      e.titulo === evento.titulo && e.inicio === evento.inicio && e.fin === evento.fin
    );

    const dataIndexAttr = indexOriginal >= 0 ? `data-index="${indexOriginal}"` : "";

    const horaHTML = estaEnVivo
      ? `<span class="evento-hoy-hora en-vivo-parpadeo">🔴 EN VIVO</span>`
      : `<span class="evento-hoy-hora">${inicio.toLocaleTimeString(navigator.language, {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        })}</span>`;

    const iconoHTML = evento.icono
      ? `<img src="${evento.icono}" alt="icono" class="icono-evento-img">`
      : "";

    const item = document.createElement("div");
    item.className = "evento-hoy-item";
    item.innerHTML = `
      <div class="evento-hoy-izq">
        <div class="grupo-hora-icono">
          ${horaHTML}
          ${iconoHTML}
        </div>
        <span class="evento-hoy-nombre">${evento.titulo}</span>
      </div>
    `;

    const contOpciones = document.createElement("div");
    contOpciones.className = "lista-opciones";
    contOpciones.style.display = "none";
    contOpciones.style.marginTop = "10px";

    item.addEventListener("click", () => {
      const yaVisible = contOpciones.style.display === "block";

      document.querySelectorAll(".lista-opciones").forEach(div => {
        div.style.display = "none";
      });

      if (!yaVisible) {
        contOpciones.innerHTML = "";

        const listaOpciones = opcionesEventos[evento.titulo] || [];

        const nombreBonito = {
          "espndeportesusa.html": "ESPN Deportes USA",
          "beinesp.html": "Bein Sports",
          "Winplus.html": "Win Sports+",
          "ESPNPremium.html": "ESPN Premium",
          "ESPNARGENTINA1.html": "ESPN Argentina",
          "ESPNARGENTINA2.html": "ESPN Argentina",
          "ESPNARGENTINA3.html": "ESPN Argentina",
          "ESPNBRASIL.html": "ESPN Brasil",
          "ESPNMX.html": "ESPN MX",
          "FoxSportsPremium.html": "Fox Sports Premium",
          "tycsports2.html": "TyC Sports 2",
          "tycsports.html": "TyC Sports",
          "TUDNMX.html": "TUDN MX",
          "TUDNUSA.html": "TUDN USA",
          "FoxMX.html": "Fox Sports MX",
          "FoxMX2.html": "Fox Sports MX 2",
          "Fox1Arg.html": "Fox Sports 1 Argentina",
          "Fox2Arg.html": "Fox Sports 2 Argentina",
          "Fox3Arg.html": "Fox Sports 3 Argentina",
          "ESPN.html": "ESPN",
          "ESPN2.html": "ESPN 2",
          "ESPN3.html": "ESPN 3",
          "ESPN4.html": "ESPN 4",
          "ESPN5.html": "ESPN 5",
          "ESPNplus.html": "ESPN +",
          "ESPNplus2.html": "ESPN +",
          "Caracoltv.html": "Caracol",
          "RCN.html": "RCN",
          "Disneyplus.html": "Disney +",
          "Disneyplus1.html": "Disney +",
          "Disneyplus2.html": "Disney +",
          "Disneyplus3.html": "Disney +",
          "Disneyplus4.html": "Disney +",
          "Disneyplus5.html": "Disney +",
          "Disneyplus6.html": "Disney +",
          "Disneyplus7.html": "Disney +",
          "Disneyplus8.html": "Disney +",
          "Disneyplus9.html": "Disney +",
          "Disneyplus10.html": "Disney +",
          "Disneyplus11.html": "Disney +",
          "Disneyplus12.html": "Disney +",
          "Disneyplus13.html": "Disney +",
          "Disneyplus14.html": "Disney +",
          "Disneyplus15.html": "Disney +",
          "Disneyplus16.html": "Disney +",
          "Dsports.html": "DSports",
          "Dsports2.html": "DSports 2",
          "Dsportsplus.html": "DSports+",
          "Winsports.html": "Win Sports",
          "tntsportsa.html": "TNT Sports Argentina",
          "Aztecadeportes.html": "Azteca Deportes",
          "azteca7.html": "Azteca 7",
          "DAZNLALIGA.html": "DAZN LaLiga",
          "DAZNLALIGA2.html": "DAZN LaLiga 2",
          "DAZN1.html": "DAZN 1",
          "DAZN2.html": "DAZN 2",
          "DAZN3.html": "DAZN 3",
          "DAZN4.html": "DAZN 4",
          "MovistarLaLiga.html": "Movistar LaLiga",
          "MovistarLaLiga2.html": "Movistar LaLiga 2",
          "Paramountplus.html": "Paramount +",
          "Paramountplus2.html": "Paramount +",
          "Paramountplus3.html": "Paramount +",          
          "Paramountplus4.html": "Paramount +",
          "PremiereBR.html": "Premiere Brasil",
          "TNTUSA.html": "TNT USA",
          "TelemundoUSA.html": "Telemundo USA",
          "TVPublica.html": "TV Pública",
          "Telefe.html": "Telefe",
          "SporTV.html": "SporTV",
          "SporTV2.html": "SporTV 2",
          "ECDF.html": "El Canal del Fútbol (ECDF)",
          "ESPNSUR.html": "ESPN Suramerica",
          "ESPNSUR2.html": "ESPN Suramerica",
          "Movistarplus.html": "Movistar Plus",
          "MovistarDeportes.html": "Movistar Deportes",
          "MEGAChile.html": "MEGA Chile",
          "EventosNetflix.html": "Eventos Netflix",
          "EventosNetflix2.html": "Eventos Netflix",
          "EventosMMA.html": "Eventos MMA",
          "CanalLuchaLibre.html": "Canal Lucha Libre",
          "UnivisionUSA.html": "Univisión USA",
          "GolTV.html": "GolTV",
          "destacada.html": "Canal Eventos 1",
          "destacada2.html": "Canal WWE",
          "destacada3.html": "Canal Eventos 3",
          "destacada4.html": "Canal Eventos 4",
          "destacada5.html": "Canal Eventos 5",
          "destacada6.html": "Canal Eventos 6",
          "destacada7.html": "Canal Eventos 7",
          "destacada8.html": "Canal Eventos 8"
        };

        listaOpciones.forEach(opcion => {
          const archivo = opcion.enlaceProgramacion || opcion.enlace;
          const nombre = archivo?.split("/").pop().split("?")[0].split("#")[0];

          let texto = nombreBonito[nombre] || "Transmisión disponible";

          if (archivo?.includes("youtube.com") || archivo?.includes("youtu.be")) {
            texto = "Canal En Vivo";
          }

          const enlaceOpcion = document.createElement("a");
          enlaceOpcion.href = opcion.enlace;
          enlaceOpcion.target = "_blank";
          enlaceOpcion.rel = "noopener noreferrer";

          enlaceOpcion.className = "evento-hoy-item opcion-desplegable";
          enlaceOpcion.style.marginLeft = "30px";
          enlaceOpcion.style.background = "#1c2733";
          enlaceOpcion.style.userSelect = "none";
          enlaceOpcion.style.cursor = "pointer";
          enlaceOpcion.textContent = texto;

          enlaceOpcion.addEventListener("click", e => {
            e.stopPropagation(); // Para no cerrar el desplegable
          });

          contOpciones.appendChild(enlaceOpcion);
        });

        contOpciones.style.display = "block";
      }
    });

    contenedor.appendChild(item);
    contenedor.appendChild(contOpciones);

    // ✅ TEMPORIZADOR exclusivo para Eventos Hoy
    const temp = item.querySelector(".temporizador");
    if (temp) {
      function actualizarTempHoy() {
        const ahora = new Date();
        const dif = inicio - ahora;

        if (ahora >= fin) {
          temp.textContent = "Finalizado";
          return;
        }

        if (dif <= 0) {
          temp.textContent = "En vivo";
          return;
        }

        const dias = Math.floor(dif / 86400000);
        const horas = Math.floor((dif / 3600000) % 24);
        const minutos = Math.floor((dif / 60000) % 60);
        const segundos = Math.floor((dif / 1000) % 60);

        let tiempoTexto = "";
        if (dias > 0) tiempoTexto += `${dias}d `;
        if (horas > 0 || dias > 0) tiempoTexto += `${horas}h `;
        if (minutos > 0) tiempoTexto += `${minutos}m `;
        tiempoTexto += `${segundos}s`;

        temp.textContent = `Empieza en: ${tiempoTexto}`;
      }

      actualizarTempHoy();
      setInterval(actualizarTempHoy, 1000);
    }
  });
}