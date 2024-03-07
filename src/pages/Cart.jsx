import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="w-3/5 flex flex-row mx-auto pt-10" style={{ height: "calc(100vh - 10rem)" }}>
      <div className="flex flex-col mx-auto w-4/5 pr-5 overflow-y-scroll scrollbar">
        <div>
        {cart.products.length > 0 ? (
          <div className="">
            {cart.products.map((post) => (
              <CartProduct key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="font-extrabold text-2xl">Cart Is Empty</p>
          </div>
        )}
        </div>
      </div>
      <div>
        
      </div>
      <div className="flex flex-col w-1/2 justify-between ml-8">
        <div>
          <div className="font-bold text-xl text-green-600">YOUR CART</div>
          <div className="font-bold text-5xl text-green-700">SUMMARY</div>
          <p className="font-bold pt-8 pb-8">
            Total items : {cart.products.length}
          </p>
        </div>
        <div>
        <div className="font-bold pt-8 pb-6">TotalPrice : ₹{cart.total}</div>
        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full">Checkout Now</button>
        </div>
        
      </div>
      
    </div>
  );
};

export default Cart;
