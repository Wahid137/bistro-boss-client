import { useEffect } from "react";

const Menu = () => {
  useEffect(() => {
    document.title = `Menu | Larana Bike Store`;
  }, []);
  return (
    <div>
      <h1>Menu</h1>
    </div>
  );
};

export default Menu;
