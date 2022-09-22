import { Route, Routes } from "react-router-dom";
import "./App.css";
import Apartment from "./components/apartmentProfile/Apartment";
import Home from "./components/homePage/Home";
import Login from "./components/LoginPage/Login";
import Main from "./components/LoginPage/main";

import Register from "./components/registerPage/Register";
import AllApartments from "./components/searchResult/AllApartments";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search-result" element={<AllApartments />}></Route>
        <Route path="/apartment" element={<Apartment />}></Route>
      </Routes> */}
      <Login></Login>
    </div>
  );
}

export default App;
