import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";
import { NavBar } from "./components/NavBar/NavBar";
import {ItemCount} from './components/ItemCount/ItemCount';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom'
import './App.css';
import { CartScreen } from './components/CartScreen/CartScreen';
import { CartProvider } from './components/Context/CartContext';
import { CheckOut } from './components/CheckOut/CheckOut';


function App() {
  return (
    <CartProvider>
      <div className='App'>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/productos/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
            <Route path='/counter' element={<ItemCount />} />
            <Route path='/cart' element={<CartScreen/>}/>
            <Route path='*' element={<Navigate to='/' />} />
            <Route path='/checkout' element={<CheckOut/>}></Route>
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
