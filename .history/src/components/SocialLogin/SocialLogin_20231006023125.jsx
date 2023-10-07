import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {
  const googleSignIn = useContext(AuthContext);

  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center mb-2">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
