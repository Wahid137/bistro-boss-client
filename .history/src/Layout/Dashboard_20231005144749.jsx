import { NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  FaCalendarAlt,
  FaWallet,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-[#D1A054]">
          {/* Sidebar content here */}
          <li>
            <NavLink to="">
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <FaCalendarAlt /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <FaWallet /> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mycart">
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>
          <div className="divider"></div>

          <li>
            <NavLink>
              <FaHome></FaHome> Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
