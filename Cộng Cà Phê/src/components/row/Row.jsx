import "./row.css";
export default function Row() {
  return (
    <div className="row-container">
      <div className="row-1">
        <img src="./row-1.jpg" alt="anh1" />
        <div className="row-1-span">
          <span>PHA CHẾ</span>
        </div>
      </div>
      <div className="row-2">
        <img src="./row-2.jpg" alt="anh2" />
        <div className="row-2-span">
          <span>THỰC ĐƠN</span>
        </div>
      </div>
    </div>
  );
}
