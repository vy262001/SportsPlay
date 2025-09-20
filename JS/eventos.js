// Detectar si estamos en una página que usa enlaceProgramacion
const desdeProgramacion = window.location.pathname.includes("programacion.html") || window.location.pathname.includes("repeticiones.html") || window.location.pathname.includes("lucha-libre.html");

// Lista de eventos
const eventos = [
{
  titulo: "Deportivo Cali Vs Junior - Liga BetPlay 2025",
  tituloDestacado: "Ver Deportivo Cali Vs Junior - Liga BetPlay 2025 En Vivo",
  descripcion: "Jornada 1 - Clausura",
  imagen: "https://cdn.amxinfra.com/clarosports/images/2025/07/caljun-195229-1024x576.jpg",
  imagenDestacada: "https://libero.cronosmedia.glr.pe/original/2023/04/26/6449974ed1f7fb415a43dc4f.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  destacado: true,
  fijarComoDestacado: true,
  inicio: "2025-07-12T20:30:00",
  fin: "2025-07-12T22:30:00",
  orden: 9
},

// Eventos 20-09-2025

{ 
  titulo: "Real Madrid vs Espanyol - LaLiga EA Sports",
  tituloDestacado: "Ver Real Madrid vs Espanyol - LaLiga EA Sports En Vivo", 
  descripcion: "Jornada de LaLiga", 
  imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png", 
  imagenDestacada: "https://www.record.com.mx/sites/default/files/styles/convert_webp/public/articulos/2024/09/20/real_madrid_vs_espanyol.jpg.webp?itok=bosuMf-t",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png", 
  enlace: "HTML/Dsports.html",
  enlaceProgramacion: "Dsports.html",
  enlacesExtra: ["Dsports.html", "espndeportesusa.html", "ESPNplus.html"],
  destacado: true,
  fijarComoDestacado: true,
  inicio: "2025-09-20T09:15:00", 
  fin: "2025-09-20T11:15:00", 
  orden: 2 
},
{ 
  titulo: "Villarreal vs Osasuna - LaLiga EA Sports",
  tituloDestacado: "Ver Villarreal vs Osasuna - LaLiga EA Sports En Vivo",
  descripcion: "Jornada de LaLiga",
  imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
  imagenDestacada: "https://image.discovery.indazn.com/ca/v2/ca/image?id=cuwedpkfvtic8d9tmi0160trb_image-header_pDach_1745860252000&quality=70",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png", 
  enlace: "HTML/Dsports.html",
  enlaceProgramacion: "Dsports.html",
  enlacesExtra: ["Dsports.html", "espndeportesusa.html"],
  destacado: true,
  fijarComoDestacado: true,
  inicio: "2025-09-20T11:30:00", 
  fin: "2025-09-20T13:30:00", 
  orden: 3 
},
{ 
  titulo: "Alavés vs Sevilla - LaLiga EA Sports", 
  tituloDestacado: "Ver Alavés vs Sevilla - LaLiga EA Sports En Vivo", 
  descripcion: "Jornada de LaLiga", 
  imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png", 
  imagenDestacada: "https://statics-maker.llt-services.com/gir/images/2023/07/04/xlarge/ef962943-cd1e-4843-a19a-8c1b5b9e9abb.jpg", 
  logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png", 
  enlace: "HTML/Disneyplus6.html",
  enlaceProgramacion: "Disneyplus6.html",
  inicio: "2025-09-20T14:00:00", 
  fin: "2025-09-20T16:00:00", 
  orden: 4 
},
{ 
  titulo: "Valencia vs Athletic - LaLiga EA Sports", 
  tituloDestacado: "Ver Valencia vs Athletic - LaLiga EA Sports En Vivo", 
  descripcion: "Jornada de LaLiga", 
  imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png", 
  imagenDestacada: "https://statics-maker.llt-services.com/gir/images/2023/07/04/xlarge/ef962943-cd1e-4843-a19a-8c1b5b9e9abb.jpg", 
  logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png", 
  enlace: "HTML/espndeportesusa.html",
  enlaceProgramacion: "espndeportesusa.html", 
  inicio: "2025-09-20T16:00:00", 
  fin: "2025-09-20T18:00:00", 
  orden: 5 
},
{
  titulo: "West Ham Vs Crystal Palace - Premier League",
  tituloDestacado: "Ver West Ham Vs Crystal Palace - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/DAZN2.html",
  enlaceProgramacion: "DAZN2.html",
  inicio: "2025-09-20T09:00:00",
  fin: "2025-09-20T11:00:00",
  orden: 2
},
{
  titulo: "Brighton Vs Tottenham - Premier League",
  tituloDestacado: "Ver Brighton Vs Tottenham - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/Disneyplus12.html",
  enlaceProgramacion: "Disneyplus12.html",
  inicio: "2025-09-20T09:00:00",
  fin: "2025-09-20T11:00:00",
  orden: 3
},
{
  titulo: "Wolves Vs Leeds - Premier League",
  tituloDestacado: "Ver Wolves Vs Leeds - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/ESPNARGENTINA1.html",
  enlaceProgramacion: "ESPNARGENTINA1.html",
  enlacesExtra: ["ESPNARGENTINA1.html", "DAZN2.html", "ESPN2.html"],
  inicio: "2025-09-20T09:00:00",
  fin: "2025-09-20T11:00:00",
  orden: 4
},
{
  titulo: "Burnley Vs Nott'm Forest - Premier League",
  tituloDestacado: "Ver Burnley Vs Nott'm Forest - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/DAZN3.html",
  enlaceProgramacion: "DAZN3.html",
  inicio: "2025-09-20T11:30:00",
  fin: "2025-09-20T13:30:00",
  orden: 5
},
{
  titulo: "M. United Vs Chelsea - Premier League",
  tituloDestacado: "Ver M. United Vs Chelsea - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/Disneyplus4.html",
  enlaceProgramacion: "Disneyplus4.html",
  enlacesExtra: ["Disneyplus4.html", "ESPN.html", "DAZN1.html", "ESPNARGENTINA1.html"],
  inicio: "2025-09-20T14:00:00",
  fin: "2025-09-20T16:00:00",
  orden: 6
},
{
  titulo: "Fulham Vs Brentford - Premier League",
  tituloDestacado: "Ver Fulham Vs Brentford - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/Disneyplus14.html",
  enlaceProgramacion: "Disneyplus14.html",
  inicio: "2025-09-20T14:00:00",
  fin: "2025-09-20T16:00:00",
  orden: 7
},
{
  titulo: "Bolonia FC Vs Genoa - Serie A",
  tituloDestacado: "Ver Bolonia Vs Genoa - Serie A En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png",
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg",
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png",
  enlace: "HTML/Disneyplus7.html",
  enlaceProgramacion: "Disneyplus7.html",
  enlacesExtra: ["Disneyplus7.html", "ESPNMX.html"],
  inicio: "2025-09-20T08:00:00",
  fin: "2025-09-20T10:00:00",
  orden: 1
},
{
  titulo: "Hellas Verona Vs Juventus - Serie A",
  tituloDestacado: "Ver Hellas Verona Vs Juventus - Serie A En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png",
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg",
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png",
  enlace: "HTML/Disneyplus2.html",
  enlaceProgramacion: "Disneyplus2.html",
  inicio: "2025-09-20T11:00:00",
  fin: "2025-09-20T13:00:00",
  orden: 2
},
{
  titulo: "Udinese Vs AC Milan - Serie A",
  tituloDestacado: "Ver Udinese Vs Milan - Serie A En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png",
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg",
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png",
  enlace: "HTML/Disneyplus13.html",
  enlaceProgramacion: "Disneyplus13.html",
  enlacesExtra: ["Disneyplus13.html", "ESPN.html"],
  inicio: "2025-09-20T13:45:00",
  fin: "2025-09-20T15:45:00",
  orden: 3
},
{
  titulo: "SV Werder Vs SC Freiburg - Bundesliga",
  tituloDestacado: "Ver SV Werder Vs SC Freiburg - Bundesliga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
  enlace: "HTML/Disneyplus10.html",
  enlaceProgramacion: "Disneyplus10.html",
  inicio: "2025-09-20T08:30:00",
  fin: "2025-09-20T10:30:00",
  orden: 1
},
{
  titulo: "TSG Hoffenheim Vs Bayern Múnich - Bundesliga",
  tituloDestacado: "Ver TSG Hoffenheim Vs Bayern Múnich - Bundesliga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
  enlace: "HTML/ESPN.html",
  enlaceProgramacion: "ESPN.html",
  enlacesExtra: ["ESPN.html", "Disneyplus11.html"],
  inicio: "2025-09-20T08:30:00",
  fin: "2025-09-20T10:30:00",
  orden: 2
},
{
  titulo: "FC Augsburg Vs Mainz 05 - Bundesliga",
  tituloDestacado: "Ver FC Augsburg Vs Mainz 05 - Bundesliga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
  enlace: "HTML/Disneyplus8.html",
  enlaceProgramacion: "Disneyplus8.html",
  inicio: "2025-09-20T08:30:00",
  fin: "2025-09-20T10:30:00",
  orden: 3
},
{
  titulo: "Hamburger SV Vs 1. FC Heidenheim 1846 - Bundesliga",
  tituloDestacado: "Ver Hamburger SV Vs 1. FC Heidenheim 1846 - Bundesliga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
  enlace: "HTML/Disneyplus9.html",
  enlaceProgramacion: "Disneyplus9.html",
  inicio: "2025-09-20T08:30:00",
  fin: "2025-09-20T10:30:00",
  orden: 4
},
{
  titulo: "RB Leipzig Vs 1. FC Köln - Bundesliga",
  tituloDestacado: "Ver RB Leipzig Vs 1. FC Köln - Bundesliga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
  enlace: "HTML/Disneyplus5.html",  
  enlaceProgramacion: "Disneyplus5.html",
  inicio: "2025-09-20T11:30:00",
  fin: "2025-09-20T13:30:00",
  orden: 5
},
{
  titulo: "Nacional Vs Arouca - Primeira Liga",
  tituloDestacado: "Ver Nacional Vs Arouca - Primeira Liga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://1000logos.net/wp-content/uploads/2022/01/Portuguese-Primeira-Liga-logo.jpg",
  imagenDestacada: "https://1000logos.net/wp-content/uploads/2022/01/Portuguese-Primeira-Liga-logo.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/5/5a/S%C3%ADmbolo_da_Liga_Portuguesa_de_Futebol_Profissional.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1200px-Flag_of_Portugal.svg.png",
  enlace: "HTML/destacada4.html",
  enlaceProgramacion: "destacada4.html",
  inicio: "2025-09-20T09:30:00",
  fin: "2025-09-20T11:30:00",
  orden: 61
},
{
  titulo: "Santa Clara Vs Alverca - Primeira Liga",
  tituloDestacado: "Ver Santa Clara Vs Alverca - Primeira Liga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://1000logos.net/wp-content/uploads/2022/01/Portuguese-Primeira-Liga-logo.jpg",
  imagenDestacada: "https://1000logos.net/wp-content/uploads/2022/01/Portuguese-Primeira-Liga-logo.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/5/5a/S%C3%ADmbolo_da_Liga_Portuguesa_de_Futebol_Profissional.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1200px-Flag_of_Portugal.svg.png",
  enlace: "HTML/GolTV.html",
  enlaceProgramacion: "GolTV.html",
  inicio: "2025-09-20T09:30:00",
  fin: "2025-09-20T11:30:00",
  orden: 62
},
{
  titulo: "AVS Vs Benfica - Primeira Liga",
  tituloDestacado: "Ver AVS Vs Benfica - Primeira Liga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://1000logos.net/wp-content/uploads/2022/01/Portuguese-Primeira-Liga-logo.jpg",
  imagenDestacada: "https://1000logos.net/wp-content/uploads/2022/01/Portuguese-Primeira-Liga-logo.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/5/5a/S%C3%ADmbolo_da_Liga_Portuguesa_de_Futebol_Profissional.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1200px-Flag_of_Portugal.svg.png",
  enlace: "HTML/GolTV.html",
  enlaceProgramacion: "GolTV.html",
  inicio: "2025-09-20T12:00:00",
  fin: "2025-09-20T14:00:00",
  orden: 63
},
{
  titulo: "Vitória SC Vs Braga - Primeira Liga",
  tituloDestacado: "Ver Vitória SC Vs Braga - Primeira Liga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://1000logos.net/wp-content/uploads/2022/01/Portuguese-Primeira-Liga-logo.jpg",
  imagenDestacada: "https://1000logos.net/wp-content/uploads/2022/01/Portuguese-Primeira-Liga-logo.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/5/5a/S%C3%ADmbolo_da_Liga_Portuguesa_de_Futebol_Profissional.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1200px-Flag_of_Portugal.svg.png",
  enlace: "HTML/GolTV.html",
  enlaceProgramacion: "GolTV.html",
  inicio: "2025-09-20T14:30:00",
  fin: "2025-09-20T16:30:00",
  orden: 64
},
{
  titulo: "Envigado Vs Alianza Petrolera - Liga BetPlay",
  tituloDestacado: "Ver Envigado Vs Alianza Petrolera - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/bucaramanga-vs-once-caldas-finalizacion-2025.webp",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-09-20T14:00:00",
  fin: "2025-09-20T16:00:00",
  orden: 70
},
{
  titulo: "Llaneros Vs Rionegro Águilas - Liga BetPlay",
  tituloDestacado: "Ver Llaneros Vs Rionegro Águilas - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/bucaramanga-vs-once-caldas-finalizacion-2025.webp",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-09-20T16:10:00",
  fin: "2025-09-20T18:10:00",
  orden: 71
},
{
  titulo: "Deportivo Pasto Vs Santa Fe - Liga BetPlay",
  tituloDestacado: "Ver Deportivo Pasto Vs Independiente Santa Fe - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/bucaramanga-vs-once-caldas-finalizacion-2025.webp",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-09-20T18:20:00",
  fin: "2025-09-20T20:20:00",
  orden: 72
},
{
  titulo: "La Equidad Vs Deportivo Cali - Liga BetPlay",
  tituloDestacado: "Ver La Equidad Vs Deportivo Cali - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/bucaramanga-vs-once-caldas-finalizacion-2025.webp",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-09-20T20:30:00",
  fin: "2025-09-20T22:30:00",
  orden: 73
},
{
  titulo: "Barracas Central Vs Sarmiento - Liga Argentina",
  tituloDestacado: "Ver Barracas Central Vs Sarmiento - Liga Profesional Argentina En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPNPremium.html",
  enlaceProgramacion: "ESPNPremium.html",
  inicio: "2025-09-20T12:30:00",
  fin: "2025-09-20T14:30:00",
  orden: 74
},
{
  titulo: "Unión Vs Independiente Rivadavia - Liga Argentina",
  tituloDestacado: "Ver Unión Vs Independiente Rivadavia - Liga Profesional Argentina En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/tntsportsa.html",
  enlaceProgramacion: "tntsportsa.html",
  inicio: "2025-09-20T14:45:00",
  fin: "2025-09-20T16:45:00",
  orden: 75
},
{
  titulo: "Tigre Vs Aldosivi - Liga Argentina",
  tituloDestacado: "Ver Tigre Vs Aldosivi - Liga Profesional Argentina En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPNPremium.html",
  enlaceProgramacion: "ESPNPremium.html",
  inicio: "2025-09-20T17:00:00",
  fin: "2025-09-20T19:00:00",
  orden: 76
},
{
  titulo: "Atl. Tucumán Vs River - Liga Argentina",
  tituloDestacado: "Ver Atl. Tucumán Vs River - Liga Profesional Argentina En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPN.html",
  enlaceProgramacion: "ESPN.html",
  enlacesExtra: ["ESPN.html", "tntsportsa.html"],
  inicio: "2025-09-20T19:15:00",
  fin: "2025-09-20T21:15:00",
  orden: 77
},
{
  titulo: "Pachuca Vs Querétaro - Liga BBVA Bancomer MX",
  tituloDestacado: "Ver Pachuca Vs Querétaro - Liga BBVA Bancomer MX En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/TMWDQ9mQ/LigaMX.png",
  imagenDestacada: "https://cdn.brandfetch.io/id6qM-I7Sb/w/1500/h/500/id2L_f-Jc9.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751189495640",
  logoMini: "https://cdn.shoplightspeed.com/shops/649488/files/66293910/image.jpg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
  enlace: "HTML/TUDNUSA.html",
  enlaceProgramacion: "TUDNUSA.html",
  enlacesExtra: ["TUDNUSA.html", "azteca7.html"],
  inicio: "2025-09-20T18:00:00",
  fin: "2025-09-20T20:00:00",
  orden: 78
},
{
  titulo: "Pumas UNAM Vs Tigres - Liga BBVA Bancomer MX",
  tituloDestacado: "Ver Pumas UNAM Vs Tigres - Liga BBVA Bancomer MX En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/TMWDQ9mQ/LigaMX.png",
  imagenDestacada: "https://cdn.brandfetch.io/id6qM-I7Sb/w/1500/h/500/id2L_f-Jc9.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751189495640",
  logoMini: "https://cdn.shoplightspeed.com/shops/649488/files/66293910/image.jpg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
  enlace: "HTML/UnivisionUSA.html",
  enlaceProgramacion: "UnivisionUSA.html",
  inicio: "2025-09-20T20:00:00",
  fin: "2025-09-20T22:00:00",
  orden: 79
},
{
  titulo: "Guadalajara Vs Toluca - Liga BBVA Bancomer MX",
  tituloDestacado: "Ver Guadalajara Vs Toluca - Liga BBVA Bancomer MX En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/TMWDQ9mQ/LigaMX.png",
  imagenDestacada: "https://cdn.brandfetch.io/id6qM-I7Sb/w/1500/h/500/id2L_f-Jc9.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751189495640",
  logoMini: "https://cdn.shoplightspeed.com/shops/649488/files/66293910/image.jpg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
  enlace: "HTML/TelemundoUSA.html",
  enlaceProgramacion: "TelemundoUSA.html",
  inicio: "2025-09-20T20:07:00",
  fin: "2025-09-20T22:07:00",
  orden: 80
},
{
  titulo: "Monterrey Vs América - Liga BBVA Bancomer MX",
  tituloDestacado: "Ver Monterrey Vs América - Liga BBVA Bancomer MX En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/TMWDQ9mQ/LigaMX.png",
  imagenDestacada: "https://cdn.brandfetch.io/id6qM-I7Sb/w/1500/h/500/id2L_f-Jc9.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751189495640",
  logoMini: "https://cdn.shoplightspeed.com/shops/649488/files/66293910/image.jpg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
  enlace: "HTML/TUDNUSA.html",
  enlaceProgramacion: "TUDNUSA.html",
  enlacesExtra: ["TUDNUSA.html", "UnivisionUSA.html"],
  inicio: "2025-09-20T22:05:00",
  fin: "2025-09-21T00:05:00",
  orden: 81
},

{
  titulo: "Vitória Vs Fluminense - Brasileirão",
  tituloDestacado: "Ver Vitória Vs Fluminense - Brasileirão En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080",
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg",
  logoMini: "https://www.ceroacero.es/img/logos/competicoes/51_imgbank_d1_20250313102859.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1024px-Flag_of_Brazil.svg.png",
  enlace: "HTML/PremiereBR.html",
  enlaceProgramacion: "PremiereBR.html",
  inicio: "2025-09-20T14:00:00",
  fin: "2025-09-20T16:30:00",
  orden: 90
},
{
  titulo: "Ceará Vs Bahia - Brasileirão",
  tituloDestacado: "Ver Ceará Vs Bahia - Brasileirão En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080",
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg",
  logoMini: "https://www.ceroacero.es/img/logos/competicoes/51_imgbank_d1_20250313102859.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1024px-Flag_of_Brazil.svg.png",
  enlace: "HTML/PremiereBR.html",
  enlaceProgramacion: "PremiereBR.html",
  inicio: "2025-09-20T16:30:00",
  fin: "2025-09-20T18:30:00",
  orden: 91
},
{
  titulo: "Botafogo Vs Atlético MG - Brasileirão",
  tituloDestacado: "Ver Botafogo Vs Atlético MG - Brasileirão En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080",
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg",
  logoMini: "https://www.ceroacero.es/img/logos/competicoes/51_imgbank_d1_20250313102859.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1024px-Flag_of_Brazil.svg.png",
  enlace: "HTML/destacada8.html",
  enlaceProgramacion: "destacada8.html",
  inicio: "2025-09-20T16:30:00",
  fin: "2025-09-20T18:30:00",
  orden: 92
},
{
  titulo: "Palmeiras Vs Fortaleza EC - Brasileirão",
  tituloDestacado: "Ver Palmeiras Vs Fortaleza EC - Brasileirão En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080",
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg",
  logoMini: "https://www.ceroacero.es/img/logos/competicoes/51_imgbank_d1_20250313102859.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1024px-Flag_of_Brazil.svg.png",
  enlace: "HTML/PremiereBR.html",
  enlaceProgramacion: "PremiereBR.html",
  inicio: "2025-09-20T19:00:00",
  fin: "2025-09-20T21:00:00",
  orden: 93
},
{
  titulo: "Inter Miami CF Vs DC United - MLS 2025",
  tituloDestacado: "Ver Inter Miami CF Vs DC United - MLS 2025 En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://cms.athleticsnyc.com/wp-content/uploads/2019/05/MLS_logo_sm.jpg",
  imagenDestacada: "https://www.worldsoccershop.com/wcm/connect/cada4129-78f1-4ec6-a588-0242b4c4b37a/Hero.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-cada4129-78f1-4ec6-a588-0242b4c4b37a-o3TKW5p",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/f/fb/MLS_crest_logo_Mono.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1280px-Flag_of_the_United_States.png",
  enlace: "HTML/destacada5.html",
  enlaceProgramacion: "destacada5.html",
  destacado: true,
  fijarComoDestacado: true,
  inicio: "2025-09-20T18:30:00",
  fin: "2025-09-20T20:30:00",
  orden: 94
},

// Eventos 21-09-2025
{ 
  titulo: "Rayo vs Celta - LaLiga EA Sports",
  tituloDestacado: "Ver Rayo vs Celta - LaLiga EA Sports En Vivo", 
  descripcion: "Jornada de LaLiga", 
  imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png", 
  imagenDestacada: "https://statics-maker.llt-services.com/gir/images/2023/07/04/xlarge/ef962943-cd1e-4843-a19a-8c1b5b9e9abb.jpg", 
  logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png", 
  enlace: "HTML/MovistarLaLiga.html",
  enlaceProgramacion: "MovistarLaLiga.html",
  enlacesExtra: ["MovistarLaLiga.html", "MovistarLaLiga2.html"],
  inicio: "2025-09-21T07:00:00", 
  fin: "2025-09-21T09:00:00", 
  orden: 1 
},

{ 
  titulo: "Mallorca vs Atlético - LaLiga EA Sports", 
  tituloDestacado: "Ver Mallorca vs Atlético - LaLiga EA Sports En Vivo", 
  descripcion: "Jornada de LaLiga", 
  imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png", 
  imagenDestacada: "https://statics-maker.llt-services.com/gir/images/2023/07/04/xlarge/ef962943-cd1e-4843-a19a-8c1b5b9e9abb.jpg", 
  logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png", 
  enlace: "HTML/DAZNLALIGA.html",
  enlaceProgramacion: "DAZNLALIGA.html",
  enlacesExtra: ["DAZNLALIGA.html", "DAZNLALIGA2.html"],
  inicio: "2025-09-21T09:15:00", 
  fin: "2025-09-21T11:15:00", 
  orden: 2 
},

{ 
  titulo: "Elche vs Oviedo - LaLiga EA Sports", 
  tituloDestacado: "Ver Elche vs Oviedo - LaLiga EA Sports En Vivo", 
  descripcion: "Jornada de LaLiga", 
  imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png", 
  imagenDestacada: "https://statics-maker.llt-services.com/gir/images/2023/07/04/xlarge/ef962943-cd1e-4843-a19a-8c1b5b9e9abb.jpg", 
  logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png", 
  enlace: "HTML/DAZNLALIGA.html",
  enlaceProgramacion: "DAZNLALIGA.html",
  enlacesExtra: ["DAZNLALIGA.html", "DAZNLALIGA2.html"],
  inicio: "2025-09-21T11:30:00", 
  fin: "2025-09-21T13:30:00", 
  orden: 3 
},

{ 
  titulo: "Barcelona vs Getafe - LaLiga EA Sports",
  tituloDestacado: "Ver Barcelona vs Getafe - LaLiga EA Sports En Vivo",
  descripcion: "Jornada de LaLiga",
  imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
  imagenDestacada: "https://image.discovery.indazn.com/ca/v2/ca/image?id=6ixddzn1o7jit70ua56wx1dnr_image-header_pRow_1725975676000&quality=70", 
  logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png", 
  enlace: "HTML/ESPN.html",
  enlaceProgramacion: "ESPN.html",
  enlacesExtra: ["ESPN.html", "espndeportesusa.html", "DAZNLALIGA.html", "DAZNLALIGA2.html","MovistarLaLiga.html"],
  destacado: true,
  fijarComoDestacado: true,
  inicio: "2025-09-21T14:00:00", 
  fin: "2025-09-21T16:00:00", 
  orden: 4 
},
{ 
  titulo: "Bournemouth vs Newcastle - Premier League", 
  tituloDestacado: "Ver Bournemouth vs Newcastle - Premier League En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg", 
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png", 
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg", 
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html", 
  inicio: "2025-09-21T08:00:00", 
  fin: "2025-09-21T10:00:00", 
  orden: 5 
},

{ 
  titulo: "Sunderland vs A Villa - Premier League", 
  tituloDestacado: "Ver Sunderland vs A Villa - Premier League En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg", 
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png", 
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg", 
  enlace: "HTML/ESPN.html", 
  enlaceProgramacion: "ESPN.html",
  enlacesExtra: ["ESPN.html", "Disneyplus.html"],
  inicio: "2025-09-21T08:00:00", 
  fin: "2025-09-21T10:00:00", 
  orden: 6 
},

{ 
  titulo: "Arsenal vs M. City - Premier League", 
  tituloDestacado: "Ver Arsenal vs M. City - Premier League En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg", 
  imagenDestacada: "https://cdn.prod.website-files.com/6283f8ab1f48390b39a30c77/652593a652f7acbb9208f4b9_Arsenal-vs-Man-City.jpg.webp",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg", 
  enlace: "HTML/ESPN.html",
  enlaceProgramacion: "ESPN.html",
  destacado: true,
  fijarComoDestacado: true,
  inicio: "2025-09-21T10:30:00", 
  fin: "2025-09-21T12:30:00", 
  orden: 7 
},
{ 
  titulo: "SS Lazio vs AS Roma - Serie A",
  tituloDestacado: "Ver Lazio vs Roma - Serie A En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png", 
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg", 
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg", 
  enlace: "HTML/Disneyplus.html", 
  enlaceProgramacion: "Disneyplus.html", 
  inicio: "2025-09-21T05:30:00", 
  fin: "2025-09-21T07:30:00", 
  orden: 8 
},

{ 
  titulo: "Torino FC vs Atalanta - Serie A",
  tituloDestacado: "Ver Torino vs Atalanta - Serie A En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png", 
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg", 
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg", 
  enlace: "HTML/Disneyplus.html", 
  enlaceProgramacion: "Disneyplus.html", 
  inicio: "2025-09-21T08:00:00", 
  fin: "2025-09-21T10:00:00", 
  orden: 9 
},

{ 
  titulo: "U.S. Cremonese vs Parma - Serie A", 
  tituloDestacado: "Ver U.S. Cremonese vs Parma - Serie A En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png", 
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg", 
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg", 
  enlace: "HTML/Disneyplus.html", 
  enlaceProgramacion: "Disneyplus.html", 
  inicio: "2025-09-21T08:00:00", 
  fin: "2025-09-21T10:00:00", 
  orden: 10 
},

{ 
  titulo: "Fiorentina vs Calcio Como 1907 - Serie A",
  tituloDestacado: "Ver Fiorentina vs Como - Serie A En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png", 
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg", 
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg", 
  enlace: "HTML/Disneyplus.html", 
  enlaceProgramacion: "Disneyplus.html", 
  inicio: "2025-09-21T11:00:00", 
  fin: "2025-09-21T13:00:00", 
  orden: 11 
},

{ 
  titulo: "Inter Milán vs Sassuolo - Serie A", 
  tituloDestacado: "Ver Inter Milán vs Sassuolo - Serie A En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png", 
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg", 
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg", 
  enlace: "HTML/Disneyplus.html", 
  enlaceProgramacion: "Disneyplus.html", 
  inicio: "2025-09-21T13:45:00", 
  fin: "2025-09-21T15:45:00", 
  orden: 12 
},
{ 
  titulo: "Eintracht vs Union Berlin - Bundesliga", 
  tituloDestacado: "Ver Eintracht vs Union Berlin - Bundesliga En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg", 
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg", 
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg", 
  enlace: "HTML/Disneyplus.html", 
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-09-21T08:30:00", 
  fin: "2025-09-21T10:30:00", 
  orden: 13 
},

{ 
  titulo: "Bayer Leverkusen vs M'gladbach - Bundesliga",
  tituloDestacado: "Ver Bayer Leverkusen vs Borussia M'gladbach - Bundesliga En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg", 
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg", 
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg", 
  enlace: "HTML/Disneyplus.html", 
  enlaceProgramacion: "Disneyplus.html", 
  inicio: "2025-09-21T10:30:00", 
  fin: "2025-09-21T12:30:00", 
  orden: 14 
},

{ 
  titulo: "Borussia Dortmund vs VfL Wolfsburg - Bundesliga", 
  tituloDestacado: "Ver Borussia Dortmund vs VfL Wolfsburg - Bundesliga En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg", 
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg", 
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg", 
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-09-21T12:30:00", 
  fin: "2025-09-21T14:30:00", 
  orden: 15 
},
{ 
  titulo: "Mirassol vs Juventude - Brasileirão", 
  tituloDestacado: "Ver Mirassol vs Juventude - Brasileirão En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080", 
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg", 
  logoMini: "https://www.ceroacero.es/img/logos/competicoes/51_imgbank_d1_20250313102859.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg", 
  enlace: "HTML/PremiereBR.html", 
  enlaceProgramacion: "PremiereBR.html",
  enlacesExtra: ["PremiereBR.html", "destacada8.html"],
  inicio: "2025-09-21T14:00:00", 
  fin: "2025-09-21T16:00:00", 
  orden: 16 
},

{ 
  titulo: "Sport vs Corinthians - Brasileirão", 
  tituloDestacado: "Ver Sport vs Corinthians - Brasileirão En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080", 
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg", 
  logoMini: "https://www.ceroacero.es/img/logos/competicoes/51_imgbank_d1_20250313102859.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg", 
  enlace: "HTML/PremiereBR.html", 
  enlaceProgramacion: "PremiereBR.html",
  enlacesExtra: ["PremiereBR.html", "destacada8.html"], 
  inicio: "2025-09-21T15:30:00", 
  fin: "2025-09-21T17:30:00", 
  orden: 17 
},

{ 
  titulo: "Internacional vs Grêmio - Brasileirão", 
  tituloDestacado: "Ver Internacional vs Grêmio - Brasileirão En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080", 
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg", 
  logoMini: "https://www.ceroacero.es/img/logos/competicoes/51_imgbank_d1_20250313102859.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg", 
  enlace: "HTML/PremiereBR.html", 
  enlaceProgramacion: "PremiereBR.html", 
  enlacesExtra: ["PremiereBR.html", "destacada8.html"],
  inicio: "2025-09-21T15:30:00", 
  fin: "2025-09-21T17:30:00", 
  orden: 18 
},

{ 
  titulo: "Flamengo vs Vasco da Gama - Brasileirão", 
  tituloDestacado: "Ver Flamengo vs Vasco da Gama - Brasileirão En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080", 
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg", 
  logoMini: "https://www.ceroacero.es/img/logos/competicoes/51_imgbank_d1_20250313102859.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg", 
  enlace: "HTML/PremiereBR.html", 
  enlaceProgramacion: "PremiereBR.html",
  enlacesExtra: ["PremiereBR.html", "destacada8.html"],
  inicio: "2025-09-21T15:30:00", 
  fin: "2025-09-21T17:30:00", 
  orden: 19 
},

{ 
  titulo: "Santos vs São Paulo - Brasileirão", 
  tituloDestacado: "Ver Santos vs São Paulo - Brasileirão En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080", 
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg", 
  logoMini: "https://www.ceroacero.es/img/logos/competicoes/51_imgbank_d1_20250313102859.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg", 
  enlace: "HTML/PremiereBR.html", 
  enlaceProgramacion: "PremiereBR.html",
  enlacesExtra: ["PremiereBR.html", "destacada8.html"],
  inicio: "2025-09-21T18:30:00", 
  fin: "2025-09-21T20:30:00", 
  orden: 20 
},

{ 
  titulo: "Cruzeiro vs Bragantino - Brasileirão", 
  tituloDestacado: "Ver Cruzeiro vs Bragantino - Brasileirão En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080", 
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg", 
  logoMini: "https://www.ceroacero.es/img/logos/competicoes/51_imgbank_d1_20250313102859.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg", 
  enlace: "HTML/PremiereBR.html",
  enlaceProgramacion: "PremiereBR.html",
  enlacesExtra: ["PremiereBR.html", "destacada8.html"],
  inicio: "2025-09-21T18:30:00", 
  fin: "2025-09-21T20:30:00", 
  orden: 21 
},

{ 
  titulo: "Millonarios vs Fortaleza CEIF - Liga BetPlay", 
  tituloDestacado: "Ver Millonarios vs Fortaleza CEIF - Liga BetPlay En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp", 
  imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/bucaramanga-vs-once-caldas-finalizacion-2025.webp", 
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/2/21/Dimayor_Colombia_logo.svg", 
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s", 
  enlace: "HTML/Winplus.html", 
  enlaceProgramacion: "Winplus.html", 
  inicio: "2025-09-21T14:00:00", 
  fin: "2025-09-21T16:00:00", 
  orden: 24 
},

{ 
  titulo: "Unión Magdalena vs Nacional - Liga BetPlay", 
  tituloDestacado: "Ver Unión Magdalena vs Nacional - Liga BetPlay En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp", 
  imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/bucaramanga-vs-once-caldas-finalizacion-2025.webp", 
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/2/21/Dimayor_Colombia_logo.svg", 
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s", 
  enlace: "HTML/Winplus.html", 
  enlaceProgramacion: "Winplus.html", 
  inicio: "2025-09-21T16:10:00", 
  fin: "2025-09-21T18:10:00", 
  orden: 25 
},

{ 
  titulo: "Medellín vs Junior - Liga BetPlay",
  tituloDestacado: "Ver Independiente Medellín vs Junior - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://cdn.clarosports.com/clarosports/2024/07/dimjun-131626-1024x576.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/2/21/Dimayor_Colombia_logo.svg", 
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s", 
  enlace: "HTML/Winplus.html", 
  enlaceProgramacion: "Winplus.html",
  destacado: true,
  fijarComoDestacado: true,
  inicio: "2025-09-21T18:20:00", 
  fin: "2025-09-21T20:20:00", 
  orden: 26 
},

{ 
  titulo: "Boyacá Chicó vs Deportivo Pereira - Liga BetPlay", 
  tituloDestacado: "Ver Boyacá Chicó vs Deportivo Pereira - Liga BetPlay En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp", 
  imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/bucaramanga-vs-once-caldas-finalizacion-2025.webp", 
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/2/21/Dimayor_Colombia_logo.svg", 
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s", 
  enlace: "HTML/Winplus.html", 
  enlaceProgramacion: "Winplus.html", 
  inicio: "2025-09-21T20:30:00", 
  fin: "2025-09-21T22:30:00", 
  orden: 27 
},
{ 
  titulo: "Independiente vs San Lorenzo - Liga Argentina", 
  tituloDestacado: "Ver Independiente vs San Lorenzo - Liga Profesional Argentina AFA En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg", 
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg", 
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png", 
  enlace: "HTML/tntsportsa.html",
  enlaceProgramacion: "tntsportsa.html", 
  inicio: "2025-09-21T12:30:00", 
  fin: "2025-09-21T14:30:00", 
  orden: 40 
},

{ 
  titulo: "Godoy Cruz vs Instituto - Liga Argentina", 
  tituloDestacado: "Ver Godoy Cruz vs Instituto - Liga Profesional Argentina AFA En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg", 
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg", 
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png", 
  enlace: "HTML/ESPNPremium.html", 
  enlaceProgramacion: "ESPNPremium.html", 
  inicio: "2025-09-21T14:45:00", 
  fin: "2025-09-21T16:45:00", 
  orden: 41 
},

{ 
  titulo: "Argentinos vs Banfield - Liga Argentina", 
  tituloDestacado: "Ver Argentinos vs Banfield - Liga Profesional Argentina AFA En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg", 
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg", 
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png", 
  enlace: "HTML/tntsportsa.html",
  enlaceProgramacion: "tntsportsa.html",
  inicio: "2025-09-21T17:00:00", 
  fin: "2025-09-21T19:00:00", 
  orden: 42 
},

{ 
  titulo: "Central vs Talleres - Liga Argentina", 
  tituloDestacado: "Ver Central vs Talleres - Liga Profesional Argentina AFA En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg", 
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg", 
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png", 
  enlace: "HTML/ESPNPremium.html", 
  enlaceProgramacion: "ESPNPremium.html", 
  inicio: "2025-09-21T17:00:00", 
  fin: "2025-09-21T19:00:00", 
  orden: 43 
},

{ 
  titulo: "Boca Jrs vs Central Córdoba - Liga Argentina",
  tituloDestacado: "Ver Boca vs Central Córdoba de Santiago del Estero - Liga Profesional Argentina AFA En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg", 
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg", 
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png", 
  enlace: "HTML/ESPNPremium.html", 
  enlaceProgramacion: "ESPNPremium.html", 
  inicio: "2025-09-21T19:15:00", 
  fin: "2025-09-21T21:15:00", 
  orden: 44 
},
{ 
  titulo: "AS Monaco vs FC Metz - Ligue 1",
  tituloDestacado: "Ver Monaco vs Metz - Ligue 1 En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://i.ibb.co/S4Zffw8f/Ligue1.png", 
  imagenDestacada: "https://images.fasttv.prod.yospace.ai/images/1_FastTV/Leagues_Visual/Ligue_1/liga_1_banner.webp", 
  logoMini: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiu12AwR6MfHy54nNO3BK_dHCx_hyphenhyphenVBI1k-UZJF1s2Ydm1y2KZiOOnl7eeDbF6qt4N55mkGQHPjp4huawQw3YTv6-X8dD4tulyubV4l-eQJYqFm_RblFpjUWmGpn0Q-rYFifE8eT1xzsgnxjHqlcO5ZZUdVetrilcf3sPifE1pUqdW1YbFpi-K2F7blh_k/s512/Ligue%201%20McDonald's%20.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png", 
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html", 
  inicio: "2025-09-21T10:15:00", 
  fin: "2025-09-21T12:15:00", 
  orden: 1 
},

{ 
  titulo: "Marseille vs Paris Saint-Germain - Ligue 1", 
  tituloDestacado: "Ver Marseille vs Paris Saint-Germain - Ligue 1 En Vivo", 
  descripcion: "Transmisión en vivo", 
  imagen: "https://i.ibb.co/S4Zffw8f/Ligue1.png", 
  imagenDestacada: "https://images.fasttv.prod.yospace.ai/images/1_FastTV/Leagues_Visual/Ligue_1/liga_1_banner.webp", 
  logoMini: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiu12AwR6MfHy54nNO3BK_dHCx_hyphenhyphenVBI1k-UZJF1s2Ydm1y2KZiOOnl7eeDbF6qt4N55mkGQHPjp4huawQw3YTv6-X8dD4tulyubV4l-eQJYqFm_RblFpjUWmGpn0Q-rYFifE8eT1xzsgnxjHqlcO5ZZUdVetrilcf3sPifE1pUqdW1YbFpi-K2F7blh_k/s512/Ligue%201%20McDonald's%20.png", 
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png", 
  enlace: "HTML/Disneyplus.html", 
  enlaceProgramacion: "Disneyplus.html", 
  inicio: "2025-09-21T13:45:00", 
  fin: "2025-09-21T15:45:00", 
  orden: 2 
},

// Eventos 22-09-2025
{
  titulo: "Nápoles Vs Calcio Pisa 1909 - Serie A",
  tituloDestacado: "Ver Nápoles Vs Pisa - Serie A En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png",
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg",
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-09-22T13:45:00",
  fin: "2025-09-22T15:45:00",
  orden: 1
},

{
  titulo: "Sp. Portugal Vs Moreirense - Primeira Liga",
  tituloDestacado: "Ver Sp. Portugal Vs Moreirense - Primeira Liga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://1000logos.net/wp-content/uploads/2022/01/Portuguese-Primeira-Liga-logo.jpg",
  imagenDestacada: "https://1000logos.net/wp-content/uploads/2022/01/Portuguese-Primeira-Liga-logo.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/5/5a/S%C3%ADmbolo_da_Liga_Portuguesa_de_Futebol_Profissional.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1200px-Flag_of_Portugal.svg.png",
  enlace: "HTML/GolTV.html",
  enlaceProgramacion: "GolTV.html",
  inicio: "2025-09-22T14:15:00",
  fin: "2025-09-22T16:15:00",
  orden: 2
},

{
  titulo: "Estudiantes Vs Defensa - Liga Argentina",
  tituloDestacado: "Ver Estudiantes Vs Defensa - Liga Profesional Argentina En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPNPremium.html",
  enlaceProgramacion: "ESPNPremium.html",
  inicio: "2025-09-22T17:00:00",
  fin: "2025-09-22T19:00:00",
  orden: 3
},
{
  titulo: "Belgrano Vs Newell's - Liga Argentina",
  tituloDestacado: "Ver Belgrano Vs Newell's - Liga Profesional Argentina En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPNPremium.html",
  enlaceProgramacion: "ESPNPremium.html",
  inicio: "2025-09-22T19:00:00",
  fin: "2025-09-22T21:00:00",
  orden: 4
},

// Eventos WWE, AEW, AAA
{
titulo: "WWE Monday Night Raw 23 de junio de 2025",
tituloDestacado: "Ver WWE Monday Night Raw En Vivo",
descripcion: "Transmisión en vivo.",
imagen: "https://www.wrestleview.com/wp-content/uploads/2025/06/wwe-raw-2025-logo-red.jpg",
imagenDestacada: "../IMAGENES/RAWPoster.jpg", //../IMAGENES/RAWPoster.jpg
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/WWE_RAW_Logo_2025.svg/1171px-WWE_RAW_Logo_2025.svg.png",// <-- nuevo campo
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/WWE_Logo.svg/2243px-WWE_Logo.svg.png",
enlace: "HTML/destacada2.html",
enlaceProgramacion: "destacada2.html",
disponible: true,
destacado: true,
fijarComoDestacado: true,
orden: 7,
inicio: "2025-06-16T18:00:00",
fin: "2025-06-16T22:00:00"
},
{
titulo: "WWE NXT 17 de junio de 2025",
tituloDestacado: "Ver WWE NXT En Vivo",
descripcion: "Transmisión en vivo.",
imagen: "https://img.solowrestling.com/images/140/140803-wwe-nxt.jpg",
imagenDestacada: "https://catch-newz.com/images/2024/12/06/wwe-nxt-10-decembre-2024-quelle-heure-chaine-voir-show-direct.jpg", //https://catch-newz.com/images/2024/12/06/wwe-nxt-10-decembre-2024-quelle-heure-chaine-voir-show-direct.jpg
logoMini: "https://www.wwe.com/f/styles/wwe_large/public/all/2024/10/NXT-Rebrand-Logo--4d733c5f59ea0a316e1f6b8877fafd29.png",// <-- nuevo campo
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/WWE_Logo.svg/2243px-WWE_Logo.svg.png",
enlace: "HTML/destacada2.html",
enlaceProgramacion: "destacada2.html",
destacado: true,
fijarComoDestacado: true,
inicio: "2025-06-17T19:00",
fin: "2025-06-17T22:00",
orden: 8
},
{
titulo: "AEW Dynamite 18 de junio de 2025",
tituloDestacado: "Ver AEW Dynamite En Vivo",
descripcion: "Transmisión en vivo.",
imagen: "https://www.postwrestling.com/wp-content/uploads/2025/02/GjwV-N6XgAAUTTg.jpg",
imagenDestacada: "https://i0.wp.com/wrestlenomics.com/wp-content/uploads/2025/03/wrestletix-aew-dynamite-2024.png?fit=1280%2C720&ssl=1", //https://i0.wp.com/wrestlenomics.com/wp-content/uploads/2025/03/wrestletix-aew-dynamite-2024.png?fit=1280%2C720&ssl=1
logoMini: "https://i0.wp.com/wrestlenomics.com/wp-content/uploads/2025/03/aew-dynamite-light-background.png?w=1100&ssl=1",// <-- nuevo campo
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/AEW_Logo_%28simplified%29.svg/2560px-AEW_Logo_%28simplified%29.svg.png",
enlace: "HTML/FoxSportsPremium.html",
enlaceProgramacion: "FoxSportsPremium.html",
destacado: true,
fijarComoDestacado: true,
orden: 9,
inicio: "2025-06-18T19:00:00",
fin: "2025-06-18T22:00:00"
},
{
titulo: "AEW Collision 21 de junio de 2025",
tituloDestacado: "AEW Collision En Vivo",
descripcion: "Transmisión en vivo.",
imagen: "https://cdn.f4wonline.com/wp-content/uploads/2024/01/aew-collision-logo.png",
imagenDestacada: "https://www.wrestlezone.com/wp-content/uploads/sites/8/2025/05/AEW-Collision-2025.jpg?resize=1200,630", //https://www.wrestlezone.com/wp-content/uploads/sites/8/2025/05/AEW-Collision-2025.jpg?resize=1200,630
logoMini: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/be74b3f4-088f-4981-a2fa-c8b64335dc92/dj8y2rj-eba68c82-14d4-4b67-b505-dc593d98cf7c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JlNzRiM2Y0LTA4OGYtNDk4MS1hMmZhLWM4YjY0MzM1ZGM5MlwvZGo4eTJyai1lYmE2OGM4Mi0xNGQ0LTRiNjctYjUwNS1kYzU5M2Q5OGNmN2MucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QBmr4uaThsH3TIFls57u6JELRXe-rmO4HAGTH9xpO-0",// <-- nuevo campo
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/AEW_Logo_%28simplified%29.svg/2560px-AEW_Logo_%28simplified%29.svg.png",
enlace: "HTML/TNTUSA.html",
enlaceProgramacion: "TNTUSA.html",
destacado: true,
fijarComoDestacado: true,
orden: 11,
inicio: "2025-06-21T19:00:00",
fin: "2025-06-21T22:00:00"
},
{
titulo: "TNA iMPACT! 10 de julio de 2025",
tituloDestacado: "Ver TNA iMPACT! en Vivo",
descripcion: "Transmisión en vivo.",
imagen: "https://i.ytimg.com/vi/EAjdKhT9GZI/maxresdefault.jpg",
imagenDestacada: "https://image.discovery.indazn.com/ca/v2/ca/image?id=001eaf75-0803-49b9-a562-e0b5c4a3decb&quality=70", //https://image.discovery.indazn.com/ca/v2/ca/image?id=001eaf75-0803-49b9-a562-e0b5c4a3decb&quality=70
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/TNA_Wrestling_%282024%29_Logo.svg/1024px-TNA_Wrestling_%282024%29_Logo.svg.png",// <-- nuevo campo
icono: "https://i.ibb.co/67HfKZfn/58a1fac0-3dd3-45f1-94bb-99752959c59c.png",
enlace: "https://www.youtube.com/watch?v=rr_4EFkQrww",
enlaceProgramacion: "https://www.youtube.com/watch?v=rr_4EFkQrww",
destacado: true,
fijarComoDestacado: true,
orden: 10,
inicio: "2025-07-10T19:00:00",
fin: "2025-07-10T21:00:00"
},
{
titulo: "WWE SmackDown 20 de junio de 2025",
tituloDestacado: "Ver WWE SmackDown En Vivo",
descripcion: "Transmisión en vivo.",
imagen: "https://media.zenfs.com/en/wrestle_zone_910/a8f5b75fb750215d2a8d5b458583b3f9",
imagenDestacada: "../IMAGENES/SDPoster.jpg", //../IMAGENES/SDPoster.jpg
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/WWE_SmackDown_%282024%29_Logo.svg/1088px-WWE_SmackDown_%282024%29_Logo.svg.png",// <-- nuevo campo
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/WWE_Logo.svg/2243px-WWE_Logo.svg.png",
enlace: "HTML/destacada2.html",
enlaceProgramacion: "destacada2.html",
destacado: true,
fijarComoDestacado: true,
orden: 10,
inicio: "2025-06-20T19:00:00",
fin: "2025-06-20T21:00:00"
},

// WWE Evento 12 de septiembre
{
titulo: "Worlds Collide II - AAA / WWE",
tituloDestacado: "Ver Worlds Collide II En Vivo",
descripcion: "Transmisión en vivo del evento WWE x AAA Worlds Collide II.",
imagen: "https://corporate.wwe.com/f/inline-images/WWE_AAA_Worlds_Collide_Logo.jpeg",
imagenDestacada: "https://www.wwe.com/f/styles/wwe_16_9_xl_r/public/2025/09/20250818_WorldCollide_LV_VIkingoDom_16x9_Date_0.jpg",
logoMini: "https://www.wwe.com/f/styles/wwe_show_logo_med/public/2025/08/WWE_AAA_Worlds_Collide_Logo_2025.png",
icono: "https://www.wwe.com/f/styles/wwe_show_logo_med/public/2025/08/WWE_AAA_Worlds_Collide_Logo_2025.png",
enlace: "HTML/CanalLuchaLibre.html",
enlaceProgramacion: "CanalLuchaLibre.html",
destacado: true,
fijarComoDestacado: true,
inicio: "2025-09-12T21:00:00",
fin: "2025-09-12T23:30:00",
orden: 1
},

// Eventos - 20 de septiembre
{
  titulo: "WWE Wrestlepalooza - 20 septiembre 2025",
  tituloDestacado: "Ver Wrestlepalooza 2025 En Vivo",
  descripcion: "Sábado 20 de septiembre",
  imagen: "https://www.wwe.com/f/styles/wwe_16_9_l/public/2025/08/CS-052365_Wrestlepalooza_Logo-Only_1920x1080.jpg",
  imagenDestacada: "https://www.wwe.com/f/styles/wwe_16_9_xl_r/public/2025/09/20250915_Wrestlepalooza_CenaBrock_16x9_date.jpg",
  logoMini: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-252462,resizemode-75,msid-124013956/news/international/us/wwe-wrestlepalooza-2025-where-to-watch-start-time-price-full-match-card-and-free-streaming-details.jpg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/WWE_Logo.svg/2243px-WWE_Logo.svg.png",
  enlace: "HTML/destacada2.html",
  enlaceProgramacion: "destacada2.html",
  destacado: true,
  fijarComoDestacado: true,
  orden: 1,
  inicio: "2025-09-20T18:00:00",
  fin: "2025-09-20T22:00:00"
},
{
titulo: "AEW All Out - 20 septiembre 2025",
tituloDestacado: "Ver All Out 2025 En Vivo",
descripcion: "Sábado 20 de septiembre",
imagen: "https://combatemx.com/wp-content/uploads/2025/05/aew-all-out-2025.jpg?w=1024",
imagenDestacada: "https://static.wixstatic.com/media/815952_9c422a5b421f417695ba8b2d63a08719~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90/AEW-All-Out-Toronto-2025-X-1920x1080.jpg",
logoMini: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUtor91rBGahrThu9Mxees5CnznfbszzN_MfUkBmhlo9xxMfbHsXaexvObjDoW46kGMRJj26ilFjaJukccK4GYDVbRWklx3erKzEA80V7sRRIHjHmH8VE2Yf0DHY8AgAOfSywBulY97qn0sQUy4fUiRndhPhYLTO-fqH-RygtY0PBow9J2n9S2I0FVzTo/s899/AEW-All-Out-logo-v4.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/AEW_Logo_%28simplified%29.svg/2560px-AEW_Logo_%28simplified%29.svg.png",
enlace: "HTML/FoxSportsPremium.html",
enlaceProgramacion: "FoxSportsPremium.html",
destacado: true,
fijarComoDestacado: true,
orden: 2,
inicio: "2025-09-20T13:00:00",
fin: "2025-09-20T18:00:00"
},

// WWE Evento - 11 de octubre
{
titulo: "WWE Crown Jewel - 11 octubre 2025",
tituloDestacado: "Ver Crown Jewel 2025 En Vivo",
descripcion: "Sábado 11 de octubre",
imagen: "https://upload.wikimedia.org/wikipedia/en/d/d8/Crown_Jewel_2025_promotional_poster.jpg",
imagenDestacada: "https://www.voxcatch.fr/wp-content/uploads/2025/05/WWE-Crown-Jewel-2025.jpeg",
logoMini: "https://corporate.wwe.com/f/inline-images/CJ-Perth-2025-Logo.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/WWE_Logo.svg/2243px-WWE_Logo.svg.png",
enlace: "HTML/destacada2.html",
enlaceProgramacion: "destacada2.html",
destacado: true,
fijarComoDestacado: true,
orden: 16,
inicio: "2025-10-11T07:00:00",
fin: "2025-10-11T11:00:00"
},

// WWE Evento - 29 de noviembre
{
titulo: "WWE Survivor Series - 29 noviembre 2025",
tituloDestacado: "Ver Survivor Series 2025 En Vivo",
descripcion: "Sábado 29 de noviembre",
imagen: "https://preview.redd.it/my-survivor-series-2025-fanmade-poster-v0-efcvntjfavxe1.png?auto=webp&s=f06bed169ba7f549eb57b1f21accaccbcc6a1a95",
imagenDestacada: "https://preview.redd.it/my-survivor-series-2025-fanmade-poster-v0-efcvntjfavxe1.png?auto=webp&s=f06bed169ba7f549eb57b1f21accaccbcc6a1a95",
logoMini: "https://assets.primesport.com/prod/images/46088%20SurvivorSeries%20LOGO%202025.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/WWE_Logo.svg/2243px-WWE_Logo.svg.png",
enlace: "HTML/destacada2.html",
enlaceProgramacion: "destacada2.html",
destacado: true,
fijarComoDestacado: true,
orden: 17,
inicio: "2025-11-29T13:00:00",
fin: "2025-11-29T17:00:00"
}
];

