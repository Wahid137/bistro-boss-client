import { Helmet } from "react-helmet-async";
import useTitle from "../../Shared/Hook/useTitle";

const Menu = () => {
  useTitle("Menu");
  return (
    <div>
      <h1>Menu</h1>
    </div>
  );
};

export default Menu;
