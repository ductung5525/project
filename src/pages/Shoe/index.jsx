import { useEffect, useState } from "react";
import { Autoplay, Scrollbar, A11y, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { formatCurrency, saveItemToLocalStorage } from "../../utils/shoe";

import "./styles.css";

const shoes = [
  {
    id: 1,
    name: "GEL KAYANO 14 'SILVER CREAM'",
    price: "1400000",
    currentPrice: "2000000",
    posters: [
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/1-18.jpg?v=1716367478560",
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/2-11.jpg?v=1716367479250",
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/3-11.jpg?v=1716367479707",
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/4-11.jpg?v=1716367480353",
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    thumbs: [
      "https://bizweb.dktcdn.net/100/336/177/files/dsc07853.jpg?v=1716371306213",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc07855.jpg?v=1716371321134",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc07856.jpg?v=1716371343516",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc07857.jpg?v=1716371363518",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc07858.jpg?v=1716371391536",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc07859.jpg?v=1716371404438",
    ],
  },
  {
    id: 2,
    name: "ONITSUKA TIGER MEXICO 66 SD 'CREAM PEACOAT'",
    price: "1200000",
    currentPrice: "1500000",
    posters: [
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/71-f19691f1-ac96-4bad-a56d-f9f0e7c0a989.jpg?v=1711550319330",
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/72-09ca86a8-4d52-4817-881f-f8128e2d4c6d.jpg?v=1711550320007",
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/73-a44d6689-fb95-404a-ae80-fde2883785ca.jpg?v=1711550321087",
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/74-ef024ddf-8b7b-4a9e-aa7a-eb43b52f03d8.jpg?v=1711550321783",
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    thumbs: [
      "https://bizweb.dktcdn.net/100/336/177/files/dsc07468.jpg?v=1711551180409",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc07469.jpg?v=1711551193737",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc07470.jpg?v=1711551212568",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc07471.jpg?v=1711551228032",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc07472.jpg?v=1711551257895",
    ],
  },
  {
    id: 3,
    name: "ONITSUKA TIGER MEXICO 66 SD 'CREAMWHITE GREEN'",
    price: "1200000",
    currentPrice: "1500000",
    posters: [
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/75-fce7853b-ebe2-4996-987d-32e6b3984a5a.jpg?v=1711550292953",
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/76-dd560853-024a-4a15-be39-44d7ae05a8fd.jpg?v=1711550293587",
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/77-72a1e6b7-7471-4a7d-a06f-e6a8577c1f56.jpg?v=1711550294437",
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/78-656d1d7a-165c-4a21-a8cc-826b4078fee5.jpg?v=1711550295150",
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    thumbs: [
      "https://bizweb.dktcdn.net/100/336/177/files/dsc07458.jpg?v=1711551015398",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc07459.jpg?v=1711551027819",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc07460.jpg?v=1711551044377",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc07461.jpg?v=1711551059869",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc07462.jpg?v=1711551094556",
    ],
  },
  {
    id: 4,
    name: "AIR FORCE 1 WHITE - 99%",
    price: "1440000",
    currentPrice: "1800000",
    posters: [
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/1-8c3d330f-0f9f-4514-9f06-6a6c29185a37.jpg?v=1664264162857",
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/2-bbd50e05-26af-46d7-88d4-ccb415477287.jpg?v=1664264163310",
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/3-be489f0c-3b84-4098-88f7-7aa939c5d1c8.jpg?v=1664264163673",
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/4-d5924f21-edeb-4dbe-9fcc-d159dcc919d0.jpg?v=1664264164043",
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    thumbs: [
      "https://bizweb.dktcdn.net/100/336/177/files/dsc08163.jpg?v=1718089111576",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc08164.jpg?v=1718089122997",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc08165.jpg?v=1718089137160",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc08166.jpg?v=1718089149747",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc08167.jpg?v=1718089160996",
      "https://bizweb.dktcdn.net/100/336/177/files/19a949f9bb9618c84187.jpg?v=1718090090026",
    ],
  },
  {
    id: 5,
    name: "AIR FORCE 1 BLACK - 99%",
    price: "1440000",
    currentPrice: "1800000",
    posters: [
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/5-2de3c432-2f9b-4149-8e56-0d302eed6ed3.jpg?v=1664264248187",
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/6-2a76d2f4-cf72-4572-a43c-c8f846b3a462.jpg?v=1664264248813",
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/7-58ae68f9-dd4c-4bb0-a333-1201c8fa7ca6.jpg?v=1664264249377",
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/8-2587e2c2-0acf-4e02-ae35-f53e208dd767.jpg?v=1664264249773",
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    thumbs: [
      "https://bizweb.dktcdn.net/100/336/177/files/dsc03889-fffbb87d-9b41-46f2-8461-cb9e8bd33822.jpg?v=1684841656209",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc03891.jpg?v=1684841745439",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc03892.jpg?v=1684841941664",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc03890.jpg?v=1684841967863",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc04961.jpg?v=1684841984297",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc04958.jpg?v=1684841996481",
    ],
  },
  {
    id: 6,
    name: "WMNS AIR JORDAN 1 MID 'PANDA'",
    price: "2000000",
    currentPrice: "2500000",
    posters: [
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/31-cfce5184-2e8b-4cb4-b8ea-3e03dd56c79c.jpg?v=1702899220163",
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/32-dc1b2690-213c-44c3-ae78-9d8d4f8f33f2.jpg?v=1702899220973",
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/33-2d94f3ff-19b9-40d6-98fd-eb32c9d8ab93.jpg?v=1702899221747",
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/34-9c23add5-2625-4dca-bb04-2bf961154c57.jpg?v=1702899221747",
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    thumbs: [
      "https://bizweb.dktcdn.net/100/336/177/files/dsc06069-719d0543-2c05-489e-a6c4-d0471ebf0710.jpg?v=1702968288751",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc06070.jpg?v=1702968305061",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc06071.jpg?v=1702968341850",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc06072.jpg?v=1702968362935",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc06074.jpg?v=1702968377137",
      "https://bizweb.dktcdn.net/100/336/177/files/09a5e400-094c-49f1-970f-d649c386a956.jpg?v=1702968400544",
    ],
  },
  {
    id: 7,
    name: "WMNS AIR JORDAN 1 LOW 'PANDA'",
    price: "1470000",
    currentPrice: "2100000",
    posters: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/336/177/products/1-3-2e85eb85-f0d0-4ce6-a0f0-20ba71148bad.jpg?v=1685607504793",
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    thumbs: [
      "https://bizweb.dktcdn.net/100/336/177/files/dsc03784-32c86ba9-6539-4346-ae88-ced02ff8afa2.jpg?v=1699430935023",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc03785-40e64f0e-4b19-49f1-b638-74c124ff85f4.jpg?v=1699430946007",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc03786-e8174f6c-634f-41ab-b605-33e6671cec62.jpg?v=1699430957531",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc03787-bc84477f-0c03-4df8-b0c7-ded193708eba.jpg?v=1699430967887",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc03788-f29c8c9d-a703-440f-9a1a-f5846b5ab182.jpg?v=1699430978712",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc03785-40e64f0e-4b19-49f1-b638.jpg?v=1703167586410",
    ],
  },
  {
    id: 8,
    name: "AIR JORDAN 1 LOW SE 'INDUSTRIAL BLUE SASHIKO'",
    price: "1470000",
    currentPrice: "2100000",
    posters: [
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/51-a7855dff-3c4a-4950-aa45-74736bcab198.jpg?v=1703482926653",
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/52-493b5e87-bed1-43f9-8b78-7653326dfc2b.jpg?v=1703482927600",
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/53-47ec5216-4547-4595-b401-aa0d2f5bfcf6.jpg?v=1703482928293",
      "https://bizweb.dktcdn.net/thumb/medium/100/336/177/products/54-5fd06379-d744-45db-8448-6f97c70b87ce.jpg?v=1703482928293",
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    thumbs: [
      "https://bizweb.dktcdn.net/100/336/177/files/dsc06621.jpg?v=1704272859229",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc06622.jpg?v=1704272873155",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc06623.jpg?v=1704272887514",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc06624.jpg?v=1704272898287",
      "https://bizweb.dktcdn.net/100/336/177/files/dsc06625.jpg?v=1704272915496",
      "https://bizweb.dktcdn.net/100/336/177/files/air-jordan-1-low-se-industrial-blue-sashiko-fv3622-141-9-1a4fc320-6cab-401f-be8d-23d212ef5880.jpg?v=1704272989581",
    ],
  },
];

const similar = [
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

export function Shoe() {
  const { id } = useParams();
  const shoe = shoes[id - 1];
  const [poster, setPoster] = useState(shoe.posters[0]);
  const [selectedSize, setSelectedSize] = useState(shoe.sizes[0]);
  const navigate = useNavigate();

  const handleAddToCart = (shoe) => {
    const item = {
      ...shoe,
      size: selectedSize,
      quantity: 1,
    };
    saveItemToLocalStorage(item);
  };

  const handleBuy = (shoe) => {
    handleAddToCart(shoe);
    navigate("/cart");
  };

  useEffect(() => {
    setPoster(shoe.posters[0]);
    setSelectedSize(shoe.sizes[0]);
  }, [shoe]);

  return (
    <>
      <div className="product-detail-container">
        <div className="product-images">
          <img src={poster} alt="Product" className="main-image" />
          <div className="thumbnail-images">
            {shoe.posters.map((poster) => (
              <img
                key={poster}
                src={poster}
                alt={poster}
                onClick={() => setPoster(poster)}
              />
            ))}
          </div>
        </div>
        <div className="product-info">
          <h1 className="product-title">{shoe.name}</h1>
          <div className="box-price" style={{ fontSize: 24 }}>
            <span className="price">{formatCurrency(shoe.price)}</span>
            <span className="current-price">
              {formatCurrency(shoe.currentPrice)}
            </span>
          </div>
          <ul className="product-description">
            <li>Đi đúng size</li>
            <li>Vận chuyển toàn quốc [ Kiểm Tra Hàng Trước Khi Thanh Toán ]</li>
            <li>100% Ảnh chụp trực tiếp tại CommerceShoe</li>
            <li>Bảo Hành Trọn Đời Sản Phẩm</li>
            <li>Đổi Trả 7 Ngày Không Kể Lí Do</li>
            <li>Liên Hệ : 0123.456.789</li>
          </ul>
          <div className="product-size">
            <h4>Chọn Kích Thước</h4>
            <div className="size-options">
              {shoe.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-button ${
                    selectedSize === size ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="product-actions">
            <button
              className="cart-button"
              onClick={() => handleAddToCart(shoe)}
            >
              Thêm Vào Giỏ Hàng
            </button>
            <button className="cart-button" onClick={() => handleBuy(shoe)}>
              Mua ngay
            </button>
          </div>
        </div>
      </div>
      <div className="list-thumb">
        {shoe.thumbs.map((thumb) => (
          <div key={thumb} className="thumb">
            <img src={thumb} alt={thumb} />
          </div>
        ))}
      </div>
      <h2 className="title">SẢN PHẨM TƯƠNG TỰ </h2>
      <Swiper
        style={{ marginBottom: 20 }}
        slidesPerView={4}
        modules={[Autoplay, Scrollbar, Pagination, A11y]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
      >
        {similar.map((shoe) => (
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
    </>
  );
}
