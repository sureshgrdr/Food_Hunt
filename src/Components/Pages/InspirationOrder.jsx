import "./InspirationOrder.css";
import inspArr from "../Assets/InspirationData";
// import { Swiper, SwiperSlide } from "swiper";
// import "swiper/css";

function InspirationOrder() {
  return (
    <div className="inspDiv">
      <div className=" global-setup inspBox">
        <p>Inspiration for your first order</p>
        <ul className="inspWrapper">
          {inspArr.map((data) => {
            return (
              <li key={data.id} className="inspCard">
                <img src={data.image} alt={data.fname} />
                <p>{data.fname}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default InspirationOrder;
