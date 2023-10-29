import KFC_Card from "./Card_KFC.jpg";
import Burger_king from "./Burger_King_Combo.jpg";
import Dominos from "./Domino_Combo.jpg";
import SS_Hyderabad from "./Chicken_Combo.jpg";
import Kwalit_Walls from "./Kwality_Walls.jpg";
import Fresh_Kings from "./Fresh_Juice.jpg";
import McDonalds from "./McDonalds.jpg";
import Anjappar from "./Anjappar.jpg";
import Ibaco from "./Ibaco.jpg";

let bestFood = [];
function BestFoodData(id, name, image, price, tags, rating, protocol, ppl = "one") {
  bestFood.push({ id: id, name: name, image: image, price: price, tags: tags, rating: rating, protocol: protocol, ppl: ppl });
}

new BestFoodData(1, "KFC", KFC_Card, 250, ["burger", "fastfood"], 4.5, "Restaurant partner follows WHO protocol");
new BestFoodData(2, "Burger King", Burger_king, 550, ["burger", "fastfood"], 4.7, "Restaurant partner follows WHO protocol", "two");
new BestFoodData(3, "Dominos", Dominos, 350, ["pizza"], 4.1, "Restaurant partner follows WHO protocol");
new BestFoodData(4, "SS Hyderabad", SS_Hyderabad, 300, ["biriyani", "chicken"], 4.2, "Restaurant partner follows WHO protocol");
new BestFoodData(5, "Kwality Walls", Kwalit_Walls, 150, ["ice cream"], 4.6, "Store partner follows WHO protocol");
new BestFoodData(6, "Fresh Kings", Fresh_Kings, 80, ["fresh juice"], 4.3, "Shop partner follows WHO protocol");
new BestFoodData(7, "McDonald's", McDonalds, 200, ["burger", "fastfood"], 3.9, "Restaurant partner follows WHO protocol");
new BestFoodData(8, "Anjappar", Anjappar, 280, ["biriyani", "mutton"], 4.0, "Restaurant partner follows WHO protocol");
new BestFoodData(9, "Ibaco", Ibaco, 100, ["ice cream"], 4.4, "Shop partner follows WHO protocol");

// console.log(bestFood.sort((a, b) => a.price - b.price));
// bestFood = bestFood.filter((itm) => {
//   return itm.tags.includes("burger");
// });

export default bestFood;
