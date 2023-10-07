import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Modal from "../../../components/Modal/Modal";

const ManageItemRow = ({ item, i, handleDelete }) => {
  const [isOpenModal, setIsModalOpen] = useState(false);

  return (
    <tbody>
      <tr>
        <td>{i + 1}</td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.name}</div>
            </div>
          </div>
        </td>
        <td>{item.category}</td>
        <td className="text-right">${item.price}</td>
        <td>
          <label
            htmlFor="booking-modal"
            className="btn bg-[#D1A054]"
            onClick={() => setIsModalOpen(true)}
          >
            <FaEdit />
          </label>
        </td>
        <td>
          <button
            onClick={() => handleDelete(item)}
            className="btn btn-ghost bg-red-600  text-white"
          >
            <FaTrashAlt></FaTrashAlt>
          </button>
        </td>
      </tr>
      <Modal
        isOpenModal={isOpenModal}
        setIsModalOpen={() => setIsModalOpen(!isOpenModal)}
        modalInfo={item}
      />
    </tbody>
  );
};

export default ManageItemRow;
