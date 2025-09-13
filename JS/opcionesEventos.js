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
  { base: "TNA iMPACT!", dia: 4, enlace: "https://www.youtube.com/watch?v=rr_4EFkQrww" },
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
  "VfL Wolfsburg Vs 1. FC Köln - Bundesliga": [
    { enlace: "/HTML/Disneyplus8.html" }
  ],
  "Union Berlin Vs TSG Hoffenheim - Bundesliga": [
    { enlace: "/HTML/Disneyplus6.html" }
  ],
  "1. FC Heidenheim Vs Borussia Dortmund - Bundesliga": [
    { enlace: "/HTML/Disneyplus9.html" },
    { enlace: "/HTML/ESPNARGENTINA2.html" }
  ],
  "Mainz 05 Vs RB Leipzig - Bundesliga": [
    { enlace: "/HTML/Disneyplus7.html" }
  ],
  "SC Freiburg Vs VfB Stuttgart - Bundesliga": [
    { enlace: "/HTML/Disneyplus5.html" }
  ],
  "Bayern Múnich Vs Hamburger SV - Bundesliga": [
    { enlace: "/HTML/Disneyplus10.html" }
  ],
  "Getafe Vs Oviedo - LaLiga EA Sports": [
    { enlace: "/HTML/Disneyplus3.html" },
    { enlace: "/HTML/espndeportesusa.html" }
  ],
  "Real Sociedad Vs Real Madrid - LaLiga EA Sports": [
    { enlace: "/HTML/Disneyplus2.html" },
    { enlace: "/HTML/ESPN.html" },
    { enlace: "/HTML/ESPNARGENTINA1.html" },
    { enlace: "/HTML/espndeportesusa.html" },
    { enlace: "/HTML/MovistarLaLiga.html" }
  ],
  "Athletic Club Vs Alavés - LaLiga EA Sports": [
    { enlace: "/HTML/Disneyplus11.html" },
    { enlace: "/HTML/espndeportesusa.html" }
  ],
  "Atlético Madrid Vs Villarreal - LaLiga EA Sports": [
    { enlace: "/HTML/Dsports.html" },
    { enlace: "/HTML/espndeportesusa.html" },
    { enlace: "/HTML/MovistarLaLiga.html" }
  ],
  "Arsenal Vs Nottingham Forest - Premier League": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Newcastle Vs Wolves - Premier League": [
    { enlace: "/HTML/Disneyplus14.html" }
  ],
  "Bournemouth Vs Brighton - Premier League": [
    { enlace: "/HTML/Disneyplus13.html" }
  ],
  "Everton Vs Aston Villa - Premier League": [
    { enlace: "/HTML/Disneyplus11.html" }
  ],
  "Crystal Palace Vs Sunderland - Premier League": [
    { enlace: "/HTML/Disneyplus12.html" }
  ],
  "Fulham Vs Leeds - Premier League": [
    { enlace: "/HTML/Disneyplus10.html" }
  ],
  "West Ham Vs Tottenham - Premier League": [
    { enlace: "/HTML/Disneyplus9.html" },
    { enlace: "/HTML/DAZN2.html" },
    { enlace: "/HTML/ESPN.html" },
    { enlace: "/HTML/ESPNARGENTINA1.html" }
  ],
  "Brentford Vs Chelsea - Premier League": [
    { enlace: "/HTML/DAZN1.html" }
  ],
  "Cagliari Vs Parma - Serie A": [
    { enlace: "/HTML/Disneyplus4.html" }
  ],
  "Juventus Vs Inter Milán - Serie A": [
    { enlace: "/HTML/Disneyplus7.html" }
  ],
  "Fiorentina Vs Nápoles - Serie A": [
    { enlace: "/HTML/Disneyplus16.html" }
  ],
  "Fortaleza EC Vs Vitória - Brasileirão": [
    { enlace: "/HTML/destacada8.html" }
  ],
  "Grêmio Vs Mirassol - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "Palmeiras Vs Internacional - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "Fluminense Vs Corinthians - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "Charlotte Vs Inter Miami CF - MLS 2025": [
    { enlace: "/HTML/destacada5.html" }
  ],
  "Godoy Cruz Vs Barracas Central - Liga Argentina": [
    { enlace: "/HTML/ESPNPremium.html" }
  ],
  "Independiente Vs Banfield - Liga Argentina": [
    { enlace: "/HTML/tntsportsa.html" }
  ],
  "Estudiantes Vs River Plate - Liga Argentina": [
    { enlace: "/HTML/Disneyplus2.html" },
    { enlace: "/HTML/ESPNPremium.html" },
    { enlace: "/HTML/ESPN.html" }
  ],
  "Sarmiento Vs Aldosivi - Liga Argentina": [
    { enlace: "/HTML/tntsportsa.html" }
  ],
  "Fortaleza CEIF Vs América de Cali - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Alianza Petrolera Vs Millonarios - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Once Caldas Vs Envigado - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Nacional Vs Atlético Bucaramanga - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "UFC Fight Night: Lopes Contra Silva": [
    { enlace: "/HTML/EventosMMA.html" }
  ],
  "Canelo Álvarez Contra Terence Crawford - Boxeo": [
    { enlace: "/HTML/EventosNetflix.html" }
  ],
  "Pachuca Vs Cruz Azul - Liga BBVA Bancomer MX": [
    { enlace: "/HTML/TUDNUSA.html" }
  ],
  "Tigres Vs León - Liga BBVA Bancomer MX": [
    { enlace: "/HTML/destacada4.html" }
  ],
  "Atlas Vs Santos Laguna - Liga BBVA Bancomer MX": [
    { enlace: "/HTML/TUDNUSA.html" }
  ],
  "Toluca Vs Puebla - Liga BBVA Bancomer MX": [
    { enlace: "/HTML/azteca7.html" }
  ],
  "América Vs Guadalajara - Liga BBVA Bancomer MX": [
    { enlace: "/HTML/TUDNUSA.html" }
  ],
  "Celta Vs Girona - LaLiga EA Sports": [
    { enlace: "/HTML/Dsports.html" },
    { enlace: "/HTML/espndeportesusa.html" }
  ],
  "Levante Vs Betis - LaLiga EA Sports": [
    { enlace: "/HTML/Dsports.html" },
    { enlace: "/HTML/espndeportesusa.html" }
  ],
  "Osasuna Vs Rayo - LaLiga EA Sports": [
    { enlace: "/HTML/Dsports.html" },
    { enlace: "/HTML/MovistarLaLiga.html" },
    { enlace: "/HTML/MovistarLaLiga2.html" }
  ],
  "Barcelona Vs Valencia - LaLiga EA Sports": [
    { enlace: "/HTML/Dsports.html" }
  ],
  "Burnley Vs Liverpool - Premier League": [
    { enlace: "/HTML/DAZN2.html" }
  ],
  "Manchester City Vs Manchester United - Premier League": [
    { enlace: "/HTML/ESPN.html" },
    { enlace: "/HTML/DAZN2.html" }
  ],
  "AS Roma Vs Torino FC - Serie A": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Atalanta Vs US Lecce - Serie A": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Pisa Vs Udinese Calcio - Serie A": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Sassuolo Vs Lazio - Serie A": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Milan Vs Bolonia - Serie A": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "St. Pauli Vs FC Augsburg - Bundesliga": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Borussia M'gladbach Vs SV Werder - Bundesliga": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Santa Fe Vs Unión Magdalena - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Deportivo Cali Vs Deportivo Pasto - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Pereira Vs Llaneros - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Tolima Vs Boyacá Chicó - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Instituto Vs Argentinos - Liga Argentina": [
    { enlace: "/HTML/ESPNPremium.html" }
  ],
  "Gimnasia Vs Unión - Liga Argentina": [
    { enlace: "/HTML/tntsportsa.html" }
  ],
  "Rosario Central Vs Boca Jrs - Liga Argentina": [
    { enlace: "/HTML/tntsportsa.html" }
  ],
  "Defensa y Justicia Vs Platense - Liga Argentina": [
    { enlace: "/HTML/tntsportsa.html" }
  ],
  "Tigre Vs Talleres - Liga Argentina": [
    { enlace: "/HTML/ESPNPremium.html" }
  ],
  "Querétaro Vs Monterrey - Liga BBVA Bancomer MX": [
    { enlace: "/HTML/azteca7.html" }
  ],
  "Atlético San Luis Vs Tijuana - Liga BBVA Bancomer MX": [
    { enlace: "/HTML/azteca7.html" }
  ],
  "Bragantino Vs Sport - Brasileirão": [
    { enlace: "/HTML/destacada8.html" }
  ],
  "Atlético MG Vs Santos - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "Juventude Vs Flamengo - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "São Paulo Vs Botafogo - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "Vasco da Gama Vs Ceará - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "Espanyol Vs Mallorca - LaLiga EA Sports": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Hellas Verona Vs U.S. Cremonese - Serie A": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Como Vs Genoa - Serie A": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Bahia Vs Cruzeiro - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "Athletic Vs Arsenal - Uefa Champions League": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "PSV Vs Union SG - Uefa Champions League": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Real Madrid Vs Marseille - Uefa Champions League": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Juventus Vs Borussia Dortmund - Uefa Champions League": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Tottenham Vs Villarreal - Uefa Champions League": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Benfica Vs FK Qarabag - Uefa Champions League": [
    { enlace: "/HTML/ESPN.html" }
  ]
});

