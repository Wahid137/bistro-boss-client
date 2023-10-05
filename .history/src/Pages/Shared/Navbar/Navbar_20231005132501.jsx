import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/" className="text-black md:text-white">
          Home
        </Link>
      </li>
      <li>
        <Link to="/menu" className="text-black md:text-white">
          Our Menu
        </Link>
      </li>
      <li>
        <Link to="/order/salad" className="text-black md:text-white">
          Order Food
        </Link>
      </li>
      <li>
        <Link to="/secret" className="text-black md:text-white">
          Secret
        </Link>
      </li>
      <li>
        <Link to="/">
          <button className="btn gap-2 btn-sm">
            <FaShoppingCart />
            <div className="badge badge-secondary">+{cart.length} || 0</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <button
              onClick={handleLogOut}
              className="btn btn-ghost text-black md:text-white"
            >
              LogOut
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login" className="text-black md:text-white">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-black md:text-white">
              Sign Up
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed bg-black z-10 max-w-screen-xl text-white bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>

          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl flex items-center justify-center pb-4"
          >
            Bistro Boss
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
