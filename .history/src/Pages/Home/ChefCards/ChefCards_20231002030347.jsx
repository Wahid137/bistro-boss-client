import chef1 from "../../../assets/home/slide1.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ChefCards = () => {
  return (
    <section>
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"Should Try"}
      ></SectionTitle>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={chef1} className="w-[424px] h-[300px]" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-primary">ADD TO CART</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={chef1} className="w-[424px] h-[300px]" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">ADD TO CART</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
          <figure>
            <img src={chef1} className="w-[424px] h-[300px]" alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-primary">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefCards;
