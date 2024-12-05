import'./SingleProduct.css'

const SingleProduct = ({ product,handleSelectedProducts}) => {
    
    const {id,name,image,description,price,category,isFeature}=product
    return (
        <div className="card">
           <img className='image' src={image} alt="" />
           <h2>{name}</h2>
          <p>{description}</p>
          <div className="cat-price">
            <p>${price}</p>
            <p>{isFeature?"Feature Category":"not Category"}</p>
          </div>
          <button onClick={()=>handleSelectedProducts(product)} className='btn card-btn'>Add To Cart</button>
        </div>
    );
};

export default SingleProduct;