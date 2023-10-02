import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      {title && <Cover img={coverImg} title={title} />}

      <div className="grid md:grid-cols-2 gap-10 my-10 px-32">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to="/order" className="mx-auto text-center">
        <button className="btn btn-outline border-0 border-b-4 mt-5">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
