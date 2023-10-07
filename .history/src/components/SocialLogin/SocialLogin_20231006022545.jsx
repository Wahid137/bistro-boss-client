import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center">
        <button className="btn btn-circle btn-outline">
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
