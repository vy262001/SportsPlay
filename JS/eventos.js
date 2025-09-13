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

// Eventos 13-Septiembre-2025
{
  titulo: "VfL Wolfsburg Vs 1. FC Köln - Bundesliga",
  tituloDestacado: "Ver VfL Wolfsburg Vs 1. FC Köln - Bundesliga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
  enlace: "HTML/Disneyplus8.html",
  enlaceProgramacion: "Disneyplus8.html",
  inicio: "2025-09-13T08:30:00",
  fin: "2025-09-13T10:30:00",
  orden: 1
},
{
  titulo: "Union Berlin Vs TSG Hoffenheim - Bundesliga",
  tituloDestacado: "Ver Union Berlin Vs TSG Hoffenheim - Bundesliga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
  enlace: "HTML/Disneyplus6.html",
  enlaceProgramacion: "Disneyplus6.html",
  inicio: "2025-09-13T08:30:00",
  fin: "2025-09-13T10:30:00",
  orden: 2
},
{
  titulo: "1. FC Heidenheim Vs Borussia Dortmund - Bundesliga",
  tituloDestacado: "Ver 1. FC Heidenheim Vs Borussia Dortmund - Bundesliga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
  enlace: "HTML/Disneyplus9.html",
  enlaceProgramacion: "Disneyplus9.html",
  inicio: "2025-09-13T08:30:00",
  fin: "2025-09-13T10:30:00",
  orden: 3
},
{
  titulo: "Mainz 05 Vs RB Leipzig - Bundesliga",
  tituloDestacado: "Ver Mainz 05 Vs RB Leipzig - Bundesliga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
  enlace: "HTML/Disneyplus7.html",
  enlaceProgramacion: "Disneyplus7.html",
  inicio: "2025-09-13T08:30:00",
  fin: "2025-09-13T10:30:00",
  orden: 4
},
{
  titulo: "SC Freiburg Vs VfB Stuttgart - Bundesliga",
  tituloDestacado: "Ver SC Freiburg Vs VfB Stuttgart - Bundesliga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
  enlace: "HTML/Disneyplus5.html",
  enlaceProgramacion: "Disneyplus5.html",
  inicio: "2025-09-13T08:30:00",
  fin: "2025-09-13T10:30:00",
  orden: 5
},
{
  titulo: "Bayern Múnich Vs Hamburger SV - Bundesliga",
  tituloDestacado: "Ver Bayern Múnich Vs Hamburger SV - Bundesliga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
  imagenDestacada: "https://image.discovery.indazn.com/ca/v2/ca/image?id=4jtj6oirpojun6b5frjcn5pm0_image-header_pCa_1754994152000&quality=70",
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
  enlace: "HTML/Disneyplus10.html",
  enlaceProgramacion: "Disneyplus10.html",
  destacado: true,
  fijarComoDestacado: true,
  inicio: "2025-09-13T11:30:00",
  fin: "2025-09-13T13:30:00",
  orden: 6
},
{
  titulo: "Getafe Vs Oviedo - LaLiga EA Sports",
  tituloDestacado: "Ver Getafe Vs Oviedo - LaLiga EA Sports En Vivo",
  descripcion: "Jornada de LaLiga",
  imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
  imagenDestacada: "https://statics-maker.llt-services.com/gir/images/2023/07/04/xlarge/ef962943-cd1e-4843-a19a-8c1b5b9e9abb.jpg",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
  enlace: "HTML/Disneyplus3.html",
  enlaceProgramacion: "Disneyplus3.html",
  inicio: "2025-09-13T07:00:00",
  fin: "2025-09-13T09:00:00",
  orden: 1
},
{
  titulo: "Real Sociedad Vs Real Madrid - LaLiga EA Sports",
  tituloDestacado: "Ver Real Sociedad Vs Real Madrid - LaLiga EA Sports En Vivo",
  descripcion: "Jornada de LaLiga",
  imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
  imagenDestacada: "https://depor.com/resizer/v2/U3DRZHIVDFCETHQJBX2W65QV2Q.jpg?auth=3472f7503546cc534688bf7370d83710eed5d7fc02103a60e17c400913ea3278&width=1920&height=1080&quality=90&smart=true",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
  enlace: "HTML/Disneyplus2.html",
  enlaceProgramacion: "Disneyplus2.html",
  destacado: true,
  fijarComoDestacado: true,
  inicio: "2025-09-13T09:15:00",
  fin: "2025-09-13T11:15:00",
  orden: 2
},
{
  titulo: "Athletic Club Vs Alavés - LaLiga EA Sports",
  tituloDestacado: "Ver Athletic Club Vs Alavés - LaLiga EA Sports En Vivo",
  descripcion: "Jornada de LaLiga",
  imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
  imagenDestacada: "https://statics-maker.llt-services.com/gir/images/2023/07/04/xlarge/ef962943-cd1e-4843-a19a-8c1b5b9e9abb.jpg",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
  enlace: "HTML/Disneyplus11.html",
  enlaceProgramacion: "Disneyplus11.html",
  inicio: "2025-09-13T11:30:00",
  fin: "2025-09-13T13:30:00",
  orden: 3
},
{
  titulo: "Atlético Madrid Vs Villarreal - LaLiga EA Sports",
  tituloDestacado: "Ver Atlético Madrid Vs Villarreal - LaLiga EA Sports En Vivo",
  descripcion: "Jornada de LaLiga",
  imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
  imagenDestacada: "https://statics-maker.llt-services.com/gir/images/2023/07/04/xlarge/ef962943-cd1e-4843-a19a-8c1b5b9e9abb.jpg",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
  enlace: "HTML/Dsports.html",
  enlaceProgramacion: "Dsports.html",
  inicio: "2025-09-13T14:00:00",
  fin: "2025-09-13T16:00:00",
  orden: 4
},

