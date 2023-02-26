const products = [
  {
    id: 1,
    catId: 2,
    restId: [1, 3, 5],
    name: "Toyuqlu Sezar",
    price: [
      {
        id: 1,
        value: 5,
      },
      {
        id: 3,
        value: 7,
      },
      {
        id: 5,
        value: 4,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/6040f1a3790a410e5cc07724/9712308e-717d-11ed-895e-7acb2fb9837c_tpo_caesar_chicken_6000.jpg?w=300",
  },
  {
    id: 2,
    catId: 2,
    restId: [3, 5],
    name: "Tərəvəz Salatı",
    price: [
      {
        id: 3,
        value: 7,
      },
      {
        id: 5,
        value: 4,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/61b99ef482332c79708104b2/f6eb0406-71e4-11ed-8e10-3ad46459f81d_tpo_vegetable_salad_6002.jpg?w=300",
  },
  {
    id: 3,
    catId: 2,
    restId: [1, 3, 5],
    name: "Çoban Salatı",
    price: [
      {
        id: 1,
        value: 5,
      },
      {
        id: 3,
        value: 7,
      },
      {
        id: 5,
        value: 4,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/62333d2a9a74dbdaf93c9a52/d2accc76-a680-11ec-980d-c66c4207f22d_c_oban_slat_.jpeg?w=300",
  },
  {
    id: 4,
    catId: 2,
    restId: [1, 3, 5],
    name: "Gavurdag Salatı",
    price: [
      {
        id: 1,
        value: 5,
      },
      {
        id: 3,
        value: 7,
      },
      {
        id: 5,
        value: 4,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/62b2d5f5c61f111866ee2667/c03b5fdc-f20f-11ec-b0b7-7617d6dacafb_gavurdag_salati.jpeg?w=300",
  },
  {
    id: 5,
    catId: 2,
    restId: [1, 3, 5],
    name: "Fındıqlı Salat Avokado ilə",
    price: [
      {
        id: 1,
        value: 5,
      },
      {
        id: 3,
        value: 7,
      },
      {
        id: 5,
        value: 4,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/62b2d5f5c61f111866ee2667/6ac34b14-f20f-11ec-9225-6a4fc7ed8166_avokadolu.jpeg?w=300",
  },
  {
    id: 6,
    catId: 2,
    restId: [1, 3, 5],
    name: "Ingilis Salatı",
    price: [
      {
        id: 1,
        value: 2,
      },
      {
        id: 3,
        value: 5,
      },
      {
        id: 5,
        value: 7,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/7b5ad186-99b6-11e9-8c26-0a5864601a70_Core_Insalata_Mista_Piccola_SMALL.jpeg?w=300",
  },
  {
    id: 7,
    catId: 2,
    restId: [1, 3, 5],
    name: "Mimoza Salatı",
    price: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 3,
        value: 7,
      },
      {
        id: 5,
        value: 5,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/1d0fe8dc-99b6-11e9-afa9-0a5864621508_Core_Insalata_Cesare_SMALL.jpeg?w=300",
  },
  {
    id: 8,
    catId: 2,
    restId: [1, 3, 5],
    name: "Paytaxt Salatı (200 qr)",
    price: [
      {
        id: 1,
        value: 2,
      },
      {
        id: 3,
        value: 5,
      },
      {
        id: 5,
        value: 4,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/62b2d5f5c61f111866ee2667/c03b5fdc-f20f-11ec-b0b7-7617d6dacafb_gavurdag_salati.jpeg?w=300",
  },
  {
    id: 9,
    catId: 2,
    restId: [1, 3, 5],
    name: "Qarğıdalı Salatı (200 qr)",
    price: [
      {
        id: 1,
        value: 5,
      },
      {
        id: 3,
        value: 7,
      },
      {
        id: 5,
        value: 4,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/62b2d5f5c61f111866ee2667/c03b5fdc-f20f-11ec-b0b7-7617d6dacafb_gavurdag_salati.jpeg?w=300",
  },
  {
    id: 10,
    catId: 1,
    restId: [1, 3, 5],
    name: "Böyük Big Tasty (ət) menyu",
    price: [
      {
        id: 1,
        value: 8,
      },
      {
        id: 3,
        value: 6,
      },
      {
        id: 5,
        value: 4,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/6040f1a3790a410e5cc07724/e3d6b210-717c-11ed-8dfb-fe777839d5e7_tpo_big_tasty_beef_1004.jpg?w=300",
  },
  {
    id: 11,
    catId: 1,
    restId: [1, 3, 5],
    name: "Böyük Big Mac menyu",
    price: [
      {
        id: 1,
        value: 5,
      },
      {
        id: 3,
        value: 7,
      },
      {
        id: 5,
        value: 4,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/6040f1a3790a410e5cc07724/e3c9a55c-717c-11ed-8dfb-fe777839d5e7_tpo_big_mac_1003.jpg?w=300",
  },
  {
    id: 12,
    catId: 3,
    restId: [4, 6, 7],
    name: "Jack Burger",
    price: [
      {
        id: 4,
        value: 3,
      },
      {
        id: 6,
        value: 8,
      },
      {
        id: 7,
        value: 2,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/6040f1a3790a410e5cc07724/96e33ae0-717d-11ed-895e-7acb2fb9837c_tpo_mcchicken_1012.jpg?w=300",
  },
  {
    id: 13,
    catId: 3,
    restId: [4, 6, 7],
    name: "Adana Burger",
    price: [
      {
        id: 4,
        value: 5,
      },
      {
        id: 6,
        value: 8,
      },
      {
        id: 7,
        value: 1,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/5d8dd0a07bfd0ead26f82260/7c02aa6c-7182-11ed-a414-b29d3fa1a65c_tpo_double_hamburger_1069.jpg?w=300",
  },
  {
    id: 14,
    catId: 3,
    restId: [4, 6, 7],
    name: "Garlic Mushroom Burger",
    price: [
      {
        id: 4,
        value: 5,
      },
      {
        id: 6,
        value: 8,
      },
      {
        id: 7,
        value: 1,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/5eec9a22ba9d51d195a3318a/39af2b28-71f9-11ed-ac02-36b3bc55e29e_tpo_big_tasty_chicken_1122.jpg?w=300",
  },
  {
    id: 15,
    catId: 3,
    restId: [4, 6, 7],
    name: "Falafel Burger",
    price: [
      {
        id: 4,
        value: 2,
      },
      {
        id: 6,
        value: 3,
      },
      {
        id: 7,
        value: 5,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/635687f2e3ddb70205d3dbad/42401884-7d7e-11ed-9bbe-8ed7ce0276b3_tpo_grand_cheese_chicken_1193.jpg?w=300",
  },
  {
    id: 16,
    catId: 4,
    restId: [5],
    name: "Fıstıqlı",
    price: [
      {
        id: 5,
        value: 7,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/6040f1a3790a410e5cc07724/154a26ca-7181-11ed-a29b-8e4cee175ccf_tpo_fruit_pie1_5023.jpg?w=300",
  },
  {
    id: 17,
    catId: 4,
    restId: [5],
    name: "Profiterol",
    price: [
      {
        id: 5,
        value: 8,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/6040f1a3790a410e5cc07724/e4a78296-717c-11ed-8dfb-fe777839d5e7_tpo_muffin_banana_5002.jpg?w=300",
  },
  {
    id: 18,
    catId: 4,
    restId: [5],
    name: "Brownie",
    price: [
      {
        id: 5,
        value: 3,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/5d8dd0a07bfd0ead26f82260/acab7ed8-7186-11ed-a8ca-26f7e7b20b4a_tpo_muffin_sundae_5051.jpg?w=300",
  },
  {
    id: 19,
    catId: 5,
    restId: [6, 8],
    name: "Algida® Şokoladlı",
    price: [
      {
        id: 6,
        value: 3,
      },
      {
        id: 8,
        value: 4,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/6128d4bd936e5bdd5af24b62/fbdd67e8-3e44-11ed-a684-96e6afecd3c2_888a3496_e689_11ec_ad76_129d77bde4eb_frame_1__1_.jpeg?w=300",
  },
  {
    id: 20,
    catId: 5,
    restId: [6, 8],
    name: "Algida® Şokoladlı",
    price: [
      {
        id: 6,
        value: 3,
      },
      {
        id: 8,
        value: 4,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/6128d4bd936e5bdd5af24b62/fbdd67e8-3e44-11ed-a684-96e6afecd3c2_888a3496_e689_11ec_ad76_129d77bde4eb_frame_1__1_.jpeg?w=300",
  },
  {
    id: 21,
    catId: 6,
    restId: [3, 5],
    name: "Adana Dürümü",
    price: [
      {
        id: 3,
        value: 8,
      },
      {
        id: 5,
        value: 6,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/5f31066a051911465b2444dd/110c1568-db07-11ea-91ae-ea279f353787_adana_kebap..jpeg?w=300",
  },
  {
    id: 22,
    catId: 6,
    restId: [3, 5],
    name: "Ciyər Şiş Dürümü",
    price: [
      {
        id: 3,
        value: 2,
      },
      {
        id: 5,
        value: 4,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/5f31066a051911465b2444dd/30c7e508-db07-11ea-8a76-1a2f8378f118_urfa_kebap...jpeg?w=300",
  },
  {
    id: 23,
    catId: 7,
    restId: [4, 7],
    name: "Pizza Marqarita",
    price: [
      {
        id: 4,
        value: 3,
      },
      {
        id: 7,
        value: 5,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/63919d5f0d1f7dced070e3bb/21ed8b6e-7aa6-11ed-96b3-966c1afc1457_img_8525.jpeg?w=300",
  },
  {
    id: 24,
    catId: 7,
    restId: [4, 7],
    name: "Toyuqlu Pizza",
    price: [
      {
        id: 4,
        value: 5,
      },
      {
        id: 7,
        value: 7,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/63919d5f0d1f7dced070e3bb/5292c072-7aa6-11ed-a3a7-ae3c718d0182_img_8522.jpeg?w=300",
  },
  {
    id: 25,
    catId: 7,
    restId: [4, 7],
    name: "Hawaiian Pizza",
    price: [
      {
        id: 4,
        value: 2,
      },
      {
        id: 7,
        value: 4,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/63919d5f0d1f7dced070e3bb/a39f7c88-812e-11ed-abbe-1eea86401093_21ed8b6e_7aa6_11ed_96b3_966c1afc1457_img_8525.jpeg?w=300",
  },
  {
    id: 26,
    catId: 8,
    restId: [8, 9],
    name: "Kapuçino",
    price: [
      {
        id: 8,
        value: 6,
      },
      {
        id: 9,
        value: 8,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/63a5873ad274666cfbc7bcd3/5465a030-82b3-11ed-9bba-262a93c15600_cappuccino__m_.jpeg?w=300",
  },
  {
    id: 27,
    catId: 8,
    restId: [8, 9],
    name: "Latte",
    price: [
      {
        id: 8,
        value: 3,
      },
      {
        id: 9,
        value: 5,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/63a5873ad274666cfbc7bcd3/254f0f38-82b4-11ed-ab22-a684de6e730a_latte.jpeg?w=300",
  },
  {
    id: 28,
    catId: 8,
    restId: [8, 9],
    name: "Raf",
    price: [
      {
        id: 8,
        value: 6,
      },
      {
        id: 9,
        value: 8,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/63a5873ad274666cfbc7bcd3/4a60b8b8-82b3-11ed-aab8-46cde49d2205_cacao_raf.jpeg?w=300",
  },
  {
    id: 29,
    catId: 9,
    restId: [1, 3, 5],
    name: "Toyuq Köftəsi",
    price: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 3,
        value: 6,
      },
      {
        id: 5,
        value: 8,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/625fda260a80f2ac1d4cde1e/12687c98-5117-11ed-b898-7e39ff46fe06_a6fcc392_5116_11ed_a626_2e51b1e023e9_______________2022_10_21___12.01.40.jpeg?w=300",
  },
  {
    id: 30,
    catId: 9,
    restId: [1, 3, 5],
    name: "Toyuq Dönəri Çörəkdə",
    price: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 3,
        value: 6,
      },
      {
        id: 5,
        value: 8,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/5f8fe936c6d230f1e75f7b42/b8b9cc52-c543-11eb-b7e7-4a7682343748_toyuq_doneri_corekde.jpeg?w=300",
  },
  {
    id: 31,
    catId: 10,
    restId: [2, 6, 7],
    name: "Köz Ət Dönəri Çörəkdə",
    price: [
      {
        id: 2,
        value: 3,
      },
      {
        id: 6,
        value: 6,
      },
      {
        id: 7,
        value: 8,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/5f8fe936c6d230f1e75f7b42/3d322110-c543-11eb-b702-aabb8eb297ad_et_doneri_corekde.jpeg?w=300",
  },
  {
    id: 32,
    catId: 10,
    restId: [2, 6, 7],
    name: "Pendirli Dönər Toyuq ilə Çörəkdə",
    price: [
      {
        id: 2,
        value: 6,
      },
      {
        id: 6,
        value: 2,
      },
      {
        id: 7,
        value: 3,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/5f8fe936c6d230f1e75f7b42/8834354a-c543-11eb-83ae-0a20b1e75722_pendirli_toyuq_doneri_corekde.jpeg?w=300",
  },
  {
    id: 33,
    catId: 11,
    restId: [1, 3, 5],
    name: "Mərci Şorbası",
    price: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 3,
        value: 6,
      },
      {
        id: 5,
        value: 8,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/62b2d5f5c61f111866ee2667/b5fd681a-f20c-11ec-b37a-7ef87936fa45_osmanl__supu.jpeg?w=300",
  },
  {
    id: 34,
    catId: 11,
    restId: [1, 3, 5],
    name: "Toyuq Şorbası",
    price: [
      {
        id: 1,
        value: 2,
      },
      {
        id: 3,
        value: 6,
      },
      {
        id: 5,
        value: 5,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/62b2d5f5c61f111866ee2667/e0d90e7a-f20e-11ec-b8ac-8a6f4c635962_toyuq_supu.jpeg?w=300",
  },
  {
    id: 35,
    catId: 12,
    restId: [3, 5],
    name: "Urfa Kababı",
    price: [
      {
        id: 3,
        value: 4,
      },
      {
        id: 5,
        value: 9,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/62b2d5f5c61f111866ee2667/616bb330-f20f-11ec-9adc-6611abe98fc1_adana___urfa.jpeg?w=300",
  },
  {
    id: 36,
    catId: 12,
    restId: [1, 3, 5],
    name: "Toyuq Şiş Kababı",
    price: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 3,
        value: 6,
      },
      {
        id: 5,
        value: 8,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/62b2d5f5c61f111866ee2667/b1d4eeb4-f20e-11ec-ba31-3664b9d75592_tovuk_s_is_.jpeg?w=300",
  },
  {
    id: 37,
    catId: 13,
    restId: [1],
    name: "Tavada Çupara Balığı",
    price: [
      {
        id: 1,
        value: 3,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/62b2d5f5c61f111866ee2667/b407613e-f20f-11ec-9151-7ef87936fa45_cupra_manqaldada___tavada.jpeg?w=300",
  },
  {
    id: 38,
    catId: 2,
    restId: [1],
    name: "qara zeytun",
    price: [
      {
        id: 1,
        value: 3,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/631744d2035f3ceb642fe08f/57d8f764-2e7e-11ed-a40b-baf0cc5b6607_zeytun.jpeg?w=300",
  },
  {
    id: 39,
    catId: 13,
    restId: [1],
    name: "Şamayka",
    price: [
      {
        id: 1,
        value: 3,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/631744d2035f3ceb642fe08f/11ca6adc-2e7e-11ed-9911-8e20b7c19cdd_samayka.jpeg?w=300",
  },
  {
    id: 40,
    catId: 13,
    restId: [1],
    name: "Kilkə",
    price: [
      {
        id: 1,
        value: 3,
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/631744d2035f3ceb642fe08f/1cc50732-2e7c-11ed-8494-bed4041fa5c0_63174b963112190312cfb188.jpeg?w=300",
  },
  {
    id: 41,
    catId: 10,
    restId: [2],
    name: "Lavasda et doner",
    price: [
      {
        id: 2,
        value: "7",
      },
    ],
    img: "https://imageproxy.wolt.com/menu/menu-images/60e555302d97ac423206ab00/ba36921e-e2e3-11eb-a1d4-46e6b1e6414d_et_lavashda.jpeg?w=300",
  },
];

export default products;
