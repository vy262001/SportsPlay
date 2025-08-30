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
// Eventos
Object.assign(opcionesEventos, {
  // LaLiga EA Sports
  "Alavés Vs Atlético Madrid - LaLiga EA Sports": [
    { enlace: "HTML/Disneyplus.html" }
  ],
  "Real Oviedo Vs Real Sociedad - LaLiga EA Sports": [
    { enlace: "HTML/Dsports.html" }
  ],
  "Girona Vs Sevilla - LaLiga EA Sports": [
    { enlace: "HTML/Disneyplus3.html" }
  ],
  "Real Madrid Vs R.C.D. Mallorca - LaLiga EA Sports": [
    { enlace: "HTML/Dsports.html" }
  ],
  "Celta de Vigo Vs Villarreal - LaLiga EA Sports": [
    { enlace: "HTML/DAZNLALIGA.html" }
  ],
  "Betis Vs Athletic - LaLiga EA Sports": [
    { enlace: "HTML/DAZNLALIGA.html" }
  ],
  "RCD Espanyol Vs Osasuna - LaLiga EA Sports": [
    { enlace: "HTML/DAZNLALIGA.html" }
  ],
  "Rayo Vallecano Vs Barcelona - LaLiga EA Sports": [
    { enlace: "HTML/ESPN.html" }
  ],
  // Leagues Cup Final
  "Seattle Sounders Vs Inter Miami - Leagues Cup Final": [
    { enlace: "HTML/DAZN1.html" }
  ],
  // Partidos Liga BetPlay
  "Boyacá Chicó Vs Unión Magdalena - Liga BetPlay": [
    { enlace: "HTML/Winplus.html" }
  ],
  "Deportivo Pereira Vs Bucaramanga - Liga BetPlay": [
    { enlace: "HTML/Winplus.html" }
  ],
  "Deportivo Cali Vs Medellín - Liga BetPlay": [
    { enlace: "HTML/Winplus.html" }
  ],
  "Atlético Nacional Vs Envigado - Liga BetPlay": [
    { enlace: "HTML/Winplus.html" }
  ],
  "Alianza Vs América - Liga BetPlay": [
    { enlace: "HTML/Winplus.html" }
  ],
  "La Equidad Vs Pasto - Liga BetPlay": [
    { enlace: "HTML/Winplus.html" }
  ],
  "Tolima Vs Fortaleza - Liga BetPlay": [
    { enlace: "HTML/Winplus.html" }
  ],
  "Santa Fe Vs Once Caldas - Liga BetPlay": [
    { enlace: "HTML/Winplus.html" }
  ],
  // Partidos Liga Argentina
  "San Lorenzo Vs Huracán - Liga Argentina": [
    { enlace: "HTML/ESPNPremium.html" }
  ],
  "Central Córdoba Vs Estudiantes - Liga Argentina": [
    { enlace: "HTML/tntsportsa.html" }
  ],
  "Independiente Rivadavia Vs Argentinos Jrs. - Liga Argentina": [
    { enlace: "HTML/ESPNPremium.html" }
  ],
  "Sarmiento Vs Rosario Central - Liga Argentina": [
    { enlace: "HTML/tntsportsa.html" }
  ],
  "Vélez Vs Lanús - Liga Argentina": [
    { enlace: "HTML/ESPNPremium.html" }
  ],
  "Aldosivi Vs Boca Juniors - Liga Argentina": [
    { enlace: "HTML/ESPNPremium.html" }
  ],
  "Talleres Vs Deportivo Riestra - Liga Argentina": [
    { enlace: "HTML/ESPNPremium.html" }
  ],
  "Defensa y Justicia Vs Belgrano - Liga Argentina": [
    { enlace: "HTML/ESPNPremium.html" }
  ],
  "River Plate Vs San Martín - Liga Argentina": [
    { enlace: "HTML/ESPNPremium.html" }
  ],
  "Racing Vs Unión - Liga Argentina": [
    { enlace: "HTML/ESPNPremium.html" }
  ],
  "Gimnasia Vs Atlético Tucumán - Liga Argentina": [
    { enlace: "HTML/ESPNPremium.html" }
  ],
  "Platense Vs Godoy Cruz - Liga Argentina": [
    { enlace: "HTML/ESPNPremium.html" }
  ],
  // Partidos Premier League
  "Leeds Vs Newcastle - Premier League": [
    { enlace: "HTML/Disneyplus2.html" }
  ],
  "Brighton Vs Manchester City - Premier League": [
    { enlace: "HTML/DAZN2.html" }
  ],
  "Nottingham Forest Vs West Ham - Premier League": [
    { enlace: "HTML/DAZN2.html" }
  ],
  "Liverpool Vs Arsenal - Premier League": [
    { enlace: "HTML/DAZN2.html" }
  ],
  "Aston Villa Vs Crystal Palace - Premier League": [
    { enlace: "HTML/DAZN2.html" }
  ],
  // Partidos Serie A
  "Napoli Vs Cagliari - Serie A": [
    { enlace: "HTML/destacada.html" }
  ],
  // Partidos Ligue 1
  "Toulouse Vs PSG - Ligue 1": [
    { enlace: "HTML/destacada4.html" }
  ],
  // Partidos Bundesliga
  "Augsburgo Vs Bayern Munich - Bundesliga": [
    { enlace: "HTML/ESPN.html" }
  ],
  "Wolfsburg Vs Mainz 05 - Bundesliga": [
    { enlace: "HTML/DAZN3.html" }
  ],
  "Dortmund Vs FC Union Berlin - Bundesliga": [
    { enlace: "HTML/DAZN3.html" }
  ],
  "Colonia Vs Friburgo - Bundesliga": [
    { enlace: "HTML/DAZN3.html" }
  ],
  // Partidos Brasileirão
  "Botafogo Vs Bragantino - Brasileirão": [
    { enlace: "HTML/PremiereBR.html" }
  ],
  "Cruzeiro Vs São Paulo - Brasileirão": [
    { enlace: "HTML/PremiereBR.html" }
  ]
});

