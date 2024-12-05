import { useEffect, useState } from 'react';
import'./AllProducts.css'
import SingleProduct from '../SingleProduct/SingleProduct';


const AllProducts = ({handleSelectedProducts}) => {
    const [products,setProDucts]=useState([]);
    useEffect(()=>{
       fetch('product.json') 
       .then(res=>res.json())
       .then(data=>{
        setProDucts(data)
       })
       console.log(products)
    },[])
    return (
        <div>
            <h1>All Products</h1>
          
            {
             products.map((p)=><SingleProduct handleSelectedProducts={handleSelectedProducts} product={p}></SingleProduct>)
             }
        </div>
    );
};

export default AllProducts;