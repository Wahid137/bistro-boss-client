import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { toast } from "react-hot-toast";

const Modal = ({ isOpenModal, setIsModalOpen, item }) => {
  const { _id, image, name, category, price } = item;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleUpdate = (data) => {
    const updatedItem = {
      name: data.name,
      image: data.image,
      category: data.category,
      price: data.price,
    };
    console.log(updatedItem);
    // send data to the server
    fetch(`http://localhost:5000/menu/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          reset();
          Swal.fire({
            title: "Success!",
            text: "Menu Updated Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/dashboard/manageitems");
        }
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="booking-modal"
        checked={isOpenModal}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box overflow-y-visible relative">
          <label
            onClick={setIsModalOpen}
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold"></h3>
          <form className=" p-10 " onSubmit={handleSubmit(handleUpdate)}>
            <div className="form-control w-full mb-8 relative">
              <input
                type="text"
                {...register("name")}
                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                defaultValue={name}
              />
              {errors.userName && (
                <p className="text-red-600">{errors.name?.message}</p>
              )}
            </div>

            <div className="form-control w-full mb-8 relative">
              <input
                type="text"
                {...register("image")}
                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                defaultValue={image}
              />
              {errors.email && (
                <p className="text-red-600">{errors.image?.message}</p>
              )}
            </div>

            <div className="form-control w-full mb-8 relative">
              <input
                type="text"
                {...register("category")}
                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                defaultValue={category}
                readOnly
              />
              {errors.productName && (
                <p className="text-red-600">{errors.category?.message}</p>
              )}
            </div>

            <div className="form-control w-full mb-8 relative">
              <input
                type="number"
                {...register("price")}
                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                defaultValue={price}
              />
              {errors.resalePrice && (
                <p className="text-red-600">{errors.price?.message}</p>
              )}
            </div>

            <br />
            <div className="mb-5 flex items-center justify-center">
              <input
                className="btn btn-outline bg-[#D1A054]"
                value="submit"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
