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
  { base: "AEW Dynamite", dia: 3, enlace: "/HTML/FoxMX2.html" },
  { base: "TNA iMPACT!", dia: 4, enlace: "https://www.youtube.com/watch?v=t2tgiK1Syhk" },
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

// Eventos de Fútbol
Object.assign(opcionesEventos, {
  "Real Madrid Vs Osasuna - La Liga": [
    { enlace: "/HTML/Dsports.html" },
    { enlace: "/HTML/espndeportesusa.html" },
    { enlace: "/HTML/DAZNLALIGA.html" }
  ],
  "Vélez Vs Fortaleza - Copa Libertadores": [
    { enlace: "/HTML/Fox1Arg.html" }
  ],
  "Huracán Vs Once Caldas - Copa Sudamericana": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Racing Vs Peñarol - Copa Libertadores": [
    { enlace: "/HTML/Fox1Arg.html" }
  ],
  "Sao Paulo Vs Nacional - Copa Libertadores": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Runa Vs Independiente del Valle - Copa Sudamericana": [
    { enlace: "/HTML/Dsports.html" }
  ],
  "Fluminense Vs América de Cali - Copa Sudamericana": [
    { enlace: "/HTML/Disneyplus.html" }
  ],
  "Santa Fe Vs Envigado - Liga BetPlay 2025": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Estudiantes Vs Cerro Porteño - Copa Libertadores": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Cienciano Vs Bolívar - Copa Sudamericana": [
    { enlace: "/HTML/Dsports.html" }
  ],
  "Inter Miami Vs Tigres - Leagues Cup 2025": [
    { enlace: "/HTML/DAZN1.html" }
  ],
  "Internacional Vs Flamengo - Copa Libertadores": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "U Católica Vs Alianza Lima - Copa Sudamericana": [
    { enlace: "/HTML/Dsports.html" }
  ],
  "Independiente Vs U de Chile - Copa Sudamericana": [
    { enlace: "/HTML/Dsports.html" }
  ],
  "Millonarios Vs Unión Magdalena - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Toluca Vs Orlando - Leagues Cup 2025": [
    { enlace: "/HTML/DAZN1.html" }
  ],
  "Seattle Sounders Vs Puebla - Leagues Cup 2025": [
    { enlace: "/HTML/DAZN1.html" }
  ],
  "LA Galaxy Vs Pachuca - Leagues Cup 2025": [
    { enlace: "/HTML/DAZN1.html" }
  ],
  "LDU Quito Vs Botafogo - Copa Libertadores 2025": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "River Plate Vs Libertad - Copa Libertadores 2025": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Palmeiras Vs Universitario - Copa Libertadores 2025": [
    { enlace: "/HTML/ESPN.html" }
  ],
  "Bayern Munich Vs RB Leipzig - Bundesliga 2025": [
    { enlace: "/HTML/DAZN1.html" }
  ],
  "Boyacá Chicó Vs Deportivo Cali - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Llaneros Vs Pasto - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Medellín Vs La Equidad - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Envigado Vs Deportivo Pereira - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Fortaleza Vs Santa Fe - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Millonarios Vs Junior - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Once Caldas Vs Tolima - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Unión Magdalena Vs Alianza - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "América Vs Atlético Nacional - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Bucaramanga Vs Águilas Doradas - Liga BetPlay": [
    { enlace: "/HTML/Winplus.html" }
  ],
  "Real Cartagena Vs Millonarios - Copa BetPlay": [
    { enlace: "/HTML/Winplus.html" }
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

  const horaHTML = estaEnVivo
    ? `<span class="evento-hoy-hora en-vivo-parpadeo">🔴 EN VIVO</span>`
    : `<span class="evento-hoy-hora">${inicio.toLocaleTimeString(navigator.language, {
        hour: "numeric",
        minute: "2-digit",
        hour12: true, // cambia a false si querés formato 24h
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
      })}</span>`;

    const iconoHTML = evento.icono
      ? `<img src="${evento.icono}" alt="icono" class="icono-evento-img">`
      : "";

    const item = document.createElement("div");
    item.className = "evento-hoy-item";
    item.innerHTML = `
      <div class="grupo-hora-icono">
        ${horaHTML}
        ${iconoHTML}
      </div>
      <span class="evento-hoy-nombre">${evento.titulo}</span>
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
          "beinespañol.html": "Bein Sports",
          "Winplus.html": "Win Sports+",
          "ESPNPremium.html": "ESPN Premium",
          "FoxSportsPremium.html": "Fox Sports Premium",
          "tycsports2.html": "TyC Sports 2",
          "tycsports.html": "TyC Sports",
          "TUDNMX.html": "TUDN MX",
          "FoxMX.html": "Fox Sports MX",
          "FoxMX2.html": "Fox Sports MX 2",
          "Fox1Arg.html": "Fox Sports 1 Argentina",
          "ESPN.html": "ESPN",
          "ESPN2.html": "ESPN 2",
          "ESPN3.html": "ESPN 3",
          "ESPN4.html": "ESPN 4",
          "ESPN5.html": "ESPN 5",
          "Caracoltv.html": "Caracol",
          "RCN.html": "RCN",
          "Disneyplus.html": "Disney +",
          "Dsports.html": "DSports",
          "Dsports2.html": "DSports 2",
          "Dsportsplus.html": "DSports+",
          "Winsports.html": "Win Sports",
          "tntsportsa.html": "TNT Sports Argentina",
          "Aztecadeportes.html": "Azteca Deportes",
          "azteca7.html": "Azteca 7",
          "DAZNLALIGA.html": "DAZN LaLiga",
          "DAZN1.html": "DAZN 1",
          "DAZN2.html": "DAZN 2",
          "DAZN3.html": "DAZN 3",
          "MovistarLaLiga.html": "Movistar LaLiga",
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
  });
}
