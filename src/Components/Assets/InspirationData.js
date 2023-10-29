import Chicken_Biriyani from "./Chicken_Biriyani.jpg";
import Burger from "./Burger.jpg";
import Pizza from "./Pizza.jpg";
import Chicken_65_leg from "./Chicken_65_Leg.jpg";
import Chicken_Rice from "./Chicken_Rice.jpg";
import Cake from "./Cake.jpg";

let inspArr = [];
function FoodData(id, fname, image, category) {
  inspArr.push({ id: id, fname: fname, image: image, category: category });
}

new FoodData(1, "Biriyani", Chicken_Biriyani, ["biriyani", "food"]);
new FoodData(2, "Burger", Burger, ["burgger", "food"]);
new FoodData(3, "Pizza", Pizza, ["pizza", "food"]);
new FoodData(4, "Chicken 65", Chicken_65_leg, ["chicken 65", "food"]);
new FoodData(5, "Chicken Rice", Chicken_Rice, ["chicken rice", "food"]);
new FoodData(6, "Cake", Cake, ["cake"]);
new FoodData(7, "Chicken 65", Chicken_65_leg, ["chicken 65", "food"]);
new FoodData(8, "Chicken Rice", Chicken_Rice, ["chicken rice", "food"]);
new FoodData(9, "Cake", Cake, ["cake"]);

export default inspArr;
