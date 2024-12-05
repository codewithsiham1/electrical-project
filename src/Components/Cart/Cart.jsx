

const Cart = ({selectedProducts,handleDelete}) => {
    
    return (
        <div>
           {
            selectedProducts.map((product)=>(
                <div>
                    <div className="flex">
                        <img src={product.image} alt="" />
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <button  onClick={()=>handleDelete(product.id)} className="btn">Delete</button>
                    </div>
                </div>
            ))
           }
        </div>
    );
};

export default Cart;