import Testimonials from "../../Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import BistroBanner from "../BistroBanner/BistroBanner";
import Category from "../Category/Category";
import ContactUs from "../ContactUs/ContactUs";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <BistroBanner />
      <PopularMenu />
      <ContactUs />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
