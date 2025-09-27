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

{
  titulo: "Junior Vs Bucaramanga - Liga BetPlay 2025",
  tituloDestacado: "Ver Junior Vs Bucaramanga - Liga BetPlay 2025 En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp?VersionId=1pdX_sn61JUvfOKBsP0GiOZVQIv7GevZ&itok=0tb2FqQh",
  imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/sorpresa-total-en-el-fpc-se-confirma-el-nuevo-club-que-jugara-en-la-a-desde-2026-foto-dimayor-y-escudoteca-1746629836.webp",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  destacado: true,
  fijarComoDestacado: true,
  inicio: "2025-08-18T17:15:00",
  fin: "2025-08-18T19:45:00",
  orden: 7
},

{
  titulo: "Junior Vs Llaneros - Liga BetPlay 2025",
  tituloDestacado: "Ver Junior Vs Llaneros - Liga BetPlay 2025 En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp?VersionId=1pdX_sn61JUvfOKBsP0GiOZVQIv7GevZ&itok=0tb2FqQh",
  imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/sorpresa-total-en-el-fpc-se-confirma-el-nuevo-club-que-jugara-en-la-a-desde-2026-foto-dimayor-y-escudoteca-1746629836.webp",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1200px-Dimayor_Colombia_logo.svg.png",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  destacado: true,
  fijarComoDestacado: true,
  inicio: "2025-08-29T18:00:00",
  fin: "2025-08-29T20:00:00",
  orden: 7
},

