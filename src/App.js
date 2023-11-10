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
import Booking from "./component/Booking";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import About from "./component/About";
import Protected from "./context/Protected";


function App() {

  return (
    <div className="App">
      <AuthContextProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/loginpage" element={<Loginpage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/car" element={<Car />}></Route>
          <Route path="/booking/:CarId" element={<Protected><Booking /></Protected>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/payment/:CarId" element={<Protected><Payment /></Protected>}></Route>
          <Route path="/viewhistory" element={<History />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
      <NotificationContainer/>
    </div>
  );
}

export default App;
