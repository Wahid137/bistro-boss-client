import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  console.log(menu);
  return (
    <section>
      <SectionTitle heading={"FROM OUR MENU"} subHeading={"Popular Items"} />
      <div className="grid md:grid-cols-2 gap-10 my-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="btn text-white btn-outline border-0 border-b-4 mt-5">
        Order Now
      </button>
    </section>
  );
};

export default PopularMenu;
