import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading={"check it out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="md: flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md: ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">What Can I get Some?</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam,
            earum, saepe explicabo exercitationem veritatis consequuntur
            architecto delectus dolores alias, quas soluta sequi libero optio ut
            tenetur velit quisquam eligendi laudantium nihil commodi eius? Odit
            aspernatur dolores officiis repellat animi dolorum. Eligendi vero
            consequatur fuga porro reprehenderit nam aliquid, ut neque.
          </p>
          <button className="btn text-white btn-outline border-0 border-b-4 mt-5">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
