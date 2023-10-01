import chef1 from "../../../assets/home/slide1.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

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
const ChefCards = () => {
  return (
    <div>
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"Should Try"}
      ></SectionTitle>
    </div>
  );
};

export default ChefCards;