{
  titulo: "Arsenal Vs Nottingham Forest - Premier League",
  tituloDestacado: "Ver Arsenal Vs Nottingham Forest - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-09-13T06:30:00",
  fin: "2025-09-13T08:30:00",
  orden: 1
},
{
  titulo: "Newcastle Vs Wolves - Premier League",
  tituloDestacado: "Ver Newcastle Vs Wolves - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/Disneyplus14.html",
  enlaceProgramacion: "Disneyplus14.html",
  inicio: "2025-09-13T09:00:00",
  fin: "2025-09-13T11:00:00",
  orden: 2
},
{
  titulo: "Bournemouth Vs Brighton - Premier League",
  tituloDestacado: "Ver Bournemouth Vs Brighton - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/Disneyplus13.html",
  enlaceProgramacion: "Disneyplus13.html",
  inicio: "2025-09-13T09:00:00",
  fin: "2025-09-13T11:00:00",
  orden: 3
},
{
  titulo: "Everton Vs Aston Villa - Premier League",
  tituloDestacado: "Ver Everton Vs Aston Villa - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/Disneyplus11.html",
  enlaceProgramacion: "Disneyplus11.html",
  inicio: "2025-09-13T09:00:00",
  fin: "2025-09-13T11:00:00",
  orden: 4
},
{
  titulo: "Crystal Palace Vs Sunderland - Premier League",
  tituloDestacado: "Ver Crystal Palace Vs Sunderland - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/Disneyplus12.html",
  enlaceProgramacion: "Disneyplus12.html",
  inicio: "2025-09-13T09:00:00",
  fin: "2025-09-13T11:00:00",
  orden: 5
},
{
  titulo: "Fulham Vs Leeds - Premier League",
  tituloDestacado: "Ver Fulham Vs Leeds - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/Disneyplus10.html",
  enlaceProgramacion: "Disneyplus10.html",
  inicio: "2025-09-13T09:00:00",
  fin: "2025-09-13T11:00:00",
  orden: 6
},
{
  titulo: "West Ham Vs Tottenham - Premier League",
  tituloDestacado: "Ver West Ham Vs Tottenham - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/Disneyplus9.html",
  enlaceProgramacion: "Disneyplus9.html",
  inicio: "2025-09-13T11:30:00",
  fin: "2025-09-13T13:30:00",
  orden: 7
},
{
  titulo: "Brentford Vs Chelsea - Premier League",
  tituloDestacado: "Ver Brentford Vs Chelsea - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/DAZN1.html",
  enlaceProgramacion: "DAZN1.html",
  inicio: "2025-09-13T14:00:00",
  fin: "2025-09-13T16:00:00",
  orden: 8
},

{
  titulo: "Cagliari Vs Parma - Serie A",
  tituloDestacado: "Ver Cagliari Vs Parma - Serie A En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png",
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg",
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png",
  enlace: "HTML/Disneyplus4.html",
  enlaceProgramacion: "Disneyplus4.html",
  inicio: "2025-09-13T08:00:00",
  fin: "2025-09-13T10:00:00",
  orden: 1
},
{
  titulo: "Juventus Vs Inter Milán - Serie A",
  tituloDestacado: "Ver Juventus Vs Inter Milán - Serie A En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png",
  imagenDestacada: "https://espnpressroom.com/latinamerica/files/2025/02/ESPN-Futbol-Serie-A-Juventus-v-Inter.jpg",
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png",
  enlace: "HTML/Disneyplus7.html",
  enlaceProgramacion: "Disneyplus7.html",
  destacado: true,
  fijarComoDestacado: true,
  inicio: "2025-09-13T11:00:00",
  fin: "2025-09-13T13:00:00",
  orden: 2
},
{
  titulo: "Fiorentina Vs Nápoles - Serie A",
  tituloDestacado: "Ver Fiorentina Vs Nápoles - Serie A En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png",
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg",
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png",
  enlace: "HTML/Disneyplus16.html",
  enlaceProgramacion: "Disneyplus16.html",
  inicio: "2025-09-13T13:45:00",
  fin: "2025-09-13T15:45:00",
  orden: 3
},

{
  titulo: "Fortaleza EC Vs Vitória - Brasileirão",
  tituloDestacado: "Ver Fortaleza EC Vs Vitória - Brasileirão En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080",
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg",
  logoMini: "https://www.ceroacero.es/img/logos/competicoes/51_imgbank_d1_20250313102859.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1024px-Flag_of_Brazil.svg.png",
  enlace: "HTML/destacada8.html",
  enlaceProgramacion: "destacada8.html",
  inicio: "2025-09-13T14:00:00",
  fin: "2025-09-13T16:27:00",
  orden: 1
},
{
  titulo: "Grêmio Vs Mirassol - Brasileirão",
  tituloDestacado: "Ver Grêmio Vs Mirassol - Brasileirão En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080",
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg",
  logoMini: "https://www.ceroacero.es/img/logos/competicoes/51_imgbank_d1_20250313102859.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1024px-Flag_of_Brazil.svg.png",
  enlace: "HTML/PremiereBR.html",
  enlaceProgramacion: "PremiereBR.html",
  inicio: "2025-09-13T14:00:00",
  fin: "2025-09-13T16:27:00",
  orden: 2
},
{
  titulo: "Palmeiras Vs Internacional - Brasileirão",
  tituloDestacado: "Ver Palmeiras Vs Internacional - Brasileirão En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080",
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg",
  logoMini: "https://www.ceroacero.es/img/logos/competicoes/51_imgbank_d1_20250313102859.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1024px-Flag_of_Brazil.svg.png",
  enlace: "HTML/PremiereBR.html",
  enlaceProgramacion: "PremiereBR.html",
  inicio: "2025-09-13T16:30:00",
  fin: "2025-09-13T18:57:00",
  orden: 3
},
{
  titulo: "Fluminense Vs Corinthians - Brasileirão",
  tituloDestacado: "Ver Fluminense Vs Corinthians - Brasileirão En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080",
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg",
  logoMini: "https://www.ceroacero.es/img/logos/competicoes/51_imgbank_d1_20250313102859.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1024px-Flag_of_Brazil.svg.png",
  enlace: "HTML/PremiereBR.html",
  enlaceProgramacion: "PremiereBR.html",
  inicio: "2025-09-13T19:00:00",
  fin: "2025-09-13T21:27:00",
  orden: 4
},

