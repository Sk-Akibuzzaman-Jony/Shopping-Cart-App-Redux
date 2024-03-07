import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { remove } from "../redux/Slices/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
const CartProduct = ({ post }) => {
    const dispatch = useDispatch();
    const clickHandler = () => {
      dispatch(remove(post));
      toast.error('Product removed from cart', {
        toastId: post.id,
        position: "top-center",
        hideProgressBar: true,
        autoClose: 1000,
    })
    }
  return (
    <div>
      <div className=" flex flex-row h-56 my-auto item-center ">
        <img
          alt="product"
          className="mr-10 rounded-md border-gray-300 object-contain w-56"
          src={post.image}
        />
        <div id="body" className="flex flex-col p-2">
          <h4 id="name" className="text-xl font-semibold mb-5 w-96">
            {post.title}
          </h4>
          <p className="w-96 line-clamp-1">{post.description}</p>
          <div className="flex flex-row justify-between">
            <p className="mt-10 font-bold"> ${post.price}</p>
            <button onClick={() => clickHandler()}>
              <p className="mt-8 w-10 h-10 mr-5 flex justify-center items-center bg-red-400 rounded-full  hover:bg-red-700 transition duration-300 ease-in-out">
                <MdOutlineDelete />
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black h-2 mb-14 mt-14"></div>
    </div>
  );
};

export default CartProduct;
