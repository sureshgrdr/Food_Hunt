import { useState } from "react";
import "./Navbar.css";
import city from "../Assets/Cities";

function Navbar() {
  let [state, setState] = useState(true);
  let [dropdn, setDropdn] = useState(true);
  let [logbtn, setLogbtn] = useState("logClosed");
  let [srchLoc, setSrchLoc] = useState("");

  const handleState = () => {
    setState(!state);
  };

  const handleSearch = (e) => {
    setDropdn(true);
    setSrchLoc(e.target.value);
    // console.log(srchLoc);
  };

  return (
    <div className="navBox global-setup">
      <p>Food Hunt</p>
      <div className={state ? "secDisp" : "navSection"}>
        <div className="searchBox">
          <div className="navLocation">
            <span className="material-symbols-outlined ">near_me</span>

            <input className="navInput " type="text" placeholder="Location" value={srchLoc} onChange={(e) => handleSearch(e)} />
            {srchLoc ? (
              <ul className="locationDiv">
                {city
                  .filter((fil) => {
                    const srchTerm = srchLoc.toLocaleLowerCase();
                    const cityName = fil.toLocaleLowerCase();

                    return srchTerm && cityName.startsWith(srchTerm) && cityName !== srchTerm;
                  })
                  .map((item, i) => {
                    return (
                      <li onClick={() => setSrchLoc(item)} key={i}>
                        {item}
                      </li>
                    );
                  })}
              </ul>
            ) : (
              ""
            )}
            {!dropdn ? (
              <ul className="locationDiv">
                {city.map((item, i) => {
                  return (
                    <li
                      onClick={() => {
                        setSrchLoc(item);
                        setDropdn(true);
                      }}
                      key={i}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
            <span
              className="material-symbols-outlined"
              onClick={() => {
                setDropdn(!dropdn);
              }}>
              arrow_drop_{dropdn ? "down" : "up"}
            </span>
          </div>
          <p>⁞</p>
          <input className="navInput navSearch" type="text" placeholder="Search for Restaurant or a dish..." />
          <span className="material-symbols-outlined">search</span>
        </div>
        <div className="navBtn">
          <button
            className="btn"
            onClick={() => {
              document.querySelector("html").style.overflow = "hidden";
              setLogbtn("logBg");
            }}>
            Log in
          </button>

          {/* <div className={logbtn}></div> */}
          <div className={`loginForm ${logbtn}`}>
            <h1>Log in</h1>
            <span
              className="material-symbols-outlined "
              onClick={() => {
                document.querySelector("html").style.overflow = "visible";
                setLogbtn("logClosed");
              }}>
              close
            </span>
          </div>

          <button className="btn">Sign up</button>
        </div>
      </div>
      <span className="material-symbols-outlined toggleBtn" onClick={handleState}>
        {state ? "menu" : "close"}
      </span>
    </div>
  );
}

export default Navbar;
