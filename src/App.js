import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CustomerMainPage from "./components/MainPage/Customer/CustomerMainPage";
import VendorMainPage from "./components/MainPage/Vendor/VendorMainPage"
function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<CustomerMainPage />} />
          <Route path="/vendor" element={<VendorMainPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
