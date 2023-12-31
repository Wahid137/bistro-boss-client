const MenuCategory = ({ items }) => {
  return (
    <div className="grid md:grid-cols-2 gap-10 my-10">
      {items.map((item) => (
        <MenuItem key={item._id} item={item}></MenuItem>
      ))}
    </div>
  );
};

export default MenuCategory;
