import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import "swiper/swiper-bundle.css";
import Register from "./pages/authentication/Register";
import DriverInfo from "./pages/authentication/DriverInfo";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/driver-information" element={<DriverInfo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
