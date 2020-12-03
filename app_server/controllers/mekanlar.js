var express = require("express");
var router = express.Router();
const anaSayfa = function (req, res, next) {
  res.render("mekanlar-liste", {
    baslik: "Anasayfa",
    sayfaBaslik: {
      siteAd: "Mekan32",
      aciklama: "Isparta civarındaki mekanları keşfedin!",
    },
    mekanlar: [
      {
        ad: "Starbucks",
        adres: "Centrum Garden",
        puan: "3",
        imkanlar: ["kahve", "çay", "pasta"],
        mesafe: "10km",
      },
      {
        ad: "Köfteci Yusuf",
        adres: "Iyas Bulvar AVM",
        puan: "4",
        imkanlar: ["köfte", "et", "çay"],
        mesafe: "20km",
      },
      {
        ad: "Book Cafe",
        adres: "Burç Fırın Arkası",
        puan: "3",
        imkanlar: ["kahve", "çay", "kitap"],
        mesafe: "4km",
      },
      {
        ad: "Arabica",
        adres: "SDÜ Doğu Kampüsü",
        puan: "4",
        imkanlar: ["çay", "kurabiye", "kahve"],
        mesafe: "18km",
      },
      {
        ad: "Gloria Jeans",
        adres: "Iyas Avm",
        puan: "2",
        imkanlar: ["kahve", "kek", "çay"],
        mesafe: "5km",
      },
    ],
  });
};
const mekanBilgisi = function (req, res) {
  res.render("mekan-detay", {
    baslik: "Mekan Bilgisi",
    sayfaBaslik: "Starbucks",
    mekanBilgisi: {
      ad: "Starbucks",
      adres: "Centrum Garden",
      puan: 3,
      imkanlar: ["Kahve", "Pasta", "Kek"],
      koordinatlar: {
        enlem: 37.781885,
        boylam: 30.566034,
      },
      saatler: [
        {
          gunler: "Pazartesi-Cuma",
          acilis: "7.00",
          kapanis: "23.00",
          kapali: false,
        },
        {
          gunler: "Cumartesi",
          acilis: "9.00",
          kapanis: "22.30",
          kapali: false,
        },
        {
          gunler: "Pazar",
          kapali: true,
        },
      ],
      yorumlar: [
        {
          yorumYapan: "Ahmet Furkan Meriç",
          puan: 3,
          tarih: "3 Aralık 2020",
          yorumMetni: "Kahveleri Mükemmel",
        },
      ],
    },
  });
};
const yorumEkle = function (req, res) {
  res.render("yorum-ekle", { title: "Yorum Ekle" });
};

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle,
};
