import { Link, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart, FaCalenderAlt } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
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
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to="">
              <FaHome />
              User Home
            </Link>
          </li>
          <li>
            <Link to="">
              <FaCalenderAlt /> Reservation
            </Link>
          </li>
          <li>
            <Link to="">
              <FaShoppingCart /> My Cart
            </Link>
          </li>
          <li>
            <Link to="">
              <FaShoppingCart /> My Cart
            </Link>
          </li>
          <div className="divider"></div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