// Lista de títulos a actualizar

// Lista de títulos para actualizar su fecha automáticamente

const titulosParaActualizar = [
  "WWE Monday Night Raw 23 de junio de 2025",
  "WWE NXT 17 de junio de 2025",
  "AEW Dynamite 18 de junio de 2025",
  "AEW Collision 21 de junio de 2025",
  "TNA iMPACT! 10 de julio de 2025",
  "WWE SmackDown 20 de junio de 2025"
];


function actualizarEventosPasadosEspecificos(eventos, titulosActualizar) {
  const ahora = new Date();
  eventos.forEach(evento => {
    if (!titulosActualizar.includes(evento.titulo)) return;

    let inicio = new Date(evento.inicio);
    let fin = new Date(evento.fin);

    while (fin.getTime() <= ahora.getTime()) {
      inicio = new Date(inicio.getTime() + 7 * 86400000);
      fin = new Date(fin.getTime() + 7 * 86400000);
    }

    evento.inicio = inicio.toISOString();
    evento.fin = fin.toISOString();

    const opcionesFecha = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Bogota' };
    const nuevaFecha = inicio.toLocaleDateString('es-CO', opcionesFecha);

    evento.titulo = evento.titulo.replace(/\d{1,2} de \w+ de \d{4}/i, nuevaFecha);

    if (evento.tituloDestacado) {
      const tieneFecha = /\d{1,2} de \w+ de \d{4}/i.test(evento.tituloDestacado);
      if (tieneFecha) {
        evento.tituloDestacado = evento.tituloDestacado.replace(/\d{1,2} de \w+ de \d{4}/i, nuevaFecha);
      } else {
        evento.tituloDestacado = evento.tituloDestacado.replace("En Vivo", `${nuevaFecha} En Vivo`);
      }
    }
  });
}

