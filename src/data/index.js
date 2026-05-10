import CardImage1 from "../assets/img/card/card-1.jpg";
import CardImage2 from "../assets/img/card/card-2.jpg";
import CardImage3 from "../assets/img/card/card-3.jpg";
import CardImage4 from "../assets/img/card/card-4.jpg";
import CardImage5 from "../assets/img/card/card-5.jpg";

import IconLike from "../assets/img/icon/Like.png";
import IconLocation from "../assets/img/icon/Location.png";
import IconBooking from "../assets/img/icon/booking.png";

import CarImage1 from "../assets/img/transportation/car-1.jpg";
import CarImage2 from "../assets/img/transportation/car-2.jpg";
import CarImage3 from "../assets/img/transportation/car-3.jpg";
import CarImage4 from "../assets/img/transportation/car-4.jpg";

import Destination1 from "../assets/img/card/card-1.jpg";
import Destination2 from "../assets/img/card/card-2.jpg";
import Destination3 from "../assets/img/card/card-3.jpg";
export const navLinks = [
  { id: 1, path: "/", text: "Home" },
  { id: 2, path: "/About", text: "About Us" },
  { id: 3, path: "/Paket", text: "Tour Packages" },
  { id: 4, path: "/Rental", text: "Car Rental" },
  { id: 5, path: "/Gallery", text: "Gallery" },
  { id: 6, path: "/Contact", text: "Contact Us" },
];

export const allCards = [
  {
    id: 1,
    image: CardImage1,
    title: "Nusa Penida",
    price: "Rp.xxx.000",
    time: "1 Hari Petualangan",
    qt: "Maksimal 5 orang (lebih private & nyaman)",
    location: "📍Nusa Penida",
  },
  {
    id: 2,
    image: CardImage2,
    title: "Ubud Cultural Tour",
    price: "Rp.xxx.000",
    time: "1 Hari Tour Budaya",
    qt: "Maksimal 7 orang (cocok untuk keluarga)",
    location: "📍Gianyar",
  },
  {
    id: 3,
    image: CardImage3,
    title: "Bedugul & Tanah Lot",
    price: "Rp.xxx.000",
    time: "10 Jam Perjalanan",
    qt: "Maksimal 6 orang",
    location: "📍Tabanan",
  },
  {
    id: 4,
    image: CardImage4,
    title: "Uluwatu Sunset & Kecak",
    price: "Rp.xxx.000",
    time: "8 Jam Trip Sore",
    qt: "Maksimal 5 orang (sudah termasuk sopir)",
    location: "📍Badung",
  },
  {
    id: 5,
    image: CardImage5,
    title: "Kintamani Sunrise",
    price: "Rp.xxx.000",
    time: "12 Jam Trip (Subuh)",
    qt: "Maksimal 6 orang (termasuk jeep lokal)",
    location: "bali",
  },
];

export const whyChoose =[
  {
    id: 1,
    icon: IconLike, 
    title: "Harga Terjangkau & Transparan",
    desc: "Kami menawarkan paket tour dengan harga bersaing tanpa biaya tersembunyi, sehingga kamu bisa menikmati liburan dengan tenang."
  },
  {
    id: 2,
    icon: IconLocation, 
    title: "Pelayanan Ramah & Profesional",
    desc: "Tim kami berpengalaman, ramah, dan siap membantu selama perjalanan agar liburanmu lebih nyaman dan menyenangkan."
  },
  {
    id: 3,
    icon: IconBooking, 
    title: "Destinasi Terbaik & Fleksibel",
    desc: "Kami menyediakan pilihan destinasi populer dengan itinerary yang bisa disesuaikan sesuai kebutuhan dan keinginanmu."
  }
]

export const allCars =[
  {
    id: 1,
    image: CarImage1,
    title: "Toyota Alphard Transformer",
    price: "IDR 2,500,000",
    btn: "Booking Now!",
  },
  {
    id: 2,
    image: CarImage2,
    title: "Toyota Grand Avanza",
    price: "IDR 600,000",
    btn: "Booking Now!",
  },
  {
    id: 3,
    image: CarImage3,
    title: "Toyota Grand Innova",
    price: "IDR 800,000",
    btn: "Booking Now!",
  },
  {
    id: 4,
    image: CarImage4,
    title: "Toyota Innova Reborn",
    price: "IDR 1,500,000",
    btn: "Booking Now!",
  },
];

export const popularDestinations = [
  {
    id: 1,
    image: Destination1,
    title: "Nusa Penida",
    location: "Bali, Indonesia",
  },
  {
    id: 2,
    image: Destination2,
    title: "Ubud",
    location: "Bali, Indonesia",
  },
  {
    id: 3,
    image: Destination3,
    title: "Tanah Lot",
    location: "Bali, Indonesia",
  },
];
