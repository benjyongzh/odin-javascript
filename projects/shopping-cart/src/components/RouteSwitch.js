import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tester from "./Tester";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tester />} />
        <Route path="/products" element={<Tester />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;