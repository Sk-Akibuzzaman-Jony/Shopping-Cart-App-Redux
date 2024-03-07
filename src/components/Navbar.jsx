import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/pngaaa.com-811702.png";

const Navbar = () => {
  return (
    <div className="text-white bg-green-950">
      <div className="flex justify-between items-center mx-auto w-8/12">
        <NavLink to="/">
          <div>
            <img
              src={logo}
              alt="logo"
              className="h-12 m-4"
            />
          </div>
        </NavLink>
        <div className="flex items-center">
          <NavLink to="/" className="px-10">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div>
              <FaShoppingCart />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