// Eventos 27/09/2025
{
  titulo: "Brentford Vs Manchester United - Premier League",
  tituloDestacado: "Ver Brentford Vs Manchester United - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/DAZN1.html",
  enlaceProgramacion: "DAZN1.html",
  inicio: "2025-09-27T06:30:00",
  fin: "2025-09-27T08:30:00",
  orden: 1
},
{
  titulo: "Getafe vs Levante - LaLiga EA Sports",
  tituloDestacado: "Ver Getafe vs Levante - LaLiga EA Sports En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
  imagenDestacada: "https://upload.wikimedia.org/wikipedia/commons/0/02/Getafe_CF_logo.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
  enlace: "HTML/Disneyplus7.html",
  enlaceProgramacion: "Disneyplus7.html",
  inicio: "2025-09-27T07:00:00",
  fin: "2025-09-27T09:00:00",
  orden: 2
},
{
  titulo: "Calcio Como 1907 Vs Cremonese - Serie A",
  tituloDestacado: "Ver Como Vs Cremonese - Serie A En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png",
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg",
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png",
  enlace: "HTML/Disneyplus8.html",
  enlaceProgramacion: "Disneyplus8.html",
  inicio: "2025-09-27T08:00:00",
  fin: "2025-09-27T10:00:00",
  orden: 3
},
{
  titulo: "Heidenheim Vs Augsburg - Bundesliga",
  tituloDestacado: "Ver Heidenheim Vs Augsburg - Bundesliga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
  enlace: "HTML/Disneyplus11.html",
  enlaceProgramacion: "Disneyplus11.html",
  inicio: "2025-09-27T08:30:00",
  fin: "2025-09-27T10:30:00",
  orden: 4
},
{
  titulo: "St. Pauli Vs Bayer Leverkusen - Bundesliga",
  tituloDestacado: "Ver St. Pauli Vs Bayer Leverkusen - Bundesliga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
  enlace: "HTML/Disneyplus12.html",
  enlaceProgramacion: "Disneyplus12.html",
  inicio: "2025-09-27T08:30:00",
  fin: "2025-09-27T10:30:00",
  orden: 5
},
{
  titulo: "Wolfsburg Vs RB Leipzig - Bundesliga",
  tituloDestacado: "Ver Wolfsburg Vs RB Leipzig - Bundesliga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
  enlace: "HTML/Disneyplus10.html",
  enlaceProgramacion: "Disneyplus10.html",
  inicio: "2025-09-27T08:30:00",
  fin: "2025-09-27T10:30:00",
  orden: 6
},
{
  titulo: "Mainz 05 Vs Borussia Dortmund - Bundesliga",
  tituloDestacado: "Ver Mainz 05 Vs Borussia Dortmund - Bundesliga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
  enlace: "HTML/ESPN2.html",
  enlaceProgramacion: "ESPN2.html",
  inicio: "2025-09-27T08:30:00",
  fin: "2025-09-27T10:30:00",
  orden: 7
},
{
  titulo: "Crystal Palace Vs Liverpool - Premier League",
  tituloDestacado: "Ver Crystal Palace Vs Liverpool - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/Disneyplus13.html",
  enlaceProgramacion: "Disneyplus13.html",
  inicio: "2025-09-27T09:00:00",
  fin: "2025-09-27T11:00:00",
  orden: 8
},
{
  titulo: "Leeds Vs Bournemouth - Premier League",
  tituloDestacado: "Ver Leeds Vs Bournemouth - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/DAZN4.html",
  enlaceProgramacion: "DAZN4.html",
  enlacesExtra: ["DAZN4.html", "Disneyplus15.html"],
  inicio: "2025-09-27T09:00:00",
  fin: "2025-09-27T11:00:00",
  orden: 9
},
{
  titulo: "Manchester City Vs Burnley - Premier League",
  tituloDestacado: "Ver Manchester City Vs Burnley - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/Disneyplus14.html",
  enlaceProgramacion: "Disneyplus14.html",
  enlacesExtra: ["Disneyplus14.html", "DAZN2.html"],
  inicio: "2025-09-27T09:00:00",
  fin: "2025-09-27T11:00:00",
  orden: 10
},
{
  titulo: "Atlético De Madrid vs Real Madrid - LaLiga EA Sports",
  tituloDestacado: "Ver Atlético De Madrid vs Real Madrid - LaLiga EA Sports En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
  imagenDestacada: "https://www.realmadridexclusivo.com/uploads/s1/43/89/23/8/atletico-de-madrid-real-madrid.jpeg",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
  enlace: "HTML/destacada4.html",
  enlaceProgramacion: "destacada4.html",
  enlacesExtra: ["destacada4.html", "Dsports.html", "espndeportesusa.html", "DAZNLALIGA.html", "DAZNLALIGA2.html"],
  destacado: true,
  fijarComoDestacado: true,
  inicio: "2025-09-27T09:15:00",
  fin: "2025-09-27T11:15:00",
  orden: 11
},
{
  titulo: "Lorient vs AS Monaco - Ligue 1",
  tituloDestacado: "Ver Lorient vs Monaco - Ligue 1 En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/S4Zffw8f/Ligue1.png",
  imagenDestacada: "https://images.fasttv.prod.yospace.ai/images/1_FastTV/Leagues_Visual/Ligue_1/liga_1_banner.webp",
  logoMini: "https://images.seeklogo.com/logo-png/53/2/ligue-1-logo-png_seeklogo-535794.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png",
  enlace: "HTML/Disneyplus.html?opcion=19",
  enlaceProgramacion: "Disneyplus.html?opcion=19",
  inicio: "2025-09-27T10:00:00",
  fin: "2025-09-27T12:00:00",
  orden: 12
},
{
  titulo: "Juventus Vs Atalanta - Serie A",
  tituloDestacado: "Ver Juventus Vs Atalanta - Serie A En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png",
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg",
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png",
  enlace: "HTML/ESPN.html",
  enlaceProgramacion: "ESPN.html",
  enlacesExtra: ["ESPN.html", "Disneyplus.html?opcion=20", "ESPNMX.html"],
  inicio: "2025-09-27T11:00:00",
  fin: "2025-09-27T13:00:00",
  orden: 13
},
{
  titulo: "Mallorca vs Alavés - LaLiga EA Sports",
  tituloDestacado: "Ver Mallorca vs Alavés - LaLiga EA Sports En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
  imagenDestacada: "https://upload.wikimedia.org/wikipedia/commons/2/2d/RCD_Mallorca_vs_Alaves.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
  enlace: "HTML/ESPN4.html",
  enlaceProgramacion: "ESPN4.html",
  enlacesExtra: ["ESPN4.html", "espndeportesusa.html", "DAZNLALIGA.html"],
  inicio: "2025-09-27T11:30:00",
  fin: "2025-09-27T13:30:00",
  orden: 14
},
{
  titulo: "Chelsea Vs Brighton - Premier League",
  tituloDestacado: "Ver Chelsea Vs Brighton - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/Disneyplus16.html",
  enlaceProgramacion: "Disneyplus16.html",
  enlacesExtra: ["Disneyplus16.html", "DAZN3.html", "ESPN.html"],
  inicio: "2025-09-27T11:30:00",
  fin: "2025-09-27T13:30:00",
  orden: 15
},
{
  titulo: "Borussia M'gladbach Vs Frankfurt - Bundesliga",
  tituloDestacado: "Ver Borussia M'gladbach Vs Eintracht - Bundesliga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
  enlace: "HTML/Disneyplus2.html",
  enlaceProgramacion: "Disneyplus2.html",
  inicio: "2025-09-27T11:30:00",
  fin: "2025-09-27T13:30:00",
  orden: 16
},
{
  titulo: "Toulouse vs Nantes - Ligue 1",
  tituloDestacado: "Ver Toulouse vs Nantes - Ligue 1 En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/S4Zffw8f/Ligue1.png",
  imagenDestacada: "https://images.fasttv.prod.yospace.ai/images/1_FastTV/Leagues_Visual/Ligue_1/liga_1_banner.webp",
  logoMini: "https://images.seeklogo.com/logo-png/53/2/ligue-1-logo-png_seeklogo-535794.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png",
  enlace: "HTML/Disneyplus4.html",
  enlaceProgramacion: "Disneyplus4.html",
  inicio: "2025-09-27T12:00:00",
  fin: "2025-09-27T14:00:00",
  orden: 17
},
{
  titulo: "Gimnasia Vs Rosario Central - Liga Argentina",
  tituloDestacado: "Ver Gimnasia Vs Rosario Central - Liga Profesional Argentina En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/tntsportsa.html",
  enlaceProgramacion: "tntsportsa.html",
  inicio: "2025-09-27T12:30:00",
  fin: "2025-09-27T14:30:00",
  orden: 18
},
{
  titulo: "Aldosivi Vs Argentinos Juniors - Liga Argentina",
  tituloDestacado: "Ver Aldosivi Vs Argentinos Juniors - Liga Profesional Argentina En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPNPremium.html",
  enlaceProgramacion: "ESPNPremium.html",
  inicio: "2025-09-27T12:30:00",
  fin: "2025-09-27T14:30:00",
  orden: 19
},
{
  titulo: "Cagliari Calcio Vs Inter - Serie A",
  tituloDestacado: "Ver Cagliari Vs Inter - Serie A En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png",
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg",
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png",
  enlace: "HTML/Disneyplus8.html",
  enlaceProgramacion: "Disneyplus8.html",
  inicio: "2025-09-27T13:45:00",
  fin: "2025-09-27T15:45:00",
  orden: 20
},
{
  titulo: "Villarreal vs Athletic - LaLiga EA Sports",
  tituloDestacado: "Ver Villarreal vs Athletic - LaLiga EA Sports En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
  imagenDestacada: "https://upload.wikimedia.org/wikipedia/commons/7/70/Villarreal_CF_vs_Athletic.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
  enlace: "HTML/Dsports.html",
  enlaceProgramacion: "Dsports.html",
  inicio: "2025-09-27T14:00:00",
  fin: "2025-09-27T16:00:00",
  orden: 21
},
{
  titulo: "Deportivo Pereira Vs Unión Magdalena - Liga BetPlay",
  tituloDestacado: "Ver Deportivo Pereira Vs Unión Magdalena - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/bucaramanga-vs-once-caldas-finalizacion-2025.webp",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/2/21/Dimayor_Colombia_logo.svg",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-09-27T14:00:00",
  fin: "2025-09-27T16:00:00",
  orden: 22
},
{
  titulo: "Forest Vs Sunderland - Premier League",
  tituloDestacado: "Ver Nottingham Forest Vs Sunderland - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/Disneyplus1.html",
  enlaceProgramacion: "Disneyplus1.html",
  inicio: "2025-09-27T14:00:00",
  fin: "2025-09-27T16:00:00",
  orden: 23
},
{
  titulo: "Tottenham Vs Wolves - Premier League",
  tituloDestacado: "Ver Tottenham Vs Wolves - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/ESPNARGENTINA1.html",
  enlaceProgramacion: "ESPNARGENTINA1.html",
  enlacesExtra: ["ESPNARGENTINA1.html", "DAZN1.html", "Disneyplus9.html", "ESPN.html"],
  inicio: "2025-09-27T14:00:00",
  fin: "2025-09-27T16:00:00",
  orden: 24
},
{
  titulo: "San Lorenzo Vs Godoy Cruz - Liga Argentina",
  tituloDestacado: "Ver San Lorenzo Vs Godoy Cruz - Liga Profesional Argentina En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPNPremium.html",
  enlaceProgramacion: "ESPNPremium.html",
  inicio: "2025-09-27T14:45:00",
  fin: "2025-09-27T16:45:00",
  orden: 25
},
{
  titulo: "Paris Saint-Germain vs Auxerre - Ligue 1",
  tituloDestacado: "Ver Paris Saint-Germain vs Auxerre - Ligue 1 En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/S4Zffw8f/Ligue1.png",
  imagenDestacada: "https://images.fasttv.prod.yospace.ai/images/1_FastTV/Leagues_Visual/Ligue_1/liga_1_banner.webp",
  logoMini: "https://images.seeklogo.com/logo-png/53/2/ligue-1-logo-png_seeklogo-535794.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png",
  enlace: "HTML/Disneyplus11.html",
  enlaceProgramacion: "Disneyplus11.html",
  inicio: "2025-09-27T14:05:00",
  fin: "2025-09-27T16:05:00",
  orden: 26
},
{
  titulo: "Alianza Petrolera Vs Llaneros - Liga BetPlay",
  tituloDestacado: "Ver Alianza Petrolera Vs Llaneros - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/bucaramanga-vs-once-caldas-finalizacion-2025.webp",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/2/21/Dimayor_Colombia_logo.svg",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-09-27T16:10:00",
  fin: "2025-09-27T18:10:00",
  orden: 27
},
{
  titulo: "Defensa y Justicia Vs Boca Juniors - Liga Argentina",
  tituloDestacado: "Ver Defensa y Justicia Vs Boca Juniors - Liga Profesional Argentina En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/tntsportsa.html",
  enlaceProgramacion: "tntsportsa.html",
  enlacesExtra: ["tntsportsa.html", "Disneyplus13.html", "ESPN.html"],
  inicio: "2025-09-27T17:00:00",
  fin: "2025-09-27T19:00:00",
  orden: 28
},
{
  titulo: "Toronto FC Vs Inter Miami CF - MLS 2025",
  tituloDestacado: "Ver Toronto FC Vs Inter Miami CF - MLS 2025 En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://cms.athleticsnyc.com/wp-content/uploads/2019/05/MLS_logo_sm.jpg",
  imagenDestacada: "https://www.worldsoccershop.com/wcm/connect/cada4129-78f1-4ec6-a588-0242b4c4b37a/Hero.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/f/fb/MLS_crest_logo_Mono.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png",
  enlace: "HTML/destacada5.html",
  enlaceProgramacion: "destacada5.html",
  inicio: "2025-09-27T15:30:00",
  fin: "2025-09-27T17:30:00",
  orden: 29
},
{
  titulo: "Deportes Tolima Vs Medellín - Liga BetPlay",
  tituloDestacado: "Ver Deportes Tolima Vs Independiente Medellín - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/bucaramanga-vs-once-caldas-finalizacion-2025.webp",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/2/21/Dimayor_Colombia_logo.svg",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-09-27T18:20:00",
  fin: "2025-09-27T20:20:00",
  orden: 30
},
{
  titulo: "Talleres Vs Sarmiento - Liga Argentina",
  tituloDestacado: "Ver Talleres Vs Sarmiento - Liga Profesional Argentina En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/tntsportsa.html",
  enlaceProgramacion: "tntsportsa.html",
  inicio: "2025-09-27T19:15:00",
  fin: "2025-09-27T21:15:00",
  orden: 31
},
{
  titulo: "Nacional Vs Millonarios - Liga BetPlay",
  tituloDestacado: "Ver Nacional Vs Millonarios - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://www.nacionfutbol.com.co/image/nacionfutbolcomco/bucaramanga-vs-once-caldas-finalizacion-2025.webp",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/2/21/Dimayor_Colombia_logo.svg",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-09-27T20:30:00",
  fin: "2025-09-27T22:30:00",
  orden: 32
},
{
  titulo: "Pachuca Vs Atlético San Luis - Liga MX",
  tituloDestacado: "Ver Pachuca Vs Atlético San Luis - Liga BBVA Bancomer MX En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/TMWDQ9mQ/LigaMX.png",
  imagenDestacada: "https://cdn.brandfetch.io/id6qM-I7Sb/w/1500/h/500/id2L_f-Jc9.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751189495640",
  logoMini: "https://cdn.shoplightspeed.com/shops/649488/files/66293910/image.jpg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
  enlace: "HTML/destacada3.html",
  enlaceProgramacion: "destacada3.html",
  inicio: "2025-09-27T18:00:00",
  fin: "2025-09-27T20:00:00",
  orden: 1
},
{
  titulo: "Atlas FC Vs Necaxa - Liga MX",
  tituloDestacado: "Ver Atlas Vs Necaxa - Liga BBVA Bancomer MX En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/TMWDQ9mQ/LigaMX.png",
  imagenDestacada: "https://cdn.brandfetch.io/id6qM-I7Sb/w/1500/h/500/id2L_f-Jc9.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751189495640",
  logoMini: "https://cdn.shoplightspeed.com/shops/649488/files/66293910/image.jpg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
  enlace: "HTML/TUDNUSA.html",
  enlaceProgramacion: "TUDNUSA.html",
  inicio: "2025-09-27T18:00:00",
  fin: "2025-09-27T20:00:00",
  orden: 2
},
{
  titulo: "Toluca Vs Mazatlán - Liga MX",
  tituloDestacado: "Ver Toluca Vs Mazatlán - Liga BBVA Bancomer MX En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/TMWDQ9mQ/LigaMX.png",
  imagenDestacada: "https://cdn.brandfetch.io/id6qM-I7Sb/w/1500/h/500/id2L_f-Jc9.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751189495640",
  logoMini: "https://cdn.shoplightspeed.com/shops/649488/files/66293910/image.jpg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
  enlace: "HTML/destacada7.html",
  enlaceProgramacion: "destacada7.html",
  inicio: "2025-09-27T20:00:00",
  fin: "2025-09-27T22:00:00",
  orden: 3
},
{
  titulo: "Monterrey Vs Santos Laguna - Liga MX",
  tituloDestacado: "Ver Monterrey Vs Santos Laguna - Liga BBVA Bancomer MX En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/TMWDQ9mQ/LigaMX.png",
  imagenDestacada: "https://cdn.brandfetch.io/id6qM-I7Sb/w/1500/h/500/id2L_f-Jc9.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751189495640",
  logoMini: "https://cdn.shoplightspeed.com/shops/649488/files/66293910/image.jpg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
  enlace: "HTML/TUDNUSA.html",
  enlaceProgramacion: "TUDNUSA.html",
  enlacesExtra: ["TUDNUSA.html", "destacada.html"],
  inicio: "2025-09-27T20:00:00",
  fin: "2025-09-27T22:00:00",
  orden: 4
},
{
  titulo: "América Vs Pumas UNAM - Liga MX",
  tituloDestacado: "Ver América Vs Pumas UNAM - Liga BBVA Bancomer MX En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/TMWDQ9mQ/LigaMX.png",
  imagenDestacada: "https://cdn.brandfetch.io/id6qM-I7Sb/w/1500/h/500/id2L_f-Jc9.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751189495640",
  logoMini: "https://cdn.shoplightspeed.com/shops/649488/files/66293910/image.jpg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
  enlace: "HTML/TUDNUSA.html",
  enlaceProgramacion: "TUDNUSA.html",
  enlacesExtra: ["TUDNUSA.html", "destacada.html"],
  inicio: "2025-09-27T22:05:00",
  fin: "2025-09-28T00:05:00",
  orden: 5
},

