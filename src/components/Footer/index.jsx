import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "./styles.css";

export function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Về Chúng Tôi</h3>
          <p>
            Chúng tôi cung cấp những đôi giày tốt nhất với chất lượng cao và giá
            cả phải chăng. Mục tiêu của chúng tôi là mang đến sự thoải mái và
            phong cách cho bạn.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Liên Kết</h3>
          <ul>
            <li>
              <Link to="/about">Về Chúng Tôi</Link>
            </li>
            <li>
              <Link to="/contact">Liên Hệ</Link>
            </li>
            <li>
              <Link to="/security">Chính Sách Bảo Mật</Link>
            </li>
            <li>
              <Link to="/service">Điều Khoản Dịch Vụ</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Theo Dõi Chúng Tôi</h3>
          <Link
            to="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </Link>
          <Link
            to="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </Link>
          <Link
            to="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 ShoeCommerce. All rights reserved.</p>
      </div>
    </footer>
  );
}
