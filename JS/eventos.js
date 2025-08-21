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

// Eventos 2025-08-21
{
titulo: "Godoy Cruz Vs Mineiro - Copa Sudamericana",
tituloDestacado: "Ver Godoy Cruz Vs Atlético Mineiro - Copa Sudamericana En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://depor.com/resizer/v2/WCF6VQ6PIBBBZIDL2AHEEAQQRU.jpg?auth=86d5312511b220bc1daa30b6a184878431d8e9c0882ca68b7d351ca4fda71aba&width=1920&height=1080&quality=90&smart=true",
imagenDestacada: "https://cdn.conmebol.com/wp-content/uploads/2025/02/16_9.png",
logoMini: "https://cdn.conmebol.com/wp-content/uploads/2021/10/logo_conmebol_sudamericana.png",
icono: "https://cdn.conmebol.com/wp-content/uploads/2021/10/logo_conmebol_sudamericana.png",
enlace: "HTML/Dsports.html",
enlaceProgramacion: "Dsports.html",
inicio: "2025-08-21T17:00:00",
fin: "2025-08-21T19:30:00",
orden: 1
},
{
titulo: "LDU Quito Vs Botafogo - Copa Libertadores 2025",
tituloDestacado: "Ver LDU Quito Vs Botafogo - Copa Libertadores 2025 En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://imgmedia.libero.pe/652x365/libero/original/2025/08/20/68a66d919839fa79a701ea82.webp",
imagenDestacada: "https://cdn.conmebol.com/wp-content/uploads/2022/04/banner-libertadores.jpg",
logoMini: "https://r2.thesportsdb.com/images/media/league/badge/9shr931685425181.png",
icono: "https://www.zerozero.cl/img/logos/competicoes/58_imgbank_cl_20250220111837.png",
enlace: "HTML/beinespañol.htmll",
enlaceProgramacion: "beinespañol.html",
inicio: "2025-08-21T17:00:00",
fin: "2025-08-21T19:00:00",
orden: 1
},
{
titulo: "Lanús Vs Central - Copa Sudamericana",
tituloDestacado: "Ver Lanús Vs Central Córdoba - Copa Sudamericana En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://i.ibb.co/XfwRmQ0n/Miniatura-para-Youtube-Versus-Vs-Moderno-Azul.png",
imagenDestacada: "https://cdn.conmebol.com/wp-content/uploads/2025/02/16_9.png",
logoMini: "https://cdn.conmebol.com/wp-content/uploads/2021/10/logo_conmebol_sudamericana.png",
icono: "https://cdn.conmebol.com/wp-content/uploads/2021/10/logo_conmebol_sudamericana.png",
enlace: "HTML/destacada4.html",
enlaceProgramacion: "destacada4.html",
inicio: "2025-08-21T19:30:00",
fin: "2025-08-21T22:00:00",
orden: 2
},
{
titulo: "River Plate Vs Libertad - Copa Libertadores 2025",
tituloDestacado: "Ver River Plate Vs Libertad - Copa Libertadores 2025 En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://imgmedia.libero.pe/652x365/libero/original/2025/08/20/68a62ff67e73a0f8cd002ccd.webp",
imagenDestacada: "https://espnpressroom.com/latinamerica/files/2025/08/Vuelta_River_Libertad.jpg",
logoMini: "https://r2.thesportsdb.com/images/media/league/badge/9shr931685425181.png",
icono: "https://www.zerozero.cl/img/logos/competicoes/58_imgbank_cl_20250220111837.png",
enlace: "HTML/ESPN.html",
enlaceProgramacion: "ESPN.html",
destacado: true,
fijarComoDestacado: true,
inicio: "2025-08-21T19:30:00",
fin: "2025-08-21T21:30:00",
orden: 2
},
{
titulo: "Palmeiras Vs Universitario - Copa Libertadores 2025",
tituloDestacado: "Ver Palmeiras Vs Universitario - Copa Libertadores 2025 En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://depor.com/resizer/v2/URC2HK5VDJCQDF5MHN2WMGPJMQ.jpg?auth=b648e15e5d9d02fcc323717210ba54aaa5470354b01b2e2716df2bf25ce29ba8&width=1000&height=569&quality=90&smart=true",
imagenDestacada: "https://cdn.conmebol.com/wp-content/uploads/2022/04/banner-libertadores.jpg",
logoMini: "https://r2.thesportsdb.com/images/media/league/badge/9shr931685425181.png",
icono: "https://www.zerozero.cl/img/logos/competicoes/58_imgbank_cl_20250220111837.png",
enlace: "HTML/Disneyplus.html",
enlaceProgramacion: "Disneyplus.html",
inicio: "2025-08-21T19:30:00",
fin: "2025-08-21T21:30:00",
orden: 3
},

