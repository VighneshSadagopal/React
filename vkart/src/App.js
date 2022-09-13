import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Header_1/NavBar';
import Grocery from './pages/Grocery';
import Header_1 from './components/Header_1/Header_1';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import MainComponent from './components/MainComponent';

function App() {
  return (
   <>
   
   <div className='components'>
   <Header_1 />
  <MainComponent />
   <Footer />
   </div>
   </>
  );
}

export default App;
