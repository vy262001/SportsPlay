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
  "Marruecos Vs Francia - Mundial Sub-20": [
    { enlace: "/HTML/Dsports.html" },
    { enlace: "/HTML/NBCUniverso.html" }
  ],
  "Argentina Vs Colombia - Mundial Sub-20": [
    { enlace: "/HTML/Dsports.html" },
    { enlace: "/HTML/Telefe.html" },
    { enlace: "/HTML/Caracoltv.html" },
    { enlace: "/HTML/RCN.html" },
    { enlace: "/HTML/TUDNMX.html" },
    { enlace: "https://www.youtube.com/watch?v=dmrR2-bL8Ls" },
    { enlace: "/HTML/NBCUniverso.html" }
  ],
  "Palmeiras Vs Bragantino - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "Botafogo Vs Flamengo - Brasileirão": [
    { enlace: "/HTML/destacada3.html?opcion=1" }
  ],
  "Mirassol Vs Internacional - Brasileirão": [
    { enlace: "/HTML/destacada3.html?opcion=2" }
  ],
  "Sport Club do Recife Vs Ceará - Brasileirão": [
    { enlace: "/HTML/destacada3.html?opcion=3" }
  ],
  "Deportivo Pereira Vs Millonarios - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Santos Vs Corinthians - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "Fortaleza EC Vs Vasco da Gama - Brasileirão": [
    { enlace: "/HTML/destacada4.html" }
  ],
  "Atlético MG Vs Cruzeiro - Brasileirão": [
    { enlace: "/HTML/destacada8.html" }
  ],
  "América de Cali Vs Junior - Copa BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Grêmio Vs São Paulo - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "Vitória Vs Esporte Clube Bahia - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" },
    { enlace: "/HTML/destacada3.html" },
    { enlace: "/HTML/destacada4.html" },
    { enlace: "/HTML/destacada8.html" }
  ],
  "Fluminense Vs Juventude - Brasileirão": [
    { enlace: "/HTML/PremiereBR.html" },
    { enlace: "/HTML/destacada3.html" },
    { enlace: "/HTML/destacada4.html" },
    { enlace: "/HTML/destacada8.html" }
  ],
  "Union Berlin Vs Borussia M'gladbach - Bundesliga": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Paris Saint-Germain Vs Strasbourg - Ligue 1": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Oviedo Vs Espanyol - LaLiga EA Sports": [
    { enlace: "/HTML/DAZNLALIGA.html" },
    { enlace: "/HTML/DAZNLALIGA2.html" },
    { enlace: "/HTML/espndeportesusa.html" },
    { enlace: "/HTML/MovistarLaLiga.html" },
    { enlace: "/HTML/MovistarLaLiga2.html" }
  ],
  "Medellín Vs Fortaleza CEIF - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Unión Magdalena Vs Envigado - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ]
});

Object.assign(opcionesEventos, {
  "WWE Saturday Night's Main Event 1 de noviembre de 2025": [
    { enlace: "HTML/destacada2.html" },
    { enlace: "/HTML/CanalLuchaLibre.html" }
  ],
  "AAA Héroes Inmortales 25 de octubre de 2025": [
    { enlace: "HTML/destacada2.html" }
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
        "Aztecadeportes.html": "Azteca Deportes",
        "azteca7.html": "Azteca 7",
        "beinesp.html": "Bein Sports",
        "Canal5MX.html": "Canal 5 MX",
        "Caracoltv.html": "Caracol",
        "DAZN1.html": "DAZN 1",
        "DAZN2.html": "DAZN 2",
        "DAZN3.html": "DAZN 3",
        "DAZN4.html": "DAZN 4",
        "DAZNLALIGA.html": "DAZN LaLiga",
        "DAZNLALIGA2.html": "DAZN LaLiga 2",
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
        "ECDF.html": "El Canal del Fútbol (ECDF)",
        "ESPN.html": "ESPN",
        "ESPN2.html": "ESPN 2",
        "ESPN3.html": "ESPN 3",
        "ESPN4.html": "ESPN 4",
        "ESPN5.html": "ESPN 5",
        "ESPNARGENTINA1.html": "ESPN Argentina",
        "ESPNARGENTINA2.html": "ESPN Argentina",
        "ESPNARGENTINA3.html": "ESPN Argentina",
        "ESPNBRASIL.html": "ESPN Brasil",
        "ESPNMX.html": "ESPN MX",
        "ESPNMX2.html": "ESPN MX 2",
        "ESPNplus.html": "ESPN +",
        "ESPNplus2.html": "ESPN +",
        "ESPNPremium.html": "ESPN Premium",
        "ESPNSUR.html": "ESPN Suramérica",
        "ESPNSUR2.html": "ESPN Suramérica",
        "espndeportesusa.html": "ESPN Deportes USA",
        "EventosMMA.html": "Eventos MMA",
        "EventosNetflix.html": "Eventos Netflix",
        "EventosNetflix2.html": "Eventos Netflix",
        "Fox1Arg.html": "Fox Sports 1 Argentina",
        "Fox2Arg.html": "Fox Sports 2 Argentina",
        "Fox3Arg.html": "Fox Sports 3 Argentina",
        "FoxDeportesUSA.html": "Fox Deportes USA",
        "FoxMX.html": "Fox Sports MX",
        "FoxMX2.html": "Fox Sports MX 2",
        "FoxMX3.html": "Fox Sports MX 3",
        "FoxSportsPremium.html": "Fox Sports Premium",
        "MEGAChile.html": "MEGA Chile",
        "MovistarDeportes.html": "Movistar Deportes",
        "MovistarDeportes2.html": "Movistar Deportes 2",
        "MovistarLaLiga.html": "Movistar LaLiga",
        "MovistarLaLiga2.html": "Movistar LaLiga 2",
        "MovistarLaLigaCampeones.html": "Movistar LaLiga Campeones",
        "Movistarplus.html": "Movistar Plus",
        "NBCUniverso.html": "NBC Universo",
        "Paramountplus.html": "Paramount +",
        "Paramountplus2.html": "Paramount +",
        "Paramountplus3.html": "Paramount +",
        "Paramountplus4.html": "Paramount +",
        "PremiereBR.html": "Premiere Brasil",
        "RCN.html": "RCN",
        "SporTV.html": "SporTV",
        "SporTV2.html": "SporTV 2",
        "Telefe.html": "Telefe",
        "TelemundoUSA.html": "Telemundo USA",
        "TNTUSA.html": "TNT USA",
        "tntsportsa.html": "TNT Sports Argentina",
        "TUDNMX.html": "TUDN MX",
        "TUDNUSA.html": "TUDN USA",
        "CanalLuchaLibre.html": "Canal Lucha Libre",
        "UnivisionUSA.html": "Univisión USA",
        "GolTV.html": "GolTV",
        "TVPublica.html": "TV Pública",
        "tycsports.html": "TyC Sports",
        "tycsports2.html": "TyC Sports 2",
        "Winplus.html": "Win Sports+",
        "Winsports.html": "Win Sports",
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