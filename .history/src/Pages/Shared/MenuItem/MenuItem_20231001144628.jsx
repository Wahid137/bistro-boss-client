const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img style={{ borderRadius: "0 200px 200px 200px" }} src={image} alt="" />
      <div></div>
    </div>
  );
};

export default MenuItem;
