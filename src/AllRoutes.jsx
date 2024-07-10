import { Route, Routes } from "react-router-dom";
import { Support } from "./Pages/Support";
import { Homepage } from "./Pages/Homepage";
import { Offer } from "./Pages/Offer";
import { Download } from "./Pages/Download";
import { Billpage } from "./Pages/Billpage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/Support"  element={<Support />}></Route>
      <Route path="/Offer" element={<Offer />}></Route>
      <Route path="/Download" element={<Download />}></Route>
      <Route path="/Billpage" element={<Billpage />}></Route>
    </Routes>
  );
};
