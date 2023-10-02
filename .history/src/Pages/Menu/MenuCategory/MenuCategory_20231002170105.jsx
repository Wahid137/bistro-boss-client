import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
  return (
    <div>
      <Cover img={menuImg} title={"OUR MENU"} />
      <div className="grid md:grid-cols-2 gap-10 my-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
