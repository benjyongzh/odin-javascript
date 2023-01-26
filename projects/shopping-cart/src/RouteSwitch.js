import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tester from "./Tester";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Tester1" element={<Tester />} />
        <Route path="/Tester2" element={<Tester />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;