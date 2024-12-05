
import { useState } from 'react'
import './App.css'
import AllProducts from './Components/AllProducts/AllProducts'
import CardContainer from './Components/CardContainer/CardContainer'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [isactive,setIsActive]=useState({
    cart:true,
    status:"active"
  })
  const [selectedProducts,setSelectesProducts]=useState([]);
  const handleSelectedProducts=(product)=>{
    const isexist=selectedProducts.find((p)=>p.id==product.id);
    if(isexist){
      alert('r ad kora jabay na')
    }
    else{
      handleIncreasePrice(product.price);
      const newproducts=[...selectedProducts,product];
  setSelectesProducts(newproducts)
    }
    
  }
  console.log(selectedProducts)
  const [price,setPrice]=useState(0)
  const handleIncreasePrice=(price)=>{
  setPrice(price+price)
  }
  const handlediscargePrice=(id)=>{
 const product=selectedProducts.find((p)=>p.id==id);
 setPrice(product.price-price)
  }
  const handleDelete=(id)=>{
    handlediscargePrice(id)
  const newremainng=selectedProducts.filter((p)=>p.id !=id);
  setSelectesProducts(newremainng)
  }
const handleIsActiveState=(status)=>{
  if (status=='cart'){
    setIsActive({
        cart:true,
    status:"cart"
    })
  }
  else{
    setIsActive({
        cart:false,
    status:"about"
    })
  }
}

  return (
    <>
    <Navbar selectedProducts={selectedProducts} price={price}></Navbar>
 <div className='flex'>
 <AllProducts handleSelectedProducts={handleSelectedProducts}></AllProducts>
 <CardContainer handleIsActiveState={handleIsActiveState} handleDelete={handleDelete} isactive={isactive} selectedProducts={selectedProducts}></CardContainer>
 </div>
     
    </>
  )
}

export default App
