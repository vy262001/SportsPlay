document.addEventListener("DOMContentLoaded", function () {
  const videos = [
{
  titulo: "WWE SmackDown 22 de agosto de 2025 Resumen",
  miniatura: "https://i.ytimg.com/vi/9HSTwb9ljFY/maxresdefault.jpg",
  videoId: "ERN6uglbQLc",
  categoria: "WWE"
},
{
  titulo: "WWE Monday Night Raw 18 de agosto de 2025 Resumen",
  miniatura: "https://i.ytimg.com/vi/fXqsN5X-NeM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBl2MDCcCziMhrbs5t3M3hRhA1svQ",
  videoId: "ZTtwpb5bK8o",
  categoria: "WWE"
},
{
  titulo: "Lucha Libre AAA TripleMania XXXIII Resumen",
  miniatura: "https://i.ytimg.com/vi/6mhTftfrPX8/maxresdefault.jpg",
  videoId: "Wqtj-ilNNfI",
  categoria: "AAA"
},
{
  titulo: "WWE SmackDown 15 de agosto de 2025 Resumen",
  miniatura: "https://i.ytimg.com/vi/N4FyFJl6hWk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBSgmmr6WJBisDP06Leq8vJUzZiGw",
  videoId: "DTQSUCg-qug",
  categoria: "WWE"
},
{
  titulo: "PSG vs Tottenham Supercopa de la UEFA 2025 Final Resumen",
  miniatura: "https://i.ytimg.com/vi/cRcbRG3EWuU/maxresdefault.jpg",
  videoId: "cRcbRG3EWuU",
  categoria: "UEFA"
},
{
  titulo: "WWE Monday Night Raw 11 de agosto de 2025 Resumen",
  miniatura: "https://i.ytimg.com/vi/utcyEvgBuik/maxresdefault.jpg",
  videoId: "BHkFEiGkgGU",
  categoria: "WWE"
},   
{
  titulo: "WWE SmackDown 8 de agosto de 2025 Resumen",
  miniatura: "https://i.ytimg.com/vi/mB5qx_CQJWc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBZ_vWYEnJC5EEVpQEPu1PpDoguhQ",
  videoId: "9uqT4SkJRzk",
  categoria: "WWE"
},
{
  titulo: "WWE Monday Night Raw 4 de agosto de 2025 Resumen",
  miniatura: "https://i.ytimg.com/vi/hNke6UEnqsI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAHZ3XH3qvIqN0h29f2DmQDMDEYkg",
  videoId: "gO6R-1t38Gc",
  categoria: "WWE"
},    
{
  titulo: "WWE SummerSlam 2025 Noche 2 Resumen",
  miniatura: "https://i.ytimg.com/vi/3fRMhaf50To/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAzHva2GNljulhxZgFqb_AIN-NslQ",
  videoId: "A_Imyc8h5iM",
  categoria: "WWE"
}, 
{
  titulo: "WWE SummerSlam 2025 Noche 1 Resumen",
  miniatura: "https://i.ytimg.com/vi/kbwWR2VZAho/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBI08YzHjSgRa-Nsni-Z8ZGf7h6Ew",
  videoId: "-BKc4mIra9c",
  categoria: "WWE"
},  
{
  titulo: "WWE SmackDown 1 de agosto de 2025 Resumen",
  miniatura: "https://i.ytimg.com/vi/1r2r37vaA0g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBWGid08TA3v8czpHKT6WZKMsCRUQ",
  videoId: "pCSHsDZSbLc",
  categoria: "WWE"
},         
{
  titulo: "WWE Monday Night Raw 28 de julio 2025 Resumen",
  miniatura: "https://i.ytimg.com/vi/im4k68RXCW4/maxresdefault.jpg",
  videoId: "h3ze1jgoTeU",
  categoria: "WWE"
},
{
  titulo: "WWE SmackDown 25 de julio de 2025 Resumen",
  miniatura: "https://i.ytimg.com/vi/M_0a_AqJGro/maxresdefault.jpg",
  videoId: "nvR1-l0Puws",
  categoria: "WWE"
},        
{
  titulo: "WWE Monday Night Raw 21 de julio 2025 Resumen",
  miniatura: "https://i.ytimg.com/vi/fJbd3chzYqo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAhTcw1npUWwPSYS04MQJFoqWk9iA",
  videoId: "DHIFXZrhR_I",
  categoria: "WWE"
},
{
  titulo: "WWE SmackDown 18 de julio de 2025 Resumen",
  miniatura: "https://i.ytimg.com/vi/FdsKvpxkkj0/maxresdefault.jpg",
  videoId: "tK7ERE36Xlc",
  categoria: "WWE"
},    
{
  titulo: "WWE Monday Night Raw 14 de julio 2025 Resumen",
  miniatura: "https://i.ytimg.com/vi/3rJzDnZD4Ys/maxresdefault.jpg",
  videoId: "1S3BLDzkZcY",
  categoria: "WWE"
},
{
  titulo: "WWE Evolution 2025 Resumen",
  miniatura: "https://i.ytimg.com/vi/UWLh9fNpYsM/maxresdefault.jpg",
  videoId: "L6daxI2Bde4",
  categoria: "WWE"
},
{
  titulo: "Chelsea Vs PSG - Final Mundial de Clubes Resumen",
  miniatura: "https://i.ytimg.com/vi/CEU49MSTmXI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBal4XWCptPRZxpm-xKUHhb5s_5jg",
  videoId: "on6-qcYIJjc",
  categoria: "Final Mundial de Clubes"
},
{
  titulo: "WWE Saturday Nights Main Event 12 de Julio 2025 Resumen",
  miniatura: "https://i.ytimg.com/vi/J4LjrqdyXU4/maxresdefault.jpg",
  videoId: "nTfz8LjiBWQ",
  categoria: "WWE"
},  
{
  titulo: "WWE SmackDown 11 de julio de 2025 Resumen",
  miniatura: "https://i.ytimg.com/vi/5nRQkvWupMs/maxresdefault.jpg",
  videoId: "fvwqvxqaFDk",
  categoria: "WWE"
},    
{
  titulo: "WWE Monday Night Raw 7 de julio 2025 Resumen",
  miniatura: "https://i.ytimg.com/vi/r3KbCiFaBF8/maxresdefault.jpg",
  videoId: "Hq9mplsOuv8",
  categoria: "WWE"
},

{
  titulo: "WWE SmackDown 4 de julio de 2025 Resumen",
  miniatura: "https://i.ytimg.com/vi/5GBDq_VwVP8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBxi0cvyl-TvmjkachZUFPgwAaKWQ",
  videoId: "D6T0dfDQWeI",
  categoria: "WWE"
 },

{
  titulo: "WWE Monday Night Raw 30 de junio 2025 Resumen",
  miniatura: "https://i.ytimg.com/vi/oNlu4NAYDpg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBuXgyf3rlD-sxQBPLPwynnJIOWIQ",
  videoId: "M3_oHb6lbaI",
  categoria: "WWE"
 },

{
  titulo: "WWE Nitght Of Champions 2025 Resumen",
  miniatura: "https://i.ytimg.com/vi/p-jDs_v_o24/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBXqfrJKXdyDFMjJze1bMXkM6ykZQ",
  videoId: "4DLjUyZ5Chs",
  categoria: "WWE"
},

{
  titulo: "WWE SmackDown 27 de junio de 2025 Resumen",
  miniatura: "https://i.ytimg.com/vi/G01jxfxtH1g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD50n8y1srwVWfuw8TM9icH0tGCwg",
  videoId: "NltfLpUX9zM",
  categoria: "WWE"
 },

{
  titulo: "WWE Monday Night Raw 24 de junio 2025 Resumen",
  miniatura: "https://i.ytimg.com/vi/2R3_x5bvdaY/maxresdefault.jpg",
  videoId: "xt9g6JSKXnY",
  categoria: "WWE"
},

    {
      titulo: "WWE SmackDown 20 de junio de 2025 Resumen",
      miniatura: "https://i.ytimg.com/vi/47otpATArSM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAsQpa-JNg5n9n9OFksnI54Ce7_RQ",
      videoId: "-ScYfbvDDnA",
      categoria: "WWE"
    },
    {
      titulo: "WWE Monday Night Raw 16 de junio 2025 Resumen",
      miniatura: "https://i.ytimg.com/vi/D2b8QCFRaVs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAAgqsv-KsoIqqaxPwgcLc9ri7qyw",
      videoId: "EvRC9NWRJUw",
      categoria: "WWE"
    },
    {
      titulo: "WWE SmackDown 13 de junio de 2025 Resumen",
      miniatura: "https://i.ytimg.com/vi/_bllJBEPv4E/maxresdefault.jpg",
      videoId: "TQ75X6tIJpk",
      categoria: "WWE"
    },
    {
      titulo: "Argentina Vs Colombia - Eliminatoria Mundial 2026 Resumen",
      miniatura: "https://i.ytimg.com/vi/Su_tycrZMA4/maxresdefault.jpg",
      videoId: "8CoXJ7ZWXWY",
      categoria: "Eliminatoria Mundial 2026"
    },
    {
      titulo: "Gunther conquista el Campeonato Mundial Pesado - Raw 9 de Junio",
      miniatura: "https://i.ytimg.com/vi/Xpso5DLyQUc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCQHbsepw6lq8oLNR6TdvV4uousyw",
      videoId: "-Y9gtGdqlDc",
      categoria: "WWE"
    },
    {
      titulo: "WWE Money in The Bank 2025 - Resumen Completo",
      miniatura: "https://i.ytimg.com/vi/ebbOpU8BuwY/maxresdefault.jpg",
      videoId: "cweK627ljxY",
      categoria: "WWE"
    },
    {
      titulo: "WWE Worlds Collide 2025 - Resumen Completo",
      miniatura: "https://i.ytimg.com/vi/DDSV9U3c0Io/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCU0xytBx8yP1VJs0-ELp5kbReXvw",
      videoId: "_DGaIf0fhok",
      categoria: "WWE Worlds Collide"
    },
    {
      titulo: "El PSG aplastó al Inter y es campeón de la Champions League",
      miniatura: "https://i.ytimg.com/vi/ZZAtqW-1158/maxresdefault.jpg",
      videoId: "ZZAtqW-1158",
      categoria: "UEFA Champions League"
    },
    {
      titulo: "Resultados Monday Night Raw 2 de Junio 2025",
      miniatura: "https://i.ytimg.com/vi/Hlpg57TyNaU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASTEU4QX7LrGYTH9yGdXaMX6mQNw",
      videoId: "ppuSesibwP4",
      categoria: "WWE RAW"
    },
    {
      titulo: "Chelsea campeón de la Conference League",
      miniatura: "https://i.ytimg.com/vi/u7Xpidn8mDY/maxresdefault.jpg",
      videoId: "u7Xpidn8mDY",
      categoria: "Resumen y mejores momentos"
    },
    {
      titulo: "¡Stephanie Vaquer pierde el título!",
      miniatura: "https://www.wwe.com/f/styles/og_image/public/2025/05/dchinxt855_07_ntwk--91560c60f1b5ad849c076187e75fe049.jpg",
      videoId: "R_IZrbAKolA",
      categoria: "WWE NXT - Mayo 27"
    },
    {
      titulo: "WWE Saturday Night's Main Event 2025 Resultados",
      miniatura: "https://i.ytimg.com/vi/PmfetrCWOC8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCStGSuBlj0dE0o6htDtZaxNsFaAw",
      videoId: "USVczeoxbbY",
      categoria: "WWE"
    },
    {
      titulo: "Worlds Collide - ¿Qué esperar de AAA y WWE?",
      miniatura: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPlM_eCHn5Qt74Ngx4rspWdBYHO9Ti0-9aw&s",
      videoId: "_WdZ6IFHXmI",
      categoria: "WWE Worlds Collide"
    }
  ];

  const contenedor = document.getElementById("sidebar-scroll");
  const reproductor = document.getElementById("main-video");
  const mensaje = document.getElementById('mensaje-evento');

  // Generar miniaturas
  videos.forEach((video) => {
    const enlace = document.createElement("a");
    enlace.href = "#";
    enlace.className = "list-group-item list-group-item-action d-flex gap-3 align-items-start video-thumb";
    enlace.setAttribute("data-video", video.videoId);
    enlace.innerHTML = `
      <img src="${video.miniatura}" class="rounded" style="width: 100px;" alt="Miniatura">
      <div>
        <h6 class="mb-1 fw-bold">${video.titulo}</h6>
        <small>${video.categoria}</small>
      </div>
    `;
    contenedor.appendChild(enlace);
  });

  // Cargar primer video
  const primerVideo = document.querySelector('.video-thumb');
  if (primerVideo && reproductor) {
    const primerID = primerVideo.getAttribute('data-video');
    reproductor.src = `https://www.youtube.com/embed/${primerID}`;
  }

  // Reemplazar video al hacer clic en miniatura
  contenedor.addEventListener("click", function (e) {
    const link = e.target.closest(".video-thumb");
    if (link) {
      e.preventDefault();
      const videoId = link.getAttribute("data-video");
      if (reproductor) {
        reproductor.src = `https://www.youtube.com/embed/${videoId}`;
      }
    }
  });

  // Mostrar mensaje si el evento aún no está disponible
  document.querySelectorAll('.ver-evento').forEach(boton => {
    boton.addEventListener('click', function (e) {
      if (this.dataset.disponible === "false") {
        e.preventDefault();
        if (mensaje) {
          mensaje.classList.remove('d-none');
          setTimeout(() => mensaje.classList.add('d-none'), 3000);
        }
      }
    });
  });

  // Ajustar altura del sidebar al reproductor
  window.addEventListener('load', () => {
    const sidebar = document.getElementById("sidebar-scroll");
    if (reproductor && sidebar) {
      const height = reproductor.offsetHeight;
      sidebar.style.maxHeight = height + 'px';
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const canales = [
    {
      titulo: "ESPN En Vivo",
      img: "./IMAGENES/espn.png",
      link: "./HTML/ESPN.html"
    },
    {
      titulo: "Win Sports + En Vivo",
      img: "./IMAGENES/winplusfutbol.png",
      link: "./HTML/Winplus.html"
    },
    {
      titulo: "DSports En Vivo",
      img: "./IMAGENES/Dsports.png",
      link: "./HTML/Dsports.html"
    },
    {
      titulo: "Fox Sports MX En Vivo",
      img: "./IMAGENES/fxmx.png",
      link: "./HTML/FoxMX.html"
    },
    {
      titulo: "ESPN 2 En Vivo",
      img: "./IMAGENES/espn-2-logo-png_seeklogo-49202.png",
      link: "./HTML/ESPN2.html"
    },
    {
      titulo: "TyC Sports En Vivo",
      img: "./IMAGENES/tycsports.png",
      link: "./HTML/tycsports.html"
    },
    {
      titulo: "TNT Sports En Vivo",
      img: "./IMAGENES/tnt-sports-logo-png_seeklogo-486966.png",
      link: "./HTML/tntsportsa.html"
    },
    {
      titulo: "TUDN En Vivo",
      img: "./IMAGENES/Tudn-Free-Trial.png",
      link: "./HTML/TUDNMX.html"
    },
    {
      titulo: "ESPN Deportes USA En Vivo",
      img: "./IMAGENES/espnusa.png",
      link: "./HTML/espndeportesusa.html"
    },
    {
      titulo: "Win Sports En Vivo",
      img: "./IMAGENES/winlogo.png",
      link: "./HTML/Winsports.html"
    },
    {
      titulo: "DSports 2 En Vivo",
      img: "./IMAGENES/dsports2.png",
      link: "./HTML/Dsports2.html"
    },
    {
      titulo: "Fox Sports 2 MX En Vivo",
      img: "./IMAGENES/fox2.png",
      link: "./HTML/FoxMX2.html"
    },
    {
      titulo: "TyC Sports Internacional En Vivo",
      img: "./IMAGENES/TyCSports2.webp",
      link: "./HTML/tycsports2.html"
    },
    {
      titulo: "Fox Sports Premium MX En Vivo",
      img: "./IMAGENES/FoxPremium.png",
      link: "./HTML/FoxSportsPremium.html"
    },
    {
      titulo: "ESPN Premium En Vivo",
      img: "./IMAGENES/ESPNPremium.png",
      link: "./HTML/ESPNPremium.html"
    }
  ];

  const contenedor = document.getElementById("contenedor-canales");

  // Crear título
  const titulo = document.createElement("h1");
  titulo.id = "canales";
  titulo.className = "text-center mb-4";
  titulo.textContent = "CANALES EN VIVO";
  contenedor.appendChild(titulo);

  // Crear fila (row)
  const row = document.createElement("div");
  row.className = "row";

  // Crear cada canal como columna
  canales.forEach(canal => {
    const col = document.createElement("div");
    col.className = "col-md-4 h-100";

    col.innerHTML = `
      <a href="${canal.link}" class="text-decoration-none">
        <div class="card card-uniforme mb-4 shadow-sm">
          <img src="${canal.img}" class="card-img-top" alt="Canal">
          <div class="card-body">
            <h5 class="card-title">${canal.titulo}</h5>
            <p class="card-text">Transmisión continua en alta definición.</p>
          </div>
        </div>
      </a>
    `;

    row.appendChild(col);
  });

  // Insertar la fila en el contenedor principal
  contenedor.appendChild(row);
});

document.addEventListener("DOMContentLoaded", function () {
  window.cambiarOpcion = function (boton, url) {
    const iframe = document.getElementById('embedIframe');
    if (iframe) {
      iframe.src = url;
    }

    // Quitar clase active a todos los botones
    document.querySelectorAll('.btn-opcion').forEach(btn => btn.classList.remove('active'));

    // Activar solo el botón clickeado
    boton.classList.add('active');
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const currentPath = window.location.pathname.split("/").pop();
  const currentHash = window.location.hash;

  navLinks.forEach(link => {
    const href = link.getAttribute("href");

    if (
      href === currentPath ||
      (href.includes(currentPath) && currentPath !== "") || // Para subcarpetas como HTML/programacion.html
      (href === "#canales" && currentHash === "#canales")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btnVolverArriba = document.getElementById("btnVolverArriba");

  window.addEventListener("scroll", function () {
    btnVolverArriba.style.display = window.scrollY > 300 ? "flex" : "none";
  });

  btnVolverArriba.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const isMobile = () => window.innerWidth < 992;

  document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
    toggle.addEventListener("click", function (e) {
      if (isMobile()) {
        e.preventDefault();
        const parent = this.parentElement;

        // Cierra otros dropdowns
        document.querySelectorAll(".dropdown").forEach(drop => {
          if (drop !== parent) drop.classList.remove("show");
        });

        // Alterna este
        parent.classList.toggle("show");
      }
    });
  });

  // Cierra si haces clic afuera (solo en móviles)
  document.addEventListener("click", function (e) {
    if (isMobile() && !e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown").forEach(drop => drop.classList.remove("show"));
    }
  });
});


// eventos-hoy.js
const fecha = new Date();
const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);

document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.getElementById("eventos-hoy-titulo");
  if (titulo) {
    titulo.textContent = `Eventos Hoy - ${fechaFormateada}`;
  }
});
