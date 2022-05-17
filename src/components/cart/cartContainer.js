import CartItem from "./cartItem";
import { useSelector, useDispatch } from 'react-redux';
import {clearCart} from '../../features/cart/cartSlice'

const CartContainer = () => {
    const dispatch = useDispatch();
    const {cartItems,total,amount} = useSelector((store)=> store.cart)

    const clearItems = () =>{
        dispatch(clearCart())
    }

    if(amount < 1)
    {
        return <section className="">
            <header>
                <h2>Your Cart</h2>
                <h4>is currently empty</h4>
            </header>
             </section>
    }



    return(
        <section className="text-center">
          <header>
             <h2 className="m-3 p-2 text-dark text-uppercase h1">Cart</h2>
          </header>
          <div>
              {cartItems.map((cartItem)=>{
                    return <CartItem key={cartItem.id} {...cartItem}></CartItem>
              })}
          </div>

          <footer>
              <hr className="text-dark" />
              <div>
              <h4 className="text-start m-3 p-2">Total <span> £ {total.toFixed(2)} </span></h4>
              </div>
              
              <button className="btn btn-danger" onClick={clearItems}>Clear Items</button>
          </footer>
        </section>

    );

}

export default CartContainer;