{
  titulo: "Charlotte Vs Inter Miami CF - MLS 2025",
  tituloDestacado: "Ver Charlotte Vs Inter Miami CF - MLS 2025 En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/DUGY6HK3JZM6HHAIEHRJCEUXQU.jpg",
  imagenDestacada: "https://khelnow.com/_next/image?url=https%3A%2F%2Fassets.khelnow.com%2Fnews%2Fuploads%2F2025%2F09%2FCharlotte-FC-vs-Inter-Miami.jpg&w=1920&q=75",
  logoMini: "https://logodownload.org/wp-content/uploads/2019/09/mls-logo-0.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png",
  enlace: "HTML/destacada5.html",
  enlaceProgramacion: "destacada5.html",
  destacado: true,
  fijarComoDestacado: true,
  inicio: "2025-09-13T18:30:00",
  fin: "2025-09-13T20:30:00",
  orden: 1
},

{
  titulo: "Godoy Cruz Vs Barracas Central - Liga Argentina",
  tituloDestacado: "Ver Godoy Cruz Vs Barracas Central - Liga Profesional Argentina AFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Logo_LPF_AFA.svg/1200px-Logo_LPF_AFA.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPNPremium.html",
  enlaceProgramacion: "ESPNPremium.html",
  inicio: "2025-09-13T12:30:00",
  fin: "2025-09-13T14:30:00",
  orden: 1
},
{
  titulo: "Independiente Vs Banfield - Liga Argentina",
  tituloDestacado: "Ver Independiente Vs Banfield - Liga Profesional Argentina AFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Logo_LPF_AFA.svg/1200px-Logo_LPF_AFA.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/tntsportsa.html",
  enlaceProgramacion: "tntsportsa.html",
  inicio: "2025-09-13T14:45:00",
  fin: "2025-09-13T16:45:00",
  orden: 2
},
{
  titulo: "Estudiantes Vs River Plate - Liga Argentina",
  tituloDestacado: "Ver Estudiantes Vs River Plate - Liga Profesional Argentina AFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://depor.com/resizer/v2/QM335XOUFFCE5JPHIQ66OE77NM.jpg?auth=bdef9fb43fda0db6ecab9b08070d1f1529e1577d518fcbdc9ad9303d03934f59&width=1000&height=569&quality=90&smart=true",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Logo_LPF_AFA.svg/1200px-Logo_LPF_AFA.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/Disneyplus2.html",
  enlaceProgramacion: "Disneyplus2.html",
  destacado: true,
  fijarComoDestacado: true,
  inicio: "2025-09-13T17:00:00",
  fin: "2025-09-13T19:00:00",
  orden: 3
},
{
  titulo: "Sarmiento Vs Aldosivi - Liga Argentina",
  tituloDestacado: "Ver Sarmiento Vs Aldosivi - Liga Profesional Argentina AFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Logo_LPF_AFA.svg/1200px-Logo_LPF_AFA.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/tntsportsa.html",
  enlaceProgramacion: "tntsportsa.html",
  inicio: "2025-09-13T19:15:00",
  fin: "2025-09-13T21:15:00",
  orden: 4
},

{
  titulo: "Fortaleza CEIF Vs América de Cali - Liga BetPlay",
  tituloDestacado: "Ver Fortaleza CEIF Vs América de Cali - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/bucaramanga-vs-once-caldas-finalizacion-2025.webp",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-09-13T14:00:00",
  fin: "2025-09-13T16:00:00",
  orden: 14
},
{
  titulo: "Alianza Petrolera Vs Millonarios - Liga BetPlay",
  tituloDestacado: "Ver Alianza Petrolera Vs Millonarios - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/bucaramanga-vs-once-caldas-finalizacion-2025.webp",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-09-13T16:10:00",
  fin: "2025-09-13T18:10:00",
  orden: 15
},
{
  titulo: "Once Caldas Vs Envigado - Liga BetPlay",
  tituloDestacado: "Ver Once Caldas Vs Envigado - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/bucaramanga-vs-once-caldas-finalizacion-2025.webp",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-09-13T18:20:00",
  fin: "2025-09-13T20:20:00",
  orden: 16
},
{
  titulo: "Nacional Vs Atlético Bucaramanga - Liga BetPlay",
  tituloDestacado: "Ver Nacional Vs Atlético Bucaramanga - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/bucaramanga-vs-once-caldas-finalizacion-2025.webp",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-09-13T20:30:00",
  fin: "2025-09-13T22:30:00",
  orden: 17
},