// Eventos de Lucha Libre
Object.assign(opcionesEventos, {
  "Worlds Collide II - AAA / WWE": [
    { enlace: "/HTML/CanalLuchaLibre.html" }
  ],
  "WWE Wrestlepalooza - 20 septiembre 2025": [
    { enlace: "/HTML/destacada2.html" }
  ],
  "AEW All Out - 20 septiembre 2025": [
    { enlace: "/HTML/FoxSportsPremium.html" }
  ],
  "WWE Crown Jewel - 11 octubre 2025": [
    { enlace: "/HTML/destacada2.html" }
  ],
  "WWE Survivor Series - 29 noviembre 2025": [
    { enlace: "/HTML/destacada2.html" }
  ],
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
          "beinespañol.html": "Bein Sports Español",
          "Winplus.html": "Win Sports+",
          "ESPNPremium.html": "ESPN Premium",
          "ESPNARGENTINA1.html": "ESPN Argentina",
          "ESPNARGENTINA2.html": "ESPN Argentina",
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
          "PremiereBR.html": "Premiere Brasil",
          "TNTUSA.html": "TNT USA",
          "TelemundoUSA.html": "Telemundo USA",
          "TVPublica.html": "TV Pública",
          "Telefe.html": "Telefe",
          "SporTV.html": "SporTV",
          "SporTV2.html": "SporTV 2",
          "ECDF.html": "El Canal del Fútbol (ECDF)",
          "ESPNSUR.html": "ESPN Suramerica",
          "Movistarplus.html": "Movistar Plus",
          "MovistarDeportes.html": "Movistar Deportes",
          "MEGAChile.html": "MEGA Chile",
          "EventosNetflix.html": "Eventos Netflix",
          "EventosNetflix2.html": "Eventos Netflix",
          "EventosMMA.html": "Eventos MMA",
          "CanalLuchaLibre.html": "Canal Lucha Libre",
          "UnivisionUSA.html": "Univisión USA",
          "GolTV.html": "GolTV",
          "destacada.html": "Canal 1",
          "destacada2.html": "Canal WWE",
          "destacada3.html": "Canal 3",
          "destacada4.html": "Canal 4",
          "destacada5.html": "Canal 5",
          "destacada6.html": "Canal 6",
          "destacada7.html": "Canal 7",
          "destacada8.html": "Canal 8"
        };

        listaOpciones.forEach(opcion => {
          const archivo = opcion.enlaceProgramacion || opcion.enlace;
          const nombre = archivo?.split("/").pop();

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