import LandingPage  from "./screens/landingpage/LandingPage";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import CartPage from "./screens/CartPage/CartPage";
import { CartProvider } from 'react-use-cart'

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/cart" element={<CartPage />}/>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