{
  titulo: "Pachuca Vs Cruz Azul - Liga BBVA Bancomer MX",
  tituloDestacado: "Ver Pachuca Vs Cruz Azul - Liga BBVA Bancomer MX En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/TMWDQ9mQ/LigaMX.png",
  imagenDestacada: "https://cdn.brandfetch.io/id6qM-I7Sb/w/1500/h/500/id2L_f-Jc9.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751189495640",
  logoMini: "https://cdn.shoplightspeed.com/shops/649488/files/66293910/image.jpg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/2560px-Flag_of_Mexico.svg.png",
  enlace: "HTML/TUDNUSA.html",
  enlaceProgramacion: "TUDNUSA.html",
  inicio: "2025-09-13T18:00:00",
  fin: "2025-09-13T20:00:00",
  orden: 18
},
{
  titulo: "Tigres Vs León - Liga BBVA Bancomer MX",
  tituloDestacado: "Ver Tigres Vs León - Liga BBVA Bancomer MX En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/TMWDQ9mQ/LigaMX.png",
  imagenDestacada: "https://cdn.brandfetch.io/id6qM-I7Sb/w/1500/h/500/id2L_f-Jc9.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751189495640",
  logoMini: "https://cdn.shoplightspeed.com/shops/649488/files/66293910/image.jpg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/2560px-Flag_of_Mexico.svg.png",
  enlace: "HTML/destacada4.html",
  enlaceProgramacion: "destacada4.html",
  inicio: "2025-09-13T20:00:00",
  fin: "2025-09-13T22:00:00",
  orden: 19
},
{
  titulo: "Atlas Vs Santos Laguna - Liga BBVA Bancomer MX",
  tituloDestacado: "Ver Atlas Vs Santos Laguna - Liga BBVA Bancomer MX En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/TMWDQ9mQ/LigaMX.png",
  imagenDestacada: "https://cdn.brandfetch.io/id6qM-I7Sb/w/1500/h/500/id2L_f-Jc9.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751189495640",
  logoMini: "https://cdn.shoplightspeed.com/shops/649488/files/66293910/image.jpg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/2560px-Flag_of_Mexico.svg.png",
  enlace: "HTML/TUDNUSA.html",
  enlaceProgramacion: "TUDNUSA.html",
  inicio: "2025-09-13T20:00:00",
  fin: "2025-09-13T22:00:00",
  orden: 20
},
{
  titulo: "Toluca Vs Puebla - Liga BBVA Bancomer MX",
  tituloDestacado: "Ver Toluca Vs Puebla - Liga BBVA Bancomer MX En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/TMWDQ9mQ/LigaMX.png",
  imagenDestacada: "https://cdn.brandfetch.io/id6qM-I7Sb/w/1500/h/500/id2L_f-Jc9.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751189495640",
  logoMini: "https://cdn.shoplightspeed.com/shops/649488/files/66293910/image.jpg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/2560px-Flag_of_Mexico.svg.png",
  enlace: "HTML/azteca7.html",
  enlaceProgramacion: "azteca7.html",
  inicio: "2025-09-13T22:00:00",
  fin: "2025-09-14T00:00:00",
  orden: 21
},
{
  titulo: "América Vs Guadalajara - Liga BBVA Bancomer MX",
  tituloDestacado: "Ver América Vs Guadalajara - Liga BBVA Bancomer MX En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/TMWDQ9mQ/LigaMX.png",
  imagenDestacada: "https://cdn.brandfetch.io/id6qM-I7Sb/w/1500/h/500/id2L_f-Jc9.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751189495640",
  logoMini: "https://cdn.shoplightspeed.com/shops/649488/files/66293910/image.jpg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/2560px-Flag_of_Mexico.svg.png",
  enlace: "HTML/TUDNUSA.html",
  enlaceProgramacion: "TUDNUSA.html",
  inicio: "2025-09-13T22:15:00",
  fin: "2025-09-14T00:15:00",
  orden: 22
},

// 14-Septiembre-2025

{
  titulo: "Celta Vs Girona - LaLiga EA Sports",
  tituloDestacado: "Ver Celta Vs Girona - LaLiga EA Sports En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/2j3nNscL/LaligaBanner.png",
  imagenDestacada: "https://i.eurosport.com/2024/08/12/4040771-82083828-2560-1440.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/5/59/LaLiga_EA_Sports_2023_Vertical_Logo.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
  enlace: "HTML/MovistarLaLiga.html",
  enlaceProgramacion: "MovistarLaLiga.html",
  inicio: "2025-09-14T07:00:00",
  fin: "2025-09-14T09:00:00",
  orden: 23
},
{
  titulo: "Levante Vs Betis - LaLiga EA Sports",
  tituloDestacado: "Ver Levante Vs Betis - LaLiga EA Sports En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/2j3nNscL/LaligaBanner.png",
  imagenDestacada: "https://i.eurosport.com/2024/08/12/4040771-82083828-2560-1440.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/5/59/LaLiga_EA_Sports_2023_Vertical_Logo.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
  enlace: "HTML/MovistarLaLiga.html",
  enlaceProgramacion: "MovistarLaLiga.html",
  inicio: "2025-09-14T09:15:00",
  fin: "2025-09-14T11:15:00",
  orden: 24
},
{
  titulo: "Osasuna Vs Rayo - LaLiga EA Sports",
  tituloDestacado: "Ver Osasuna Vs Rayo - LaLiga EA Sports En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/2j3nNscL/LaligaBanner.png",
  imagenDestacada: "https://i.eurosport.com/2024/08/12/4040771-82083828-2560-1440.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/5/59/LaLiga_EA_Sports_2023_Vertical_Logo.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
  enlace: "HTML/MovistarLaLiga.html",
  enlaceProgramacion: "MovistarLaLiga.html",
  inicio: "2025-09-14T11:30:00",
  fin: "2025-09-14T13:30:00",
  orden: 25
},
{
  titulo: "Barcelona Vs Valencia - LaLiga EA Sports",
  tituloDestacado: "Ver Barcelona Vs Valencia - LaLiga EA Sports En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/2j3nNscL/LaligaBanner.png",
  imagenDestacada: "https://i.eurosport.com/2024/08/12/4040771-82083828-2560-1440.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/5/59/LaLiga_EA_Sports_2023_Vertical_Logo.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
  enlace: "HTML/Dsports.html",
  enlaceProgramacion: "MovistarLaLiga.html",
  inicio: "2025-09-14T14:00:00",
  fin: "2025-09-14T16:00:00",
  orden: 26
},

{
  titulo: "Burnley Vs Liverpool - Premier League",
  tituloDestacado: "Ver Burnley Vs Liverpool - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/Disneyplus2.html",
  enlaceProgramacion: "Disneyplus2.html",
  inicio: "2025-09-14T08:00:00",
  fin: "2025-09-14T10:00:00",
  orden: 27
},
{
  titulo: "MAnchester City Vs Manchester United - Premier League",
  tituloDestacado: "Ver M. City Vs M. United - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/Disneyplus2.html",
  enlaceProgramacion: "Disneyplus2.html",
  inicio: "2025-09-14T10:30:00",
  fin: "2025-09-14T12:30:00",
  orden: 28
},

