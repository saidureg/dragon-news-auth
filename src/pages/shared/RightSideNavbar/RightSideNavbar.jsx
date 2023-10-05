import {
  FaGithub,
  FaFacebook,
  FaGoogle,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import swal from "sweetalert";

const RightSideNavbar = () => {
  const { user, googleSignIn, githubSignIn } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    if (user) {
      return swal("oops!", "you are already logged in as!", "error");
    }
    googleSignIn(googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGithubSignIn = () => {
    if (user) {
      return swal("oops!", "you are already logged in as!", "error");
    }
    githubSignIn(githubProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div>
        <h3 className="text-2xl p-4">Login With</h3>
        <div className="space-y-2 p-4">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full capitalize"
          >
            <FaGoogle></FaGoogle> Login with Google
          </button>
          <button
            onClick={handleGithubSignIn}
            className="btn btn-outline w-full capitalize"
          >
            <FaGithub></FaGithub> Login with Github
          </button>
        </div>
      </div>
      {/* Find us on */}
      <div>
        <h3 className="text-2xl p-4">Find Us On</h3>
        <div className="px-4">
          <a
            className="flex items-center gap-2 border rounded-t-lg py-2 px-3"
            href="https://www.facebook.com/"
          >
            <FaFacebook></FaFacebook> Facebook
          </a>
          <a
            className="flex items-center gap-2 border-x py-2 px-3"
            href="https://twitter.com/"
          >
            <FaTwitter></FaTwitter> Twitter
          </a>
          <a
            className="flex items-center gap-2 border rounded-b-lg py-2 px-3"
            href="https://www.instagram.com/?hl=en"
          >
            <FaInstagram></FaInstagram> Instagram
          </a>
        </div>
      </div>
      {/* Q-zone */}
      <div className="mt-4 bg-[#F3F3F3] rounded p-4">
        <h3 className="text-2xl mb-2">Q-Zone</h3>
        <div className="space-y-2 ">
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNavbar;
