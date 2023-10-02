import { Helmet } from "react-helmet-async";
import Testimonials from "../../Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import BistroBanner from "../BistroBanner/BistroBanner";
import Category from "../Category/Category";
import ChefCards from "../ChefCards/ChefCards";
import ContactUs from "../ContactUs/ContactUs";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <BistroBanner />
      <PopularMenu />
      <ContactUs />
      <ChefCards />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
