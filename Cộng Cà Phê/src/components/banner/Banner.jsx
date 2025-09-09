import "./banner.css";
export default function Banner() {
  return (
    <div className="banner-container">
      <img
        src="https://cong-news.appwifi.com/wp-content/uploads/2025/04/VNTCL-Web-banner-01-.png"
        alt="banner"
      />
      <div className="banner-title">
        <h6>VIỆT NAM TRONG CỘNG LÀ...</h6>
        <p>
          Qua chiến dịch, Cộng muốn tiếp thêm sức mạnh và lan tỏa các giá trị
          tốt đẹp, mong nhận sự góp mặt của tất cả công dân, hứa hẹn sẽ mang đến
          bao điều thú vị cùng giải thưởng vô cùng hấp dẫn.
        </p>
        <div className="banner-link">
          <a href="/banner.link/bannerlink.html">
            <i>Xem thêm</i>
          </a>
        </div>
      </div>
    </div>
  );
}