// Eventos 2025-08-22
{
titulo: "Bayern Munich Vs RB Leipzig - Bundesliga",
tituloDestacado: "Ver Bayern Munich Vs RB Leipzig - Bundesliga En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://blog.micasino.com/wp-content/uploads/2023/07/Bundesliga_-%C2%BFAcabara-mas-arriba-Bayern-Munich-o-Leipzig_-MiCasino.jpg",
imagenDestacada: "https://assets.bundesliga.com/video/jw/QV0iINed.jpg",
logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
enlace: "HTML/DAZN1.html",
enlaceProgramacion: "DAZN1.html",
destacado: true,
fijarComoDestacado: true,
inicio: "2025-08-22T13:30:00",
fin: "2025-08-22T15:30:00",
orden: 1
},
{
titulo: "Barracas Vs Defensa y Justicia - Liga Argentina", 
tituloDestacado: "Ver Barracas Central Vs Defensa y Justicia - Liga Profesional Argentina AFA En Vivo", 
descripcion: "Transmisión en vivo", 
imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg", 
imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg", 
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Logo_LPF_AFA.svg/1200px-Logo_LPF_AFA.svg.png", 
icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png", 
enlace: "HTML/tycsports2.html", 
enlaceProgramacion: "tycsports2.html", 
inicio: "2025-08-22T13:30:00", 
fin: "2025-08-22T15:20:00", 
orden: 2
},
{
titulo: "West Ham Vs Chelsea - Premier League",
tituloDestacado: "Ver West Ham Vs Chelsea - Premier League En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
enlace: "HTML/DAZN2.html",
enlaceProgramacion: "DAZN2.html",
destacado: true,
fijarComoDestacado: true,
inicio: "2025-08-22T14:00:00",
fin: "2025-08-22T16:00:00",
orden: 3
},
{
titulo: "Real Betis Vs Alavés - La Liga",
tituloDestacado: "Ver Betis Vs Alavés - La Liga En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
imagenDestacada: "https://statics-maker.llt-services.com/gir/images/2023/07/04/xlarge/ef962943-cd1e-4843-a19a-8c1b5b9e9abb.jpg",
logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
enlace: "HTML/DAZNLALIGA.html",
enlaceProgramacion: "DAZNLALIGA.html",
inicio: "2025-08-22T14:30:00",
fin: "2025-08-22T17:00:00",
orden: 4
},
{
titulo: "Tigre Vs Independiente Rivadavia - Liga Argentina", 
tituloDestacado: "Ver Tigre Vs Independiente Rivadavia - Liga Profesional Argentina AFA En Vivo", 
descripcion: "Transmisión en vivo", 
imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg", 
imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg", 
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Logo_LPF_AFA.svg/1200px-Logo_LPF_AFA.svg.png", 
icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png", 
enlace: "HTML/tycsports2.html", 
enlaceProgramacion: "tycsports2.html", 
inicio: "2025-08-22T18:00:00", 
fin: "2025-08-22T19:50:00", 
orden: 5
},
{
titulo: "Boyacá Chicó Vs Deportivo Cali - Liga BetPlay",
tituloDestacado: "Ver Boyacá Chicó Vs Deportivo Cali - Liga BetPlay En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/sorpresa-total-en-el-fpc-se-confirma-el-nuevo-club-que-jugara-en-la-a-desde-2026-foto-dimayor-y-escudoteca-1746629836.webp",
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
enlace: "HTML/Winplus.html",
enlaceProgramacion: "Winplus.html",
destacado: true,
fijarComoDestacado: true,
inicio: "2025-08-22T18:00:00",
fin: "2025-08-22T20:00:00",
orden: 6
},
{
titulo: "Llaneros Vs Pasto - Liga BetPlay",
tituloDestacado: "Ver Llaneros Vs Pasto - Liga BetPlay En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/sorpresa-total-en-el-fpc-se-confirma-el-nuevo-club-que-jugara-en-la-a-desde-2026-foto-dimayor-y-escudoteca-1746629836.webp",
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
enlace: "HTML/Winplus.html",
enlaceProgramacion: "Winplus.html",
destacado: true,
fijarComoDestacado: true,
inicio: "2025-08-22T20:10:00",
fin: "2025-08-22T22:10:00",
orden: 7
},