// Eventos de Lucha Libre
Object.assign(opcionesEventos, { 
  "WWE Clash in Paris 31 de agosto 2025": [
    { enlace: "/HTML/destacada2.html" }
  ],
  "AEW x NJPW: Forbidden Door 2025": [
    { enlace: "/HTML/FoxSportsPremium.html" }
  ],
  "AEW All Out 2025": [
    { enlace: "/HTML/FoxSportsPremium.html" }
  ],
  "WWE Crown Jewel - 11 octubre 2025": [
    { enlace: "/HTML/destacada2.html" }
  ],
  "WWE Survivor Series - 29 noviembre 2025": [
    { enlace: "/HTML/destacada2.html" }
  ],
  "Worlds Collide II - AAA / WWE": [
    { enlace: "/HTML/destacada2.html" }
  ],
  "NXT Heatwave 24 de agosto 2025": [
    { enlace: "/HTML/destacada2.html" }
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
      <div class="evento-hoy-der">
        <span class="temporizador" ${dataIndexAttr} data-inicio="${evento.inicio}" data-fin="${evento.fin}">
          Empieza en: --
        </span>
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
          "ESPNARGENTINA1.html": "ESPN Argentina 1",
          "ESPNARGENTINA2.html": "ESPN Argentina 2",
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
          "ESPN.html": "ESPN",
          "ESPN2.html": "ESPN 2",
          "ESPN3.html": "ESPN 3",
          "ESPN4.html": "ESPN 4",
          "ESPN5.html": "ESPN 5",
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
          "destacada.html": "Canal 1",
          "destacada2.html": "Canal WWE",
          "destacada3.html": "Canal 3",
          "destacada4.html": "Canal 4",
          "destacada5.html": "Canal 5"
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
