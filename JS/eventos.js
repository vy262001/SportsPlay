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

// Eventos 06/10/2025
{
  titulo: "Riestra Vs Vélez - Liga Argentina",
  tituloDestacado: "Ver Riestra Vs Vélez - Liga Profesional Argentina En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPNPremium.html",
  enlaceProgramacion: "ESPNPremium.html",
  inicio: "2025-10-06T17:00:00",
  fin: "2025-10-06T19:00:00",
  orden: 1
},
{
  titulo: "Racing Vs Independiente Rivadavia - Liga Argentina",
  tituloDestacado: "Ver Racing Vs Independiente Rivadavia - Liga Profesional Argentina En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/tntsportsa.html",
  enlaceProgramacion: "tntsportsa.html",
  inicio: "2025-10-06T19:00:00",
  fin: "2025-10-06T21:00:00",
  orden: 2
},
{
  titulo: "La Equidad Vs Once Caldas - Liga BetPlay",
  tituloDestacado: "Ver La Equidad Vs Once Caldas - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://www.futbolred.com/files/article_main/uploads/2024/09/01/66d4ccf85a4cb.jpeg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/2/21/Dimayor_Colombia_logo.svg",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-10-06T19:30:00",
  fin: "2025-10-06T21:30:00",
  orden: 3
},

// Eventos 07/10/2025
{
  titulo: "Envigado Vs Deportivo Pereira - Copa BetPlay 2025",
  tituloDestacado: "Ver Envigado Vs Deportivo Pereira - Copa BetPlay 2025 En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.postimg.cc/kGpQDYc6/Logo-de-la-Copa-Bet-Play-DIMAYOR-1.jpg",
  imagenDestacada: "https://www.365scores.com/es/news/wp-content/uploads/2023/08/Trofeo-Copa-BetPlay.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/2/21/Dimayor_Colombia_logo.svg",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-10-07T15:00:00",
  fin: "2025-10-07T17:00:00",
  orden: 1
},
{
  titulo: "Millonarios Vs América de Cali - Liga BetPlay",
  tituloDestacado: "Ver Millonarios Vs América de Cali - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://i.postimg.cc/DwGP1Xx9/Banner-JUN-VS-PASTO.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/2/21/Dimayor_Colombia_logo.svg",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-10-07T19:30:00",
  fin: "2025-10-07T21:30:00",
  orden: 2
},

// Eventos 08/10/2025
{
  titulo: "Rionegro Águilas Vs Medellín - Liga BetPlay",
  tituloDestacado: "Ver Rionegro Águilas Vs Independiente Medellín - Liga BetPlay En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-12/portada_la_fm_5_3.png.webp",
  imagenDestacada: "https://i.postimg.cc/DwGP1Xx9/Banner-JUN-VS-PASTO.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/2/21/Dimayor_Colombia_logo.svg",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-10-08T15:30:00",
  fin: "2025-10-08T17:30:00",
  orden: 1
},
{
  titulo: "Atlético MG Vs Sport - Brasileirão",
  tituloDestacado: "Ver Atlético MG Vs Sport - Brasileirão En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080",
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/pt/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
  enlace: "HTML/PremiereBR.html",
  enlaceProgramacion: "PremiereBR.html",
  inicio: "2025-10-08T17:00:00",
  fin: "2025-10-08T19:00:00",
  orden: 2
},
{
  titulo: "Mirassol Vs Fluminense - Brasileirão",
  tituloDestacado: "Ver Mirassol Vs Fluminense - Brasileirão En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://t2.tudocdn.net/725820?w=1920&h=1080",
  imagenDestacada: "https://www.mktesportivo.com/wp-content/uploads/2025/03/brasileirao2025.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/pt/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
  icono: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
  enlace: "HTML/PremiereBR.html",
  enlaceProgramacion: "PremiereBR.html",
  inicio: "2025-10-08T19:00:00",
  fin: "2025-10-08T21:00:00",
  orden: 3
},