// =====================================================================
// Función para generar descripciones de fecha dinámicas (Hoy, Mañana, etc.)
// =====================================================================
/**
 * Genera una descripción de fecha dinámica (Hoy, Mañana, Ayer, o día de la semana y fecha).
 * @param {string} fechaInicioISO - La fecha de inicio del evento en formato ISO 8601 (e.g., "2025-06-20T11:00:00").
 * @returns {string} La descripción de la fecha formateada.
 */
  function obtenerDescripcionFecha(fechaInicioISO, fechaFinISO) {
      const ahora = new Date();
      const inicio = new Date(fechaInicioISO);
      const fin = fechaFinISO ? new Date(fechaFinISO) : null;

      // 🛑 Si el evento ya terminó
      if (fin && ahora > fin) {
          return "Finalizado";
      }

      // 🔴 Si está en vivo
      if (fin && ahora >= inicio && ahora <= fin) {
          return "Transmisión en vivo";
      }

      // ⏳ Aún no empieza
      const opcionesHora = { hour: 'numeric', minute: '2-digit', hour12: true };
      const horaFormateada = inicio.toLocaleTimeString(undefined, opcionesHora);

      const unDiaEnMs = 24 * 60 * 60 * 1000;
      const inicioSinHora = new Date(inicio);
      inicioSinHora.setHours(0, 0, 0, 0);
      const ahoraSinHora = new Date(ahora);
      ahoraSinHora.setHours(0, 0, 0, 0);

      const diffDias = Math.round((inicioSinHora - ahoraSinHora) / unDiaEnMs);

      if (diffDias === 0) {
          return `Hoy ${horaFormateada}`;
      } else if (diffDias === 1) {
          return `Mañana ${horaFormateada}`;
      } else if (diffDias === -1) {
          return `Ayer ${horaFormateada}`;
      } else {
          const opcionesFechaCompleta = { weekday: 'short', day: 'numeric', month: 'numeric' };
          let fechaCompletaFormateada = inicio.toLocaleDateString(undefined, opcionesFechaCompleta).replace(/\./g, '');
          fechaCompletaFormateada = fechaCompletaFormateada.charAt(0).toUpperCase() + fechaCompletaFormateada.slice(1);
          return `${fechaCompletaFormateada} ${horaFormateada}`;
      }
  }

