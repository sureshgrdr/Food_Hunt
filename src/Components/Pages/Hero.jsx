import "./Hero.css";
import Banner from "../Assets/Banner.jpg";

function Hero() {
  return (
    <div className="heroBox global-setup">
      <div className="heroLeft">
        <p>
          The Fastest in Delivering Your <span style={{ color: "rgb(248, 88, 88)" }}>Food</span>
        </p>
        <div className="heroBtn">
          <button className="btnStart">Get Started</button>
          <button className="btnOrder">Order Now !</button>
        </div>
      </div>
      <div className="heroRight">
        <img src={Banner} alt="Scooter Delivery" />
      </div>
    </div>
  );
}

export default Hero;
