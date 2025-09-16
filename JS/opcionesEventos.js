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
  "Athletic Vs Arsenal - Uefa Champions League": [
    { enlace: "/HTML/ESPN.html" },
    { enlace: "/HTML/Fox1Arg.html" },
    { enlace: "/HTML/TUDNUSA.html" }
  ],
  "PSV Vs Union SG - Uefa Champions League": [
    { enlace: "/HTML/ESPNARGENTINA2.html" }
  ],
  "Real Madrid Vs Olympique de Marsella - Uefa Champions League": [
    { enlace: "/HTML/ESPNARGENTINA1.html" }
  ],
  "Juventus Vs Borussia Dortmund - Uefa Champions League": [
    { enlace: "/HTML/ESPNARGENTINA2.html" }
  ],
  "Tottenham Vs Villarreal - Uefa Champions League": [
    { enlace: "/HTML/Fox2Arg.html" }
  ],
  "Benfica Vs FK Qarabag - Uefa Champions League": [
    { enlace: "/HTML/ESPNARGENTINA3.html" }
  ],
  "Vélez Vs Racing - Copa Libertadores 2025": [
    { enlace: "/HTML/Disneyplus5.html" },
    { enlace: "/HTML/Fox1Arg.html" },
    { enlace: "/HTML/ESPN.html" }
  ],
  "Lanús Vs Fluminense - Copa Sudamericana 2025": [
    { enlace: "/HTML/Dsports.html" },
    { enlace: "/HTML/beinespañol.html" }
  ],
  "América Vs Bucaramanga - Liga BetPlay 2025": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Inter Miami CF Vs Seattle Sounders - MLS 2025": [
    { enlace: "/HTML/destacada5.html" }
  ],
  "Millonarios Vs Envigado - Copa BetPlay 2025": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Slavia Prague Vs Bodø/Glimt - Uefa Champions League": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Olympiakos Vs Pafos - Uefa Champions League": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Bayern Múnich Vs Chelsea - Uefa Champions League": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Liverpool Vs Atlético - Uefa Champions League": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "PSG Vs Atalanta - Uefa Champions League": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Ajax Vs Inter Milán - Uefa Champions League": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "River Plate Vs Palmeiras - Copa Libertadores 2025": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Bolívar Vs Atlético MG - Copa Sudamericana 2025": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Independiente del Valle Vs Once Caldas - Copa Sudamericana 2025": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Guadalajara Vs Tigres - Liga BBVA Bancomer MX 2025": [
    { enlace: "/HTML/TUDNUSA.html" }
  ],
  "Botafogo Vs Mirassol - Brasileirão 2025": [
    { enlace: "/HTML/PremiereBR.html" }
  ],
  "Brujas Vs Monaco - Uefa Champions League": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Copenhague Vs Bayer Leverkusen - Uefa Champions League": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Sporting Portugal Vs Kairat Almaty - Uefa Champions League": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Manchester City Vs Nápoles - Uefa Champions League": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Newcastle Vs Barcelona - Uefa Champions League": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Eintracht Frankfurt Vs Galatasaray - Uefa Champions League": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "LDU Quito Vs São Paulo - Conmebol Libertadores": [
    { enlace: "/HTML/FoxSports.html" }
  ],
  "Flamengo Vs Estudiantes - Conmebol Libertadores": [
    { enlace: "/HTML/FoxSports.html" }
  ],
  "Alianza Lima Vs Universidad de Chile - Conmebol Sudamericana": [
    { enlace: "/HTML/ESPN2.html" }
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