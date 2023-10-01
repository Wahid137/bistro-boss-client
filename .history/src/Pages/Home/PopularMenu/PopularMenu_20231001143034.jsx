import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  return (
    <section>
      <SectionTitle heading={"FROM OUR MENU"} subHeading={"Popular Items"} />
    </section>
  );
};

export default PopularMenu;
