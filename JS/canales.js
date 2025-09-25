document.addEventListener("DOMContentLoaded", function () {
  const canales = [
    { nombre: "Azteca 7", enlace: "azteca7.html", img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Logo_Azteca_7_2011.svg" },
    { nombre: "Azteca Deportes", enlace: "Aztecadeportes.html", img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Azteca_logo.png" },
    { nombre: "Bein Sports Español", enlace: "beinesp.html", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/BeIN-Sports-Logo.svg/473px-BeIN-Sports-Logo.svg.png" },
    { nombre: "Caracol", enlace: "Caracoltv.html", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Caracol_Televisi%C3%B3n_logo.svg/2048px-Caracol_Televisi%C3%B3n_logo.svg.png" },
    { nombre: "DAZN 1", enlace: "DAZN1.html", img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Tv-channel-%E2%94%82-dazn-1.png" },
    { nombre: "DAZN 2", enlace: "DAZN2.html", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Tv-channel-%E2%94%82-dazn-2.png/960px-Tv-channel-%E2%94%82-dazn-2.png" },
    { nombre: "DAZN 3", enlace: "DAZN3.html", img: "https://deporte-libre.click/img/dazn3es.png" },
    { nombre: "DAZN 4", enlace: "DAZN4.html", img: "https://deporte-libre.click/img/dazn4es.png" },
    { nombre: "Disney +", enlace: "Disneyplus.html", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disney_Plus_logo.svg/589px-Disney_Plus_logo.svg.png" },
    { nombre: "DAZN LaLiga", enlace: "DAZNLALIGA.html", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIGRBYLvfkf4Pr-1VsNjRQvZRT4RaaPHIX3XP731X1qRKA33IuTp4FJ0DNYiaRBfX1rGQ&usqp=CAU" },
    { nombre: "DAZN LaLiga 2", enlace: "DAZNLALIGA.html", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIGRBYLvfkf4Pr-1VsNjRQvZRT4RaaPHIX3XP731X1qRKA33IuTp4FJ0DNYiaRBfX1rGQ&usqp=CAU" },
    { nombre: "DSports", enlace: "Dsports.html", img: "https://pelotalibre.io/wp-content/uploads/2025/07/DSports.webp" },
    { nombre: "DSports 2", enlace: "Dsports2.html", img: "https://librepelota.com/img/logo-canal/dsports_2.webp" },
    { nombre: "DSports +", enlace: "Dsportsplus.html", img: "https://i.ibb.co/wF3tH66p/image-removebg-preview.png" },
    { nombre: "ECDF (El Canal del Fútbol)", enlace: "ECDF.html", img: "https://img.utdstc.com/icon/e7b/1ff/e7b1ff52f3b668c5ad37bfaed6d7ca27d06765fda4078d8e0154bb72ae036368:200" },
    { nombre: "ESPN", enlace: "ESPN.html", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/ESPN_logos.png/640px-ESPN_logos.png" },
    { nombre: "ESPN 2", enlace: "ESPN2.html", img: "https://deporte-libre.click/img/espn2.webp" },
    { nombre: "ESPN 3", enlace: "ESPN3.html", img: "https://deporte-libre.click/img/espn3.webp" },
    { nombre: "ESPN 4", enlace: "ESPN4.html", img: "https://deporte-libre.click/img/espn4.webp" },
    { nombre: "ESPN 5", enlace: "ESPN5.html", img: "https://deporte-libre.click/img/espn5.png" },
    { nombre: "ESPN Argentina", enlace: "ESPNARGENTINA1.html", img: "https://logodownload.org/wp-content/uploads/2015/05/espn-logo-5.png" },
    { nombre: "ESPN Brasil", enlace: "ESPNBRASIL.html", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/ESPN_logos.png/640px-ESPN_logos.png" },
    { nombre: "ESPN Deportes USA", enlace: "espndeportesusa.html", img: "https://deporte-libre.click/img/espndeportes.png" },
    { nombre: "ESPN MX", enlace: "ESPNMX.html", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/ESPN_logos.png/640px-ESPN_logos.png" },
    { nombre: "ESPN +", enlace: "ESPNplus.html", img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Espn%2B.png" },
    { nombre: "ESPN Premium", enlace: "ESPNPremium.html", img: "https://cdn.storage.foromedios.com/monthly_2022_05/large_es.png.aa439426a82c10606ef062d67bd99b89.png" },
    { nombre: "ESPN Suramerica", enlace: "ESPNSUR.html", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/ESPN_logos.png/640px-ESPN_logos.png" },
    { nombre: "Fox Sports 1 Argentina", enlace: "Fox1Arg.html", img: "https://cdn.storage.foromedios.com/monthly_2023_02/small.1336428652_FOXSportsARG(2023-).png.98ba18dffe20a821f8f4fdc1f3dfc0b1.png" },
    { nombre: "Fox Sports 2 Argentina", enlace: "Fox2Arg.html", img: "https://r2.thesportsdb.com/images/media/channel/logo/d96btm1707916453.png" },
    { nombre: "Fox Sports 3 Argentina", enlace: "Fox3Arg.html", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Fox_Sports_3_Argentina_2023.svg/2560px-Fox_Sports_3_Argentina_2023.svg.png" },
    { nombre: "Fox Sports MX", enlace: "FoxMX.html", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Fox_Sports_M%C3%A9xico_Logo_2022.png/1200px-Fox_Sports_M%C3%A9xico_Logo_2022.png" },
    { nombre: "Fox Sports MX 2", enlace: "FoxMX2.html", img: "https://i.postimg.cc/Qdz7zWKk/fox2-removebg-preview-1.png" },
    { nombre: "Fox Sports Premium", enlace: "FoxSportsPremium.html", img: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Fox_sports_premium_mx.png" },
    { nombre: "Gol TV", enlace: "GolTV.html", img: "https://upload.wikimedia.org/wikipedia/commons/a/ad/GOLTV.png" },
    { nombre: "MEGA Chile", enlace: "MEGAChile.html", img: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Mega_Chile_2020.png" },
    { nombre: "Movistar Deportes", enlace: "MovistarDeportes.html", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Movistar_Deportes.svg/2560px-Movistar_Deportes.svg.png" },
    { nombre: "Movistar LaLiga", enlace: "MovistarLaLiga.html", img: "https://deporte-libre.click/img/laliga.png" },
    { nombre: "Movistar LaLiga 2", enlace: "MovistarLaLiga2.html", img: "https://deporte-libre.click/img/laliga.png" },
    { nombre: "Movistar Plus", enlace: "Movistarplus.html", img: "https://deporte-libre.click/img/m+.png" },
    { nombre: "Premiere Brasil", enlace: "PremiereBR.html", img: "https://s3.glbimg.com/v1/AUTH_a917c721cb38494aba6a38e47abe658c/premiere-widget/assests/favicon.ico" },
    { nombre: "RCN", enlace: "RCN.html", img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Logo_RCN_Televisi%C3%B3n.png" },
    { nombre: "SporTV", enlace: "SporTV.html", img: "https://upload.wikimedia.org/wikipedia/commons/2/26/SporTV_2021.png" },
    { nombre: "SporTV 2", enlace: "SporTV2.html", img: "https://upload.wikimedia.org/wikipedia/commons/0/01/SporTV2_2021.png" },
    { nombre: "Telefe", enlace: "Telefe.html", img: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Telefe_%28nuevo_logo%29.png" },
    { nombre: "Telemundo USA", enlace: "TelemundoUSA.html", img: "https://upload.wikimedia.org/wikipedia/commons/8/84/Telemundo-nuevo-logo.png" },
    { nombre: "TNT Sports Argentina", enlace: "tntsportsa.html", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/TNT_Sports_2021_logo.svg/2560px-TNT_Sports_2021_logo.svg.png" },
    { nombre: "TNT USA", enlace: "TNTUSA.html", img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/TNT_Sports_Logo.svg" },
    { nombre: "TUDN MX", enlace: "TUDNMX.html", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/TUDN_Logo.svg/2560px-TUDN_Logo.svg.png" },
    { nombre: "TUDN USA", enlace: "TUDNUSA.html", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/TUDN_Logo.svg/2560px-TUDN_Logo.svg.png" },
    { nombre: "TyC Sports", enlace: "tycsports.html", img: "https://deporte-libre.click/img/tycsports.png" },
    { nombre: "TyC Sports 2", enlace: "tycsports2.html", img: "https://deporte-libre.click/img/tycsports.png" },
    { nombre: "TV Pública", enlace: "TVPublica.html", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/TVP_-_Televisi%C3%B3n_P%C3%BAblica_%282021%29.svg/1200px-TVP_-_Televisi%C3%B3n_P%C3%BAblica_%282021%29.svg.png" },
    { nombre: "Univisión USA", enlace: "UnivisionUSA.html", img: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Univision_logo.svg" },
    { nombre: "Canal WWE", enlace: "destacada2.html", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/WWE_Logo.svg/2243px-WWE_Logo.svg.png" },
    { nombre: "Win Sports", enlace: "Winsports.html", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Win_Sports_nuevo_logo.svg/1200px-Win_Sports_nuevo_logo.svg.png" },
    { nombre: "Win Sports +", enlace: "Winplus.html", img: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Win%2B_F%C3%BAtbol_logo.svg" }
  ];
  const contenedor = document.getElementById("canalesRow");

  canales.forEach(canal => {
    const col = document.createElement("div");
    col.className = "col-6 col-md-4 col-lg-2";

    col.innerHTML = `
      <div class="card h-100">
        <div class="card-body text-center">
          <div class="logoContenedor mb-3">
            <div class="logoCanal">
              <img src="${canal.img}" class="img2" alt="${canal.nombre}">
            </div>
          </div>
          <h5 class="card-title">Ver ${canal.nombre}</h5>
          <a href="${canal.enlace}" class="btn btn-light w-100 fw-bold">Ver en VIVO</a>
        </div>
      </div>
    `;

    contenedor.appendChild(col);
  });
});