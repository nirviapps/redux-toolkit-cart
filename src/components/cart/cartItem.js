import { Increase, Decrease} from '../icons/icons';
import './cart.css';
import { removeItem,increaseQuantity,decreaseQuantity } from '../../features/cart/cartSlice';
import { useDispatch } from 'react-redux'; 

const CartItem = ({id,title,price,img,quantity}) => {
    const dispatch = useDispatch();
    const deleteItem = () => {
        dispatch(removeItem(id));
        
    }

    const incrQty = () =>{
       dispatch(increaseQuantity({id}))
    }

    const decrQty = () =>{
        if(quantity === 1)
        {
            dispatch(removeItem(id))
            return;
        }
      dispatch(decreaseQuantity({id}))
    }

    return (
        <>
         <article className='cart-products card  shadow-sm'>
             <img src={img} alt={title}/>
             <div>
                 <h5>{title}</h5>
                 <h5>£{price}</h5>
                 <button className='btn btn-danger m-2 p-2' onClick={deleteItem}>Remove</button>
             </div>

             <div className='quantity-btns'>
                 <button className='btn btn-sm btns m-2' onClick={incrQty}>
                     <Increase />
                 </button>
                 <p className='quantity'> {quantity}</p>
                 <button className='btn btn-sm btns m-2' onClick={decrQty}>
                     <Decrease />
                 </button>
             </div>
         </article>
  
        </>
  );
        
        
   

    

}

export default CartItem;