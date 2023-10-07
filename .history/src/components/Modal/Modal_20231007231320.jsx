import { useForm } from "react-hook-form";
// import { toast } from "react-hot-toast";

const Modal = ({ isOpenModal, setIsModalOpen, item }) => {
  const { image, name, category, price } = item;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleBooking = (data) => {
    console.log(data);
    const newItem = {
      userName: data.name,
      image: data.image,
      category: data.category,
      price: data.price,
    };
    console.log(newItem);
    /*  fetch("https://resale-market-server-wahid137.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booking is done!");
        } else {
          //this error message is from server if same email, same date, same appointment
          toast.error(data.message);
        }
        reset();
        setIsModalOpen(null);
      }); */
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
          <form className=" p-10 " onSubmit={handleSubmit(handleBooking)}>
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
              <button className="btn btn-outline bg-[#D1A054]">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
