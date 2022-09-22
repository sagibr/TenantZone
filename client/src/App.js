import { Route, Routes } from "react-router-dom"
import "./App.css"
import Apartment from "./components/apartmentProfile/Apartment"
import Home from "./components/homePage/Home"
import AllApartments from "./components/searchResult/AllApartments"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search-result" element={<AllApartments />}></Route>
        <Route path="/apartments/:id" element={<Apartment />}></Route>
      </Routes>
    </div>
  )
}

export default App
