import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("");
  });
  return (
    <div>
      <h1>All Users</h1>
    </div>
  );
};

export default AllUsers;
