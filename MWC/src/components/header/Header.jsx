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

  useEffect(() => {
    const listItems = document.querySelectorAll(".mobile-products li");

    listItems.forEach((li) => {
      if (li.querySelector("ul")) {
        li.addEventListener("click", function (e) {
          const liRect = this.getBoundingClientRect();
          const clickX = e.clientX - liRect.left;

          if (clickX > liRect.width - 30) {
            this.classList.toggle("open");
          }
        });
      }
    });

    return () => {
      listItems.forEach((li) => {
        li.replaceWith(li.cloneNode(true));
      });
    };
  }, []);

  return (
    <div className={`header-container ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <div className="menu-mobile">
          <img src="./menu.svg" alt="" onclick="openMenu()" />
          <div id="sidebar" class="sidebar">
            <div className="sidebar-title">
              <span>Menu</span>
            </div>
            <div className="mobile-products">
              <ul>
                <li>
                  <a href="/header-sale/gia-uu-dai.html">GIÁ ƯU ĐÃI</a>
                  <div className="icon-angle-right"></div>
                  <ul>
                    <li>
                      <a href="">79K</a>
                    </li>
                    <li>
                      <a href="">99K - 119K</a>
                    </li>
                    <li>
                      <a href="">149K - 159K</a>
                    </li>
                    <li>
                      <a href="">GIÁ ĐẶC BIỆT</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/header-sale/giay-nu.html">GIÀY NỮ</a>
                  <div className="icon-angle-right"></div>
                  <ul>
                    <li>
                      <a href="">GIÀY CAO GÓT</a>
                    </li>
                    <li>
                      <a href="">GIÀY THỂ THAO</a>
                    </li>
                    <li>
                      <a href="">SANDAL NỮ</a>
                    </li>
                    <li>
                      <a href="">DÉP SỤC</a>
                    </li>
                    <li>
                      <a href="">GIATF BÚP BÊ & MỌI</a>
                    </li>
                    <li>
                      <a href="">OXFORD & BOOT</a>
                    </li>
                    <li>
                      <a href="">DÉP NỮ</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/header-sale/giay-nam.html">GIÀY NAM</a>
                  <div className="icon-angle-right"></div>
                  <ul>
                    <li>
                      <a href="">GIÀY THỂ THAO NAM</a>
                    </li>
                    <li>
                      <a href="">SANDAL NAM</a>
                    </li>
                    <li>
                      <a href="">DÉP NAM</a>
                    </li>
                    <li>
                      <a href="">GIÀY TÂY & SLIP ON</a>
                    </li>
                    <li>
                      <a href="">BOOT NAM & OXFORD</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/header-sale/giay-cap.html">GIÀY CẶP</a>
                </li>
                <li>
                  <a href="/header-sale/balo-tui.html">BALO - TÚI</a>
                  <div className="icon-angle-right"></div>
                  <ul>
                    <li>
                      <a href="">Balo laptop, du lịch, thời trang</a>
                    </li>
                    <li>
                      <a href="">Túi Đeo Chéo</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/header-sale/sale50.html">SALE 50%</a>
                </li>
                <li>
                  <a href="/header-sale/san-pham.html">SẢN PHẨM BÁN CHẠY</a>
                </li>
                <li>
                  <a href="/header-sale/phu-kien.html">PHỤ KIỆN</a>
                  <div className="icon-angle-right"></div>
                  <ul>
                    <li>
                      <a href="">VỚ</a>
                    </li>
                    <li>
                      <a href="">CHAI VỆ SINH GIÀY</a>
                    </li>
                    <li>
                      <a href="">DÂY GIÀY</a>
                    </li>
                    <li>
                      <a href="">ĐẾ LÓT</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="sidebar-footer">
              Miễn phí giao hàng với hóa đơn từ 150.000 đồng.
              <br />
              Bảo hành keo vĩnh viễn
            </div>
          </div>
        </div>
        <div id="overlay" class="overlay" onclick="closeMenu()"></div>

        <div className="header-logo">
          <img src="./logo.png" alt="logo" />
        </div>
        <nav className="header-nav">
          <ul className="header-menu">
            <li>
              <div className="header-title">
                <a href="/header-sale/gia-uu-dai.html">GIÁ ƯU ĐÃI</a>
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
                <a href="/header-sale/giay-nu.html">GIÀY NỮ</a>
              </div>
              <ul className="header-popup-2">
                <li>
                  <a href="/header-sale/shoe-cao-got.html">GIÀY CAO GÓT</a>
                </li>
                <li>
                  <a href="/header-sale/shoe-the-thao.html">GIÀY THỂ THAO</a>
                </li>
                <li>
                  <a href="/header-sale/sandal-nu.html">SANDAL NỮ</a>
                </li>
                <li>
                  <a href="/header-sale/dep-suc.html">DÉP SỤC</a>
                </li>
                <li>
                  <a href="/header-sale/giay-bup-be.html">DÉP BÚP BÊ & MỌI</a>
                </li>
                <li>
                  <a href="/header-sale/oxford.html">OXFORD & BOOT</a>
                </li>
                <li>
                  <a href="/header-sale/dep-nu.html">DÉP NỮ</a>
                </li>
              </ul>
            </li>
            <li>
              <div className="header-title">
                <a href="/header-sale/giay-nam.html">GIÀY NAM</a>
              </div>
              <ul className="header-popup-3">
                <li>
                  <a href="/header-sale/giay-nam-the-thao.html">
                    GIÀY THỂ THAO NAM
                  </a>
                </li>
                <li>
                  <a href="/header-sale/sandal-nam.html">SANDAL NAM</a>
                </li>
                <li>
                  <a href="/header-sale/dep-nam.html">DÉP NAM</a>
                </li>
                <li>
                  <a href="/header-sale/giay-tay.html">GIÀY TÂY & SLIP ON</a>
                </li>
                <li>
                  <a href="/header-sale/bootnam.html">BOOT NAM & OXFORD</a>
                </li>
              </ul>
            </li>
            <li className="header-title">
              <a href="/header-sale/giay-cap.html">GIÀY CẶP</a>
            </li>
            <li>
              <div className="header-title">
                <a href="/header-sale/balo-tui.html">BALO-TÚI</a>
              </div>
              <ul className="header-popup-4">
                <li>
                  <a href="/header-sale/du-lich-thoi-trang.html">
                    Balo laptop, du lịch, thời trang
                  </a>
                </li>
                <li>
                  <a href="/header-sale/tui-deo.html">Túi Đeo Chéo</a>
                </li>
              </ul>
            </li>
            <li className="header-title">
              <a href="/header-sale/sale50.html">SALE50%</a>
            </li>
            <li className="header-title">
              <a href="/header-sale/san-pham.html">SẢN PHẨM BÁN CHẠY</a>
            </li>
            <li>
              <div className="header-title">
                <a href="/header-sale/phu-kien.html">PHỤ KIỆN</a>
              </div>
              <ul className="header-popup-5">
                <li>
                  <a href="/header-sale/vo.html">Vớ</a>
                </li>
                <li>
                  <a href="/header-sale/chai-ve-sinh-giay.html">
                    Chai Vệ Sinh Giày
                  </a>
                </li>
                <li>
                  <a href="/header-sale/day-giay.html">Dây Giày</a>
                </li>
                <li>
                  <a href="/header-sale/de-lot.html">Đế Lót</a>
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
              <div className="shopping-cart">
                <div className="cart-top">
                  <span>Giỏ hàng</span>
                </div>
                <div className="cart-bottom">
                  <p>Giỏ hàng trống!</p>
                </div>
              </div>
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
