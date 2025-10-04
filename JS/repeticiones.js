const eventosRepeticiones = [
  {
    titulo: "WWE SmackDown 3 de Octubre 2025 Repetición",
    evento: "SMACKDOWN",
    imagen: "https://img.solowrestling.com/images/144/144610-smackdown.jpg",
    url: "//ok.ru/videoembed/9534961552027?nochat=1"
  },
  {
    titulo: "AEW Dynamite 1 de Octubre 2025 Repetición",
    evento: "DYNAMITE",
    imagen: "https://img.solowrestling.com/images/144/144585-aew-trios.jpg",
    url: "//ok.ru/videoembed/9530493176475?nochat=1"
  },
  {
    titulo: "WWE NXT 30 de Septiembre 2025 Repetición",
    evento: "NXT",
    imagen: "https://img.solowrestling.com/images/144/144545-wwe-nxt.jpg",
    url: "//ok.ru/videoembed/9522304125595?nochat=1"
  },
  {
    titulo: "WWE RAW 29 de Septiembre 2025 Repetición",
    evento: "RAW",
    imagen: "https://turnheelwrestling.com/wp-content/uploads/2025/09/20250922_RAW_Netflix_Match_DomRusev_16x9_Monday-1024x576.jpg",
    url: "//ok.ru/videoembed/9518273333915?nochat=1"
  },
  {
    titulo: "Lucha Libre AAA Alianzas 27 de Septiembre 2025 Repetición",
    evento: "AAA",
    imagen: "https://cdn2.mediotiempo.com/uploads/media/2025/09/02/alianzas-lucha-libre-aaa-nl.jpg",
    url: "//ok.ru/videoembed/9513210874523?nochat=1"
  },
  {
    titulo: "WWE NXT No Mercy 2025 Repetición",
    evento: "NXT",
    imagen: "https://www.wwe.com/f/styles/wwe_16_9_xl/public/2025/09/20250912_Match_NXT_NoMarcy_JacyLola_16x9_date.jpg",
    url: "//ok.ru/videoembed/9510679939739?nochat=1"
  },
  {
    titulo: "AEW Collision 27 de Septiembre 2025 Repetición",
    evento: "COLLISION",
    imagen: "https://turnheelwrestling.com/wp-content/uploads/2025/09/G1z1v1HWIAAzNLZ-1024x576.jpg",
    url: "//ok.ru/videoembed/9510680005275?nochat=1"
  },
  {
    titulo: "WWE SmackDown 26 de Septiembre 2025 Repetición",
    evento: "SMACKDOWN",
    imagen: "https://i0.wp.com/www.wwe.com/f/styles/wwe_16_9_xl_r/public/2025/09/20250919_SD_Match_WomensTriple_TITLE_16x9_Friday.jpg?resize=740%2C416&ssl=1",
    url: "//ok.ru/videoembed/9506743061147?nochat=1"
  },
  {
    titulo: "AEW Dynamite 24 de Septiembre 2025 Repetición",
    evento: "DYNAMITE",
    imagen: "https://turnheelwrestling.com/wp-content/uploads/2025/09/G1jy5-bWIAAp8Xr.jpg",
    url: "//ok.ru/videoembed/9498784107163?nochat=1"
  },
  {
    titulo: "WWE NXT 23 de Septiembre 2025 Repetición",
    evento: "NXT",
    imagen: "https://i0.wp.com/www.wwe.com/f/styles/wwe_16_9_xl_r/public/2025/09/20250916_NXT_Match_CandiceLainey_16x9_Tonight.jpg?resize=740%2C416&ssl=1",
    url: "//ok.ru/videoembed/9495142730395?nochat=1"
  },
  {
    titulo: "WWE RAW 22 de Septiembre 2025 Repetición",
    evento: "RAW",
    imagen: "https://img.solowrestling.com/images/144/tablet144362-wwe-raw.jpg",
    url: "//ok.ru/videoembed/9491052432027?nochat=1"
  },
  {
    titulo: "WWE Wrestlepalooza 2025 Repetición",
    evento: "WWE",
    imagen: "https://images2.minutemediacdn.com/image/upload/c_crop,w_1599,h_899,x_0,y_0/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/wrestling_on_fannation/01k5jd1ygqvbaayh25p8.jpg",
    url: "//ok.ru/videoembed/9483382819483?nochat=1"
  },
  {
    titulo: "AEW All Out Toronto 2025 Repetición",
    evento: "AEW",
    imagen: "https://i0.wp.com/fightsatw.com/wp-content/uploads/2025/09/AEW-All-Out-Toronto-2025-x3.jpg?fit=1024%2C576&ssl=1",
    url: "//ok.ru/videoembed/9485867551387?nochat=1"
  },
  {
    titulo: "WWE SmackDown 19 de Septiembre 2025 Repetición",
    evento: "SMACKDOWN",
    imagen: "https://portalciudad.com.ar/wp-content/uploads/2025/09/tablet144277-wwe-smackdown.jpg",
    url: "//ok.ru/videoembed/9479545096859?nochat=1"
  },
  {
    titulo: "AEW Dynamite 17 de Septiembre 2025 Repetición",
    evento: "DYNAMITE",
    imagen: "https://static.wixstatic.com/media/815952_c789500d84ce45c68dd4a2e0d0f17bbd~mv2.jpg/v1/fill/w_568,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/815952_c789500d84ce45c68dd4a2e0d0f17bbd~mv2.jpg",
    url: "//ok.ru/videoembed/9471973788315?nochat=1"
  },
  {
    titulo: "WWE NXT 16 de Septiembre 2025 Repetición",
    evento: "NXT",
    imagen: "https://411mania.com/wp-content/uploads/2025/09/WWE-NXT-Homecoming-Ethan-Page-vs-Tyler-Breeze-e1758026125516-645x370.jpeg",
    url: "//ok.ru/videoembed/9468245314203?nochat=1"
  },
  {
    titulo: "WWE RAW 15 de Septiembre 2025 Repetición",
    evento: "RAW",
    imagen: "https://dosdossolodos.com/wp-content/uploads/2025/09/20250909_RAW_Netflix_Match_AJPunkBeckyRollins_16x9_Tonight.jpg",
    url: "//ok.ru/videoembed/9464666917531?nochat=1"
  },
  {
    titulo: "AEW Collision 13 de Septiembre 2025 Repetición",
    evento: "COLLISION",
    imagen: "https://turnheelwrestling.com/wp-content/uploads/2025/09/mox-1-scaled.jpeg",
    url: "//ok.ru/videoembed/9457602923163?nochat=1"
  },
  {
    titulo: "WWE Worlds Collide 12 de Septiembre 2025 Repetición",
    evento: "AAA",
    imagen: "https://www.wwe.com/f/styles/wwe_16_9_xl/public/2025/09/20250818_WorldCollide_LV_VIkingoDom_16x9_Date_0.jpg",
    url: "//ok.ru/videoembed/9737475132004?nochat=1"
  },
  {
    titulo: "WWE SmackDown 12 de Septiembre 2025 Repetición",
    evento: "SMACKDOWN",
    imagen: "https://img.solowrestling.com/images/144/144086-smackdown.jpg",
    url: "//ok.ru/videoembed/9453997722267?nochat=1"
  },
  {
    titulo: "AEW Dynamite 10 de Septiembre 2025 Repetición",
    evento: "DYNAMITE",
    imagen: "https://img.solowrestling.com/images/144/144059-aew-hangman-alexander.jpg",
    url: "//ok.ru/videoembed/9446599297691?nochat=1"
  },
  {
    titulo: "WWE NXT 9 de Septiembre 2025 Repetición",
    evento: "NXT",
    imagen: "https://turnheelwrestling.com/wp-content/uploads/2025/09/tt-1024x576.jpeg",
    url: "//ok.ru/videoembed/9446198872731?nochat=1"
  },
  {
    titulo: "WWE RAW 8 de Septiembre 2025 Repetición",
    evento: "RAW",
    imagen: "https://portalciudad.com.ar/wp-content/uploads/2025/09/tablet143990-wwe-raw.jpg",
    url: "//ok.ru/videoembed/9439501486747?nochat=1"
  },
  {
    titulo: "AEW Collision 6 de Septiembre 2025 Repetición",
    evento: "COLLISION",
    imagen: "https://turnheelwrestling.com/wp-content/uploads/2025/09/KF-1024x576.jpeg",
    url: "//ok.ru/videoembed/9432823564955?nochat=1"
  },
  {
    titulo: "WWE SmackDown 5 de Septiembre 2025 Repetición",
    evento: "SMACKDOWN",
    imagen: "https://turnheelwrestling.com/wp-content/uploads/2025/09/20250618_SD_Match_Punk_16x9_Tonight-1024x576.jpg",
    url: "//ok.ru/videoembed/9429472709275?nochat=1"
  },
  {
    titulo: "AEW Dynamite 3 de Septiembre 2025 Repetición",
    evento: "DYNAMITE",
    imagen: "https://img.solowrestling.com/images/143/143879-aew-mone-windsor.jpg",
    url: "//ok.ru/videoembed/9422875986587?nochat=1"
  },
  {
    titulo: "WWE NXT 2 de Septiembre 2025 Repetición",
    evento: "NXT",
    imagen: "https://img.solowrestling.com/images/143/143847-nxt.jpg",
    url: "//ok.ru/videoembed/9419528145563?nochat=1"
  },
  {
    titulo: "WWE RAW 1 de Septiembre 2025 Repetición",
    evento: "RAW",
    imagen: "https://imageio.forbes.com/specials-images/imageserve/68b5d71c84a04ea2ec54abcc/0x0.jpg?format=jpg&height=600&width=1200&fit=bounds",
    url: "//ok.ru/videoembed/9415888865947?nochat=1"
  },
  {
    titulo: "WWE Clash In Paris 2025 Repetición",
    evento: "WWE",
    imagen: "https://cdn2.mediotiempo.com/uploads/media/2025/08/26/wwe-clash-in-paris-fecha.jpg",
    url: "//ok.ru/videoembed/9412022241947?nochat=1"
  },
  {
    titulo: "AEW Collision 30 de Agosto 2025 Repetición",
    evento: "COLLISION",
    imagen: "https://img.solowrestling.com/images/143/143790-collision-30-ago.jpg",
    url: "//ok.ru/videoembed/9408823495323?nochat=1"
  },
  {
    titulo: "WWE SmackDown 29 de Agosto 2025 Repetición",
    evento: "SMACKDOWN",
    imagen: "https://img.solowrestling.com/images/143/mobile143764-wwe-smackdown.jpg",
    url: "//ok.ru/videoembed/9405067561627?nochat=1"
  },
  {
    titulo: "AEW Dynamite 27 de Agosto 2025 Repetición",
    evento: "DYNAMITE",
    imagen: "https://latinluchas.com/wp-content/uploads/2025/08/AEW-Dynamite-27-de-Agosto-2025-En-Vivo-y-Repeticion.webp",
    url: "https://latinlucha.upns.online/#h9wiu8"
  },
  {
    titulo: "WWE NXT 26 de Agosto 2025 Repetición",
    evento: "NXT",
    imagen: "https://img.solowrestling.com/images/143/mobile143689-nxt-wwe.jpg",
    url: "//ok.ru/videoembed/9394043095707?nochat=1"
  },
  {
    titulo: "WWE RAW 25 de Agosto 2025 Repetición",
    evento: "RAW",
    imagen: "https://turnheelwrestling.com/wp-content/uploads/2025/08/20250818_RAW_Netflix_Match_RheaRox_16x9_Monday-1024x576.jpg",
    url: "//ok.ru/videoembed/9390247840411?nochat=1"
  },  
  {
    titulo: "WWE NXT HeatWave 2025 Repetición",
    evento: "NXT",
    imagen: "https://img.solowrestling.com/images/143/143632-heatwave.jpg",
    url: "//ok.ru/videoembed/9383448742555?nochat=1"
  },
  {
    titulo: "AEW Forbidden Door 2025 Repetición",
    evento: "AEW",
    imagen: "https://blob.postadeportes.com/images/2025/08/24/gzfoun6xmae6oek-1-418e69d4-focus-0-0-608-342.webp",
    url: "//ok.ru/videoembed/9382969936539?nochat=1"
  },
  {
    titulo: "AEW Collision 23 de Agosto 2025 Repetición",
    evento: "COLLISION",
    imagen: "https://latinluchas.com/wp-content/uploads/2025/08/AEW-Collision-de-Agosto-2025-En-Vivo-y-Repeticion.webp",
    url: "//ok.ru/videoembed/9379830434459?nochat=1"
  },
  {
    titulo: "WWE SmackDown 22 de Agosto 2025 Repetición",
    evento: "SMACKDOWN",
    imagen: "https://i0.wp.com/www.wwe.com/f/styles/wwe_16_9_xl_r/public/2025/08/20250815_SD_Match_MCMGMeloMiz_16x9_Friday.jpg?resize=740%2C416&ssl=1",
    url: "//ok.ru/videoembed/9376020368027?nochat=1"
  },
  {
    titulo: "TNA iMPACT! 21 de Agosto 2025 Repeticion",
    evento: "TNA",
    imagen: "https://img.solowrestling.com/images/143/143562-tna.jpg",
    url: "//ok.ru/videoembed/9657158863460?nochat=1"
  },
  {
    titulo: "AEW Dynamite 20 de Agosto 2025 Repetición",
    evento: "DYNAMITE",
    imagen: "https://i0.wp.com/aiptcomics.com/wp-content/uploads/2025/08/Gyy3_pKWQAAK6Fp.jpeg?resize=740%2C416&ssl=1",
    url: "//ok.ru/videoembed/9370525305499?nochat=1"
  },
  {
    titulo: "WWE NXT 19 de Agosto 2025 Repetición",
    evento: "NXT",
    imagen: "https://img.solowrestling.com/images/143/mobile143506-wwe-nxt.jpg",
    url: "//ok.ru/videoembed/9356994415259?nochat=1"
  },
  {
    titulo: "WWE RAW 18 de Agosto 2025 Repetición",
    evento: "RAW",
    imagen: "https://i0.wp.com/www.wwe.com/f/styles/wwe_16_9_xl_r/public/2025/08/20250815_RAW_Netflix_Match_JeyBron_16x9_tonight.jpg?resize=740%2C416&ssl=1",
    url: "//ok.ru/videoembed/9351989037723?nochat=1"
  },  
  {
    titulo: "Lucha Libre AAA TripleMania XXXIII Repetición",
    evento: "AAA",
    imagen: "https://i0.wp.com/www.prwrestling.com/nw/wp-content/uploads/2025/08/aaa_11zon.jpg?fit=960%2C540&quality=89&ssl=1",
    url: "//ok.ru/videoembed/9346063207067?nochat=1"
  },
  {
    titulo: "AEW Collision 16 de Agosto 2025 Repetición",
    evento: "COLLISION",
    imagen: "https://img.solowrestling.com/images/143/tablet143434-aew-collision.jpg",
    url: "//ok.ru/videoembed/9343947442843?nochat=1"
  },
  {
    titulo: "WWE SmackDown 15 de Agosto 2025 Repetición",
    evento: "SMACKDOWN",
    imagen: "https://portalciudad.com.ar/wp-content/uploads/2025/08/tablet143403-smackdown.jpg",
    url: "//ok.ru/videoembed/9340045232795?nochat=1"
  },
  {
    titulo: "TNA Emergence 2025 Repeticion",
    evento: "TNA",
    imagen: "https://img.solowrestling.com/images/143/143412-tna-emergence.jpg",
    url: "//ok.ru/videoembed/9340178008731?nochat=1"
  },
  {
    titulo: "AEW Dynamite 13 de Agosto 2025 Repetición",
    evento: "DYNAMITE",
    imagen: "https://img.solowrestling.com/images/143/143352-aew-dynamite.jpg",
    url: "//ok.ru/videoembed/9331438455451?nochat=1"
  },
  {
    titulo: "WWE NXT 12 de Agosto 2025 Repetición",
    evento: "NXT",
    imagen: "https://img.solowrestling.com/images/143/143324-wwe-nxt.jpg",
    url: "//ok.ru/videoembed/9328549825179?nochat=1"
  },
  {
    titulo: "WWE RAW 11 de Agosto 2025 Repetición",
    evento: "RAW",
    imagen: "https://www.wrestleview.com/wp-content/uploads/2025/08/20250808_RAW_Netflix_Match_CMPunk_16x9_Tonight-550x309.jpg",
    url: "https://hglink.to/e/6tx97c6p86le"
  },  
  {
    titulo: "AEW Collision 9 de Agosto 2025 Repetición",
    evento: "COLLISION",
    imagen: "https://img.solowrestling.com/images/143/tablet143253-collision-9-agosto.jpg",
    url: "//ok.ru/videoembed/9322003171995?nochat=1"
  },
  {
    titulo: "WWE SmackDown 8 de Agosto 2025 Repetición",
    evento: "SMACKDOWN",
    imagen: "https://img.solowrestling.com/images/143/tablet143219-cena-john.jpg",
    url: "//ok.ru/videoembed/9296806021787?nochat=1"
  },  
  {
    titulo: "AEW Dynamite 6 de Agosto 2025 Repetición",
    evento: "DYNAMITE",
    imagen: "https://img.solowrestling.com/images/143/tablet143006-aew-dynamite.jpg",
    url: "//ok.ru/videoembed/9311170595483?nochat=1"
  },
  {
    titulo: "WWE NXT 5 de Agosto 2025 Repetición",
    evento: "NXT",
    imagen: "https://img.solowrestling.com/images/143/tablet143140-nxt.jpg",
    url: "//ok.ru/videoembed/9308164983451?nochat=1"
  },
  {
    titulo: "WWE RAW 4 de Agosto 2025 Repetición",
    evento: "RAW",
    imagen: "https://i0.wp.com/www.wwe.com/f/styles/wwe_16_9_xl_r/public/2025/08/20250707_RAW_Netflix_Match_BeckyLynch_16x9_Tonight.jpg?resize=740%2C416&ssl=1",
    url: "//ok.ru/videoembed/9305134008987?nochat=1"
  },  
  {
    titulo: "WWE SummerSlam 2025 Noche 2 Repeticion",
    evento: "WWE",
    imagen: "https://www.usatoday.com/gcdn/authoring/authoring-images/2025/07/30/USAT/85448348007-20240703-summer-slam-cody-cena-16-x-9-clean.jpg?crop=1919,1079,x0,y0&width=660&height=371&format=pjpg&auto=webp",
    url: "//ok.ru/videoembed/9301956037275?nochat=1"
  },
  {
    titulo: "WWE SummerSlam 2025 Noche 1 Repeticion",
    evento: "WWE",
    imagen: "https://www.usatoday.com/gcdn/authoring/authoring-images/2025/07/30/USAT/85447864007-20240722-summer-slam-mens-tag-16-x-9-clean.jpg?crop=1919,1079,x0,y0&width=660&height=371&format=pjpg&auto=webp",
    url: "//ok.ru/videoembed/9299140741787?nochat=1"
  },
  {
    titulo: "WWE SmackDown 1 de Agosto Repetición",
    evento: "SMACKDOWN",
    imagen: "https://khelnow.com/_next/image?url=https%3A%2F%2Fassets.khelnow.com%2Fnews%2Fuploads%2F2025%2F08%2FWWE-SmackDown-August-1-John-Cena.png&w=1920&q=75",
    url: "//ok.ru/videoembed/9296806021787?nochat=1"
  },  
  {
    titulo: "AEW Collision 31 de Julio 2025 Repetición",
    evento: "COLLISION",
    imagen: "https://img.solowrestling.com/images/142/tablet142998-aew-rhodes-fletcher.jpg",
    url: "//ok.ru/videoembed/9294361201307?nochat=1"
  },
  {
    titulo: "AEW Dynamite 30 de Julio 2025 Repetición",
    evento: "DYNAMITE",
    imagen: "https://img.solowrestling.com/images/142/tablet142965-aew-mox-page.jpg",
    url: "//ok.ru/videoembed/9291785308827?nochat=1"
  },
  {
    titulo: "WWE NXT 29 de Julio 2025 Repetición",
    evento: "NXT",
    imagen: "https://i0.wp.com/www.wwe.com/f/styles/wwe_16_9_xl_r/public/2025/07/20250722_NXT_Match_JaidaJazmyn_16x9_tonight.jpg?resize=740%2C416&ssl=1",
    url: "//ok.ru/videoembed/9288671955611?nochat=1"
  },
  {
    titulo: "WWE RAW 28 de Julio 2025 Repetición",
    evento: "RAW",
    imagen: "https://imageio.forbes.com/specials-images/imageserve/68882115e1b09c5df64f4cb2/An-eight-woman-all-star-tag-team-match-advertised-for-WWE-Raw-/960x0.jpg?format=jpg&width=960",
    url: "//ok.ru/videoembed/9285359700635?nochat=1"
  },
  {
    titulo: "AEW Collision 26 Julio 2025 Repetición",
    evento: "COLLISION",
    imagen: "https://i0.wp.com/aiptcomics.com/wp-content/uploads/2025/07/Gwqsg4IXIAA7kYp.jpeg?resize=740%2C416&ssl=1",
    url: "//ok.ru/videoembed/9279431772827?nochat=1"
  },
  {
    titulo: "Lucha Libre AAA Alianzas - 25 de Julio 2025 Repeticion",
    evento: "AAA",
    imagen: "https://img.solowrestling.com/images/142/142836-patron-vs-mesias.jpg",
    url: "//ok.ru/videoembed/9278419176091?nochat=1"
  },
  {
    titulo: "WWE SmackDown 25 de Julio 2025 Repetición",
    evento: "SMACKDOWN",
    imagen: "https://i0.wp.com/www.wwe.com/f/styles/wwe_16_9_xl_r/public/all/2025/07/20250718_SD_Match_RoxanneBliss_16x9_friday--703d21514d8c1372a1ca4f6909cd5b40.jpg?resize=740%2C416&ssl=1",
    url: "//ok.ru/videoembed/9276492810907?nochat=1"
  },
  {
    titulo: "AEW Dynamite 23 de Julio 2025 Repetición",
    evento: "DYNAMITE",
    imagen: "https://img.solowrestling.com/images/142/tablet142772-aew-hangman-yuta.jpg",
    url: "//ok.ru/videoembed/9271574661787?nochat=1"
  },
  {
    titulo: "WWE NXT 22 de Julio 2025 Repetición",
    evento: "NXT",
    imagen: "https://d1fcaprh3kb5t7.cloudfront.net/wp-content/uploads/2025/07/21183536/GwZzqDnbEAMpB_u.jpeg",
    url: "//ok.ru/videoembed/9269170539163?nochat=1"
  },
  {
    titulo: "WWE RAW 21 de Julio 2025 Repetición",
    evento: "RAW",
    imagen: "https://aiptcomics.com/wp-content/uploads/2025/07/20250718_RAW_Netflix_Match_Roman_16x9_tonight-c499638db86b4aa51554565546bc256a.jpg",
    url: "//ok.ru/videoembed/9266800757403?nochat=1"
  },
  {
    titulo: "TNA Slammiversary 2025 Repeticion",
    evento: "TNA",
    imagen: "https://www.pwtorch.com/site/wp-content/uploads/post/2025/07/Trick-Williams-vs-Joe-Hendry-vs-Mike-Santana-5-678x381.jpg",
    url: "//ok.ru/videoembed/9264174336667?nochat=1"
  },
  {
    titulo: "AEW Collision 19 Julio 2025 Repetición",
    evento: "COLLISION",
    imagen: "https://latinluchas.com/wp-content/uploads/2025/07/AEW-Collision-19-de-Julio-2025-En-Vivo-y-Repeticion.webp",
    url: "//ok.ru/videoembed/9261238389403?nochat=1"
  },
  {
    titulo: "WWE SmackDown 18 de Julio 2025 Repetición",
    evento: "SMACKDOWN",
    imagen: "https://img.solowrestling.com/images/142/tablet142638-sd.jpg",
    url: "//ok.ru/videoembed/9258111470235?nochat=1"
  },
  {
    titulo: "AEW Dynamite 16 de Julio 2025 Repetición",
    evento: "DYNAMITE",
    imagen: "https://latinluchas.com/wp-content/uploads/2025/07/WWE-Dynamite-16-de-Julio-2025-En-Vivo-y-Repeticion.webp",
    url: "//ok.ru/videoembed/9252542220955?nochat=1"
  },
  {
    titulo: "WWE NXT 15 de Julio 2025 Repetición",
    evento: "NXT",
    imagen: "https://turnheelwrestling.com/wp-content/uploads/2025/07/img_3260-1-scaled.jpg",
    url: "//ok.ru/videoembed/9250011679387?nochat=1"
  },
  {
    titulo: "WWE RAW 14 de Julio 2025 Repetición",
    evento: "RAW",
    imagen: "https://imageio.forbes.com/specials-images/imageserve/6875a7955fe80488860da519/WWE-No--1-Contender-Gauntlet-Match-with-CM-Punk--Jey-Uso--LA-Knight--Penta-and-Bron/960x0.jpg?format=jpg&width=960",
    url: "//ok.ru/videoembed/9247509777051?nochat=1"
  },
  {
    titulo: "WWE Evolution 2025 Repetición",
    evento: "WWE",
    imagen: "https://e.rpp-noticias.io/xlarge/2025/07/11/452245_1769401.webp",
    url: "//ok.ru/videoembed/9243021216411?nochat=1"
  },
  {
    titulo: "WWE Saturday Night's Main Event 12 de Julio 2025 Repetición",
    evento: "WWE",
    imagen: "https://i.ytimg.com/vi/1eoeHDID2jA/maxresdefault.jpg",
    url: "//ok.ru/videoembed/9237928020635?nochat=1"
  },
  {
    titulo: "AEW All in Texas 2025 Repetición",
    evento: "AEW",
    imagen: "https://cdn.wrestletalk.com/wp-content/uploads/2024/11/jon-moxley-hangman-adam-page-aew-all-in-texas.jpg",
    url: "//ok.ru/videoembed/9242911705755?nochat=1"
  },
  {
    titulo: "WWE NXT The Great American Bash 2025 Repetición",
    evento: "NXT",
    imagen: "https://i0.wp.com/www.wwe.com/f/styles/wwe_16_9_xl/public/all/2025/07/20250708_Match_NXT_GAB_PageSaints_16x9_Date--334b138d73f24a7cad8692082e3fd261.jpg?resize=740%2C416&ssl=1",
    url: "//ok.ru/videoembed/9240460266139?nochat=1"
  },
  {
    titulo: "WWE SmackDown 11 de Julio 2025 Repetición",
    evento: "SMACKDOWN",
    imagen: "https://lastwordonsports.com/prowrestling/wp-content/uploads/sites/15/2025/07/11-35.jpg",
    url: "//ok.ru/videoembed/9237928020635?nochat=1"
  },
  {
    titulo: "AEW Dynamite 9 de Julio 2025 Repetición",
    evento: "DYNAMITE",
    imagen: "https://img.solowrestling.com/images/142/142382-aew-dynamite.jpg",
    url: "//ok.ru/videoembed/9232573926043?nochat=1"
  },
  {
    titulo: "WWE NXT 8 de Julio 2025 Repetición",
    evento: "NXT",
    imagen: "https://i0.wp.com/www.wwe.com/f/styles/wwe_16_9_xl/public/all/2025/07/20250701_NXT_Match_HendrySantana_IgweDupont_16x9_Tonight--da36072b2d777482fe9429b485bd9579.jpg?resize=740%2C416&ssl=1",
    url: "//ok.ru/videoembed/9229460048539?nochat=1"
  },
  {
    titulo: "WWE RAW 7 de Julio 2025 Repetición",
    evento: "RAW",
    imagen: "https://imageio.forbes.com/specials-images/imageserve/686c6e22f3875b675eabfb9d/Seth-Rollins-vs--Penta/960x0.jpg?format=jpg&width=960",
    url: "//ok.ru/videoembed/9226731063963?nochat=1"
  },
  {
    titulo: "AEW Collision 100 5 Julio 2025 Repetición",
    evento: "COLLISION",
    imagen: "https://latinluchas.com/wp-content/uploads/2025/07/AEW-Collision-5-de-Julio-2025-En-Vivo-y-Repeticion.webp",
    url: "//ok.ru/videoembed/9221445716635?nochat=1"
  },
  {
    titulo: "WWE SmackDown 4 de Julio 2025 Repetición",
    evento: "SMACKDOWN",
    imagen: "https://aiptcomics.com/wp-content/uploads/2025/07/20250702_SD_Match_Cody_16x9_friday-b1175af20dc19eefb2c1a0c9c8522556.jpg",
    url: "//ok.ru/videoembed/9218932869787?nochat=1"
  },
  {
    titulo: "WWE RAW 30 de Junio 2025 Repetición",
    evento: "RAW",
    imagen: "https://i0.wp.com/www.wwe.com/f/styles/wwe_16_9_xl/public/all/2025/06/20250627_RAW_Netflix_Match_GUNTHER_16x9_Tonight--b011a4c9b5aec554bd9acbf6a5e78375.jpg?resize=740%2C416&ssl=1",
    url: "//ok.ru/videoembed/9207894117019?nochat=1"
  },
  {
    titulo: "WWE Night of Champions 2025 Repetición",
    evento: "WWE",
    imagen: "https://img.solowrestling.com/images/142/142041-noc.jpg",
    url: "//ok.ru/videoembed/9202481695387?nochat=1"
  }
];


