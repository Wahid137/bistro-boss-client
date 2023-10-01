import chef1 from "../../../assets/home/slide1.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ChefCard from "./ChefCard";

const items = [
  {
    title: "Caeser Salad",
    img: chef1,
    details: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
  }
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