actualizarEventosPasadosEspecificos(eventos, titulosParaActualizar);

function actualizarEventoDestacadoAutomáticamente(eventos) {
  const ahora = new Date();

  // 1. Ver si hay un evento con destacado:true pero ya finalizó
  const eventoDestacadoActual = eventos.find(e => e.destacado);
  const estaFijado = eventoDestacadoActual?.fijarComoDestacado;
  const finalizado = eventoDestacadoActual && new Date(eventoDestacadoActual.fin) < ahora;

  // 2. Solo cambiar si no está fijado a mano
  if (eventoDestacadoActual && finalizado && !estaFijado) {
    eventoDestacadoActual.destacado = false;

    // Buscar evento en vivo
    const enVivo = eventos.find(e => {
      const ini = new Date(e.inicio);
      const fin = new Date(e.fin);
      return ini <= ahora && fin >= ahora;
    });

    // Si no hay en vivo, buscar el más próximo
    const proximo = eventos
      .filter(e => new Date(e.inicio) > ahora)
      .sort((a, b) => new Date(a.inicio) - new Date(b.inicio))[0];

    // Asignar como nuevo destacado
    const nuevoDestacado = enVivo || proximo;
    if (nuevoDestacado) nuevoDestacado.destacado = true;
  }
}

// Ordenar por orden