// Eventos 28/09/2025
{
  titulo: "Rayo Vallecano vs Sevilla - LaLiga EA Sports",
  tituloDestacado: "Ver Rayo Vallecano vs Sevilla - LaLiga EA Sports En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
  imagenDestacada: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Rayo_vs_Sevilla.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
  enlace: "HTML/DAZNLALIGA.html",
  enlaceProgramacion: "DAZNLALIGA.html",
  enlacesExtra: ["DAZNLALIGA.html", "DAZNLALIGA2.html", "Disneyplus.html", "MovistarLaLiga.html"],
  inicio: "2025-09-28T07:00:00",
  fin: "2025-09-28T09:00:00",
  orden: 1
},
{
  titulo: "Aston Villa Vs Fulham - Premier League",
  tituloDestacado: "Ver Aston Villa Vs Fulham - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/DAZN1.html",
  enlaceProgramacion: "DAZN1.html",
  enlacesExtra: ["DAZN1.html", "Disneyplus.html"],
  inicio: "2025-09-28T08:00:00",
  fin: "2025-09-28T10:00:00",
  orden: 2
},
{
  titulo: "SC Freiburg Vs TSG Hoffenheim - Bundesliga",
  tituloDestacado: "Ver SC Freiburg Vs TSG Hoffenheim - Bundesliga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-09-28T08:30:00",
  fin: "2025-09-28T10:30:00",
  orden: 3
},
{
  titulo: "Elche vs Celta - LaLiga EA Sports",
  tituloDestacado: "Ver Elche vs Celta - LaLiga EA Sports En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
  imagenDestacada: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Elche_vs_Celta.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
  enlace: "HTML/DAZNLALIGA.html",
  enlaceProgramacion: "DAZNLALIGA.html",
  enlacesExtra: ["DAZNLALIGA.html", "DAZNLALIGA2.html", "Disneyplus.html", "MovistarLaLiga.html"],
  inicio: "2025-09-28T09:15:00",
  fin: "2025-09-28T11:15:00",
  orden: 4
},
{
  titulo: "Newcastle Vs Arsenal - Premier League",
  tituloDestacado: "Ver Newcastle Vs Arsenal - Premier League En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.apuestadeldia.com/wp-content/uploads/2024/07/IMG_5682.jpeg",
  imagenDestacada: "https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/08/Premier-League-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
  enlace: "HTML/DAZN1.html",
  enlaceProgramacion: "DAZN1.html",
  inicio: "2025-09-28T10:30:00",
  fin: "2025-09-28T12:30:00",
  orden: 5
},
{
  titulo: "1. FC Köln Vs VfB Stuttgart - Bundesliga",
  tituloDestacado: "Ver 1. FC Köln Vs VfB Stuttgart - Bundesliga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-09-28T10:30:00",
  fin: "2025-09-28T12:30:00",
  orden: 6
},
{
  titulo: "FC Barcelona vs Real Sociedad - LaLiga EA Sports",
  tituloDestacado: "Ver FC Barcelona vs Real Sociedad - LaLiga EA Sports En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
  imagenDestacada: "https://image.discovery.indazn.com/ca/v2/ca/image?id=ag6q3yb7zvmpbtmdy0w6dt7wr_image-header_pRow_1729518898000&quality=70",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
  enlace: "HTML/ESPN.html",
  enlaceProgramacion: "ESPN.html",
  enlacesExtra: ["ESPN.html", "espndeportesusa.html","destacada4.html", "MovistarLaLiga.html", "MovistarLaLiga2.html", "Disneyplus.html"],
  destacado: true,
  fijarComoDestacado: true,
  inicio: "2025-09-28T11:30:00",
  fin: "2025-09-28T13:30:00",
  orden: 7
},
{
  titulo: "Union Berlin Vs Hamburger SV - Bundesliga",
  tituloDestacado: "Ver Union Berlin Vs Hamburger SV - Bundesliga En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.dslweb.de/public/resources/images/anbieter/sky/sky-bundesliga-highlights.jpg",
  imagenDestacada: "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
  logoMini: "https://upload.wikimedia.org/wikinews/en/thumb/1/15/Bundesliga_logo.svg/2321px-Bundesliga_logo.svg.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-09-28T12:30:00",
  fin: "2025-09-28T14:30:00",
  orden: 8
},
{
  titulo: "Racing Vs Independiente - Liga Argentina",
  tituloDestacado: "Ver Racing Vs Independiente - Liga Profesional Argentina En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPNPremium.html",
  enlaceProgramacion: "ESPNPremium.html",
  inicio: "2025-09-28T13:15:00",
  fin: "2025-09-28T15:15:00",
  orden: 9
},
{
  titulo: "AC Milan Vs Nápoles - Serie A",
  tituloDestacado: "Ver Milan Vs Nápoles - Serie A En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/p626RLCR/Serie-ABanner.png",
  imagenDestacada: "https://bubinoblog.altervista.org/wp-content/uploads/2024/08/epg_0dabbe01c1785e1187811e376c988cee.jpeg",
  logoMini: "https://i.ibb.co/HDkzM2Xv/SerieA.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-09-28T13:45:00",
  fin: "2025-09-28T15:45:00",
  orden: 10
},
{
  titulo: "Betis vs Osasuna - LaLiga EA Sports",
  tituloDestacado: "Ver Betis vs Osasuna - LaLiga EA Sports En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.postimg.cc/zvsFtKZp/La-Liga-Banner-Sportsplay.png",
  imagenDestacada: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Betis_vs_Osasuna.png",
  logoMini: "https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/5/53/Bandera_nacional_de_Espa%C3%B1a.png",
  enlace: "HTML/MovistarLaLiga.html",
  enlaceProgramacion: "MovistarLaLiga.html",
  enlacesExtra: ["MovistarLaLiga.html", "DAZNLALIGA.html", "Disneyplus.html"],
  inicio: "2025-09-28T14:00:00",
  fin: "2025-09-28T16:00:00",
  orden: 11
},
{
  titulo: "América de Cali Vs Envigado - Liga BetPlay",
  tituloDestacado: "Ver América de Cali Vs Envigado - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://www.futbolred.com/files/article_main/uploads/2024/09/01/66d4ccf85a4cb.jpeg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/2/21/Dimayor_Colombia_logo.svg",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-09-28T14:00:00",
  fin: "2025-09-28T16:00:00",
  orden: 12
},
{
  titulo: "River Plate Vs Deportivo Riestra - Liga Argentina",
  tituloDestacado: "Ver River Plate Vs Deportivo Riestra - Liga Profesional Argentina En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPNPremium.html",
  enlaceProgramacion: "ESPNPremium.html",
  inicio: "2025-09-28T16:00:00",
  fin: "2025-09-28T18:00:00",
  orden: 13
},
{
  titulo: "Rionegro Águilas Vs Cali - Liga BetPlay",
  tituloDestacado: "Ver Rionegro Águilas Vs Deportivo Cali - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://caracoltv.brightspotcdn.com/dims4/default/3a8a3cd/2147483647/strip/true/crop/1200x675+0+63/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2Fb6%2F7c%2Fd6aebf624c76aa3cdaafcda6c568%2Faguilas-vs-cali.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/2/21/Dimayor_Colombia_logo.svg",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-09-28T16:10:00",
  fin: "2025-09-28T18:10:00",
  orden: 14
},
{
  titulo: "Independiente Rivadavia Vs Huracán - Liga Argentina",
  tituloDestacado: "Ver Independiente Rivadavia Vs Huracán - Liga Profesional Argentina En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPNPremium.html",
  enlaceProgramacion: "ESPNPremium.html",
  inicio: "2025-09-28T17:30:00",
  fin: "2025-09-28T19:30:00",
  orden: 15
},
{
  titulo: "Querétaro Vs Tigres - Liga MX",
  tituloDestacado: "Ver Querétaro Vs Tigres - Liga BBVA Bancomer MX En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/TMWDQ9mQ/LigaMX.png",
  imagenDestacada: "https://cdn.brandfetch.io/id6qM-I7Sb/w/1500/h/500/id2L_f-Jc9.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751189495640",
  logoMini: "https://cdn.shoplightspeed.com/shops/649488/files/66293910/image.jpg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
  enlace: "HTML/destacada.html",
  enlaceProgramacion: "destacada.html",
  inicio: "2025-09-28T18:00:00",
  fin: "2025-09-28T20:00:00",
  orden: 16
},
{
  titulo: "Instituto Vs Lanús - Liga Argentina",
  tituloDestacado: "Ver Instituto Vs Lanús - Liga Profesional Argentina En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPNPremium.html",
  enlaceProgramacion: "ESPNPremium.html",
  inicio: "2025-09-28T18:15:00",
  fin: "2025-09-28T20:15:00",
  orden: 17
},
{
  titulo: "Independiente Santa Fe Vs La Equidad - Liga BetPlay",
  tituloDestacado: "Ver Independiente Santa Fe Vs La Equidad - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://static.eldiario.com.co/wp-content/uploads/2023/09/Santa-Fe-vs-La-Equidad.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/2/21/Dimayor_Colombia_logo.svg",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-09-28T18:20:00",
  fin: "2025-09-28T20:20:00",
  orden: 18
},
{
  titulo: "Junior Vs Deportivo Pasto - Liga BetPlay",
  tituloDestacado: "Ver Junior Vs Deportivo Pasto - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://i.postimg.cc/DwGP1Xx9/Banner-JUN-VS-PASTO.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/2/21/Dimayor_Colombia_logo.svg",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  destacado: true,
  fijarComoDestacado: true,
  inicio: "2025-09-28T20:30:00",
  fin: "2025-09-28T22:30:00",
  orden: 19
},
{
  titulo: "Tijuana Vs Cruz Azul - Liga MX",
  tituloDestacado: "Ver Tijuana Vs Cruz Azul - Liga BBVA Bancomer MX En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/TMWDQ9mQ/LigaMX.png",
  imagenDestacada: "https://cdn.brandfetch.io/id6qM-I7Sb/w/1500/h/500/id2L_f-Jc9.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751189495640",
  logoMini: "https://cdn.shoplightspeed.com/shops/649488/files/66293910/image.jpg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
  enlace: "HTML/destacada.html",
  enlaceProgramacion: "destacada.html",
  inicio: "2025-09-28T22:05:00",
  fin: "2025-09-29T00:05:00",
  orden: 20
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
logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/TNA_Wrestling_%282024%29_Logo.svg/1024px-TNA_Wrestling_%282024%29_Logo.svg.png",
icono: "https://i.ibb.co/67HfKZfn/58a1fac0-3dd3-45f1-94bb-99752959c59c.png",
enlace: "https://www.youtube.com/watch?v=j4MYT-_iZaQ",
enlaceProgramacion: "https://www.youtube.com/watch?v=j4MYT-_iZaQ",
enlacesExtra: ["https://www.youtube.com/watch?v=j4MYT-_iZaQ", "CanalLuchaLibre.html"],
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

// WWE Evento - 11 de octubre
{
titulo: "WWE Crown Jewel - 11 octubre 2025",
tituloDestacado: "Ver Crown Jewel 2025 En Vivo",
descripcion: "Transmisión en vivo",
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

// WWE NXT No Mercy 2025
{
  titulo: "NXT No Mercy 27 de septiembre de 2025",
  tituloDestacado: "Ver NXT No Mercy en Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://dosdossolodos.com/wp-content/uploads/2025/08/1000054969.jpg",
  imagenDestacada: "https://www.ftlwarmemorial.com/assets/img/CS-052851_NXT_No_Mercy_2025_OnSale_KeyArt_1440x500-052e6d3d0e.jpg",
  logoMini: "https://www.wwe.com/f/styles/wwe_large/public/all/2024/10/NXT-Rebrand-Logo--4d733c5f59ea0a316e1f6b8877fafd29.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/WWE_Logo.svg/2243px-WWE_Logo.svg.png",
  enlace: "HTML/destacada2.html",
  enlaceProgramacion: "destacada2.html",
  destacado: true,
  fijarComoDestacado: true,
  orden: 20250927,
  inicio: "2025-09-27T19:00:00",
  fin: "2025-09-27T22:30:00"
},

// AAA — Alianzas AAA 2025: Sábado 27 de septiembre de 2025, 8:00 PM CT (Gimnasio Juan de la Barrera, CDMX)
{
  titulo: "Alianzas AAA 27 de septiembre de 2025",
  tituloDestacado: "Ver Alianzas AAA en Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://cdn2.mediotiempo.com/uploads/media/2025/09/02/alianzas-lucha-libre-aaa-nl.jpg",
  imagenDestacada: "https://www.elfinanciero.com.mx/resizer/v2/ZVNVGBV5H5FB7FVH3I6SPHSTYI.jpeg?auth=278aa0b93c96d379f1b99904deb1ca4fdfde4e041d39c8a8916e96e29f367892",
  logoMini: "https://upload.wikimedia.org/wikipedia/en/c/c2/Antonio_Pe%C3%B1a_Promotions.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/1/10/Lucha_Libre_AAA_Worldwide_logo.png",
  enlace: "HTML/CanalLuchaLibre.html",
  enlaceProgramacion: "CanalLuchaLibre.html",
  destacado: true,
  fijarComoDestacado: true,
  orden: 20250927,
  inicio: "2025-09-27T20:00:00",
  fin: "2025-09-27T23:00:00"
},

// TNA Bound for Glory 2025
{
  titulo: "TNA Bound for Glory 12 de octubre de 2025",
  tituloDestacado: "Ver Bound for Glory en Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://tnawrestling-prod.s3.amazonaws.com/events/posters/fdc657715a797182865306ef164f1c58-1-1.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXBFAWBFBYOVUKTPB%2F20250927%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250927T141420Z&X-Amz-SignedHeaders=host&X-Amz-Expires=14400&X-Amz-Signature=4749a0dd79755117941a8568f915ee9359361896189b506c46c4196d19b9721d",
  imagenDestacada: "https://tnawrestling-prod.s3.amazonaws.com/events/posters/fdc657715a797182865306ef164f1c58-1-1.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXBFAWBFBYOVUKTPB%2F20250927%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250927T141420Z&X-Amz-SignedHeaders=host&X-Amz-Expires=14400&X-Amz-Signature=4749a0dd79755117941a8568f915ee9359361896189b506c46c4196d19b9721d",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/TNA_Wrestling_%282024%29_Logo.svg/1024px-TNA_Wrestling_%282024%29_Logo.svg.png",
  icono: "https://i.ibb.co/67HfKZfn/58a1fac0-3dd3-45f1-94bb-99752959c59c.png",
  enlace: "https://tnawrestling.com/events/tna-wrestling-bound-for-glory-lowell-october-12-2025",
  enlaceProgramacion: "https://tnawrestling.com/events/tna-wrestling-bound-for-glory-lowell-october-12-2025",
  destacado: true,
  fijarComoDestacado: true,
  orden: 1,
  inicio: "2025-10-12T19:00:00",
  fin: "2025-10-12T22:30:00"
},

// AEW WrestleDream 2025
{
  titulo: "AEW WrestleDream 18 de octubre de 2025",
  tituloDestacado: "Ver WrestleDream en Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://static.wixstatic.com/media/815952_99b7f4070e3c48d5a0afe6d7dca4fc28~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90/AEW_Wrestledream_2025_X.jpg",
  imagenDestacada: "https://www.chaifetzarena.com/assets/img/AEW_Wrestledream_2025_VENUE-1200x500-03b9a41f37.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/en/5/57/AEW_WrestleDream.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/AEW_Logo_%28simplified%29.svg/2560px-AEW_Logo_%28simplified%29.svg.png",
  enlace: "HTML/FoxSportsPremium.html",
  enlaceProgramacion: "FoxSportsPremium.html",
  destacado: true,
  fijarComoDestacado: true,
  orden: 20251018,
  inicio: "2025-10-18T18:00:00",
  fin: "2025-10-18T22:00:00"
},

// AEW Full Gear 2025
{
  titulo: "AEW Full Gear 22 de noviembre de 2025",
  tituloDestacado: "Ver Full Gear en Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://static.wixstatic.com/media/815952_06bf0fffeb7f458f9e17a2fca08034a8~mv2.jpg/v1/fill/w_600,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/815952_06bf0fffeb7f458f9e17a2fca08034a8~mv2.jpg",
  imagenDestacada: "https://static.wixstatic.com/media/815952_06bf0fffeb7f458f9e17a2fca08034a8~mv2.jpg/v1/fill/w_600,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/815952_06bf0fffeb7f458f9e17a2fca08034a8~mv2.jpg",
  logoMini: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/be74b3f4-088f-4981-a2fa-c8b64335dc92/deuce4z-9b3d3ac4-f23c-4f3b-8d79-fe74ad1a5bed.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZTc0YjNmNC0wODhmLTQ5ODEtYTJmYS1jOGI2NDMzNWRjOTIvZGV1Y2U0ei05YjNkM2FjNC1mMjNjLTRmM2ItOGQ3OS1mZTc0YWQxYTViZWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.n1XOBPTIaocSOUfOrD9fQxk7pa072kWMN46zmc6JP0w",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/AEW_Logo_%28simplified%29.svg/2560px-AEW_Logo_%28simplified%29.svg.png",
  enlace: "HTML/FoxSportsPremium.html",
  enlaceProgramacion: "FoxSportsPremium.html",
  destacado: true,
  fijarComoDestacado: true,
  orden: 1,
  inicio: "2025-11-22T19:00:00",
  fin: "2025-11-22T23:00:00"
},

// AEW Worlds End 2025
{
  titulo: "AEW Worlds End 27 de diciembre de 2025",
  tituloDestacado: "Ver Worlds End en Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://static.wixstatic.com/media/815952_2eede4824fb14109b13b6d86ffe1611f~mv2.jpg/v1/fill/w_600,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/815952_2eede4824fb14109b13b6d86ffe1611f~mv2.jpg",
  imagenDestacada: "https://static.wixstatic.com/media/815952_2eede4824fb14109b13b6d86ffe1611f~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90/12-27-25-Worlds-End-2025-X.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/AEW_Worlds_End.png/250px-AEW_Worlds_End.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/AEW_Logo_%28simplified%29.svg/2560px-AEW_Logo_%28simplified%29.svg.png",
  enlace: "HTML/FoxSportsPremium.html",
  enlaceProgramacion: "FoxSportsPremium.html",
  destacado: true,
  fijarComoDestacado: true,
  orden: 1,
  inicio: "2025-12-27T18:00:00", 
  fin: "2025-12-27T22:00:00"
},

// WWE Saturday Night's Main Event 2025
{
  titulo: "WWE Saturday Night's Main Event 1 de noviembre de 2025",
  tituloDestacado: "Ver Saturday Night's Main Event en Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://www.wrestlezone.com/wp-content/uploads/sites/8/2025/06/wwe-saturday-nights-main-event-logo.png",
  imagenDestacada: "https://www.wrestlezone.com/wp-content/uploads/sites/8/2025/06/wwe-saturday-nights-main-event-logo.png",
  logoMini: "https://www.wwe.com/f/styles/og_image/public/all/2025/03/Main_Event_2024_Logo_Dark_Background--4d7c5c8e4ba4206747d5127f375f6902.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/WWE_Logo.svg/2243px-WWE_Logo.svg.png",
  enlace: "HTML/destacada2.html",
  enlaceProgramacion: "destacada2.html",
  destacado: true,
  fijarComoDestacado: true,
  orden: 1,
  inicio: "2025-11-01T16:30:00",
  fin: "2025-11-01T19:00:00"
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
orden: 1,
inicio: "2025-11-29T13:00:00",
fin: "2025-11-29T17:00:00"
},
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