import "./footer.css";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h6>KÊNH KẾT NỐI</h6>
        <div className="footer-link">
          <a href="">
            <img src="./fb.png" alt="fb" />
          </a>
          <a href="">
            <img src="./ig.png" alt="ig" />
          </a>
          <a href="">
            <img src="./yt.png" alt="yt" />
          </a>
        </div>
      </div>
      <div className="footer-right">
        <h6>LUÔN CẬP NHẬT</h6>
        <p>Về các tin tức đó đây, sản phẩm mới</p>
        <form>
          <div className="footer-right-input">
            <input type="email" placeholder="Email" />
            <span>ĐĂNG KÝ</span>
          </div>
        </form>
        <div className="footer-title">
          <p>Chúng tôi tôn trọng quyền riêng tư của bạn</p>
        </div>
      </div>
    </div>
  );
}
