import "./contact.css";

export function Contact() {
    return (
        <div class="contact-form">
            <h2>Để lại lời nhắn cho chúng tôi</h2>
            <div class="information">
                <div class="basic">
                    <form>
                        <input class="child" type="text" placeholder="Họ và tên của bạn" />
                    </form>

                    <form>
                        <input class="child" type="text" placeholder="Email của bạn" />
                    </form>
                    <form>
                        <input class="child" type="text" placeholder="Số điện thoại liên hệ" />
                    </form>
                    <button type="button" class="btn btn-primary">Gửi lời nhắn</button>
                </div>
                <div class="content">
                    <form>
                        <input class="child-content" type="text" placeholder="Nội dung" />
                    </form>
                </div>
                <div class="address">
                    <h4>Địa chỉ</h4>
                    <p>Số 123, dường Điện Biên Phủ, P25, Q.Bình Thạnh</p>
                    <p>Số điện thoại: 0395845525</p>
                    <p>Email: ductung5525@gmail.com</p>

                </div>

            </div>

        </div>
    );
}