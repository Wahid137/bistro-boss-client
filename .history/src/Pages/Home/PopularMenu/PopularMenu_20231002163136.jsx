import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();

  /*  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  console.log(menu); */
  return (
    <section>
      <SectionTitle heading={"FROM OUR MENU"} subHeading={"Popular Items"} />
      <div className="grid md:grid-cols-2 gap-10 my-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="btn btn-outline border-0 border-b-4 mt-5">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
