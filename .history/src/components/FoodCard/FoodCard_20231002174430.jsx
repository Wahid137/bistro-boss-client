const FoodCard = () => {
  return (
    <div className="card card-compact w-80 bg-slate-200 shadow-xl">
      <figure>
        <img src={chef1} className="w-full h-[280px]" alt="Shoes" />
      </figure>
      <div className="card-body flex justify-center text-center items-center">
        <h2 className="card-title">Caeser Salad</h2>
        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
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
