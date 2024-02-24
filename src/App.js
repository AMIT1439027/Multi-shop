import {Provider} from 'react-redux'
import store from './components/redux/store';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import ShopingCart from './components/ShopingCart';
import ShopDetails from './components/ShopDetails';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/cart' element={<ShopingCart/>} />
        <Route path='/shopDetails' element={<ShopDetails />}/>
      
      </Routes>
      </BrowserRouter>
    </Provider>
   
  );
}

export default App;
