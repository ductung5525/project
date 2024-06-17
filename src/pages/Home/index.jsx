import { Autoplay, Scrollbar, A11y, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { formatCurrency } from "../../utils/shoe";

import "swiper/css";
import "./styles.css";

const banners = [
  {
    id: 1,
    url: "https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Professional-E-Commerce-Shoes-Banner-Design-1536x864.jpg",
  },
  {
    id: 2,
    url: "https://storage.pixteller.com/designs/designs-images/2020-12-21/05/sport-shoes-sale-banner-1-5fe0c471dbecb.png",
  },
  {
    id: 3,
    url: "https://storage.pixteller.com/designs/designs-images/2020-12-21/05/gym-shoes-sale-banner-1-5fe0c46cc78bc.png",
  },
  {
    id: 4,
    url: "https://w0.peakpx.com/wallpaper/976/932/HD-wallpaper-nike-shoe-in-background-of-banner-nike.jpg",
  },
];

const shoes = [
  {
    id: 1,
    name: "GEL KAYANO 14 'SILVER CREAM'",
    poster:
      "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/2-11.jpg?v=1716367479250",
    currentPrice: "2000000",
    price: "1400000",
  },
  {
    id: 2,
    name: "Onitsuka Tiger Mexico 66 SD 'Cream Peacoat'",
    poster:
      "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/72-09ca86a8-4d52-4817-881f-f8128e2d4c6d.jpg?v=1711550320007",
    currentPrice: "1500000",
    price: "1200000",
  },
  {
    id: 3,
    name: "Onitsuka Tiger Mexico 66 SD 'Creamwhite Green'",
    poster:
      "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/76-dd560853-024a-4a15-be39-44d7ae05a8fd.jpg?v=1711550293587",
    currentPrice: "1500000",
    price: "1200000",
  },
  {
    id: 4,
    name: "Air Force 1 White - 99%",
    poster:
      "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/2-bbd50e05-26af-46d7-88d4-ccb415477287.jpg?v=1664264163310",
    currentPrice: "1800000",
    price: "1440000",
  },
  {
    id: 5,
    name: "Air Force 1 Black - 99%",
    poster:
      "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/6-2a76d2f4-cf72-4572-a43c-c8f846b3a462.jpg?v=1664264248813",
    currentPrice: "1800000",
    price: "1400000",
  },
  {
    id: 6,
    name: "WMNS AIR JORDAN 1 MID 'PANDA'",
    poster:
      "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/32-dc1b2690-213c-44c3-ae78-9d8d4f8f33f2.jpg?v=1702899220973",
    currentPrice: "2500000",
    price: "2000000",
  },
  {
    id: 7,
    name: "WMNS AIR JORDAN 1 LOW 'PANDA'",
    poster:
      "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/1-3-2e85eb85-f0d0-4ce6-a0f0-20ba71148bad.jpg?v=1685607504793",
    currentPrice: "2100000",
    price: "1470000",
  },
  {
    id: 8,
    name: "AIR JORDAN 1 LOW SE 'INDUSTRIAL BLUE SASHIKO'",
    poster:
      "https://bizweb.dktcdn.net/thumb/large/100/336/177/products/52-493b5e87-bed1-43f9-8b78-7653326dfc2b.jpg?v=1703482927600",
    currentPrice: "2100000",
    price: "1470000",
  },
];

export function Home() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        modules={[Autoplay, Scrollbar, Pagination, A11y]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div style={{ width: "100%" }}>
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={banner.url}
                alt={banner.url}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <h2 className="title">SẢN PHẨM NỔI BẬT</h2>
      <Swiper
        slidesPerView={4}
        modules={[Autoplay, Scrollbar, Pagination, A11y]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
      >
        {shoes.map((shoe) => (
          <SwiperSlide key={shoe.id}>
            <Link to={`/shoe/${shoe.id}`} className="shoe">
              <div className="poster">
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={shoe.poster}
                  alt={shoe.poster}
                />
              </div>
              <h4 className="name">{shoe.name}</h4>
              <div className="box-price">
                <span className="price">{formatCurrency(shoe.price)}</span>
                <span className="current-price">
                  {formatCurrency(shoe.currentPrice)}
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <h2 className="title">SẢN PHẨM SALES</h2>
      <Swiper
        slidesPerView={4}
        modules={[Autoplay, Scrollbar, Pagination, A11y]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
      >
        {shoes.map((shoe) => (
          <SwiperSlide key={shoe.id}>
            <Link to={`/shoe/${shoe.id}`} className="shoe">
              <div className="poster">
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={shoe.poster}
                  alt={shoe.poster}
                />
              </div>
              <h4 className="name">{shoe.name}</h4>
              <div className="box-price">
                <span className="price">{formatCurrency(shoe.price)}</span>
                <span className="current-price">{shoe.currentPrice}</span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
