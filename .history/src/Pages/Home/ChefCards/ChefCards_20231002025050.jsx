import chef1 from "../../../assets/home/slide1.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ChefCard from "./ChefCard";

const items = [
  {
    title: "Caeser Salad",
    img: chef1,
    details: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
  },
  {
    title: "Caeser Salad",
    img: chef1,
    details: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
  },
  {
    title: "Caeser Salad",
    img: chef1,
    details: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
  },
];

const products = [
  {
    product_id: "04",
    title: "Car Engine Plug",
    img: product1,
    price: "20.00",
    rating: 4,
  },
  {
    product_id: "05",
    title: "Cools Led Light",
    img: product2,
    price: "20.00",
    rating: 5,
  },
  {
    product_id: "01",
    title: "Cools Led Light",
    img: product3,
    price: "20.00",
    rating: 3,
  },
  {
    product_id: "02",
    title: "Cools Led Light",
    img: product4,
    price: "20.00",
    rating: 5,
  },
  {
    product_id: "03",
    title: "Car Air Filter",
    img: product5,
    price: "30.00",
    rating: 3.5,
  },
  {
    product_id: "06",
    title: "Cols Led Light",
    img: product6,
    price: "20.00",
    rating: 5,
  },
];

const ChefCards = () => {
  return (
    <section>
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"Should Try"}
      ></SectionTitle>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <ChefCard key={i} item={item}></ChefCard>
        ))}
      </div>
    </section>
  );
};

export default ChefCards;