{
  titulo: "Roma Vs Torino - Serie A",
  tituloDestacado: "Ver Roma Vs Torino - Serie A En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png",
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg",
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-09-14T05:30:00",
  fin: "2025-09-14T07:30:00",
  orden: 29
},
{
  titulo: "Atalanta Vs US Lecce - Serie A",
  tituloDestacado: "Ver Atalanta Vs US Lecce - Serie A En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png",
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg",
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-09-14T08:00:00",
  fin: "2025-09-14T10:00:00",
  orden: 30
},
{
  titulo: "Pisa Vs Udinese - Serie A",
  tituloDestacado: "Ver Pisa Vs Udinese - Serie A En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png",
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg",
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-09-14T08:00:00",
  fin: "2025-09-14T10:00:00",
  orden: 31
},
{
  titulo: "Sassuolo Vs Lazio - Serie A",
  tituloDestacado: "Ver Sassuolo Vs Lazio - Serie A En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png",
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg",
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-09-14T11:00:00",
  fin: "2025-09-14T13:00:00",
  orden: 32
},
{
  titulo: "Milan Vs Bolonia - Serie A",
  tituloDestacado: "Ver Milan Vs Bolonia - Serie A En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png",
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg",
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-09-14T13:45:00",
  fin: "2025-09-14T15:45:00",
  orden: 33
},

{
  titulo: "St. Pauli Vs FC Augsburg - Bundesliga",
  tituloDestacado: "Ver St. Pauli Vs FC Augsburg - Bundesliga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
  enlace: "HTML/ESPN.html",
  enlaceProgramacion: "ESPN.html",
  inicio: "2025-09-14T08:30:00",
  fin: "2025-09-14T10:30:00",
  orden: 34
},
{
  titulo: "Borussia M'gladbach Vs SV Werder - Bundesliga",
  tituloDestacado: "Ver Borussia M'gladbach Vs SV Werder - Bundesliga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
  enlace: "HTML/ESPN.html",
  enlaceProgramacion: "ESPN.html",
  inicio: "2025-09-14T10:30:00",
  fin: "2025-09-14T12:30:00",
  orden: 35
},

{
  titulo: "Santa Fe Vs Unión Magdalena - Liga BetPlay",
  tituloDestacado: "Ver Independiente Santa Fe Vs Unión Magdalena - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/bucaramanga-vs-once-caldas-finalizacion-2025.webp",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/2/21/Dimayor_Colombia_logo.svg",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-09-14T14:00:00",
  fin: "2025-09-14T16:00:00",
  orden: 36
},
{
  titulo: "Deportivo Cali Vs Deportivo Pasto - Liga BetPlay",
  tituloDestacado: "Ver Deportivo Cali Vs Deportivo Pasto - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/bucaramanga-vs-once-caldas-finalizacion-2025.webp",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/2/21/Dimayor_Colombia_logo.svg",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-09-14T16:10:00",
  fin: "2025-09-14T18:10:00",
  orden: 37
},
{
  titulo: "Pereira Vs Llaneros - Liga BetPlay",
  tituloDestacado: "Ver Deportivo Pereira Vs Llaneros - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/bucaramanga-vs-once-caldas-finalizacion-2025.webp",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/2/21/Dimayor_Colombia_logo.svg",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-09-14T18:20:00",
  fin: "2025-09-14T20:20:00",
  orden: 38
},
{
  titulo: "Tolima Vs Boyacá Chicó - Liga BetPlay",
  tituloDestacado: "Ver Deportes Tolima Vs Boyacá Chicó - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/bucaramanga-vs-once-caldas-finalizacion-2025.webp",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/2/21/Dimayor_Colombia_logo.svg",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-09-14T20:30:00",
  fin: "2025-09-14T22:30:00",
  orden: 39
},

{
  titulo: "Instituto Vs Argentinos - Liga Profesional Argentina",
  tituloDestacado: "Ver Instituto Vs Argentinos - Liga Profesional Argentina AFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPNPremium.html",
  enlaceProgramacion: "ESPNPremium.html",
  inicio: "2025-09-14T13:00:00",
  fin: "2025-09-14T15:00:00",
  orden: 40
},
{
  titulo: "Gimnasia Vs Unión - Liga Profesional Argentina",
  tituloDestacado: "Ver Gimnasia Vs Unión - Liga Profesional Argentina AFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPNPremium.html",
  enlaceProgramacion: "ESPNPremium.html",
  inicio: "2025-09-14T13:00:00",
  fin: "2025-09-14T15:00:00",
  orden: 41
},
{
  titulo: "Central Vs Boca - Liga Profesional Argentina",
  tituloDestacado: "Ver Central Vs Boca - Liga Profesional Argentina AFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPNPremium.html",
  enlaceProgramacion: "ESPNPremium.html",
  inicio: "2025-09-14T15:30:00",
  fin: "2025-09-14T17:30:00",
  orden: 42
},
{
  titulo: "Defensa Vs Platense - Liga Profesional Argentina",
  tituloDestacado: "Ver Defensa Vs Platense - Liga Profesional Argentina AFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPNPremium.html",
  enlaceProgramacion: "ESPNPremium.html",
  inicio: "2025-09-14T18:00:00",
  fin: "2025-09-14T20:00:00",
  orden: 43
},
{
  titulo: "Tigre Vs Talleres - Liga Profesional Argentina",
  tituloDestacado: "Ver Tigre Vs Talleres - Liga Profesional Argentina AFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPNPremium.html",
  enlaceProgramacion: "ESPNPremium.html",
  inicio: "2025-09-14T18:00:00",
  fin: "2025-09-14T20:00:00",
  orden: 44
},

