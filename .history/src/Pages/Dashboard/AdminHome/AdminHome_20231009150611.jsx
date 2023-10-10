import useAdmin from "../../../hooks/useAdmin";

const AdminHome = () => {
  const { user } = useAdmin();
  return (
    <div className="w-full">
      <h1>Admin Home</h1>
    </div>
  );
};

export default AdminHome;
