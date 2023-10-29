import { useState } from "react";
import bestFood from "../Assets/BestFoodData";
import "./BestFood.css";

function BestFood() {
  let [food, setFood] = useState(bestFood);
  let [sorPrc, setSorPrc] = useState(true);
  let [sorRat, setSorRat] = useState(true);
  let [srhTrm, setSrhTrm] = useState("");
  let [srhTags, setSrhTags] = useState([]);

  let [...allTags] = new Set(
    bestFood
      .slice()
      .map((item) => item.tags)
      .flat()
  );
  allTags = [...allTags, ...bestFood.slice().map((item) => item.name.toLocaleLowerCase())];
  // console.log(allTags);

  function handlePrice() {
    // handleClear();
    clearRating();
    let foodPrice;
    foodPrice = food.slice().sort((a, b) => (sorPrc ? a.price - b.price : b.price - a.price));
    setFood(foodPrice);
    document.querySelector(".prtrBtn").classList.add("priceBtn");
  }
  function handleRatings() {
    // handleClear();
    // setSorPrc(true);
    clearPrice();
    let foodRating;
    foodRating = food.slice().sort((a, b) => (sorRat ? a.rating - b.rating : b.rating - a.rating));
    setFood(foodRating);
    document.querySelector(".ratgBtn").classList.add("priceBtn");
  }
  function clearRating() {
    setSorRat(true);
    document.querySelector(".ratgBtn").classList.remove("priceBtn");
  }
  function clearPrice() {
    setSorPrc(true);
    document.querySelector(".prtrBtn").classList.remove("priceBtn");
  }

  function handleClear() {
    setFood(bestFood);
    setSrhTrm("");
    setSorPrc(true);
    setSorRat(true);
    document.querySelector(".bestInput").value = "";
    document.querySelector(".prtrBtn").classList.remove("priceBtn");
    document.querySelector(".ratgBtn").classList.remove("priceBtn");
  }

  return (
    <div className="bestFoodDiv">
      <div className="global-setup foodBox">
        <div className="filterDiv">
          <div>
            <p>Sort</p>
            <button
              className="btn prtrBtn"
              onClick={() => {
                handlePrice();
                setSorPrc(!sorPrc);
              }}>
              Price <span className="material-symbols-outlined">arrow_{sorPrc ? "upward" : "downward"}</span>
            </button>
            <button
              className="btn ratgBtn"
              onClick={() => {
                handleRatings();
                setSorRat(!sorRat);
              }}>
              Ratings <span className="material-symbols-outlined">arrow_{sorRat ? "upward" : "downward"}</span>
            </button>
            <button className="btn" onClick={handleClear}>
              Clear
            </button>
          </div>
          <div className="bestSrDiv">
            <div className="bestSrBox">
              <input
                type="text "
                className="bestInput"
                placeholder="Search for a dish"
                onChange={(e) => {
                  setSrhTrm(e.target.value);
                  setSrhTags(allTags);
                }}
                value={srhTrm}
              />
              <span className="material-symbols-outlined">search</span>
            </div>
            <div className="srhResult">
              <ul>
                {srhTags
                  .filter((item) => {
                    return srhTrm && item.includes(srhTrm) && item !== srhTrm;
                  })
                  .map((item, i) => {
                    // console.log(item);
                    return (
                      <li
                        key={i}
                        onClick={() => {
                          setSrhTrm(item);
                          setSrhTags([]);
                        }}>
                        {item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase()}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
        <p>Best Food for You </p>
        <ul className="foodWrapper">
          {food
            .filter((item) => {
              return item.tags.toString().includes(srhTrm.toLocaleLowerCase()) || item.name.toLowerCase().toString().includes(srhTrm.toLocaleLowerCase());
            })
            .map((item) => {
              return (
                <li className="foodCard" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cardCnt">
                    <div className="cardRow">
                      <p>{item.name}</p>
                      <p>
                        {item.price} ₹ for {item.ppl}
                      </p>
                    </div>
                    <div className="cardRow">
                      <p>
                        {item.tags.map((itm, i) => {
                          return <span key={i}>{itm.slice(0, 1).toUpperCase() + itm.slice(1).toLowerCase()} | </span>;
                        })}
                      </p>
                      <p>{item.rating} ⭐</p>
                    </div>
                  </div>
                  <p>{item.protocol}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default BestFood;
