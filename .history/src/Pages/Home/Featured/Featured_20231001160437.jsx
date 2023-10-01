import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div className="featured-item text-white pt-8 my-20">
      <SectionTitle
        subHeading={"check it out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div>
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md: ml-10">
          <p>Aug 20, 2029</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
