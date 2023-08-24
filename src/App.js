import './App.css';
import {BrowserRouter as Router, Route,Routes  } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx"
import Coins  from "./components/Coins.jsx";
import Exchanges from "./components/Exchanges.jsx";
import CoinDetails from "./components/CoinDetails.jsx"
import { } from '@chakra-ui/react';
import Footer  from "./components/Footer.jsx";
import About from "./components/About.jsx";

function App() {
  return (
   <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/coins" element={<Coins/>} />
        <Route path="/exchanges" element={<Exchanges/>} />
        <Route path="/coins/:id" element={<CoinDetails/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
   </Router>
  );
}

export default App;
