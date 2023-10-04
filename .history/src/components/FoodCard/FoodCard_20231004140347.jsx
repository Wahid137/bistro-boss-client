import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  const { user } = useContext(AuthContext);
  const naviaget

  const handleAddToCart = (item) => {
    console.log(item);
    if (user) {
      fetch("http://localhost:5000/carts")
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to order the food!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
  };

  return (
    <div className="card card-compact bg-slate-100 shadow-xl">
      <figure>
        <img src={image} className="w-full h-[280px]" alt="Shoes" />
      </figure>
      <p className="bg-black text-white absolute right-0 mr-5 mt-5 px-3 rounded-md ">
        ${price}
      </p>
      <div className="card-body flex justify-center text-center items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-b-4 border-0 border-orange-400"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