// Eventos 09/10/2025
{
  titulo: "Finlandia Vs Lituania - Clasificación Mundial UEFA",
  tituloDestacado: "Ver Finlandia Vs Lituania - Clasificación Mundial UEFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/zc8rK6P/Eliminatorias-UEFA.png",
  imagenDestacada: "https://editorial.uefa.com/resources/0299-1ddbad09d3de-a06a5b3fb191-1000/fbl-wc2026-eur-draw.jpeg",
  logoMini: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  icono: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-10-09T11:00:00",
  fin: "2025-10-09T13:00:00",
  orden: 1
},
{
  titulo: "Rumanía Vs Moldavia - Amistoso",
  tituloDestacado: "Ver Rumanía Vs Moldavia - Amistoso de Selecciones En Vivo",
  descripcion: "Transmisión en vivo.",
  imagen: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  imagenDestacada: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  logoMini: "https://static.vecteezy.com/system/resources/thumbnails/029/110/786/small_2x/football-soccer-ball-png.png",
  icono: "https://cdn-icons-png.flaticon.com/512/6013/6013752.png",
  enlace: "HTML/destacada.html",
  enlaceProgramacion: "destacada.html",
  inicio: "2025-10-09T13:00:00",
  fin: "2025-10-09T15:00:00",
  orden: 2
},
{
  titulo: "Bielorrusia Vs Dinamarca - Clasificación Mundial UEFA",
  tituloDestacado: "Ver Bielorrusia Vs Dinamarca - Clasificación Mundial UEFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/zc8rK6P/Eliminatorias-UEFA.png",
  imagenDestacada: "https://editorial.uefa.com/resources/0299-1ddbad09d3de-a06a5b3fb191-1000/fbl-wc2026-eur-draw.jpeg",
  logoMini: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  icono: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-10-09T13:45:00",
  fin: "2025-10-09T15:42:00",
  orden: 3
},
{
  titulo: "Chipre Vs Bosnia - Clasificación Mundial UEFA",
  tituloDestacado: "Ver Chipre Vs Bosnia Herzegovina - Clasificación Mundial UEFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/zc8rK6P/Eliminatorias-UEFA.png",
  imagenDestacada: "https://editorial.uefa.com/resources/0299-1ddbad09d3de-a06a5b3fb191-1000/fbl-wc2026-eur-draw.jpeg",
  logoMini: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  icono: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-10-09T13:45:00",
  fin: "2025-10-09T15:42:00",
  orden: 4
},
{
  titulo: "Islas Feroe Vs Montenegro - Clasificación Mundial UEFA",
  tituloDestacado: "Ver Islas Feroe Vs Montenegro - Clasificación Mundial UEFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/zc8rK6P/Eliminatorias-UEFA.png",
  imagenDestacada: "https://editorial.uefa.com/resources/0299-1ddbad09d3de-a06a5b3fb191-1000/fbl-wc2026-eur-draw.jpeg",
  logoMini: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  icono: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-10-09T13:45:00",
  fin: "2025-10-09T15:42:00",
  orden: 5
},
{
  titulo: "Escocia Vs Grecia - Clasificación Mundial UEFA",
  tituloDestacado: "Ver Escocia Vs Grecia - Clasificación Mundial UEFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/zc8rK6P/Eliminatorias-UEFA.png",
  imagenDestacada: "https://editorial.uefa.com/resources/0299-1ddbad09d3de-a06a5b3fb191-1000/fbl-wc2026-eur-draw.jpeg",
  logoMini: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  icono: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-10-09T13:45:00",
  fin: "2025-10-09T15:42:00",
  orden: 6
},
{
  titulo: "Rep Checa Vs Croacia - Clasificación Mundial UEFA",
  tituloDestacado: "Ver República Checa Vs Croacia - Clasificación Mundial UEFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/zc8rK6P/Eliminatorias-UEFA.png",
  imagenDestacada: "https://editorial.uefa.com/resources/0299-1ddbad09d3de-a06a5b3fb191-1000/fbl-wc2026-eur-draw.jpeg",
  logoMini: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  icono: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-10-09T13:45:00",
  fin: "2025-10-09T15:42:00",
  orden: 7
},
{
  titulo: "Austria Vs San Marino - Clasificación Mundial UEFA",
  tituloDestacado: "Ver Austria Vs San Marino - Clasificación Mundial UEFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/zc8rK6P/Eliminatorias-UEFA.png",
  imagenDestacada: "https://editorial.uefa.com/resources/0299-1ddbad09d3de-a06a5b3fb191-1000/fbl-wc2026-eur-draw.jpeg",
  logoMini: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  icono: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-10-09T13:45:00",
  fin: "2025-10-09T15:42:00",
  orden: 8
},
{
  titulo: "Malta Vs Países Bajos - Clasificación Mundial UEFA",
  tituloDestacado: "Ver Malta Vs Países Bajos - Clasificación Mundial UEFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/zc8rK6P/Eliminatorias-UEFA.png",
  imagenDestacada: "https://editorial.uefa.com/resources/0299-1ddbad09d3de-a06a5b3fb191-1000/fbl-wc2026-eur-draw.jpeg",
  logoMini: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  icono: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-10-09T13:45:00",
  fin: "2025-10-09T15:42:00",
  orden: 9
},
{
  titulo: "Polonia Vs Nueva Zelanda - Amistoso",
  tituloDestacado: "Ver Polonia Vs Nueva Zelanda - Amistoso de Selecciones En Vivo",
  descripcion: "Transmisión en vivo.",
  imagen: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  imagenDestacada: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  logoMini: "https://static.vecteezy.com/system/resources/thumbnails/029/110/786/small_2x/football-soccer-ball-png.png",
  icono: "https://cdn-icons-png.flaticon.com/512/6013/6013752.png",
  enlace: "HTML/destacada.html",
  enlaceProgramacion: "destacada.html",
  inicio: "2025-10-09T13:45:00",
  fin: "2025-10-09T15:45:00",
  orden: 10
},
{
  titulo: "Inglaterra Vs Gales - Amistoso",
  tituloDestacado: "Ver Inglaterra Vs Gales - Amistoso de Selecciones En Vivo",
  descripcion: "Transmisión en vivo.",
  imagen: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  imagenDestacada: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  logoMini: "https://static.vecteezy.com/system/resources/thumbnails/029/110/786/small_2x/football-soccer-ball-png.png",
  icono: "https://cdn-icons-png.flaticon.com/512/6013/6013752.png",
  enlace: "HTML/destacada.html",
  enlaceProgramacion: "destacada.html",
  inicio: "2025-10-09T13:45:00",
  fin: "2025-10-09T15:45:00",
  orden: 11
},
{
  titulo: "Marruecos Vs Bahréin - Amistoso",
  tituloDestacado: "Ver Marruecos Vs Bahréin - Amistoso de Selecciones En Vivo",
  descripcion: "Transmisión en vivo.",
  imagen: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  imagenDestacada: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  logoMini: "https://static.vecteezy.com/system/resources/thumbnails/029/110/786/small_2x/football-soccer-ball-png.png",
  icono: "https://cdn-icons-png.flaticon.com/512/6013/6013752.png",
  enlace: "HTML/destacada.html",
  enlaceProgramacion: "destacada.html",
  inicio: "2025-10-09T14:00:00",
  fin: "2025-10-09T16:00:00",
  orden: 12
},
{
  titulo: "Once Caldas Vs Nacional - Copa BetPlay 2025",
  tituloDestacado: "Ver Once Caldas Vs Nacional - Copa BetPlay 2025 En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.postimg.cc/kGpQDYc6/Logo-de-la-Copa-Bet-Play-DIMAYOR-1.jpg",
  imagenDestacada: "https://www.365scores.com/es/news/wp-content/uploads/2023/08/Trofeo-Copa-BetPlay.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/2/21/Dimayor_Colombia_logo.svg",
  icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_V2s7zzsgjOrYbD6lQMPpJTXN5cPQJckjw&s",
  enlace: "HTML/Winplus.html",
  enlaceProgramacion: "Winplus.html",
  inicio: "2025-10-09T19:30:00",
  fin: "2025-10-09T21:30:00",
  orden: 12
},

