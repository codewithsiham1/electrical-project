
const Navbar = ({selectedProducts,price}) => {
    return (
        <div className="bg-slate-400 p-5">
           <div className="flex flex-row justify-between">
            <h1>Logo</h1>
            <div className="flex gap-5">
               <p>Home</p>
               <p>Product</p>
               <p>Cart {selectedProducts.length}</p>
            </div>
            <p>${price}</p>
           </div>
        </div>
    );
};

export default Navbar;