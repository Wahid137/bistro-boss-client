import { FaTrashAlt } from "react-icons/fa";

const ManageItemRow = ({ index, item }) => {
  console.log("row", item);
  console.log("row index asx", index);
  return (
    <tr>
      <td>{index + 1}</td>
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
      {/* <td>
        <label
          htmlFor="booking-modal"
          className="btn"
          onClick={() => setIsModalOpen(true)}
        >
          Update
        </label>
      </td> */}
      <td>
        <button
          //   onClick={() => handleDelete(item)}
          className="btn btn-ghost bg-red-600  text-white"
        >
          <FaTrashAlt></FaTrashAlt>
        </button>
      </td>
    </tr>
  );
};

export default ManageItemRow;