// Eventos 10/10/2025
{
  titulo: "Japón Vs Paraguay - Amistoso",
  tituloDestacado: "Ver Japón Vs Paraguay - Amistoso de Selecciones En Vivo",
  descripcion: "Transmisión en vivo.",
  imagen: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  imagenDestacada: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  logoMini: "https://static.vecteezy.com/system/resources/thumbnails/029/110/786/small_2x/football-soccer-ball-png.png",
  icono: "https://cdn-icons-png.flaticon.com/512/6013/6013752.png",
  enlace: "HTML/destacada.html",
  enlaceProgramacion: "destacada.html",
  inicio: "2025-10-10T05:20:00",
  fin: "2025-10-10T07:20:00",
  orden: 1
},
{
  titulo: "Corea del Sur Vs Brasil - Amistoso",
  tituloDestacado: "Ver Corea del Sur Vs Brasil - Amistoso de Selecciones En Vivo",
  descripcion: "Transmisión en vivo.",
  imagen: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  imagenDestacada: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  logoMini: "https://static.vecteezy.com/system/resources/thumbnails/029/110/786/small_2x/football-soccer-ball-png.png",
  icono: "https://cdn-icons-png.flaticon.com/512/6013/6013752.png",
  enlace: "HTML/destacada.html",
  enlaceProgramacion: "destacada.html",
  inicio: "2025-10-10T06:00:00",
  fin: "2025-10-10T08:00:00",
  orden: 2
},
{
  titulo: "Uruguay Vs República Dominicana - Amistoso",
  tituloDestacado: "Ver Uruguay Vs República Dominicana - Amistoso de Selecciones En Vivo",
  descripcion: "Transmisión en vivo.",
  imagen: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  imagenDestacada: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  logoMini: "https://static.vecteezy.com/system/resources/thumbnails/029/110/786/small_2x/football-soccer-ball-png.png",
  icono: "https://cdn-icons-png.flaticon.com/512/6013/6013752.png",
  enlace: "HTML/destacada.html",
  enlaceProgramacion: "destacada.html",
  inicio: "2025-10-10T07:45:00",
  fin: "2025-10-10T09:45:00",
  orden: 3
},
{
  titulo: "Kazajistán Vs Liechtenstein - Clasificación Mundial UEFA",
  tituloDestacado: "Ver Kazajistán Vs Liechtenstein - Clasificación Mundial UEFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/zc8rK6P/Eliminatorias-UEFA.png",
  imagenDestacada: "https://editorial.uefa.com/resources/0299-1ddbad09d3de-a06a5b3fb191-1000/fbl-wc2026-eur-draw.jpeg",
  logoMini: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  icono: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-10-10T09:00:00",
  fin: "2025-10-10T10:57:00",
  orden: 4
},
{
  titulo: "Bolivia Vs Jordania - Amistoso",
  tituloDestacado: "Ver Bolivia Vs Jordania - Amistoso de Selecciones En Vivo",
  descripcion: "Transmisión en vivo.",
  imagen: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  imagenDestacada: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  logoMini: "https://static.vecteezy.com/system/resources/thumbnails/029/110/786/small_2x/football-soccer-ball-png.png",
  icono: "https://cdn-icons-png.flaticon.com/512/6013/6013752.png",
  enlace: "HTML/destacada.html",
  enlaceProgramacion: "destacada.html",
  inicio: "2025-10-10T11:00:00",
  fin: "2025-10-10T13:00:00",
  orden: 5
},
{
  titulo: "Rusia Vs Irán - Amistoso Internacional",
  tituloDestacado: "Ver Rusia Vs Irán - Amistoso de Selecciones En Vivo",
  descripcion: "Transmisión en vivo.",
  imagen: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  imagenDestacada: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  logoMini: "https://static.vecteezy.com/system/resources/thumbnails/029/110/786/small_2x/football-soccer-ball-png.png",
  icono: "https://cdn-icons-png.flaticon.com/512/6013/6013752.png",
  enlace: "HTML/destacada.html",
  enlaceProgramacion: "destacada.html",
  inicio: "2025-10-10T12:00:00",
  fin: "2025-10-10T14:00:00",
  orden: 6
},
{
  titulo: "San Lorenzo Vs San Martín SJ - Liga Argentina",
  tituloDestacado: "Ver San Lorenzo Vs San Martín SJ - Liga Profesional Argentina En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPNPremium.html",
  enlaceProgramacion: "ESPNPremium.html",
  inicio: "2025-10-10T12:30:00",
  fin: "2025-10-10T14:30:00",
  orden: 7
},
{
  titulo: "Kosovo Vs Eslovenia - Clasificación Mundial UEFA",
  tituloDestacado: "Ver Kosovo Vs Eslovenia - Clasificación Mundial UEFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/zc8rK6P/Eliminatorias-UEFA.png",
  imagenDestacada: "https://editorial.uefa.com/resources/0299-1ddbad09d3de-a06a5b3fb191-1000/fbl-wc2026-eur-draw.jpeg",
  logoMini: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  icono: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-10-10T13:45:00",
  fin: "2025-10-10T15:42:00",
  orden: 8
},
{
  titulo: "Islandia Vs Ucrania - Clasificación Mundial UEFA",
  tituloDestacado: "Ver Islandia Vs Ucrania - Clasificación Mundial UEFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/zc8rK6P/Eliminatorias-UEFA.png",
  imagenDestacada: "https://editorial.uefa.com/resources/0299-1ddbad09d3de-a06a5b3fb191-1000/fbl-wc2026-eur-draw.jpeg",
  logoMini: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  icono: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-10-10T13:45:00",
  fin: "2025-10-10T15:42:00",
  orden: 9
},
{
  titulo: "Irl del Norte Vs Eslovaquia - Clasificación Mundial UEFA",
  tituloDestacado: "Ver Irlanda del Norte Vs Eslovaquia - Clasificación Mundial UEFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/zc8rK6P/Eliminatorias-UEFA.png",
  imagenDestacada: "https://editorial.uefa.com/resources/0299-1ddbad09d3de-a06a5b3fb191-1000/fbl-wc2026-eur-draw.jpeg",
  logoMini: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  icono: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-10-10T13:45:00",
  fin: "2025-10-10T15:42:00",
  orden: 10
},
{
  titulo: "Suecia Vs Suiza - Clasificación Mundial UEFA",
  tituloDestacado: "Ver Suecia Vs Suiza - Clasificación Mundial UEFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/zc8rK6P/Eliminatorias-UEFA.png",
  imagenDestacada: "https://editorial.uefa.com/resources/0299-1ddbad09d3de-a06a5b3fb191-1000/fbl-wc2026-eur-draw.jpeg",
  logoMini: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  icono: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-10-10T13:45:00",
  fin: "2025-10-10T15:42:00",
  orden: 11
},
{
  titulo: "Bélgica Vs Macedonia - Clasificación Mundial UEFA",
  tituloDestacado: "Ver Bélgica Vs Macedonia - Clasificación Mundial UEFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/zc8rK6P/Eliminatorias-UEFA.png",
  imagenDestacada: "https://editorial.uefa.com/resources/0299-1ddbad09d3de-a06a5b3fb191-1000/fbl-wc2026-eur-draw.jpeg",
  logoMini: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  icono: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-10-10T13:45:00",
  fin: "2025-10-10T15:42:00",
  orden: 12
},
{
  titulo: "Francia Vs Azerbaiyán - Clasificación Mundial UEFA",
  tituloDestacado: "Ver Francia Vs Azerbaiyán - Clasificación Mundial UEFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/zc8rK6P/Eliminatorias-UEFA.png",
  imagenDestacada: "https://editorial.uefa.com/resources/0299-1ddbad09d3de-a06a5b3fb191-1000/fbl-wc2026-eur-draw.jpeg",
  logoMini: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  icono: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-10-10T13:45:00",
  fin: "2025-10-10T15:42:00",
  orden: 13
},
{
  titulo: "Alemania Vs Luxemburgo - Clasificación Mundial UEFA",
  tituloDestacado: "Ver Alemania Vs Luxemburgo - Clasificación Mundial UEFA En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/zc8rK6P/Eliminatorias-UEFA.png",
  imagenDestacada: "https://editorial.uefa.com/resources/0299-1ddbad09d3de-a06a5b3fb191-1000/fbl-wc2026-eur-draw.jpeg",
  logoMini: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  icono: "https://a.espncdn.com/photo/2022/0317/r987715_2_1000x1000_1-1.png",
  enlace: "HTML/Disneyplus.html",
  enlaceProgramacion: "Disneyplus.html",
  inicio: "2025-10-10T13:45:00",
  fin: "2025-10-10T15:42:00",
  orden: 14
},
{
  titulo: "Defensa Vs Argentinos - Liga Argentina",
  tituloDestacado: "Ver Defensa Vs Argentinos - Liga Profesional Argentina En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPNPremium.html",
  enlaceProgramacion: "ESPNPremium.html",
  inicio: "2025-10-10T14:15:00",
  fin: "2025-10-10T16:15:00",
  orden: 15
},
{
  titulo: "Central Córdoba Vs Unión - Liga Argentina",
  tituloDestacado: "Ver Central Córdoba Vs Unión - Liga Profesional Argentina En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPNPremium.html",
  enlaceProgramacion: "ESPNPremium.html",
  inicio: "2025-10-10T14:45:00",
  fin: "2025-10-10T16:45:00",
  orden: 16
},
{
  titulo: "Newell's Vs Tigre - Liga Argentina",
  tituloDestacado: "Ver Newell's Vs Tigre - Liga Profesional Argentina En Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://marcadegol.com/fotos//2020/05/logo-de-la-liga-profesional-de-futbol.jpg",
  imagenDestacada: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UGOPXXHNUFAE3KLDROHBQGPQXE.jpg",
  logoMini: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Logo_LPF_AFA.svg",
  icono: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png",
  enlace: "HTML/ESPNPremium.html",
  enlaceProgramacion: "ESPNPremium.html",
  inicio: "2025-10-10T16:30:00",
  fin: "2025-10-10T18:30:00",
  orden: 17
},
{
  titulo: "Canadá Vs Australia - Amistoso",
  tituloDestacado: "Ver Canadá Vs Australia - Amistoso de Selecciones En Vivo",
  descripcion: "Transmisión en vivo.",
  imagen: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  imagenDestacada: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  logoMini: "https://static.vecteezy.com/system/resources/thumbnails/029/110/786/small_2x/football-soccer-ball-png.png",
  icono: "https://cdn-icons-png.flaticon.com/512/6013/6013752.png",
  enlace: "HTML/destacada.html",
  enlaceProgramacion: "destacada.html",
  inicio: "2025-10-10T18:30:00",
  fin: "2025-10-10T20:30:00",
  orden: 18
},
{
  titulo: "Argentina Vs Venezuela - Amistoso",
  tituloDestacado: "Ver Argentina Vs Venezuela - Amistoso de Selecciones En Vivo",
  descripcion: "Transmisión en vivo.",
  imagen: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  imagenDestacada: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  logoMini: "https://static.vecteezy.com/system/resources/thumbnails/029/110/786/small_2x/football-soccer-ball-png.png",
  icono: "https://cdn-icons-png.flaticon.com/512/6013/6013752.png",
  enlace: "HTML/destacada.html",
  enlaceProgramacion: "destacada.html",
  inicio: "2025-10-10T19:00:00",
  fin: "2025-10-10T21:00:00",
  orden: 19
},
{
  titulo: "Estados Unidos Vs Ecuador - Amistoso",
  tituloDestacado: "Ver Estados Unidos Vs Ecuador - Amistoso de Selecciones En Vivo",
  descripcion: "Transmisión en vivo.",
  imagen: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  imagenDestacada: "https://cdn.plus.fifa.com/images/public/cms/ec/c6/be/71/ecc6be71-a503-442a-9b5a-788a27cdfbd0.jpg?width=1200&height=630",
  logoMini: "https://static.vecteezy.com/system/resources/thumbnails/029/110/786/small_2x/football-soccer-ball-png.png",
  icono: "https://cdn-icons-png.flaticon.com/512/6013/6013752.png",
  enlace: "HTML/destacada.html",
  enlaceProgramacion: "destacada.html",
  inicio: "2025-10-10T19:30:00",
  fin: "2025-10-10T21:30:00",
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
enlace: "https://www.youtube.com/watch?v=O7PxNoqL-8Y",
enlaceProgramacion: "https://www.youtube.com/watch?v=O7PxNoqL-8Y",
enlacesExtra: ["https://www.youtube.com/watch?v=O7PxNoqL-8Y", "CanalLuchaLibre.html"],
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
imagen: "https://www.wwe.com/f/styles/wwe_16_9_l/public/2025/09/CS-052434_CrownJewel_2025_Threads_1920x1080_v2.jpg",
imagenDestacada: "https://www.wwe.com/f/styles/wwe_16_9_xl/public/2025/10/20250923_CrownJewel_CenaAJ_16x9_date.jpg",
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

// TNA Bound for Glory 2025
{
  titulo: "TNA Bound for Glory 12 de octubre de 2025",
  tituloDestacado: "Ver Bound for Glory en Vivo",
  descripcion: "Transmisión en vivo",
  imagen: "https://i.ibb.co/7JnDwLXk/48a9860321f30f2a6e66178e99de4ab4-1-1.jpg",
  imagenDestacada: "https://tnawrestling.com/media/articles/featured/ecb5ff40cda3d2cfe0ba98e991640792-1-1.jpg",
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