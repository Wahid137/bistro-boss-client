// import { FaTrashAlt } from "react-icons/fa";
// import Swal from "sweetalert2";
import useMenu from "../../../hooks/useMenu";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
// import Modal from "../../../components/Modal/Modal";
// import { useState } from "react";
import ManageItemRow from "./ManageItemRow";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  // const [axiosSecure] = useAxiosSecure();
  // const [isOpenModal, setIsModalOpen] = useState(false);
  // const [modalInfo, setModalInfo] = useState();

  // const handleDelete = (item) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axiosSecure.delete(`/menu/${item._id}`).then((res) => {
  //         console.log("deleted res", res.data);
  //         if (res.data.deletedCount > 0) {
  //           refetch();
  //           Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //         }
  //       });
  //     }
  //   });
  // };

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | Manage Items</title>
      </Helmet>
      <SectionTitle heading="Manage Items" subHeading="Hurry up"></SectionTitle>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Category</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((index, item) => (
              <ManageItemRow
                key={index}
                item={item}
                index={index}
              ></ManageItemRow>
            ))}
            {/* <Modal
              isOpenModal={isOpenModal}
              setIsModalOpen={() => setIsModalOpen(!isOpenModal)}
              //modalInfo={item}
            /> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