// Eventos 2025-08-23
{
titulo: "Man City Vs Tottenham - Premier League",
tituloDestacado: "Ver Manchester City Vs Tottenham - Premier League En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
imagenDestacada: "https://espnpressroom.com/latinamerica/files/2025/08/ESPN-Futbol-Premier-League-25-26-Manchester-City-v-Tottenham-Tune-In-16-9.jpg",
logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
enlace: "HTML/ESPN.html",
enlaceProgramacion: "ESPN.html",
destacado: true,
fijarComoDestacado: true,
inicio: "2025-08-23T06:30:00",
fin: "2025-08-23T08:30:00",
orden: 1
},
{
titulo: "Bayer Leverkusen Vs Hoffenheim - Bundesliga",
tituloDestacado: "Ver Bayer Leverkusen Vs Hoffenheim - Bundesliga En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
enlace: "HTML/DAZN2.html",
enlaceProgramacion: "DAZN2.html",
inicio: "2025-08-23T08:30:00",
fin: "2025-08-23T10:30:00",
orden: 1
},
{
titulo: "Bournemouth Vs Wolves - Premier League",
tituloDestacado: "Ver Bournemouth Vs Wolves - Premier League En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
enlace: "HTML/DAZN2.html",
enlaceProgramacion: "DAZN2.html",
inicio: "2025-08-23T09:00:00",
fin: "2025-08-23T11:00:00",
orden: 2
},
{
titulo: "Burnley Vs Sunderland - Premier League",
tituloDestacado: "Ver Burnley Vs Sunderland - Premier League En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
enlace: "HTML/DAZN2.html",
enlaceProgramacion: "DAZN2.html",
inicio: "2025-08-23T09:00:00",
fin: "2025-08-23T11:00:00",
orden: 3
},
{
titulo: "Brentford Vs Aston Villa - Premier League",
tituloDestacado: "Ver Brentford Vs Aston Villa - Premier League En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
enlace: "HTML/DAZN2.html",
enlaceProgramacion: "DAZN2.html",
inicio: "2025-08-23T09:00:00",
fin: "2025-08-23T11:00:00",
orden: 4
},
{
titulo: "Mallorca Vs Celta de Vigo - La Liga",
tituloDestacado: "Ver Mallorca Vs Celta de Vigo - La Liga En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
imagenDestacada: "https://statics-maker.llt-services.com/gir/images/2023/07/04/xlarge/ef962943-cd1e-4843-a19a-8c1b5b9e9abb.jpg",
logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
enlace: "HTML/DAZNLALIGA.html",
enlaceProgramacion: "DAZNLALIGA.html",
inicio: "2025-08-23T10:00:00",
fin: "2025-08-23T12:00:00",
orden: 5
},
{
titulo: "St. Pauli Vs Borussia Dortmund - Bundesliga",
tituloDestacado: "Ver St. Pauli Vs Borussia Dortmund - Bundesliga En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
enlace: "HTML/DAZN3.html",
enlaceProgramacion: "DAZN3.html",
destacado: false,
fijarComoDestacado: false,
inicio: "2025-08-23T11:30:00",
fin: "2025-08-23T13:30:00",
orden: 5
},
{
titulo: "Arsenal Vs Leeds - Premier League",
tituloDestacado: "Ver Arsenal Vs Leeds - Premier League En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
enlace: "HTML/DAZN2.html",
enlaceProgramacion: "DAZN2.html",
inicio: "2025-08-23T11:30:00",
fin: "2025-08-23T13:30:00",
orden: 6
},
{
titulo: "San Lorenzo Vs Instituto - Liga Argentina", 
tituloDestacado: "Ver San Lorenzo Vs Instituto (Córdoba) - Liga Profesional Argentina AFA En Vivo", 
descripcion: "Transmisión en vivo", 
imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg", 
imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg", 
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Logo_LPF_AFA.svg/1200px-Logo_LPF_AFA.svg.png", 
icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png", 
enlace: "HTML/tycsports2.html", 
enlaceProgramacion: "tycsports2.html", 
inicio: "2025-08-23T12:30:00", 
fin: "2025-08-23T14:20:00", 
orden: 7
},
{
titulo: "Atlético Madrid Vs Elche - La Liga",
tituloDestacado: "Ver Atlético Madrid Vs Elche - La Liga En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
imagenDestacada: "https://statics-maker.llt-services.com/gir/images/2023/07/04/xlarge/ef962943-cd1e-4843-a19a-8c1b5b9e9abb.jpg",
logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
enlace: "HTML/DAZNLALIGA.html",
enlaceProgramacion: "DAZNLALIGA.html",
inicio: "2025-08-23T12:30:00",
fin: "2025-08-23T14:30:00",
orden: 8
},
{
titulo: "Medellín Vs La Equidad - Liga BetPlay",
tituloDestacado: "Ver Medellín Vs La Equidad - Liga BetPlay En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/sorpresa-total-en-el-fpc-se-confirma-el-nuevo-club-que-jugara-en-la-a-desde-2026-foto-dimayor-y-escudoteca-1746629836.webp",
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
enlace: "HTML/Winplus.html",
enlaceProgramacion: "Winplus.html",
destacado: true,
fijarComoDestacado: true,
inicio: "2025-08-23T14:00:00",
fin: "2025-08-23T16:00:00",
orden: 9
},
{
titulo: "Levante Vs Barcelona - La Liga",
tituloDestacado: "Ver Levante Vs Barcelona - La Liga En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
imagenDestacada: "https://statics-maker.llt-services.com/gir/images/2023/07/04/xlarge/ef962943-cd1e-4843-a19a-8c1b5b9e9abb.jpg",
logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
enlace: "HTML/DAZNLALIGA.html",
enlaceProgramacion: "DAZNLALIGA.html",
inicio: "2025-08-23T14:30:00",
fin: "2025-08-23T17:00:00",
orden: 10
},
{
titulo: "Rosario Central Vs Newell's Old Boys - Liga Argentina", 
tituloDestacado: "Ver Rosario Central Vs Newell's Old Boys - Liga Profesional Argentina AFA En Vivo", 
descripcion: "Transmisión en vivo", 
imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg", 
imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg", 
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Logo_LPF_AFA.svg/1200px-Logo_LPF_AFA.svg.png", 
icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png", 
enlace: "HTML/tycsports2.html", 
enlaceProgramacion: "tycsports2.html", 
inicio: "2025-08-23T15:30:00", 
fin: "2025-08-23T17:20:00", 
orden: 11
},
{
titulo: "Envigado Vs Deportivo Pereira - Liga BetPlay",
tituloDestacado: "Ver Envigado Vs Deportivo Pereira - Liga BetPlay En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/sorpresa-total-en-el-fpc-se-confirma-el-nuevo-club-que-jugara-en-la-a-desde-2026-foto-dimayor-y-escudoteca-1746629836.webp",
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
enlace: "HTML/Winplus.html",
enlaceProgramacion: "Winplus.html",
destacado: true,
fijarComoDestacado: true,
inicio: "2025-08-23T16:10:00",
fin: "2025-08-23T18:10:00",
orden: 12
},
{
titulo: "Atlético Tucumán Vs Talleres - Liga Argentina", 
tituloDestacado: "Ver Atlético Tucumán Vs Talleres (Córdoba) - Liga Profesional Argentina AFA En Vivo", 
descripcion: "Transmisión en vivo", 
imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg", 
imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg", 
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Logo_LPF_AFA.svg/1200px-Logo_LPF_AFA.svg.png", 
icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png", 
enlace: "HTML/tycsports2.html", 
enlaceProgramacion: "tycsports2.html", 
inicio: "2025-08-23T18:00:00", 
fin: "2025-08-23T19:50:00", 
orden: 13
},
{
titulo: "San Martín Vs Gimnasia La Plata - Liga Argentina",
tituloDestacado: "Ver San Martín (San Juan) Vs Gimnasia La Plata - Liga Profesional Argentina AFA En Vivo", 
descripcion: "Transmisión en vivo", 
imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg", 
imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg", 
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Logo_LPF_AFA.svg/1200px-Logo_LPF_AFA.svg.png", 
icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png", 
enlace: "HTML/tycsports2.html", 
enlaceProgramacion: "tycsports2.html", 
inicio: "2025-08-23T18:00:00", 
fin: "2025-08-23T19:50:00", 
orden: 14
},
{
titulo: "Fortaleza Vs Santa Fe - Liga BetPlay",
tituloDestacado: "Ver Fortaleza Vs Santa Fe - Liga BetPlay En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/sorpresa-total-en-el-fpc-se-confirma-el-nuevo-club-que-jugara-en-la-a-desde-2026-foto-dimayor-y-escudoteca-1746629836.webp",
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
enlace: "HTML/Winplus.html",
enlaceProgramacion: "Winplus.html",
destacado: true,
fijarComoDestacado: true,
inicio: "2025-08-23T18:20:00",
fin: "2025-08-23T20:20:00",
orden: 15
},
{
  titulo: "DC United Vs Inter Miami - MLS",
  tituloDestacado: "Ver DC United Vs Inter Miami - MLS En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/zdJsHgj/MLSBanner.png",
  imagenDestacada: "https://cms.athleticsnyc.com/wp-content/uploads/2019/05/MLS_logo_sm.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/MLS_crest_logo_RGB_gradient.svg/1200px-MLS_crest_logo_RGB_gradient.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1280px-Flag_of_the_United_States.png",
  enlace: "HTML/DAZN1.html", 
  enlaceProgramacion: "DAZN1.html",
  destacado: true,
  fijarComoDestacado: true,
  inicio: "2025-08-23T18:30:00",
  fin: "2025-08-23T20:30:00",
  orden: 1
},
{
titulo: "Millonarios Vs Junior - Liga BetPlay",
tituloDestacado: "Ver Millonarios Vs Junior - Liga BetPlay En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/sorpresa-total-en-el-fpc-se-confirma-el-nuevo-club-que-jugara-en-la-a-desde-2026-foto-dimayor-y-escudoteca-1746629836.webp",
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
enlace: "HTML/Winplus.html",
enlaceProgramacion: "Winplus.html",
destacado: true,
fijarComoDestacado: true,
inicio: "2025-08-23T20:30:00",
fin: "2025-08-23T22:30:00",
orden: 16
},

