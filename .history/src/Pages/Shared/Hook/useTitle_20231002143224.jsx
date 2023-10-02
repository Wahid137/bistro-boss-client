import { Helmet } from "react-helmet-async";

const useTitle = () => {
  return (
    <div>
      <Helmet>
        <title>Menu</title>
      </Helmet>
    </div>
  );
};

export default useTitle;
