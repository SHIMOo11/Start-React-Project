import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Portfolio from './Component/Portfolio/Portfolio';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import {Outlet} from 'react-router-dom'

function App() {
  return <>
    <Navbar/>
    <Outlet/> 
    <Footer/>


  </>
  ;
}

export default App;