// Eventos 2025-08-24
{
titulo: "Crystal Palace Vs Forest - Premier League",
tituloDestacado: "Ver Crystal Palace Vs Nottingham Forest - Premier League En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
enlace: "HTML/DAZN2.html",
enlaceProgramacion: "DAZN2.html",
inicio: "2025-08-24T08:00:00",
fin: "2025-08-24T10:00:00",
orden: 1
},
{
titulo: "Everton Vs Brighton - Premier League",
tituloDestacado: "Ver Everton Vs Brighton - Premier League En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
enlace: "HTML/DAZN2.html",
enlaceProgramacion: "DAZN2.html",
inicio: "2025-08-24T08:00:00",
fin: "2025-08-24T10:00:00",
orden: 2
},
{
titulo: "Osasuna Vs Valencia - La Liga",
tituloDestacado: "Ver Osasuna Vs Valencia - La Liga En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
imagenDestacada: "https://statics-maker.llt-services.com/gir/images/2023/07/04/xlarge/ef962943-cd1e-4843-a19a-8c1b5b9e9abb.jpg",
logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
enlace: "HTML/DAZNLALIGA.html",
enlaceProgramacion: "DAZNLALIGA.html",
inicio: "2025-08-24T10:00:00",
fin: "2025-08-24T12:00:00",
orden: 3
},
{
titulo: "Fulham Vs Manchester United - Premier League",
tituloDestacado: "Ver Fulham Vs Manchester United - Premier League En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
enlace: "HTML/DAZN2.html",
enlaceProgramacion: "DAZN2.html",
inicio: "2025-08-24T10:30:00",
fin: "2025-08-24T12:30:00",
orden: 4
},
{
titulo: "Unión (Santa Fe) Vs Huracán - Liga Argentina", 
tituloDestacado: "Ver Unión (Santa Fe) Vs Huracán - Liga Profesional Argentina AFA En Vivo", 
descripcion: "Transmisión en vivo", 
imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg", 
imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg", 
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Logo_LPF_AFA.svg/1200px-Logo_LPF_AFA.svg.png", 
icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png", 
enlace: "HTML/tycsports2.html", 
enlaceProgramacion: "tycsports2.html", 
inicio: "2025-08-24T12:00:00", 
fin: "2025-08-24T13:50:00", 
orden: 5
},
{
titulo: "Real Sociedad Vs Espanyol - La Liga",
tituloDestacado: "Ver Real Sociedad Vs Espanyol - La Liga En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
imagenDestacada: "https://statics-maker.llt-services.com/gir/images/2023/07/04/xlarge/ef962943-cd1e-4843-a19a-8c1b5b9e9abb.jpg",
logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
enlace: "HTML/DAZNLALIGA.html",
enlaceProgramacion: "DAZNLALIGA.html",
inicio: "2025-08-24T12:30:00",
fin: "2025-08-24T14:30:00",
orden: 6
},
{
titulo: "Villarreal Vs Girona FC - La Liga",
tituloDestacado: "Ver Villarreal Vs Girona - La Liga En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
imagenDestacada: "https://statics-maker.llt-services.com/gir/images/2023/07/04/xlarge/ef962943-cd1e-4843-a19a-8c1b5b9e9abb.jpg",
logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
enlace: "HTML/DAZNLALIGA.html",
enlaceProgramacion: "DAZNLALIGA.html",
inicio: "2025-08-24T12:30:00",
fin: "2025-08-24T14:30:00",
orden: 7
},
{
titulo: "Once Caldas Vs Tolima - Liga BetPlay",
tituloDestacado: "Ver Once Caldas Vs Tolima - Liga BetPlay En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/sorpresa-total-en-el-fpc-se-confirma-el-nuevo-club-que-jugara-en-la-a-desde-2026-foto-dimayor-y-escudoteca-1746629836.webp",
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
enlace: "HTML/Winplus.html",
enlaceProgramacion: "Winplus.html",
destacado: true,
fijarComoDestacado: true,
inicio: "2025-08-24T14:00:00",
fin: "2025-08-24T16:00:00",
orden: 8
},
{
titulo: "Argentinos Juniors Vs Racing - Liga Argentina",
tituloDestacado: "Ver Argentinos Juniors Vs Racing Club - Liga Profesional Argentina AFA En Vivo", 
descripcion: "Transmisión en vivo", 
imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg", 
imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg", 
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Logo_LPF_AFA.svg/1200px-Logo_LPF_AFA.svg.png", 
icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png", 
enlace: "HTML/tycsports2.html", 
enlaceProgramacion: "tycsports2.html", 
inicio: "2025-08-24T14:15:00", 
fin: "2025-08-24T16:05:00", 
orden: 9
},
{
titulo: "Real Oviedo Vs Real Madrid - La Liga",
tituloDestacado: "Ver Real Oviedo Vs Real Madrid - La Liga En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
imagenDestacada: "https://statics-maker.llt-services.com/gir/images/2023/07/04/xlarge/ef962943-cd1e-4843-a19a-8c1b5b9e9abb.jpg",
logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
enlace: "HTML/DAZNLALIGA.html",
enlaceProgramacion: "DAZNLALIGA.html",
inicio: "2025-08-24T14:30:00",
fin: "2025-08-24T17:00:00",
orden: 10
},
{
titulo: "Boca Juniors Vs Banfield - Liga Argentina", 
tituloDestacado: "Ver Boca Juniors Vs Banfield - Liga Profesional Argentina AFA En Vivo", 
descripcion: "Transmisión en vivo", 
imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg", 
imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg", 
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Logo_LPF_AFA.svg/1200px-Logo_LPF_AFA.svg.png", 
icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png", 
enlace: "HTML/tycsports2.html", 
enlaceProgramacion: "tycsports2.html", 
inicio: "2025-08-24T16:15:00", 
fin: "2025-08-24T18:05:00", 
orden: 11
},
{
titulo: "Unión Magdalena Vs Alianza - Liga BetPlay",
tituloDestacado: "Ver Unión Magdalena Vs Alianza - Liga BetPlay En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/sorpresa-total-en-el-fpc-se-confirma-el-nuevo-club-que-jugara-en-la-a-desde-2026-foto-dimayor-y-escudoteca-1746629836.webp",
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
enlace: "HTML/Winplus.html",
enlaceProgramacion: "Winplus.html",
destacado: true,
fijarComoDestacado: true,
inicio: "2025-08-24T16:10:00",
fin: "2025-08-24T18:10:00",
orden: 12
},
{
titulo: "América Vs Atlético Nacional - Liga BetPlay",
tituloDestacado: "Ver América Vs Atlético Nacional - Liga BetPlay En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/sorpresa-total-en-el-fpc-se-confirma-el-nuevo-club-que-jugara-en-la-a-desde-2026-foto-dimayor-y-escudoteca-1746629836.webp",
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
enlace: "HTML/Winplus.html",
enlaceProgramacion: "Winplus.html",
destacado: true,
fijarComoDestacado: true,
inicio: "2025-08-24T18:20:00",
fin: "2025-08-24T20:20:00",
orden: 13
},
{
titulo: "Independiente Vs Platense - Liga Argentina", 
tituloDestacado: "Ver Independiente Vs Platense - Liga Profesional Argentina AFA En Vivo", 
descripcion: "Transmisión en vivo", 
imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg", 
imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg", 
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Logo_LPF_AFA.svg/1200px-Logo_LPF_AFA.svg.png", 
icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png", 
enlace: "HTML/tycsports2.html", 
enlaceProgramacion: "tycsports2.html", 
inicio: "2025-08-24T18:30:00", 
fin: "2025-08-24T20:20:00", 
orden: 14
},
{
titulo: "Bucaramanga Vs Águilas Doradas - Liga BetPlay",
tituloDestacado: "Ver Bucaramanga Vs Águilas Doradas - Liga BetPlay En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/sorpresa-total-en-el-fpc-se-confirma-el-nuevo-club-que-jugara-en-la-a-desde-2026-foto-dimayor-y-escudoteca-1746629836.webp",
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
enlace: "HTML/Winplus.html",
enlaceProgramacion: "Winplus.html",
destacado: true,
fijarComoDestacado: true,
inicio: "2025-08-24T20:30:00",
fin: "2025-08-24T22:30:00",
orden: 15
},