// === CONFIGURACIÓN GLOBAL ===
const eventosPorPagina = 12;
let paginaGlobal = 1;
let filtroGlobal = "TODOS";

// === FUNCIÓN PRINCIPAL PARA RENDERIZAR CARDS CON FILTRO Y PÁGINA ===
function renderizarEventos(filtro = "TODOS", pagina = 1) {
  const contenedor = document.getElementById("contenedor-cards");
  contenedor.innerHTML = "";

  const filtrados = filtro === "TODOS"
    ? eventosRepeticiones
    : eventosRepeticiones.filter(e => e.evento === filtro);

  const inicio = (pagina - 1) * eventosPorPagina;
  const eventosPagina = filtrados.slice(inicio, inicio + eventosPorPagina);

  eventosPagina.forEach(e => {
    const col = document.createElement("div");
    col.className = "col";

    col.innerHTML = `
      <div class="card card-evento bg-dark text-white h-100"
          data-bs-toggle="modal"
          data-bs-target="#modalReproductor"
          onclick="setReproductor('${e.url}', '${e.titulo}')">
        <img src="${e.imagen.startsWith('http') ? e.imagen : '../IMAGENES/' + e.imagen}" class="card-img-top" alt="${e.titulo}">
        <div class="card-body">
          <h6 class="card-title mb-1">${e.titulo}</h6>
          <small class="evento-text">${e.evento}</small>
        </div>
      </div>
    `;

    contenedor.appendChild(col);
  });

  generarPaginacion(filtrados.length, pagina);
}

