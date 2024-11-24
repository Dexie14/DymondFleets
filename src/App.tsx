import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import "swiper/swiper-bundle.css";
import Register from "./pages/authentication/Register";
import DriverInfo from "./pages/authentication/DriverInfo";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";
import Login from "./pages/authentication/Login";
import AdminLayout from "./components/layout/AdminLayout";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/driver-information" element={<DriverInfo />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
