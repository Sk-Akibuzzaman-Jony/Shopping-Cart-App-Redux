import {useDispatch } from "react-redux";
import { add } from "../redux/Slices/CartSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Product = ({ post }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(add(post));
    toast.success('Product added to cart', {
      toastId: post.id,
      position: "top-center",
      hideProgressBar: true,
      autoClose: 1000,
  })
  };
  return (
    <>
      <div class="m-5 w-4/5 max-w-xs overflow-hidden rounded-lg bg-white shadow-2xl text-center p-2">
        <h5 class="text-xl font-semibold tracking-tight text-slate-900 p-8 truncate">
          {post.title}
        </h5>
        <p className="truncate pb-8">{post.description}</p>
        <img
          class="h-44 mx-auto my-auto rounded-t-lg object-contain"
          src={post.image}
          alt="product"
        />
        <div class="mt-4 px-5 pb-5">
          <div className="h-14"></div>
          <div class="grid grid-cols-2 gap-x-4 items-center center">
            <div class="text-lg text-left font-bold text-green-600">
              ${post.price}
            </div>
            <button onClick={() => clickHandler()}>
              <div class="justify-center rounded-3xl w-28 bg-white py-1 text-center text-xs font-semibold border-4 border-slate-900 text-black hover:bg-green-500 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300">
                Add to cart
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