// === PAGINACIÓN ===
function generarPaginacion(totalEventos, paginaActual) {
  const totalPaginas = Math.ceil(totalEventos / eventosPorPagina);
  const paginacion = document.getElementById("paginacion");
  paginacion.innerHTML = "";

  if (totalPaginas <= 1) return;

  const crearBoton = (numero, texto = null, activo = false, disabled = false) => {
    const btn = document.createElement("button");
    btn.className = `btn btn-sm m-1 ${activo ? "btn-light text-dark fw-bold" : "btn-outline-light"}`;
    if (disabled) btn.classList.add("disabled");
    btn.textContent = texto || numero;
    btn.onclick = () => {
      if (!disabled) {
        paginaGlobal = numero;
        renderizarEventos(filtroGlobal, numero);
      }
    };
    paginacion.appendChild(btn);
  };

  crearBoton(paginaActual - 1, "« Anterior", false, paginaActual === 1);
  crearBoton(1, "1", paginaActual === 1);

  if (paginaActual > 3) {
    paginacion.appendChild(crearSeparador());
  }

  for (let i = paginaActual - 1; i <= paginaActual + 1; i++) {
    if (i > 1 && i < totalPaginas) {
      crearBoton(i, `${i}`, i === paginaActual);
    }
  }

  if (paginaActual < totalPaginas - 2) {
    paginacion.appendChild(crearSeparador());
  }

  crearBoton(totalPaginas, `${totalPaginas}`, paginaActual === totalPaginas);
  crearBoton(paginaActual + 1, "Siguiente »", false, paginaActual === totalPaginas);
}

