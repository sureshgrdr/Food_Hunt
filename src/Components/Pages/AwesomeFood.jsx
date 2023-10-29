import "./AwesomeFood.css";
import awesFood from "../Assets/AwesomeFood";

function AwesomeFood() {
  return (
    <div className="awesDiv">
      <div className="global-setup awesBox">
        <p>Our Awesome Food</p>
        <p>You don't need a diet because we provide healthy and delicious food.</p>
        <div>
          <ul className="awesWrapper">
            {awesFood.map((item) => {
              return (
                <li className="awesCard" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>50% OFF</p>
                  <p>🏃‍♂️💨</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AwesomeFood;
