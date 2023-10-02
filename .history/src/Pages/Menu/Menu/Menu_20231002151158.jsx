import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/menu-bg.png";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"OUR MENU"} />
      <img src={menuImg} className="w-32 h-96" alt="" />
    </div>
  );
};

export default Menu;
