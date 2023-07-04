import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Shop from './pages/shop/Shop.js'
import Cart from './pages//cart/Cart.js'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart'  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
