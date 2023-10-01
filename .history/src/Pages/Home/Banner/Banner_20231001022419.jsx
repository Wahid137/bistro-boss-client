import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={img1} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="assets/2.jpeg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="assets/3.jpeg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Banner;