eventos.sort((a, b) => a.orden - b.orden);

document.addEventListener("DOMContentLoaded", () => {
  const rutaActual = window.location.pathname;
  const nombreArchivo = rutaActual.substring(rutaActual.lastIndexOf("/") + 1);


// SI EXISTE EL CONTENEDOR DE EVENTOS, RENDERIZAMOS LAS TARJETAS
const contenedorPrincipal = document.getElementById("contenedor-eventos");

if (contenedorPrincipal) {
  const ahora = new Date();
  const eventosFutbol = [];
  const eventosLucha = [];
  const eventosOtros = [];

  eventos.forEach((evento, index) => {
    const inicio = new Date(evento.inicio);
    const diferenciaHoras = (inicio - ahora) / 3600000;

    const eventoConIndice = { ...evento, index };
    const tituloLower = evento.titulo.toLowerCase();

    const palabrasFutbol = [
      "mundial de clubes",
      "liga",
      "uefa europa league",
      "uefa champions league",
      "betplay",
      "copa oro",
      "eliminatorias",
      "copa libertadores",
      "copa sudamericana",
      "conference",
      "league",
      "futbol",
      "copa",
      "mundial"
    ];

    const contienePalabraFutbol = palabrasFutbol.some(p => tituloLower.includes(p));
    const esFutbol = contienePalabraFutbol || (tituloLower.includes("vs") && !tituloLower.includes("wwe") && !tituloLower.includes("aew"));

    const esLucha = tituloLower.includes("wwe") || tituloLower.includes("aew") || tituloLower.includes("aaa") || tituloLower.includes("nxt") || tituloLower.includes("tna") || tituloLower.includes("lucha");

    if (esFutbol) {
      if (diferenciaHoras <= 24) {
        eventosFutbol.push(eventoConIndice);
      }
    } else if (esLucha) {
      eventosLucha.push(eventoConIndice);
    } else {
      eventosOtros.push(eventoConIndice);
    }
  });


  const crearSeccion = (tituloTexto, id) => {
    const seccionExistente = document.getElementById(id);
    if (seccionExistente) {
      seccionExistente.parentElement.remove(); // ❌ Remueve la sección completa, no solo el contenedor de tarjetas
    }

    const seccion = document.createElement("section");
    seccion.innerHTML = `
      <h3 class="text-white mt-4 text-center border-bottom border-secondary pb-2">${tituloTexto}</h3>
      <div id="${id}" class="d-flex gap-3 flex-wrap justify-content-center px-2 mt-3"></div>
    `;

    contenedorPrincipal.appendChild(seccion);
    return seccion.querySelector("div");
  };


  const renderEventos = (titulo, id, lista) => {
    if (lista.length === 0) return;
    const contenedor = crearSeccion(titulo, id);

    lista.forEach(({ index, ...evento }) => {
      const inicio = new Date(evento.inicio);
      const fin = new Date(evento.fin);
      const diferenciaMinutos = (inicio - ahora) / 60000;
      const enlaceCorrecto = desdeProgramacion && evento.enlaceProgramacion ? evento.enlaceProgramacion : evento.enlace;

      const card = document.createElement("div");
      card.className = "card h-100 bg-secondary text-white me-3";
      card.style.width = "18rem";

      const botonHTML =
        ahora > fin ? `<button class="btn btn-outline-light ver-evento" data-disponible="finalizado">Evento finalizado</button>` :
        diferenciaMinutos <= 30 ? `<a href="${enlaceCorrecto}" class="btn btn-light ver-evento" data-disponible="true">Ver Evento</a>` :
        `<button class="btn btn-outline-light ver-evento" data-disponible="false">Evento no disponible aún</button>`;

      card.innerHTML = `
        <img src="${evento.imagen}" class="card-img-top" alt="${evento.titulo}">
        <div class="card-body">
          <h5 class="card-title">${evento.titulo}</h5>
          <p class="card-text">${obtenerDescripcionFecha(evento.inicio, evento.fin)}</p>
          <p class="temporizador" data-inicio="${evento.inicio}" data-fin="${evento.fin}" data-index="${index}" style="color:white"></p>
          ${botonHTML}
        </div>
      `;

      contenedor.appendChild(card);
    });
  };

  const eventosEnVivoAhora = [];
  const eventosFutbolVisibles = [];
  const eventosLuchaVisibles = [];
  const eventosOtrosVisibles = [];

  eventos.forEach((evento, index) => {
  const inicio = new Date(evento.inicio);
  const fin = new Date(evento.fin);
  const ahora = new Date();
  const finMas15Min = new Date(fin.getTime() + 15 * 60 * 1000);
  const diferenciaHoras = (inicio - ahora) / 3600000;

  const eventoConIndice = { ...evento, index };
  const tituloLower = evento.titulo.toLowerCase();

  const contienePalabraFutbol = ["mundial", "vs", "liga", "copa", "betplay", "libertadores", "futbol", "uefa"]
    .some(p => tituloLower.includes(p));
  const esFutbol = contienePalabraFutbol || (tituloLower.includes("vs") && !tituloLower.includes("wwe") && !tituloLower.includes("aew"));

  const esLucha = tituloLower.includes("wwe") || tituloLower.includes("aew") || tituloLower.includes("aaa") || tituloLower.includes("nxt") || tituloLower.includes("tna") || tituloLower.includes("lucha");

  const estaEnVivoExtendido = ahora >= inicio && ahora <= finMas15Min;

  if (estaEnVivoExtendido) {
    eventosEnVivoAhora.push(eventoConIndice);
    return; // ⛔️ Muy importante: evita que caiga también en futbol, lucha u otros
  }

  if (esFutbol) {
    if (diferenciaHoras <= 24) {
      eventosFutbolVisibles.push(eventoConIndice);
    }
  } else if (esLucha) {
    if (diferenciaHoras <= 168) {
      eventosLuchaVisibles.push(eventoConIndice);
    }
  } else {
    eventosOtrosVisibles.push(eventoConIndice);
  }
});


  // Ordenar por fecha de inicio
  eventosFutbolVisibles.sort((a, b) => new Date(a.inicio) - new Date(b.inicio));
  eventosLuchaVisibles.sort((a, b) => new Date(a.inicio) - new Date(b.inicio));
  
  renderEventosEnVivo(eventosEnVivoAhora);
  if (eventosFutbolVisibles.length > 0) {
    renderEventos("PROGRAMACION FUTBOL", "futbol-eventos", eventosFutbolVisibles);
  }

  if (eventosLuchaVisibles.length > 0) {
    renderEventos("PROGRAMACION LUCHA LIBRE", "lucha-eventos", eventosLuchaVisibles);
  }

  if (eventosOtrosVisibles.length > 0) {
    renderEventos("Otros Eventos", "otros-eventos", eventosOtrosVisibles);
  }

}


  // TEMPORIZADORES
  iniciarTemporizadores();

  // EVENTOS EN VIVO
  mostrarProximoEventoEnVivo();
  mostrarEventosEnVivo();

  // CLICK EN BOTONES
  document.addEventListener("click", e => {
    const btn = e.target.closest(".ver-evento");
    const mensaje = document.getElementById("mensaje-evento");

    if (btn && (btn.dataset.disponible === "false" || btn.dataset.disponible === "finalizado")) {
      e.preventDefault();
      if (mensaje) {
        mensaje.textContent = btn.dataset.disponible === "false"
          ? "⏳ Evento aún no disponible"
          : "📴 Este evento ya finalizó";
        mensaje.classList.remove("d-none");
        setTimeout(() => mensaje.classList.add("d-none"), 3000);
      }
    }
  });
});
function iniciarTemporizadores() {
  const temporizadores = document.querySelectorAll(".temporizador");

  temporizadores.forEach(temp => {
    // evitar inicializar dos veces
    if (temp.dataset.timerId) return;

    const inicio = new Date(temp.dataset.inicio);
    const fin = new Date(temp.dataset.fin);
    const index = temp.dataset.index ? parseInt(temp.dataset.index) : null;

    const card = temp.closest(".card");
    const btn = card ? card.querySelector(".ver-evento") : null;
    const enlaceCorrecto =
      index !== null && eventos[index]
        ? (desdeProgramacion && eventos[index].enlaceProgramacion
            ? eventos[index].enlaceProgramacion
            : eventos[index].enlace)
        : null;

    function actualizar() {
      const ahora = new Date();
      const dif = inicio - ahora;

      // ✅ Evento finalizado
      if (ahora >= fin) {
        const minutosDesdeFin = (ahora - fin) / (1000 * 60);
        if (minutosDesdeFin >= 15) {
          if (temp.dataset.timerId) {
            clearInterval(Number(temp.dataset.timerId));
            delete temp.dataset.timerId;
          }
          if (card) card.remove();
        } else {
          temp.textContent = "Finalizado";
          if (card) {
            card.className = card.className.replace(/\bbg-\w+\b/g, "").trim();
            card.classList.add("bg-danger");

            const textoCard = card.querySelector(".card-text");
            if (textoCard) textoCard.textContent = "Evento finalizado";

            if (btn && btn.dataset.disponible !== "finalizado") {
              btn.outerHTML = `<button class="btn btn-outline-light ver-evento" data-disponible="finalizado">Evento finalizado</button>`;
            }
          }
        }
        return;
      }

      // 🔴 Evento en vivo
      if (dif <= 0) {
        temp.textContent = "En vivo";
        if (btn && enlaceCorrecto && btn.dataset.disponible !== "true") {
          btn.outerHTML = `<a href="${enlaceCorrecto}" class="btn btn-light ver-evento" data-disponible="true">Ver Evento</a>`;
        }
        return;
      }

      // ⏳ Evento aún no ha iniciado → mostrar solo tiempo
      const minutosRestantes = dif / (1000 * 60);
      if (minutosRestantes <= 30 && btn && btn.dataset.disponible === "false" && enlaceCorrecto) {
        btn.outerHTML = `<a href="${enlaceCorrecto}" class="btn btn-light ver-evento" data-disponible="true">Ver Evento</a>`;
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

      temp.textContent = minutosRestantes <= 5
        ? `${tiempoTexto} ¡Comienza pronto!`
        : tiempoTexto;
    }

    actualizar();
    const intervalId = setInterval(actualizar, 1000);
    temp.dataset.timerId = String(intervalId);
  });
}


// MOSTRAR PRÓXIMO EN VIVO
function mostrarProximoEventoEnVivo() {
  const ahora = new Date();
  const eventosFuturos = eventos.filter(e => new Date(e.inicio) > ahora);
  if (eventosFuturos.length === 0) return;

  eventosFuturos.sort((a, b) => new Date(a.inicio) - new Date(b.inicio));
  const proximoInicio = new Date(eventosFuturos[0].inicio);

  // Filtrar todos los que tengan exactamente la misma hora
  const proximosSimultaneos = eventosFuturos.filter(e => new Date(e.inicio).getTime() === proximoInicio.getTime());

  const contenedor = document.getElementById("proximo-evento");
  if (!contenedor) return;

  function actualizarTemporizador() {
    const ahora = new Date();
    const diff = proximoInicio - ahora;

    if (diff <= 0) {
      clearInterval(intervaloTemporizador);
      mostrarEventosEnVivo();
      mostrarProximoEventoEnVivo();
      return;
    }

    const dias = Math.floor(diff / 86400000);
    const horas = Math.floor((diff / 3600000) % 24);
    const minutos = Math.floor((diff / 60000) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    let tiempoTexto = "PRÓXIMO EN VIVO: ";
    if (dias > 0) tiempoTexto += `${dias}d `;
    if (horas > 0 || dias > 0) tiempoTexto += `${horas}h `;
    if (minutos > 0) tiempoTexto += `${minutos}m `;
    tiempoTexto += `${segundos}s`;

    // Mostrar todos los títulos que coinciden
    const titulos = proximosSimultaneos.map(e => e.titulo).join(" | ");
    contenedor.textContent = `${tiempoTexto} - ${titulos}`;
  }

  const intervaloTemporizador = setInterval(actualizarTemporizador, 1000);
  actualizarTemporizador();
}

// Agregar estilos dinámicamente desde JS
(function agregarEstilosEventosEnVivo() {
  const estilos = `
    .evento-en-vivo-uniforme {
      background: linear-gradient(to right, #0d2c36, #2a5063);
      padding: 12px 20px;
      border-radius: 10px;
      width: 100%;
      max-width: 600px;
      min-height: 60px;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }

    .evento-logo-mini {
      height: 38px;
      width: auto;
    }

    .evento-titulo {
      font-weight: bold;
      color: white;
      white-space: normal;
      word-break: break-word;
      font-size: 1rem;
      line-height: 1.2;
    }

    .evento-titulo-container {
      display: flex;
      align-items: center;
      gap: 10px;
      flex: 1;
    }
  `;

  const styleTag = document.createElement("style");
  styleTag.textContent = estilos;
  document.head.appendChild(styleTag);
})();

// FUNCIÓN para mostrar eventos en vivo con estilo uniforme
function mostrarEventosEnVivo() {
  const contenedor = document.getElementById("eventos-en-vivo");
  if (!contenedor) return;

  contenedor.innerHTML = "";
  const ahora = new Date();

  const eventosEnVivo = eventos.filter(evento => {
    const inicio = new Date(evento.inicio);
    const fin = new Date(evento.fin);
    return ahora >= inicio && ahora <= fin;
  });

  eventosEnVivo.forEach(evento => {
    const enlace = desdeProgramacion && evento.enlaceProgramacion ? evento.enlaceProgramacion : evento.enlace;

    const div = document.createElement("div");
    div.className = "evento-en-vivo-uniforme";

    div.innerHTML = `
      <div class="evento-titulo-container">
        ${evento.logoMini ? `<img src="${evento.logoMini}" alt="logo" class="evento-logo-mini">` : ""}
        <span class="evento-titulo">${evento.titulo}</span>
      </div>
      <a href="${enlace}" class="btn btn-danger btn-sm">Ver en Vivo</a>
    `;

    contenedor.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarProximoEventoEnVivo();
  mostrarEventosEnVivo();
  mostrarEventosHoy();

  // 🔁 Revisa los eventos en vivo cada 10 segundos por si alguno comienza en ese intervalo
  setInterval(mostrarEventosEnVivo, 10000);

  document.addEventListener("click", function (e) {
    const btn = e.target.closest(".ver-evento");
    const mensaje = document.getElementById("mensaje-evento");

    if (btn && btn.dataset.disponible === "false") {
      e.preventDefault();
      if (mensaje) {
        mensaje.textContent = "⏳ Evento aún no disponible";
        mensaje.classList.remove("d-none");
        setTimeout(() => mensaje.classList.add("d-none"), 3000);
      }
    }

    if (btn && btn.dataset.disponible === "finalizado") {
      e.preventDefault();
      if (mensaje) {
        mensaje.textContent = "📴 Este evento ya finalizó";
        mensaje.classList.remove("d-none");
        setTimeout(() => mensaje.classList.add("d-none"), 3000);
      }
    }
  });
}); // <-- Esta es la que cierra todo correctamente

// CAMBIO AUTOMÁTICO DE TÍTULO EN destacadas
document.addEventListener("DOMContentLoaded", () => {
  const rutaActual = window.location.pathname;
  const nombreArchivo = rutaActual.substring(rutaActual.lastIndexOf("/") + 1);

  // Archivos a los que se les aplica la lógica dinámica
  const archivosConTituloDinamico = [
    "destacada.html", "destacada2.html", "destacada3.html", "destacada4.html", "destacada5.html",
    "destacada6.html", "destacada7.html", "destacada8.html", "CanalLuchaLibre.html",
    "Winplus.html", "Winsports.html", "FoxMX2.html", "FoxMX.html", "Fox1Arg.html", "Fox2Arg.html",
    "Fox3Arg.html", "FoxSportsPremium.html", "tntsportsa.html", "tycsports.html", "tycsports2.html",
    "TUDNMX.html", "TUDNUSA.html", "Dsports.html", "Dsports2.html", "Dsportsplus.html",
    "Disneyplus1.html", "Disneyplus2.html", "Disneyplus3.html", "Disneyplus4.html",
    "Disneyplus5.html", "Disneyplus6.html", "Disneyplus7.html", "Disneyplus8.html",
    "Disneyplus9.html", "Disneyplus10.html", "Disneyplus11.html", "Disneyplus12.html",
    "Disneyplus13.html", "Disneyplus14.html", "Disneyplus15.html", "Disneyplus16.html",
    "ESPN.html", "ESPN2.html", "ESPN3.html", "ESPN4.html", "ESPN5.html", "ESPNplus.html", "ESPNplus2.html",
    "TVPublica.html", "espndeportesusa.html", "beinesp.html", "Telefe.html", "Paramountplus.html",
    "Aztecadeportes.html", "azteca7.html", "Caracoltv.html", "RCN.html", "ESPNSUR.html",
    "Paramountplus2.html", "DAZNLALIGA.html", "DAZNLALIGA2.html", "DAZN1.html", "DAZN2.html", 
    "DAZN3.html", "DAZN4.html","MovistarLaLiga.html", "MovistarLaLiga2.html", "PremiereBR.html",
    "TNTUSA.html", "TelemundoUSA.html", "UnivisionUSA.html", "GolTV.html", "Paramountplus3.html",
    "ESPNMX.html", "SporTV2.html", "ECDF.html", "ESPNSUR2.html", "ESPNBRASIL.html", "Paramountplus4.html",
    "EventosNetflix.html", "EventosNetflix2.html", "EventosMMA.html","Movistarplus.html",
    "MovistarDeportes.html", "MEGAChile.html", "SporTV.html", "ESPNARGENTINA1.html", 
    "ESPNARGENTINA2.html", "ESPNARGENTINA3.html", "ESPNPremium.html"
  ];

  if (!archivosConTituloDinamico.includes(nombreArchivo)) return;

  const h1 = document.querySelector(".titulo-evento");
  if (!h1) return;

  // 🔎 Buscar eventos que usen este archivo en enlace, enlaceProgramacion o enlacesExtra
  const eventosFiltrados = eventos.filter(evento =>
    evento.enlace.includes(nombreArchivo) ||
    evento.enlaceProgramacion.includes(nombreArchivo) ||
    (Array.isArray(evento.enlacesExtra) && evento.enlacesExtra.includes(nombreArchivo))
  );

  let tituloOriginal = h1.textContent;

  const actualizarTitulo = () => {
    const ahora = new Date();
    const eventosOrdenados = eventosFiltrados.sort((a, b) => new Date(a.inicio) - new Date(b.inicio));
    const enVivo = eventosOrdenados.find(e => new Date(e.inicio) <= ahora && new Date(e.fin) >= ahora);
    const proximo = eventosOrdenados.find(e => new Date(e.inicio) > ahora);

    let nuevoTitulo = "";

    if (enVivo) {
      nuevoTitulo = enVivo.titulo;
    } else if (proximo) {
      const diferenciaMinutos = (new Date(proximo.inicio) - ahora) / 60000;
      if (diferenciaMinutos <= 30) {
        nuevoTitulo = proximo.titulo;
      }
    }

    if (nuevoTitulo && h1.textContent !== nuevoTitulo) {
      h1.classList.remove("visible"); // fade-out
      setTimeout(() => {
        h1.textContent = nuevoTitulo;
        h1.classList.add("visible"); // fade-in
      }, 200);
    }

    // Restaurar si ya no aplica
    if (!nuevoTitulo && h1.textContent !== tituloOriginal) {
      h1.classList.remove("visible");
      setTimeout(() => {
        h1.textContent = tituloOriginal;
        h1.classList.add("visible");
      }, 200);
    }
  };

  setInterval(actualizarTitulo, 10000);
  actualizarTitulo();
});

const renderEventosEnVivo = (lista) => {
  const contenedorEventos = document.getElementById("contenedor-eventos");
  if (!contenedorEventos) return;

  // Si no hay eventos en vivo, eliminar la sección si ya existe y salir
  if (lista.length === 0) {
    const seccionExistente = document.getElementById("seccion-en-vivo");
    if (seccionExistente) seccionExistente.remove();
    return;
  }

  // Eliminar sección anterior si ya existe
  const seccionExistente = document.getElementById("seccion-en-vivo");
  if (seccionExistente) seccionExistente.remove();

  // Crear nueva sección
  const seccion = document.createElement("section");
  seccion.id = "seccion-en-vivo";
  seccion.classList.add("seccion-en-vivo-destacada");
  seccion.innerHTML = `
    <h3 class="text-white mt-4 text-center border-bottom border-white pb-2">EN VIVO</h3>
    <div id="eventos-en-vivo-cards" class="d-flex gap-3 flex-wrap justify-content-center px-2 mt-3"></div>
  `;

  contenedorEventos.prepend(seccion);

  const contenedor = seccion.querySelector("#eventos-en-vivo-cards");

  lista.forEach(({ index, ...evento }) => {
    const enlaceCorrecto = desdeProgramacion && evento.enlaceProgramacion ? evento.enlaceProgramacion : evento.enlace;
    const ahora = new Date();
    const inicio = new Date(evento.inicio);
    const fin = new Date(evento.fin);

    const card = document.createElement("div");
    card.className = "card h-100 bg-success text-white me-3";
    card.style.width = "18rem";

    card.innerHTML = `
      <img src="${evento.imagen}" class="card-img-top" alt="${evento.titulo}">
      <div class="card-body">
        <h5 class="card-title">${evento.titulo}</h5>
        <p class="card-text">Transmisión En Vivo</p>
        <p class="temporizador" data-inicio="${evento.inicio}" data-fin="${evento.fin}" data-index="${index}" style="color:white"></p>
        <a href="${enlaceCorrecto}" class="btn btn-light ver-evento" data-disponible="true">Ver Evento</a>
      </div>
    `;

    contenedor.appendChild(card);
  });
};