import useAdmin from "../../../hooks/useAdmin";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAdmin();
  const [axiosSecure] = useAxiosSecure();
  return (
    <div className="w-full m-4">
      <h1 className="text-3xl">Hi, {user?.displayName}</h1>
    </div>
  );
};

export default AdminHome;
