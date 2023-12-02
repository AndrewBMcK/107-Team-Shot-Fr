import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Catalog from './pages/catalog';
import About from './components/about';
import Home from './components/home';
import Admin from './pages/admin';
import Contact from './pages/contact';



import { BrowserRouter, Routes, Route }  from 'react-router-dom';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/> 
        
        <Routes>
          <Route path="/catalog" element={ <Catalog />} />
          <Route path="/about" element={ <About />} />
          <Route path="/home" element={ <Home />} />
          <Route path="/" element={ <Home />} />
          <Route path="/admin" element={ <Admin />} />
          <Route path="/contact" element={ <Contact />} />
          
        </Routes>


        <Footer/> 
      </div>  
    </BrowserRouter>
  );
}


export default App;