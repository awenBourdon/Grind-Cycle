import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/shop';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';
import Cart from './Pages/Cart';
import Annoucement from './Components/Navbar/Annoucement';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <Annoucement/>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/skate" element={<ShopCategory  category="skate"/>}/>
        <Route path="/cruiser" element={<ShopCategory  category="cruiser" />}/>
        <Route path="/shoes" element={<ShopCategory  category="shoes" />}/>
        <Route path="/product" element={<Product/>}>
        <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
        
    </div>
  );
}

export default App;
