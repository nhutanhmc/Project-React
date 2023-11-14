import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./component/Home";
import Loginpage from "./component/Loginpage";
import Navigation from "./component/Navigation";
import Register from "./component/Register";
import Contact from "./component/Contact";
import Payment from "./component/Payment";
import Footer from "./component/Footer";
import History from "./component/HistoryApplication";
import Car from "./component/Car";
import CarDetail from "./component/CarDetail";
import Booking from "./component/Booking";
import CarCart from "./component/CarCart";
import CarEdit from "./component/CarEdit";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import About from "./component/About";
import AddNewCar from "./component/AddNewCar";
import Protected from "./context/Protected";
import { CartProvider } from "./component/CartContext";
import { useState } from "react";
function App() {

  return (
    <div className="App" >
      
      <CartProvider>
      <AuthContextProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/loginpage" element={<Loginpage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/car" element={<Car />}></Route>
          <Route path="/caredit/:id" element={<CarEdit />}></Route>
          <Route path="/addnewcar" element={<AddNewCar />}></Route>
          <Route path="/carcart" element={<CarCart />}></Route>
          <Route path="/cardetail/:id" element={<CarDetail />}></Route>
          <Route path="/booking/:CarId" element={<Protected><Booking /></Protected>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/payment/:CarId" element={<Protected><Payment /></Protected>}></Route>
          <Route path="/viewhistory" element={<History />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
      </CartProvider>
      <NotificationContainer/>
    </div>
  );
}

export default App;
