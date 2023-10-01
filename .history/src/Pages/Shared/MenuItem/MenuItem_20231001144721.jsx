const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img style={{ borderRadius: "0 200px 200px 200px" }} src={image} alt="" />
      <div>
        <h3>{name}---------</h3>\<p>{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
