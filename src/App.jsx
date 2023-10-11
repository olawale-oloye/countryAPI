// import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetails from "./pages/countryDetails/CountryDetails";
import Home from "./pages/homePage/Home";
import NavBar from "./components/navBar/NavBar";
// import Error from "./pages/Error/Error";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState("");
  return (
    <BrowserRouter>
      <div className={toggle}>
        <NavBar setToggle={setToggle} toggle={toggle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountryDetails />} />
          {/* Undefined Page(s) "Error Page" Rendering  */}
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