function crearSeparador() {
  const puntos = document.createElement("span");
  puntos.className = "btn btn-sm btn-dark m-1 disabled";
  puntos.textContent = "...";
  return puntos;
}

// === MODAL PARA REPRODUCTOR ===
function setReproductor(url, titulo) {
  const iframe = document.getElementById('iframeModal');
  const modalTitle = document.getElementById('modalLabel');

  if (url.includes("youtube.com/watch")) {
    const videoId = url.split("v=")[1].split("&")[0];
    url = `https://www.youtube.com/embed/${videoId}`;
  }

  iframe.src = url;
  modalTitle.textContent = `🎥 ${titulo}`;
}

const modal = document.getElementById('modalReproductor');
modal.addEventListener('hidden.bs.modal', () => {
  document.getElementById('iframeModal').src = '';
});

// === FILTROS DINÁMICOS ===
function generarFiltrosDinamicos() {
  const ordenDeseado = ["RAW", "NXT", "SMACKDOWN", "COLLISION", "CHAMPIONS"];
  const tiposExistentes = [...new Set(eventosRepeticiones.map(e => e.evento))];

  const tipos = [
    ...ordenDeseado.filter(tipo => tiposExistentes.includes(tipo)),
    ...tiposExistentes.filter(tipo => !ordenDeseado.includes(tipo))
  ];

  const contenedorFiltros = document.getElementById("filtros");

  const btnTodos = document.createElement("button");
  btnTodos.className = "btn btn-light text-dark fw-bold m-1 filtro-evento";
  btnTodos.dataset.evento = "TODOS";
  btnTodos.textContent = "TODOS";
  contenedorFiltros.appendChild(btnTodos);

  tipos.forEach(tipo => {
    const btn = document.createElement("button");
    btn.className = "btn btn-light text-dark fw-bold m-1 filtro-evento";
    btn.dataset.evento = tipo;
    btn.textContent = tipo;
    contenedorFiltros.appendChild(btn);
  });

  document.querySelectorAll(".filtro-evento").forEach(btn => {
    btn.addEventListener("click", () => {
      filtroGlobal = btn.getAttribute("data-evento");
      paginaGlobal = 1;
      renderizarEventos(filtroGlobal, paginaGlobal);
    });
  });
}

// === EJECUCIÓN INICIAL ===
generarFiltrosDinamicos();
renderizarEventos(filtroGlobal, paginaGlobal);