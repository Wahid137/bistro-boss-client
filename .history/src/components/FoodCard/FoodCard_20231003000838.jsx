const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} className="w-full h-[280px]" alt="Shoes" />
      </figure>
      <p className="bg-black text-white absolute right-0 mr-5 mt-5">${price}</p>
      <div className="card-body flex justify-center text-center items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline border-b-4 border-0">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