// Eventos 2025-08-25
{
titulo: "Deportivo Riestra Vs Sarmiento - Liga Argentina", 
tituloDestacado: "Ver Deportivo Riestra Vs Sarmiento (Junín) - Liga Profesional Argentina AFA En Vivo", 
descripcion: "Transmisión en vivo", 
imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg", 
imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg", 
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Logo_LPF_AFA.svg/1200px-Logo_LPF_AFA.svg.png", 
icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png", 
enlace: "HTML/tycsports2.html", 
enlaceProgramacion: "tycsports2.html", 
inicio: "2025-08-25T13:00:00", 
fin: "2025-08-25T14:50:00", 
orden: 1
},
{
titulo: "Athletic Vs Rayo Vallecano - La Liga",
tituloDestacado: "Ver Athletic Vs Rayo Vallecano - La Liga En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
imagenDestacada: "https://statics-maker.llt-services.com/gir/images/2023/07/04/xlarge/ef962943-cd1e-4843-a19a-8c1b5b9e9abb.jpg",
logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
enlace: "HTML/DAZNLALIGA.html",
enlaceProgramacion: "DAZNLALIGA.html",
inicio: "2025-08-25T12:30:00",
fin: "2025-08-25T14:30:00",
orden: 2
},
{
titulo: "Godoy Cruz Vs Vélez Sarsfield - Liga Argentina", 
tituloDestacado: "Ver Godoy Cruz Vs Vélez Sarsfield - Liga Profesional Argentina AFA En Vivo", 
descripcion: "Transmisión en vivo", 
imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg", 
imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg", 
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Logo_LPF_AFA.svg/1200px-Logo_LPF_AFA.svg.png", 
icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png", 
enlace: "HTML/tycsports2.html", 
enlaceProgramacion: "tycsports2.html", 
inicio: "2025-08-25T15:00:00", 
fin: "2025-08-25T16:50:00", 
orden: 3
},
{
titulo: "Newcastle Vs Liverpool - Premier League",
tituloDestacado: "Ver Newcastle Vs Liverpool - Premier League En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
enlace: "HTML/DAZN2.html",
enlaceProgramacion: "DAZN2.html",
inicio: "2025-08-25T14:00:00",
fin: "2025-08-25T16:00:00",
orden: 4
},
{
titulo: "Sevilla Vs Getafe CF - La Liga",
tituloDestacado: "Ver Sevilla Vs Getafe - La Liga En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
imagenDestacada: "https://statics-maker.llt-services.com/gir/images/2023/07/04/xlarge/ef962943-cd1e-4843-a19a-8c1b5b9e9abb.jpg",
logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
enlace: "HTML/DAZNLALIGA.html",
enlaceProgramacion: "DAZNLALIGA.html",
inicio: "2025-08-25T14:30:00",
fin: "2025-08-25T17:00:00",
orden: 5
},
{
titulo: "Belgrano Vs Central Córdoba - Liga Argentina",
tituloDestacado: "Ver Belgrano (Córdoba) Vs Central Córdoba (Santiago del Estero) - Liga Profesional Argentina AFA En Vivo", 
descripcion: "Transmisión en vivo", 
imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg", 
imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg", 
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Logo_LPF_AFA.svg/1200px-Logo_LPF_AFA.svg.png", 
icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png", 
enlace: "HTML/tycsports2.html", 
enlaceProgramacion: "tycsports2.html", 
inicio: "2025-08-25T17:00:00", 
fin: "2025-08-25T18:50:00", 
orden: 6
},
{
titulo: "Estudiantes de La Plata Vs Aldosivi - Liga Argentina", 
tituloDestacado: "Ver Estudiantes de La Plata Vs Aldosivi - Liga Profesional Argentina AFA En Vivo", 
descripcion: "Transmisión en vivo", 
imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg", 
imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg", 
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Logo_LPF_AFA.svg/1200px-Logo_LPF_AFA.svg.png", 
icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png", 
enlace: "HTML/tycsports2.html", 
enlaceProgramacion: "tycsports2.html", 
inicio: "2025-08-25T17:15:00", 
fin: "2025-08-25T19:05:00", 
orden: 7
},
{
titulo: "Deportivo Cali Vs Boyacá Chicó - Liga BetPlay",
tituloDestacado: "Ver Deportivo Cali Vs Boyacá Chicó - Liga BetPlay - Liga BetPlay En Vivo",
descripcion: "Transmisión en vivo",
imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/sorpresa-total-en-el-fpc-se-confirma-el-nuevo-club-que-jugara-en-la-a-desde-2026-foto-dimayor-y-escudoteca-1746629836.webp",
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
enlace: "HTML/Winplus.html",
enlaceProgramacion: "Winplus.html",
destacado: true,
fijarComoDestacado: true,
inicio: "2025-08-25T18:00:00",
fin: "2025-08-25T20:00:00",
orden: 15
},
{
titulo: "Lanús Vs River Plate - Liga Argentina", 
tituloDestacado: "Ver Lanús Vs River Plate - Liga Profesional Argentina AFA En Vivo", 
descripcion: "Transmisión en vivo", 
imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg", 
imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg", 
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Logo_LPF_AFA.svg/1200px-Logo_LPF_AFA.svg.png", 
icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png", 
enlace: "HTML/tycsports2.html", 
enlaceProgramacion: "tycsports2.html", 
inicio: "2025-08-25T19:15:00",
fin: "2025-08-25T21:15:00",
orden: 8
},

