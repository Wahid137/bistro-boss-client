import { FaTrashAlt } from "react-icons/fa";

const ManageItemRow = () => {
  return (
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
            <td>
              <button className="btn btn-ghost btn-xs">details</button>
            </td>
            <td>
              <button
                //   onClick={() => handleDelete(item)}
                className="btn btn-ghost bg-red-600  text-white"
              >
                <FaTrashAlt></FaTrashAlt>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageItemRow;
