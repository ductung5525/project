import "./pay.css";



export function Pay() {
    return (

        <div class="contact-form">
            <h2 class="abc">Thông tin nhận hàng</h2>

            <div class="information">
                <div class="img-1">
                    <img
                        src="https://t3.ftcdn.net/jpg/05/84/96/60/360_F_584966026_0HU7OQdOUlrRse3qjtjiYayY1ePGGtSe.jpg"
                        alt="Mission"
                        className="section-image"
                    />
                </div>
                <div class="buy">
                    <div class="basic">
                        <form>
                            <input class="child" type="text" placeholder="Họ và tên của bạn" />
                        </form>

                        <form>
                            <input class="child" type="text" placeholder="Địa chỉ nhận hàng" />
                        </form>
                        <form>
                            <input class="child" type="text" placeholder="Số điện thoại liên hệ" />
                        </form>
                        <button type="button" class="btn btn-danger">ĐẶT HÀNG</button>

                    </div>
                    <div class="address">
                        <h4>Địa chỉ cửa hàng chúng tôi</h4>
                        <p>Số 123, dường Điện Biên Phủ, P25, Q.Bình Thạnh</p>
                        <p>Số điện thoại: 0395845525</p>
                        <p>Email: ductung5525@gmail.com</p>

                    </div>
                </div>
                <div class="img-2">
                    <img
                        src="https://c4.wallpaperflare.com/wallpaper/632/653/239/advertising-logo-nike-poster-wallpaper-preview.jpg"
                        alt="Quality"
                        className="section-image"
                    />
                </div>

            </div>

        </div>
    );
}