// Eventos 2025-08-26
{
titulo: "Real Cartagena Vs Millonarios - Copa BetPlay",
tituloDestacado: "Ver Real Cartagena Vs Millonarios - Copa BetPlay 2025 En Vivo",
descripcion: "Play-off, Partido 2 de 2",
imagen: "https://www.kienyke.com/sites/default/files/styles/interna_contenido_s/public/2025-05/copa-betplay.jpg?itok=iPCoMYZw",
imagenDestacada: "https://www.365scores.com/es/news/wp-content/uploads/2023/08/Trofeo-Copa-BetPlay.jpg",
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
enlace: "HTML/Winplus.html",
enlaceProgramacion: "Winplus.html",
destacado: true,
fijarComoDestacado: true,
inicio: "2025-08-26T20:10:00",
fin: "2025-08-26T22:40:00",
orden: 1
},

// Eventos 2025-08-27
{
  titulo: "Inter Miami Vs Orlando City - Leagues Cup",
  tituloDestacado: "Ver Inter Miami Vs Orlando City Leagues Cup Semifinal En Vivo",
  descripcion: "Semifinal",
  imagen: "https://www.record.com.mx/sites/default/files/articulos/2023/08/02/mamintorl.jpg", 
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/RCRQXNEZKZDD5JXH2VCBO7IEEU.jpg", 
  logoMini: "https://i.ibb.co/FqV9h08Z/image-Photoroom.png", 
  icono: "https://i.ibb.co/FqV9h08Z/image-Photoroom.png", 
  enlace: "HTML/DAZN1.html", 
  enlaceProgramacion: "DAZN1.html",
  destacado: true,
  fijarComoDestacado: true,
  inicio: "2025-08-27T19:30:00",
  fin: "2025-08-27T21:30:00",
  orden: 2
},
// Eventos 2025-08-30
{
  titulo: "Inter Miami Vs Chicago Fire - MLS",
  tituloDestacado: "Ver Inter Miami Vs Chicago Fire En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/zdJsHgj/MLSBanner.png",
  imagenDestacada: "https://cms.athleticsnyc.com/wp-content/uploads/2019/05/MLS_logo_sm.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/MLS_crest_logo_RGB_gradient.svg/1200px-MLS_crest_logo_RGB_gradient.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1280px-Flag_of_the_United_States.png",
  enlace: "HTML/DAZN1.html", 
  enlaceProgramacion: "DAZN1.html",
  destacado: true,
  fijarComoDestacado: true,
  inicio: "2025-08-30T18:30:00",
  fin: "2025-08-30T20:30:00",
  orden: 3
},