{
  titulo: "Querétaro Vs Monterrey - Liga BBVA Bancomer MX",
  tituloDestacado: "Ver Querétaro Vs Monterrey - Liga BBVA Bancomer MX En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/TMWDQ9mQ/LigaMX.png",
  imagenDestacada: "https://cdn.brandfetch.io/id6qM-I7Sb/w/1500/h/500/id2L_f-Jc9.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751189495640",
  logoMini: "https://cdn.shoplightspeed.com/shops/649488/files/66293910/image.jpg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
  enlace: "HTML/TUDNMX.html",
  enlaceProgramacion: "TUDNMX.html",
  inicio: "2025-09-14T18:00:00",
  fin: "2025-09-14T20:00:00",
  orden: 45
},
{
  titulo: "Atlético San Luis Vs Tijuana - Liga BBVA Bancomer MX",
  tituloDestacado: "Ver Atlético San Luis Vs Tijuana - Liga BBVA Bancomer MX En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/TMWDQ9mQ/LigaMX.png",
  imagenDestacada: "https://cdn.brandfetch.io/id6qM-I7Sb/w/1500/h/500/id2L_f-Jc9.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751189495640",
  logoMini: "https://cdn.shoplightspeed.com/shops/649488/files/66293910/image.jpg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
  enlace: "HTML/TUDNMX.html",
  enlaceProgramacion: "TUDNMX.html",
  inicio: "2025-09-14T20:00:00",
  fin: "2025-09-14T22:00:00",
  orden: 46
},

{
  titulo: "Bragantino Vs Sport - Brasileirão",
  tituloDestacado: "Ver Bragantino Vs Sport - Brasileirão En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080",
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg",
  logoMini: "https://www.ceroacero.es/img/logos/competicoes/51_imgbank_d1_20250313102859.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
  enlace: "HTML/PremiereBR.html",
  enlaceProgramacion: "PremiereBR.html",
  inicio: "2025-09-14T09:00:00",
  fin: "2025-09-14T11:00:00",
  orden: 49
},
{
  titulo: "Atlético MG Vs Santos - Brasileirão",
  tituloDestacado: "Ver Atlético MG Vs Santos - Brasileirão En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080",
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg",
  logoMini: "https://www.ceroacero.es/img/logos/competicoes/51_imgbank_d1_20250313102859.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
  enlace: "HTML/PremiereBR.html",
  enlaceProgramacion: "PremiereBR.html",
  inicio: "2025-09-14T14:00:00",
  fin: "2025-09-14T16:00:00",
  orden: 50
},
{
  titulo: "Juventude Vs Flamengo - Brasileirão",
  tituloDestacado: "Ver Juventude Vs Flamengo - Brasileirão En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080",
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg",
  logoMini: "https://www.ceroacero.es/img/logos/competicoes/51_imgbank_d1_20250313102859.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
  enlace: "HTML/PremiereBR.html",
  enlaceProgramacion: "PremiereBR.html",
  inicio: "2025-09-14T14:00:00",
  fin: "2025-09-14T16:27:00",
  orden: 51
},
{
  titulo: "São Paulo Vs Botafogo - Brasileirão",
  tituloDestacado: "Ver São Paulo Vs Botafogo - Brasileirão En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080",
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg",
  logoMini: "https://www.ceroacero.es/img/logos/competicoes/51_imgbank_d1_20250313102859.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
  enlace: "HTML/PremiereBR.html",
  enlaceProgramacion: "PremiereBR.html",
  inicio: "2025-09-14T15:30:00",
  fin: "2025-09-14T17:30:00",
  orden: 52
},
{
  titulo: "Vasco da Gama Vs Ceará - Brasileirão",
  tituloDestacado: "Ver Vasco da Gama Vs Ceará - Brasileirão En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080",
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg",
  logoMini: "https://www.ceroacero.es/img/logos/competicoes/51_imgbank_d1_20250313102859.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
  enlace: "HTML/PremiereBR.html",
  enlaceProgramacion: "PremiereBR.html",
  inicio: "2025-09-14T18:30:00",
  fin: "2025-09-14T20:30:00",
  orden: 53
},

// Eventos 15-09-2025

// LaLiga
{
  titulo: "Espanyol Vs Mallorca - LaLiga EA Sports",
  tituloDestacado: "Ver Espanyol Vs Mallorca - LaLiga EA Sports En Vivo",
  descripcion: "Jornada de LaLiga",
  imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
  imagenDestacada: "https://statics-maker.llt-services.com/gir/images/2023/07/04/xlarge/ef962943-cd1e-4843-a19a-8c1b5b9e9abb.jpg",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-09-15T14:00:00",
  fin: "2025-09-15T16:00:00",
  orden: 54
},

{
  titulo: "Hellas Verona Vs U.S. Cremonese - Serie A",
  tituloDestacado: "Ver Hellas Verona Vs U.S. Cremonese - Serie A En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png",
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg",
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-09-15T11:30:00",
  fin: "2025-09-15T13:30:00",
  orden: 55
},
{
  titulo: "Como Vs Genoa - Serie A",
  tituloDestacado: "Ver Como Vs Genoa - Serie A En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png",
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg",
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-09-15T13:45:00",
  fin: "2025-09-15T15:45:00",
  orden: 56
},

{
  titulo: "Bahia Vs Cruzeiro - Brasileirão",
  tituloDestacado: "Ver Bahia Vs Cruzeiro - Brasileirão En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080",
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg",
  logoMini: "https://www.ceroacero.es/img/logos/competicoes/51_imgbank_d1_20250313102859.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
  enlace: "HTML/PremiereBR.html",
  enlaceProgramacion: "PremiereBR.html",
  inicio: "2025-09-15T18:00:00",
  fin: "2025-09-15T20:00:00",
  orden: 57
},

// Eventos 16-09-2025

