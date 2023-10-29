import combo1 from "./Combo1.jpg";
import combo2 from "./Combo2.jpg";
import combo3 from "./Combo3.jpg";

let awesFood = [];

function AwesomeFood(id, name, image) {
  awesFood.push({ id: id, name: name, image: image });
}

new AwesomeFood(1, "Biriyani Combo", combo1);
new AwesomeFood(2, "Lamb Combo", combo2);
new AwesomeFood(3, "Seafood Combo", combo3);

// console.log(awesFood);
export default awesFood;
