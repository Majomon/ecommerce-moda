import { HashRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Cart from "./components/Cart";
import CartProvider from "./components/CartContext";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import ComoComprar from "./components/Links Footer/ComoComprar";
import CuidadoCalzados from "./components/Links Footer/CuidadoCalzados";
import Promociones from "./components/Links Footer/Promociones";
import TerminosYcondiciones from "./components/Links Footer/TerminosYcondiciones";
import TrabajaConNosotros from "./components/Links Footer/TrabajaConNosotros";
import Ubicacion from "./components/Links Footer/Ubicacion";
import NavBar from "./components/NavBar";



function App() {

  return (
    <CartProvider>
      <HashRouter>
        <NavBar />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/productos" element={<ItemListContainer className="center flex-wrap" />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/category/:idcategory" element={<ItemListContainer className="center" />} />
          <Route path="/product/:idproduct" element={<ItemDetailContainer className="center" />} />
          <Route path="/cart" element={<Cart className="center" />} />
          {/* Footer */}
          <Route path="/trabajaConNosotros" element={<TrabajaConNosotros className="center flex-wrap" />} />
          <Route path="/ubicacion" element={<Ubicacion className="center flex-wrap" />} />
          <Route path="/como-comprar" element={<ComoComprar className="center flex-wrap" />} />
          <Route path="/cuidado-calzados" element={<CuidadoCalzados className="center flex-wrap" />} />
          <Route path="/promociones" element={<Promociones className="center flex-wrap" />} />
          <Route path="/terminosYcondiciones" element={<TerminosYcondiciones className="center flex-wrap" />} />
        </Routes>
        <Footer />
      </HashRouter>
    </CartProvider>
  );
}

export default App;
