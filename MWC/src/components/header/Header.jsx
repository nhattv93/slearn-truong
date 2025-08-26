import { useEffect, useState } from "react";
import "./header.css";
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleSroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleSroll);
    return () => window.removeEventListener("scroll", handleSroll);
  }, []);

  return (
    <div className={`header-container ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <div className="header-logo">
          <img src="./logo.png" alt="logo" />
        </div>
        <nav className="header-nav">
          <ul className="header-menu">
            <li>
              <a href="#">GIÁ ƯU ĐÃI</a>
            </li>
            <li>
              <a href="#">GIÀY NỮ</a>
            </li>
            <li>
              <a href="#">GIÀY NAM</a>
            </li>
            <li>
              <a href="#">GIÀY CẶP</a>
            </li>
            <li>
              <a href="#">BALO-TÚI</a>
            </li>
            <li>
              <a href="#">SALE50%</a>
            </li>
            <li>
              <a href="#">SẢN PHẨM BÁN CHẠY</a>
            </li>
            <li>
              <a href="#">PHỤ KIỆN</a>
            </li>
          </ul>
        </nav>
        <div className="header-action">
          <div className="header-search">
            <input type="text" placeholder="Tìm kiếm" />
            <div className="header-search-icon">
              <img src="./search.svg" alt="" />
            </div>
          </div>
          <div className="header-icons">
            <img src="./user.svg" alt="" />
            <div className="header-icons-cart">
              <img src="./cart.svg" alt="cart" />
              <div className="cart-span">
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
