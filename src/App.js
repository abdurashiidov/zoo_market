import './App.css';
import Home from './Pages/Home/Home';
import Order from './Pages/Order/Order';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import {Route , Routes} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
