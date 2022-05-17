import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import CartSlice from "./features/cart/cartSlice";
import CartContainer from './components/cart/cartContainer';
import {useDispatch,useSelector} from'react-redux';
import  {calculateTotals} from './features/cart/cartSlice'
import { useEffect } from 'react';
function App() {
  const {cartItems} = useSelector((store)=> store.cart)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateTotals());
  },[cartItems])
  return (
   <>
   <Router>
     
   <Navbar />
   <Routes>
      <Route exact path="/cart-slice" element={<CartSlice />}></Route>

      <Route exact path="/cart" element={<CartContainer />}></Route>
   </Routes>
   </Router>
   
   </>
  );
}

export default App;
