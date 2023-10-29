import SS_Hydrabad from "./SS-Hyderabad.jpg";
import KFC from "./KFC.jpg";
import Sangeetha from "./Sangeetha.jpg";
import Dominos from "./Domino_Pizza.jpg";
import Burger_King from "./Burger_King.jpg";

let topBrands = [];

function BrandData(id, name, image, category, time) {
  topBrands.push({ id: id, name: name, image: image, category: category, time: time });
}

new BrandData(1, "SS-Hyderabad", SS_Hydrabad, "biriyani", 25);
new BrandData(2, "KFC", KFC, "chicken", 15);
new BrandData(3, "Sangeetha", Sangeetha, "Food", 30);
new BrandData(4, "Dominos", Dominos, "pizza", 25);
new BrandData(5, "Burger-King", Burger_King, "burger", 20);
new BrandData(6, "Sangeetha", Sangeetha, "Food", 30);
new BrandData(7, "Dominos", Dominos, "pizza", 25);
new BrandData(8, "Burger-King", Burger_King, "burger", 20);

// console.log(topBrands);
export default topBrands;