// Eventos WWE, AEW, AAA
{
titulo: "WWE Monday Night Raw 23 de junio de 2025",
tituloDestacado: "Ver WWE Monday Night Raw En Vivo",
descripcion: "Transmisión en vivo.",
imagen: "https://www.wrestleview.com/wp-content/uploads/2025/06/wwe-raw-2025-logo-red.jpg",
imagenDestacada: "../IMAGENES/RAWPoster.jpg",
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/WWE_RAW_Logo_2025.svg/1171px-WWE_RAW_Logo_2025.svg.png",// <-- nuevo campo
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/WWE_Logo.svg/2243px-WWE_Logo.svg.png",
enlace: "HTML/destacada2.html",
enlaceProgramacion: "destacada2.html",
disponible: true,
destacado: true,
fijarComoDestacado: true,
orden: 7,
inicio: "2025-06-16T19:00:00",
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
enlace: "HTML/FoxMX2.html",
enlaceProgramacion: "FoxMX2.html",
disponible: false,
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
orden: 11,
inicio: "2025-06-21T19:00:00",
fin: "2025-06-21T22:00:00"
},

{
titulo: "TNA iMPACT! 10 de julio de 2025",
tituloDestacado: "Ver TNA iMPACT! en Vivo",
descripcion: "Transmisión en vivo.",
imagen: "https://i.ytimg.com/vi/EAjdKhT9GZI/maxresdefault.jpg",
imagenDestacada: "https://d1fcaprh3kb5t7.cloudfront.net/wp-content/uploads/2025/08/06145246/GxrIw74XEAEAALU.jpeg", //https://image.discovery.indazn.com/ca/v2/ca/image?id=001eaf75-0803-49b9-a562-e0b5c4a3decb&quality=70
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
imagenDestacada: "https://www.wwe.com/f/styles/wwe_16_9_xl_r/public/2025/08/20250811_SD_Match_DrewMcIntyre_16x9_Tonight.jpg", //../IMAGENES/SDPoster.jpg
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


// WWE Evento - 31 de agosto
{
titulo: "WWE Clash in Paris 31 de agosto 2025",
tituloDestacado: "Ver WWE Clash in Paris 2025 En Vivo",
descripcion: "Transmisión en vivo.",
imagen: "https://dosdossolodos.com/wp-content/uploads/2025/08/20250811_Clash_4way_16x9_date.jpg",
imagenDestacada: "https://www.wwe.com/f/styles/wwe_16_9_xl/public/2025/08/20250808_Clash_CenaLogan_16x9_Date.jpg",
logoMini: "https://www.wwe.com/f/styles/og_image/public/all/2025/01/Clash_In_Paris_Logo_2025_Stacked_(2)--1ec02699291e9a05e1378e949bb91061.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/WWE_Logo.svg/2243px-WWE_Logo.svg.png",
enlace: "HTML/destacada2.html",
enlaceProgramacion: "destacada2.html",
destacado: true,
fijarComoDestacado: true,
orden: 15,
inicio: "2025-08-31T19:00:00",
fin: "2025-08-31T22:00:00"
},

// AEW Evento - 24 de agosto
{
titulo: "AEW x NJPW: Forbidden Door 2025",
tituloDestacado: "Ver Forbidden Door 2025 En Vivo",
descripcion: "Domingo 24 de agosto",
imagen: "https://static.wixstatic.com/media/815952_baf709458d0f4deb8f8b81135e86ba95~mv2.jpg/v1/fill/w_600,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/815952_baf709458d0f4deb8f8b81135e86ba95~mv2.jpg",
imagenDestacada: "https://www.theo2.co.uk/assets/img/AEW-Forbidden-Door-1920x1080-Event-Listing-23af58ac3c.jpg",
logoMini: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/60795a96-e724-4a8b-ae18-bc6bd97b96a1/df86gnx-252f6335-b49b-4150-b116-c87cd257e8f1.png/v1/fill/w_1280,h_1815/aew_x_njpw_forbidden_door_logo_render_png_by_santy981_df86gnx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxNSIsInBhdGgiOiJcL2ZcLzYwNzk1YTk2LWU3MjQtNGE4Yi1hZTE4LWJjNmJkOTdiOTZhMVwvZGY4NmdueC0yNTJmNjMzNS1iNDliLTQxNTAtYjExNi1jODdjZDI1N2U4ZjEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.nX3jfORUNDglyFM13E2SHihhVAdTdYN_SXXJIa6Q4sc",
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/AEW_Logo_%28simplified%29.svg/2560px-AEW_Logo_%28simplified%29.svg.png",
enlace: "HTML/FoxSportsPremium.html",
enlaceProgramacion: "FoxSportsPremium.html",
destacado: true,
fijarComoDestacado: true,
orden: 2,
inicio: "2025-08-24T12:00:00",
fin: "2025-08-24T16:00:00"
},

// WWE Evento 12 de septiembre
{
titulo: "Worlds Collide II - AAA / WWE",
tituloDestacado: "Ver Worlds Collide II En Vivo",
descripcion: "Transmisión en vivo del evento WWE x AAA Worlds Collide II.",
imagen: "https://corporate.wwe.com/f/inline-images/WWE_AAA_Worlds_Collide_Logo.jpeg",
imagenDestacada: "hhttps://corporate.wwe.com/f/inline-images/WWE_AAA_Worlds_Collide_Logo.jpeg",
logoMini: "https://www.wwe.com/f/styles/wwe_show_logo_med/public/2025/08/WWE_AAA_Worlds_Collide_Logo_2025.png",
icono: "https://www.wwe.com/f/styles/wwe_show_logo_med/public/2025/08/WWE_AAA_Worlds_Collide_Logo_2025.png",
enlace: "HTML/destacada2.html",
enlaceProgramacion: "destacada2.html",
destacado: true,
fijarComoDestacado: true,
inicio: "2025-09-12T21:00:00",
fin: "2025-09-12T23:30:00",
orden: 1
},

// AEW Evento - 20 de septiembre
{
titulo: "AEW All Out 2025",
tituloDestacado: "Ver All Out 2025 En Vivo",
descripcion: "Sábado 20 de septiembre",
imagen: "https://upload.wikimedia.org/wikipedia/en/3/31/All_Out_%282025%29_promotional_poster.jpg",
imagenDestacada: "https://staticg.sportskeeda.com/editor/2025/05/4f220-17477692964168-1920.jpg",
logoMini: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUtor91rBGahrThu9Mxees5CnznfbszzN_MfUkBmhlo9xxMfbHsXaexvObjDoW46kGMRJj26ilFjaJukccK4GYDVbRWklx3erKzEA80V7sRRIHjHmH8VE2Yf0DHY8AgAOfSywBulY97qn0sQUy4fUiRndhPhYLTO-fqH-RygtY0PBow9J2n9S2I0FVzTo/s899/AEW-All-Out-logo-v4.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/AEW_Logo_%28simplified%29.svg/2560px-AEW_Logo_%28simplified%29.svg.png",
enlace: "HTML/destacada3.html",
enlaceProgramacion: "destacada3.html",
destacado: true,
fijarComoDestacado: true,
orden: 4,
inicio: "2025-09-20T12:00:00",
fin: "2025-09-20T16:00:00"
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
    const inicio = new Date(temp.dataset.inicio);
    const fin = new Date(temp.dataset.fin);
    const index = parseInt(temp.dataset.index);
    const card = temp.closest(".card");
    const btn = card.querySelector(".ver-evento");
    const enlaceCorrecto = desdeProgramacion && eventos[index].enlaceProgramacion ? eventos[index].enlaceProgramacion : eventos[index].enlace;

 function actualizar() {
  const ahora = new Date();
  const dif = inicio - ahora;

  if (ahora >= fin) {
    const minutosDesdeFin = (ahora - fin) / (1000 * 60);

    if (minutosDesdeFin >= 15) {
      card.remove(); // Ocultar después de 15 min
    } else {
      temp.textContent = "Finalizado";

      // ✅ Cambiar fondo a rojo sin importar qué bg-* tenía
      card.className = card.className.replace(/\bbg-\w+\b/g, "").trim();
      card.classList.add("bg-danger");

      // ✅ Cambiar el texto de la descripción (fecha)
      const textoCard = card.querySelector(".card-text");
      if (textoCard) textoCard.textContent = "Evento finalizado";

      // ✅ Cambiar el botón si aún no es finalizado
      if (btn && btn.dataset.disponible !== "finalizado") {
        btn.outerHTML = `<button class="btn btn-outline-light ver-evento" data-disponible="finalizado">Evento finalizado</button>`;
      }
    }

    return;
  }

  // ⏳ Evento aún no ha iniciado
  if (dif <= 0) {
    temp.textContent = "En vivo";

    if (btn && btn.dataset.disponible !== "true") {
      btn.outerHTML = `<a href="${enlaceCorrecto}" class="btn btn-light ver-evento" data-disponible="true">Ver Evento</a>`;
    }

    return;
  }

  const minutosRestantes = dif / (1000 * 60);
  if (minutosRestantes <= 30 && btn && btn.dataset.disponible === "false") {
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
    setInterval(actualizar, 1000);
  }); // <-- Cierre del forEach
} // <-- Cierre de la función iniciarTemporizadores


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
  "Winplus.html", "Winsports.html", "FoxMX2.html", "FoxMX.html","Fox1Arg.html",
  "FoxSportsPremium.html", "tntsportsa.html", "tycsports.html", "tycsports2.html",
  "TUDNMX.html", "Dsports.html", "Dsports2.html", "Dsportsplus.html","Disneyplus.html",
  "ESPN.html", "ESPN2.html", "ESPN3.html", "ESPN4.html", "ESPN5.html",
  "ESPNPremium.html", "espndeportesusa.html","beinespañol.html",
  "Aztecadeportes.html", "azteca7.html", "Caracoltv.html", "RCN.html",
  "DAZNLALIGA.html", "DAZN1.html", "DAZN2.html", "DAZN3.html",
  "MovistarLaLiga.html", "TNTUSA.html", "TelemundoUSA.html", "ESPNPremium.html"
];

  if (!archivosConTituloDinamico.includes(nombreArchivo)) return;

  const h1 = document.querySelector(".titulo-evento");
  if (!h1) return;

  const eventosFiltrados = eventos.filter(evento =>
    evento.enlace.includes(nombreArchivo) || evento.enlaceProgramacion.includes(nombreArchivo)
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