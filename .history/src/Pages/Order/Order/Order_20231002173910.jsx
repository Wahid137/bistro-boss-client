import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Order = () => {
  return (
    <div>
      <Cover img={orderCoverImg} title="Order Food"></Cover>
    </div>
  );
};

export default Order;
