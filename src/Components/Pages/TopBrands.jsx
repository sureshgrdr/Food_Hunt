import topBrands from "../Assets/TopBrandsData";
import "./TopBrands.css";
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function TopBrands() {
  return (
    <div className="brandsDiv ">
      <div className="global-setup brandBox">
        <p>Top Brands for you</p>
        <swiper-container navigation="true" slides-per-view="5" speed="500" loop="true" css-mode="true">
          {topBrands.map((item) => {
            return (
              <swiper-slide key={item.id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.time}mins</p>
              </swiper-slide>
            );
          })}
        </swiper-container>
      </div>
    </div>
  );
}
export default TopBrands;
