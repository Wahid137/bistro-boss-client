import { Helmet } from "react-helmet-async";

const useTitle = (title) => {
  return (
    <div>
      <Helmet>
        <title>${title}| Bistro Boss</title>
      </Helmet>
    </div>
  );
};

export default useTitle;
