import "./styles.css";

export function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Về Chúng Tôi</h1>
      </div>
      <div className="about-content">
        <section className="about-section">
          <div className="text-with-image">
            <img
              src="https://t3.ftcdn.net/jpg/05/84/96/60/360_F_584966026_0HU7OQdOUlrRse3qjtjiYayY1ePGGtSe.jpg"
              alt="Mission"
              className="section-image"
            />
            <div>
              <h2>Sứ Mệnh Của Chúng Tôi</h2>
              <p>
                Sứ mệnh của chúng tôi là mang lại sự thoải mái và phong cách cho
                mọi người. Chúng tôi luôn nỗ lực để cung cấp các sản phẩm đáp
                ứng nhu cầu đa dạng của khách hàng.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="text-with-image reverse">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/632/653/239/advertising-logo-nike-poster-wallpaper-preview.jpg"
              alt="Quality"
              className="section-image"
            />
            <div>
              <h2>Giá Trị Cốt Lõi</h2>
              <ul>
                <li>
                  Chất lượng: Đảm bảo cung cấp các sản phẩm chất lượng cao.
                </li>
                <li>Khách hàng: Luôn đặt khách hàng làm trọng tâm.</li>
                <li>Đổi mới: Liên tục cải tiến và phát triển sản phẩm mới.</li>
                <li>
                  Bền vững: Cam kết hoạt động kinh doanh bền vững và bảo vệ môi
                  trường.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="text-with-image">
            <img
              src="https://m.media-amazon.com/images/I/71bLZ2uVZoL.jpg"
              alt="Team"
              className="section-image"
            />
            <div>
              <h2>Đội Ngũ Của Chúng Tôi</h2>
              <p>
                Đội ngũ của chúng tôi bao gồm những người đam mê giày dép và
                thời trang. Chúng tôi làm việc không ngừng để mang đến cho bạn
                những trải nghiệm mua sắm tuyệt vời nhất.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 style={{ textAlign: "center" }}>Sản Phẩm Tiêu Biểu</h2>
          <div className="product-gallery">
            <img
              className="product-image"
              src="https://bizweb.dktcdn.net/thumb/large/100/336/177/products/1-22.jpg?v=1716893700517"
              alt="Shoe 1"
            />
            <img
              className="product-image"
              src="https://bizweb.dktcdn.net/thumb/large/100/336/177/products/2-9.jpg?v=1714982826723"
              alt="Shoe 2"
            />
            <img
              className="product-image"
              src="https://bizweb.dktcdn.net/thumb/large/100/336/177/products/12-8e8387e1-62ac-4672-9de4-5e09c1cc9124.jpg?v=1705254230807"
              alt="Shoe 3"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
