import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
