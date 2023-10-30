import { useState } from "react";
import "./Navbar.css";
import city from "../Assets/Cities";

function Navbar() {
  let [state, setState] = useState(true);
  let [dropdn, setDropdn] = useState(true);
  let [logbtn, setLogbtn] = useState("logClosed");
  let [sigbtn, setSigbtn] = useState("logClosed");
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

          {/* Login  */}
          <div className={`loginForm ${logbtn}`}>
            <div className="logCred">
              <h2>Login</h2>
              <div>
                <span className="material-symbols-outlined">
                  <span className="material-symbols-outlined">account_circle</span>
                </span>
                <input type="text" placeholder="Username" className="" />
              </div>
              <div>
                <span className="material-symbols-outlined">key</span>
                <input type="password" placeholder="Password" className="" />
              </div>
              <div>
                <br />
                <button className="btn">Submit</button>
              </div>
            </div>
            <p>
              New to Food Hunt ?{" "}
              <span
                style={{ color: "#f85858", cursor: "pointer" }}
                onClick={() => {
                  document.querySelector("html").style.overflow = "visible";
                  setLogbtn("logClosed");
                  document.querySelector("html").style.overflow = "hidden";
                  setSigbtn("logBg");
                }}>
                create account
              </span>
            </p>
            <span
              title="Close"
              className="material-symbols-outlined closeLogBtn"
              onClick={() => {
                document.querySelector("html").style.overflow = "visible";
                setLogbtn("logClosed");
              }}>
              close
            </span>
          </div>

          <button
            className="btn"
            onClick={() => {
              document.querySelector("html").style.overflow = "hidden";
              setSigbtn("logBg");
            }}>
            Sign up
          </button>

          <div className={`loginForm ${sigbtn}`}>
            <form>
              <div className="logCred">
                <h2>Signup</h2>
                <div>
                  <span className="material-symbols-outlined">person</span>
                  <input type="text" placeholder="Full Name" className="" />
                </div>
                <div>
                  <span className="material-symbols-outlined">mail</span>
                  <input type="email" placeholder="E-Mail" className="" />
                </div>
                <div>
                  <span className="material-symbols-outlined">password</span>
                  <input type="password" placeholder="Password" className="" />
                </div>
                <div>
                  <br />
                  <input type="password" placeholder="Confirm assword" className="" />
                </div>
                <div>
                  <input type="reset" value="↺" className="btn clearBtn" title="Reset" />
                  {/* <button className="btn">Clear</button> */}
                  <button title="Submit" className="btn">
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <p>
              Already have an account ?{" "}
              <span
                style={{ color: "#f85858", cursor: "pointer" }}
                onClick={() => {
                  document.querySelector("html").style.overflow = "visible";
                  setSigbtn("sigClosed");
                  document.querySelector("html").style.overflow = "hidden";
                  setLogbtn("logBg");
                }}>
                {" "}
                Log in
              </span>
            </p>
            <span
              title="Close"
              className="material-symbols-outlined closeLogBtn"
              onClick={() => {
                document.querySelector("html").style.overflow = "visible";
                setSigbtn("sigClosed");
              }}>
              close
            </span>
          </div>
        </div>
      </div>
      <span className="material-symbols-outlined toggleBtn" onClick={handleState}>
        {state ? "menu" : "close"}
      </span>
    </div>
  );
}

export default Navbar;
