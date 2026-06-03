import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Transformations from "./pages/Transformations";
import Contact from "./pages/Contact";
import StartPlanning from "./pages/StartPlanning";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/explore" element={<Explore />} />

        <Route
          path="/transformations"
          element={<Transformations />}
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/start-planning" element={<StartPlanning />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;