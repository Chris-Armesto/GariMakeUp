import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { ItemCount } from './components/ItemCount/ItemCount'
import {Router,
Routes,
Navigate,
Route} from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';




function App() {
  return (
    <div>
      <Router>
      <h1>Gari MakeUp</h1>
        <NavBar/>
        <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/counter' element={<ItemCount/>}/>
            <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
