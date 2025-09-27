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
  { base: "TNA iMPACT!", dia: 4, enlace: "https://www.youtube.com/watch?v=j4MYT-_iZaQ" },
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
  "Brentford Vs Manchester United - Premier League": [
    { enlace: "/HTML/DAZN1.html" }
  ],
  "Getafe vs Levante - LaLiga EA Sports": [
    { enlace: "/HTML/Disneyplus7.html" }
  ],
  "Calcio Como 1907 Vs Cremonese - Serie A": [
    { enlace: "/HTML/Disneyplus8.html" }
  ],
  "Heidenheim Vs Augsburg - Bundesliga": [
    { enlace: "/HTML/Disneyplus11.html" }
  ],
  "St. Pauli Vs Bayer Leverkusen - Bundesliga": [
    { enlace: "/HTML/Disneyplus12.html" }
  ],
  "Wolfsburg Vs RB Leipzig - Bundesliga": [
    { enlace: "/HTML/Disneyplus10.html" }
  ],
  "Mainz 05 Vs Borussia Dortmund - Bundesliga": [
    { enlace: "/HTML/ESPN2.html" }
  ],
  "Crystal Palace Vs Liverpool - Premier League": [
    { enlace: "/HTML/Disneyplus13.html" }
  ],
  "Leeds Vs Bournemouth - Premier League": [
    { enlace: "/HTML/DAZN4.html" },
    { enlace: "/HTML/Disneyplus15.html" }
  ],
  "Manchester City Vs Burnley - Premier League": [
    { enlace: "/HTML/Disneyplus14.html" },
    { enlace: "/HTML/DAZN2.html" }
  ],
  "Atlético De Madrid vs Real Madrid - LaLiga EA Sports": [
    { enlace: "/HTML/destacada4.html" },
    { enlace: "/HTML/Dsports.html" },
    { enlace: "/HTML/espndeportesusa.html" },
    { enlace: "/HTML/DAZNLALIGA.html" },
    { enlace: "/HTML/DAZNLALIGA2.html" }
  ],
  "Lorient vs AS Monaco - Ligue 1": [
    { enlace: "/HTML/Disneyplus.html?opcion=19" }
  ],
  "Juventus Vs Atalanta - Serie A": [
    { enlace: "/HTML/ESPN.html" },
    { enlace: "/HTML/Disneyplus.html?opcion=20" },
    { enlace: "/HTML/ESPNMX.html" }
  ],
  "Mallorca vs Alavés - LaLiga EA Sports": [
    { enlace: "/HTML/ESPN4.html" },
    { enlace: "/HTML/espndeportesusa.html" },
    { enlace: "/HTML/DAZNLALIGA.html" }
  ],
  "Chelsea Vs Brighton - Premier League": [
    { enlace: "/HTML/Disneyplus16.html" },
    { enlace: "/HTML/DAZN3.html" },
    { enlace: "/HTML/ESPN.html" }
  ],
  "Borussia M'gladbach Vs Frankfurt - Bundesliga": [
    { enlace: "/HTML/Disneyplus2.html" }
  ],
  "Toulouse vs Nantes - Ligue 1": [
    { enlace: "/HTML/Disneyplus4.html" }
  ],
  "Gimnasia Vs Rosario Central - Liga Argentina": [
    { enlace: "/HTML/tntsportsa.html" }
  ],
  "Aldosivi Vs Argentinos Juniors - Liga Argentina": [
    { enlace: "/HTML/ESPNPremium.html" }
  ],
  "Cagliari Calcio Vs Inter - Serie A": [
    { enlace: "/HTML/Disneyplus8.html" }
  ],
  "Villarreal vs Athletic - LaLiga EA Sports": [
    { enlace: "/HTML/Dsports.html" }
  ],
  "Deportivo Pereira Vs Unión Magdalena - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Forest Vs Sunderland - Premier League": [
    { enlace: "/HTML/Disneyplus1.html" }
  ],
  "Tottenham Vs Wolves - Premier League": [
    { enlace: "/HTML/ESPNARGENTINA1.html" },
    { enlace: "/HTML/DAZN1.html" },
    { enlace: "/HTML/Disneyplus9.html" },
    { enlace: "/HTML/ESPN.html" }
  ],
  "San Lorenzo Vs Godoy Cruz - Liga Argentina": [
    { enlace: "/HTML/ESPNPremium.html" }
  ],
  "Paris Saint-Germain vs Auxerre - Ligue 1": [
    { enlace: "/HTML/Disneyplus11.html" }
  ],
  "Alianza Petrolera Vs Llaneros - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Defensa y Justicia Vs Boca Juniors - Liga Argentina": [
    { enlace: "/HTML/tntsportsa.html" },
    { enlace: "/HTML/Disneyplus13.html" },
    { enlace: "/HTML/ESPN.html" }
  ],
  "Toronto FC Vs Inter Miami CF - MLS 2025": [
    { enlace: "/HTML/destacada5.html" }
  ],
  "Deportes Tolima Vs Medellín - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Talleres Vs Sarmiento - Liga Argentina": [
    { enlace: "/HTML/tntsportsa.html" }
  ],
  "Nacional Vs Millonarios - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Pachuca Vs Atlético San Luis - Liga MX": [
    { enlace: "/HTML/destacada3.html" }
  ],
  "Atlas FC Vs Necaxa - Liga MX": [
    { enlace: "/HTML/TUDNUSA.html" }
  ],
  "Toluca Vs Mazatlán - Liga MX": [
    { enlace: "/HTML/destacada7.html" }
  ],
  "Monterrey Vs Santos Laguna - Liga MX": [
    { enlace: "/HTML/TUDNUSA.html" },
    { enlace: "/HTML/destacada.html" }
  ],
  "América Vs Pumas UNAM - Liga MX": [
    { enlace: "/HTML/TUDNUSA.html" },
    { enlace: "/HTML/destacada.html" }
  ],
  "Rayo Vallecano vs Sevilla - LaLiga EA Sports": [
    { enlace: "/HTML/DAZNLALIGA.html" },
    { enlace: "/HTML/DAZNLALIGA2.html" },
    { enlace: "/HTML/Disneyplus.html" },
    { enlace: "/HTML/MovistarLaLiga.html" }
  ],
  "Aston Villa Vs Fulham - Premier League": [
    { enlace: "/HTML/DAZN1.html" },
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "SC Freiburg Vs TSG Hoffenheim - Bundesliga": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Elche vs Celta - LaLiga EA Sports": [
    { enlace: "/HTML/DAZNLALIGA.html" },
    { enlace: "/HTML/DAZNLALIGA2.html" },
    { enlace: "/HTML/Disneyplus.html" },
    { enlace: "/HTML/MovistarLaLiga.html" }
  ],
  "Newcastle Vs Arsenal - Premier League": [
    { enlace: "/HTML/DAZN1.html" }
  ],
  "1. FC Köln Vs VfB Stuttgart - Bundesliga": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "FC Barcelona vs Real Sociedad - LaLiga EA Sports": [
    { enlace: "/HTML/ESPN.html" },
    { enlace: "/HTML/espndeportesusa.html" },
    { enlace: "/HTML/destacada4.html" },
    { enlace: "/HTML/MovistarLaLiga.html" },
    { enlace: "/HTML/MovistarLaLiga2.html" },
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Union Berlin Vs Hamburger SV - Bundesliga": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Racing Vs Independiente - Liga Argentina": [
    { enlace: "/HTML/ESPNPremium.html" }
  ],
  "AC Milan Vs Nápoles - Serie A": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Betis vs Osasuna - LaLiga EA Sports": [
    { enlace: "/HTML/MovistarLaLiga.html" },
    { enlace: "/HTML/DAZNLALIGA.html" },
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "América de Cali Vs Envigado - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "River Plate Vs Deportivo Riestra - Liga Argentina": [
    { enlace: "/HTML/ESPNPremium.html" }
  ],
  "Rionegro Águilas Vs Cali - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Independiente Rivadavia Vs Huracán - Liga Argentina": [
    { enlace: "/HTML/ESPNPremium.html" }
  ],
  "Querétaro Vs Tigres - Liga MX": [
    { enlace: "/HTML/destacada.html" }
  ],
  "Instituto Vs Lanús - Liga Argentina": [
    { enlace: "/HTML/ESPNPremium.html" }
  ],
  "Independiente Santa Fe Vs La Equidad - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Junior Vs Deportivo Pasto - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Tijuana Vs Cruz Azul - Liga MX": [
    { enlace: "/HTML/destacada.html" }
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