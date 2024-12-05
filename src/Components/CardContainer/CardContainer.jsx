import About from '../About/About';
import Cart from '../Cart/Cart';
import './CardContainer.css'

const CardContainer = ({handleIsActiveState,isactive,selectedProducts,handleDelete}) => {
    
    
    return (
        <div>
            <h1>Card Container</h1>
            <div className='flex'>
          <div onClick={()=>handleIsActiveState("cart")} className={`${isactive.cart? "btn  active":"btn"}`}>Cart</div>
          <div onClick={()=>handleIsActiveState("about")} className={`${isactive.cart? "btn ":"active btn"}`}>About</div>
            </div>
            {
                isactive.cart?<Cart selectedProducts={selectedProducts} handleDelete={handleDelete}></Cart>:<About></About>
            }
        </div>
    );
};

export default CardContainer;