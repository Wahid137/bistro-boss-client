import useAdmin from "../../../hooks/useAdmin";

const AdminHome = () => {
  const { user } = useAdmin();
  return (
    <div className="w-full m-4">
      <h1 className="text-3xl">Welcome back, {user?.displayName}</h1>
    </div>
  );
};

export default AdminHome;
