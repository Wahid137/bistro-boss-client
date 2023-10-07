import { FaTrashAlt } from "react-icons/fa";

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
          <button className="btn btn-ghost btn-xs">details</button>
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
    </tbody>
  );
};

export default ManageItemRow;
