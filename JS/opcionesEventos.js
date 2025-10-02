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
  "Estados Unidos Vs Francia - Mundial Sub-20": [
    { enlace: "/HTML/Dsportsplus.html" }
  ],
  "Colombia Vs Noruega - Mundial Sub-20": [
    { enlace: "/HTML/Dsports.html" }
  ],
  "Sudáfrica Vs Nueva Caledonia - Mundial Sub-20": [
    { enlace: "/HTML/Dsports2.html" }
  ],
  "Nigeria Vs Arabia Saudita - Mundial Sub-20": [
    { enlace: "/HTML/Dsportsplus.html" }
  ],
  "Bolonia Vs SC Freiburg - Europa League 2025": [
    { enlace: "/HTML/Disneyplus3.html" },
    { enlace: "/HTML/ESPN4.html" }
  ],
  "Panathinaikos Vs GA Eagles - Europa League 2025": [
    { enlace: "/HTML/Disneyplus1.html" }
  ],
  "Roma Vs Lille - Europa League 2025": [
    { enlace: "/HTML/Disneyplus8.html" },
    { enlace: "/HTML/ESPN2.html" },
    { enlace: "/HTML/TUDNUSA.html" }
  ],
  "Fenerbahçe Vs Niza - Europa League 2025": [
    { enlace: "/HTML/Disneyplus4.html" }
  ],
  "Plzen Vs Malmö - Europa League 2025": [
    { enlace: "/HTML/Disneyplus7.html" }
  ],
  "Brann Vs Utrecht - Europa League 2025": [
    { enlace: "/HTML/Disneyplus5.html" }
  ],
  "Celtic Vs Braga - Europa League 2025": [
    { enlace: "/HTML/Disneyplus9.html" },
    { enlace: "/HTML/ESPN3.html" }
  ],
  "Ludogorets Vs Betis - Europa League 2025": [
    { enlace: "/HTML/ESPN.html" },
    { enlace: "/HTML/Disneyplus2.html" }
  ],
  "Steaua Bucarest Vs Young Boys - Europa League 2025": [
    { enlace: "/HTML/Disneyplus6.html" }
  ],
  "Sturm Graz Vs Rangers - Europa League 2025": [
    { enlace: "/HTML/Disneyplus.html?opcion=19" }
  ],
  "Celta Vs PAOK Salonica - Europa League 2025": [
    { enlace: "/HTML/Disneyplus1.html" }
  ],
  "Aviv Vs Dinamo Zagreb - Europa League 2025": [
    { enlace: "/HTML/Disneyplus3.html" }
  ],
  "O. Lyon Vs Salzburgo - Europa League 2025": [
    { enlace: "/HTML/Disneyplus4.html" }
  ],
  "Porto Vs Estrella Roja - Europa League 2025": [
    { enlace: "/HTML/Disneyplus7.html" }
  ],
  "Basel Vs VfB Stuttgart - Europa League 2025": [
    { enlace: "/HTML/Disneyplus6.html" }
  ],
  "Forest Vs Midtjylland - Europa League 2025": [
    { enlace: "/HTML/Disneyplus2.html" }
  ],
  "KRC Genk Vs Ferencvárosi TC - Europa League 2025": [
    { enlace: "/HTML/Disneyplus5.html" }
  ],
  "Feyenoord Vs A Villa - Europa League 2025": [
    { enlace: "/HTML/Disneyplus.html?opcion=20" },
    { enlace: "/HTML/ESPN.html" },
    { enlace: "/HTML/TUDNUSA.html" },
    { enlace: "/HTML/ESPNARGENTINA1.html" }
  ],
  "Junior Vs América de Cali - Copa Betplay 2025": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Tigre Vs Defensa y Justicia - Liga Argentina": [
    { enlace: "/HTML/ESPNPremium.html" }
  ],
  "Argentinos Vs Central Córdoba - Liga Argentina": [
    { enlace: "/HTML/ESPNPremium.html" }
  ],
  "Unión Vs Aldosivi - Liga Argentina": [
    { enlace: "/HTML/tntsportsa.html" }
  ],
  "Deportivo Cali Vs Pereira - Liga Betplay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Necaxa Vs Pachuca - Liga MX": [
    { enlace: "/HTML/azteca7.html" },
    { enlace: "/HTML/TUDNUSA.html" }
  ],
  "Mazatlán Vs Atlético San Luis - Liga MX": [
    { enlace: "/HTML/TUDNUSA.html" }
  ],
  "Atlas FC Vs FC Juárez - Liga MX": [
    { enlace: "/HTML/UnivisionUSA.html" }
  ]
});

Object.assign(opcionesEventos, {
  "WWE Crown Jewel - 11 octubre 2025": [
    { enlace: "/HTML/destacada2.html" },
  ],
  "TNA iMPACT! 2 de octubre de 2025": [
    { enlace: "/HTML/https://www.youtube.com/watch?v=O7PxNoqL-8Y" },
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