import "./rowmenu.css";
export default function Rowmenu() {
  return (
    <div className="rowmenu">
      <div className="rowmenu-column-1">
        <h6>TIN TỨC</h6>
        <a href="">Về Chúng Tôi</a>
      </div>
      <div className="rowmenu-column-2">
        <h6>CỬA HÀNG</h6>
        <a href="">Danh Sách Cửa Hàng</a>
      </div>
      <div className="rowmenu-column-3">
        <h6>ĐỒ UỐNG</h6>
        <a href="">Hôm Nay Cộng Có </a>
      </div>
      <div className="rowmenu-column-4">
        <h6>CHÍNH SÁCH</h6>
        <a href="">Chính Sách Bảo Mật</a>
        <a href="">Điều Khoản Sử Dụng</a>
      </div>
    </div>
  );
}
