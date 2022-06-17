
import Products from './pages/products';

import { Route, Routes } from 'react-router-dom';
import Checkout from './pages/checkout';

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={<Products />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        
    </div>
  );
}

export default App;
