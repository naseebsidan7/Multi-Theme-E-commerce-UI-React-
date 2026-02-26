import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Ekomart from "./themes/ekomart/Ekomart";
import Electro from "./themes/electro/Electro";
import Marketpro from "./themes/marketpro/Marketpro";

function App() {
 
  return (
    <Router>
        <Routes>
              { }
              <Route path="*" element={<Navigate to="/ekomart" />} />

              { }
              <Route path="/ekomart" element={<Ekomart />} />
              <Route path="/electro" element={<Electro />} />
              <Route path="/marketpro" element={<Marketpro />} />
        </Routes>
    </Router>
  )
}

export default App
