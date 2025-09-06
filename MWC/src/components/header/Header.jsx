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
        <div className="menu-mobile">
          <img src="./menu.svg" alt="" />
        </div>
        <div className="header-logo">
          <img src="./logo.png" alt="logo" />
        </div>
        <nav className="header-nav">
          <ul className="header-menu">
            <li>
              <div className="header-title">
                <a href="#">GIÁ ƯU ĐÃI</a>
              </div>
              <ul className="header-popup-1">
                <li>
                  <a href="/header-sale/sale-79k.html">79K</a>
                </li>
                <li>
                  <a href="/header-sale/sale-99k-119k.html">99K - 119K</a>
                </li>
                <li>
                  <a href="/header-sale/sale-149k-159k.html">149K - 159K</a>
                </li>
                <li>
                  <a href="/header-sale/sale-dacbiet.html">GIÁ ĐẶC BIỆT</a>
                </li>
              </ul>
            </li>
            <li>
              <div className="header-title">
                <a href="#">GIÀY NỮ</a>
              </div>
              <ul className="header-popup-2">
                <li>
                  <a href="#">GIÀY CAO GÓT</a>
                </li>
                <li>
                  <a href="#">GIÀY THỂ THAO</a>
                </li>
                <li>
                  <a href="#">SANDAL NỮ</a>
                </li>
                <li>
                  <a href="#">DÉP SỤC</a>
                </li>
                <li>
                  <a href="#">DÉP BÚP BÊ & MỌI</a>
                </li>
                <li>
                  <a href="#">OXFORD & BOOT</a>
                </li>
                <li>
                  <a href="#">DÉP NỮ</a>
                </li>
              </ul>
            </li>
            <li>
              <div className="header-title">
                <a href="#">GIÀY NAM</a>
              </div>
              <ul className="header-popup-3">
                <li>
                  <a href="#">GIÀY THỂ THAO NAM</a>
                </li>
                <li>
                  <a href="#">SANDAL NAM</a>
                </li>
                <li>
                  <a href="#">DÉP NAM</a>
                </li>
                <li>
                  <a href="#">GIÀY TÂY & SLIP ON</a>
                </li>
                <li>
                  <a href="#">BOOT NAM & OXFORD</a>
                </li>
              </ul>
            </li>
            <li className="header-title">
              <a href="#">GIÀY CẶP</a>
            </li>
            <li>
              <div className="header-title">
                <a href="#">BALO-TÚI</a>
              </div>
              <ul className="header-popup-4">
                <li>
                  <a href="#">Balo laptop, du lịch, thời trang</a>
                </li>
                <li>
                  <a href="#">Túi Đeo Chéo</a>
                </li>
              </ul>
            </li>
            <li className="header-title">
              <a href="#">SALE50%</a>
            </li>
            <li className="header-title">
              <a href="#">SẢN PHẨM BÁN CHẠY</a>
            </li>
            <li>
              <div className="header-title">
                <a href="#">PHỤ KIỆN</a>
              </div>
              <ul className="header-popup-5">
                <li>
                  <a href="#">Vớ</a>
                </li>
                <li>
                  <a href="#">Chai Vệ Sinh Giày</a>
                </li>
                <li>
                  <a href="#">Dây Giày</a>
                </li>
                <li>
                  <a href="#">Đế Lót</a>
                </li>
              </ul>
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
            <a href="/header-sale/login.html">
              <img src="./user.svg" alt="user" />
            </a>
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
