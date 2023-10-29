import "./Footer.css";
import Delivery from "../Assets/Delivery.png";

function Footer() {
  return (
    <div>
      <div className="footDiv">
        <div className="global-setup footBox">
          <div className="footLeft">
            <p>Get Started with our Offer</p>
            <p>With wide variety of dishes and stores at your doorstep.</p>
            <div className="footBtn">
              <input type="text" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="footRight">
            <img src={Delivery} alt="Delivery" />
          </div>
        </div>
      </div>
      <div className="footer-block">
        <div className="footer-cnt global-setup">
          <div>
            <h2>Food Hunt</h2>
            <p>Better food for more people</p>
          </div>
          <div>
            <h3>Our Services</h3>
            <p>Easy Order</p>
            <p>Fastest Delivery</p>
            <p>Best Quality</p>
          </div>
          <div>
            <h3>Tomatoverse</h3>
            <p>Who we are</p>
            <p>Blog</p>
            <p>Work with Us</p>
          </div>
          <div>
            <h3>Learn More</h3>
            <p>Privacy</p>
            <p>Security</p>
            <p>Terms</p>
            <p>Sitemap</p>
          </div>
          <div>
            <h3>Social Links</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
        <div className="footer-rights glob-Margin">
          <h6>All trademarks are properties of their respective owners.2023 © Food Hunt Ltd. All rights reserved.</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
