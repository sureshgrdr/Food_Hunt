import "./App.css";
import AwesomeFood from "./Components/Pages/AwesomeFood";
import BestFood from "./Components/Pages/BestFood";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Pages/Hero";
import InspirationOrder from "./Components/Pages/InspirationOrder";
import Navbar from "./Components/Navbar/Navbar.jsx";
// import TopBrands from "./Components/Pages/TopBrands";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <InspirationOrder />
      {/* <TopBrands /> */}
      <BestFood />
      <AwesomeFood />
      <Footer />
    </div>
  );
}

export default App;
