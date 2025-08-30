import "./footer.css";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="footer-left-child">
          <h4>GỌI MUA HÀNG ONLINE (08:00 - 21: 00 mỗi ngày)</h4>
          <a href="#">1900.633.349</a>
          <span>Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</span>
        </div>
        <div className="footer-left-child">
          <h4>GÓP Ý & KHIẾU NẠI (08:30 - 20:30)</h4>
          <a href="#">1900.633.349</a>
          <span>Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</span>
        </div>
      </div>
      <div className="footer-center">
        <h4>THÔNG TIN</h4>
        <a href="#">Giới thiệu về MWC</a>
        <a href="#">Thông tin Website thương mại điện tử</a>
        <a href="#">Than Phiền Góp Ý</a>
        <a href="#">Chính sách và quy định</a>
      </div>
      <div className="footer-right">
        <h4>FAQ</h4>
        <a href="#">Vận chuyển</a>
        <a href="#">Chính sách đổi trả</a>
        <a href="#">Chính sách đổi trả bảo hành</a>
        <a href="#">Đối tác cung cấp</a>
        <ul className="icon">
          <img src="./facebook.svg" alt="" />
          <img src="./instagram.svg" alt="" />
          <img src="./youtube.svg" alt="" />
          <img src="./shopee.svg" alt="" />
          <img src="./tiktok.svg" alt="" />
        </ul>
      </div>
    </div>
  );
}