{
  titulo: "Athletic Vs Arsenal - Uefa Champions League",
  tituloDestacado: "Ver Athletic Vs Arsenal - Uefa Champions League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.sportonspec.co.uk/wp-content/uploads/2024/01/uefa-champions-league-banner.jpg",
  imagenDestacada: "https://m.media-amazon.com/images/S/pv-target-images/b653329169452b75ebba141c19510c90fd546b68136d8c15eec2839adc18aeae.jpg",
  logoMini: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtee0YCALUVYG-rv7WMe0oPHelUk1nbPthJcmsfEUhE0nQBwwm7eM1hKQV4se3ipu-cCV0Hdm6ht4R3DdyUxtWtmTvxv20RWR83gr3AFN98etDBI-wVjgBIUbz3CwCHy2ug90y8vjyQWk/s640/unnamed.png",
  icono: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtee0YCALUVYG-rv7WMe0oPHelUk1nbPthJcmsfEUhE0nQBwwm7eM1hKQV4se3ipu-cCV0Hdm6ht4R3DdyUxtWtmTvxv20RWR83gr3AFN98etDBI-wVjgBIUbz3CwCHy2ug90y8vjyQWk/s640/unnamed.png",
  enlace: "HTML/ESPN.html",
  enlaceProgramacion: "ESPN.html",
  inicio: "2025-09-16T11:45:00",
  fin: "2025-09-16T13:45:00",
  orden: 1
},
{
  titulo: "PSV Vs Union SG - Uefa Champions League",
  tituloDestacado: "Ver PSV Vs Union SG - Uefa Champions League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.sportonspec.co.uk/wp-content/uploads/2024/01/uefa-champions-league-banner.jpg",
  imagenDestacada: "https://m.media-amazon.com/images/S/pv-target-images/b653329169452b75ebba141c19510c90fd546b68136d8c15eec2839adc18aeae.jpg",
  logoMini: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtee0YCALUVYG-rv7WMe0oPHelUk1nbPthJcmsfEUhE0nQBwwm7eM1hKQV4se3ipu-cCV0Hdm6ht4R3DdyUxtWtmTvxv20RWR83gr3AFN98etDBI-wVjgBIUbz3CwCHy2ug90y8vjyQWk/s640/unnamed.png",
  icono: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtee0YCALUVYG-rv7WMe0oPHelUk1nbPthJcmsfEUhE0nQBwwm7eM1hKQV4se3ipu-cCV0Hdm6ht4R3DdyUxtWtmTvxv20RWR83gr3AFN98etDBI-wVjgBIUbz3CwCHy2ug90y8vjyQWk/s640/unnamed.png",
  enlace: "HTML/ESPN.html",
  enlaceProgramacion: "ESPN.html",
  inicio: "2025-09-16T11:45:00",
  fin: "2025-09-16T13:45:00",
  orden: 2
},
{
  titulo: "Real Madrid Vs Marseille - Uefa Champions League",
  tituloDestacado: "Ver R. Madrid Vs Marseille - Uefa Champions League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.sportonspec.co.uk/wp-content/uploads/2024/01/uefa-champions-league-banner.jpg",
  imagenDestacada: "https://m.media-amazon.com/images/S/pv-target-images/b653329169452b75ebba141c19510c90fd546b68136d8c15eec2839adc18aeae.jpg",
  logoMini: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtee0YCALUVYG-rv7WMe0oPHelUk1nbPthJcmsfEUhE0nQBwwm7eM1hKQV4se3ipu-cCV0Hdm6ht4R3DdyUxtWtmTvxv20RWR83gr3AFN98etDBI-wVjgBIUbz3CwCHy2ug90y8vjyQWk/s640/unnamed.png",
  icono: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtee0YCALUVYG-rv7WMe0oPHelUk1nbPthJcmsfEUhE0nQBwwm7eM1hKQV4se3ipu-cCV0Hdm6ht4R3DdyUxtWtmTvxv20RWR83gr3AFN98etDBI-wVjgBIUbz3CwCHy2ug90y8vjyQWk/s640/unnamed.png",
  enlace: "HTML/ESPN.html",
  enlaceProgramacion: "ESPN.html",
  inicio: "2025-09-16T14:00:00",
  fin: "2025-09-16T16:00:00",
  orden: 3
},
{
  titulo: "Juventus Vs Borussia Dortmund - Uefa Champions League",
  tituloDestacado: "Ver Juventus Vs Borussia Dortmund - Uefa Champions League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.sportonspec.co.uk/wp-content/uploads/2024/01/uefa-champions-league-banner.jpg",
  imagenDestacada: "https://m.media-amazon.com/images/S/pv-target-images/b653329169452b75ebba141c19510c90fd546b68136d8c15eec2839adc18aeae.jpg",
  logoMini: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtee0YCALUVYG-rv7WMe0oPHelUk1nbPthJcmsfEUhE0nQBwwm7eM1hKQV4se3ipu-cCV0Hdm6ht4R3DdyUxtWtmTvxv20RWR83gr3AFN98etDBI-wVjgBIUbz3CwCHy2ug90y8vjyQWk/s640/unnamed.png",
  icono: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtee0YCALUVYG-rv7WMe0oPHelUk1nbPthJcmsfEUhE0nQBwwm7eM1hKQV4se3ipu-cCV0Hdm6ht4R3DdyUxtWtmTvxv20RWR83gr3AFN98etDBI-wVjgBIUbz3CwCHy2ug90y8vjyQWk/s640/unnamed.png",
  enlace: "HTML/ESPN.html",
  enlaceProgramacion: "ESPN.html",
  inicio: "2025-09-16T14:00:00",
  fin: "2025-09-16T16:00:00",
  orden: 4
},
{
  titulo: "Tottenham Vs Villarreal - Uefa Champions League",
  tituloDestacado: "Ver Tottenham Vs Villarreal - Uefa Champions League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.sportonspec.co.uk/wp-content/uploads/2024/01/uefa-champions-league-banner.jpg",
  imagenDestacada: "https://m.media-amazon.com/images/S/pv-target-images/b653329169452b75ebba141c19510c90fd546b68136d8c15eec2839adc18aeae.jpg",
  logoMini: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtee0YCALUVYG-rv7WMe0oPHelUk1nbPthJcmsfEUhE0nQBwwm7eM1hKQV4se3ipu-cCV0Hdm6ht4R3DdyUxtWtmTvxv20RWR83gr3AFN98etDBI-wVjgBIUbz3CwCHy2ug90y8vjyQWk/s640/unnamed.png",
  icono: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtee0YCALUVYG-rv7WMe0oPHelUk1nbPthJcmsfEUhE0nQBwwm7eM1hKQV4se3ipu-cCV0Hdm6ht4R3DdyUxtWtmTvxv20RWR83gr3AFN98etDBI-wVjgBIUbz3CwCHy2ug90y8vjyQWk/s640/unnamed.png",
  enlace: "HTML/ESPN.html",
  enlaceProgramacion: "ESPN.html",
  inicio: "2025-09-16T14:00:00",
  fin: "2025-09-16T16:00:00",
  orden: 5
},
{
  titulo: "Benfica Vs FK Qarabag - Uefa Champions League",
  tituloDestacado: "Ver Benfica Vs FK Qarabag - Uefa Champions League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.sportonspec.co.uk/wp-content/uploads/2024/01/uefa-champions-league-banner.jpg",
  imagenDestacada: "https://m.media-amazon.com/images/S/pv-target-images/b653329169452b75ebba141c19510c90fd546b68136d8c15eec2839adc18aeae.jpg",
  logoMini: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtee0YCALUVYG-rv7WMe0oPHelUk1nbPthJcmsfEUhE0nQBwwm7eM1hKQV4se3ipu-cCV0Hdm6ht4R3DdyUxtWtmTvxv20RWR83gr3AFN98etDBI-wVjgBIUbz3CwCHy2ug90y8vjyQWk/s640/unnamed.png",
  icono: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtee0YCALUVYG-rv7WMe0oPHelUk1nbPthJcmsfEUhE0nQBwwm7eM1hKQV4se3ipu-cCV0Hdm6ht4R3DdyUxtWtmTvxv20RWR83gr3AFN98etDBI-wVjgBIUbz3CwCHy2ug90y8vjyQWk/s640/unnamed.png",
  enlace: "HTML/ESPN.html",
  enlaceProgramacion: "ESPN.html",
  inicio: "2025-09-16T14:00:00",
  fin: "2025-09-16T16:00:00",
  orden: 5
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
  imagenDestacada: "https://www.wwe.com/f/styles/wwe_16_9_l/public/2025/08/CS-052365_Wrestlepalooza_Logo-Only_1920x1080.jpg", 
  logoMini: "https://yt3.googleusercontent.com/AsKy1C2cm97xPamYndRiofwGK4U49Oi2nkM3Wamfy7yeBm-yvs-tAGeQbTk_RWThvMb_OnBm8aI=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
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
imagenDestacada: "https://staticg.sportskeeda.com/editor/2025/05/4f220-17477692964168-1920.jpg",
logoMini: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUtor91rBGahrThu9Mxees5CnznfbszzN_MfUkBmhlo9xxMfbHsXaexvObjDoW46kGMRJj26ilFjaJukccK4GYDVbRWklx3erKzEA80V7sRRIHjHmH8VE2Yf0DHY8AgAOfSywBulY97qn0sQUy4fUiRndhPhYLTO-fqH-RygtY0PBow9J2n9S2I0FVzTo/s899/AEW-All-Out-logo-v4.png",
icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/AEW_Logo_%28simplified%29.svg/2560px-AEW_Logo_%28simplified%29.svg.png",
enlace: "HTML/destacada3.html",
enlaceProgramacion: "destacada3.html",
destacado: true,
fijarComoDestacado: true,
orden: 2,
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
  "destacada6.html", "destacada7.html", "destacada8.html","CanalLuchaLibre.html",
  "Winplus.html", "Winsports.html", "FoxMX2.html", "FoxMX.html", "Fox1Arg.html", "Fox2Arg.html",
  "FoxSportsPremium.html", "tntsportsa.html", "tycsports.html", "tycsports2.html",
  "TUDNMX.html", "TUDNUSA.html", "Dsports.html", "Dsports2.html", "Dsportsplus.html",
  "Disneyplus.html", "Disneyplus2.html", "Disneyplus3.html", "Disneyplus4.html",
  "Disneyplus5.html", "Disneyplus6.html", "Disneyplus7.html", "Disneyplus8.html",
  "Disneyplus9.html", "Disneyplus10.html", "Disneyplus11.html", 
  "Disneyplus14.html", "Disneyplus15.html", "Disneyplus16.html",
  "ESPN.html", "ESPN2.html", "ESPN3.html", "ESPN4.html", "ESPN5.html", "TVPublica.html",
  "espndeportesusa.html", "beinesp.html", "beinespañol.html", "Telefe.html",
  "Aztecadeportes.html", "azteca7.html", "Caracoltv.html", "RCN.html",
  "DAZNLALIGA.html", "DAZNLALIGA2.html", "DAZN1.html", "DAZN2.html", "DAZN3.html", "DAZN4.html",
  "MovistarLaLiga.html", "MovistarLaLiga2.html", "PremiereBR.html",
  "TNTUSA.html", "TelemundoUSA.html", "ESPNMX.html", "SporTV2.html", "ECDF.html", "ESPNSUR.html",
  "Movistarplus.html", "MovistarDeportes.html", "MEGAChile.html", "SporTV.html",
  "ESPNARGENTINA1.html", "ESPNARGENTINA2.html", "ESPNBRASIL.html", "ESPNPremium.html"
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