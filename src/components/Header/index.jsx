import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";

import "./styles.css";
import logo from "../../assets/logo.jpg";

export function Header() {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <nav className="main-nav">
        <Link to="/">Trang Chủ</Link>
        <Link to="/about">Giới thiệu</Link>
      </nav>

      <div className="search-bar">
        <input type="text" placeholder="Tìm kiếm sản phẩm..." />
        <CiSearch />
      </div>

      <div className="user">
        <div>Tùng Nguyễn</div>
        <Link to="/cart">
          <BsCart2 />
        </Link>
      </div>
    </header>
  );
}
