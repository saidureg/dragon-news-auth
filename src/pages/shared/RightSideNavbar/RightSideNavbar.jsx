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

const RightSideNavbar = () => {
  return (
    <div>
      <div>
        <h3 className="text-2xl p-4">Login With</h3>
        <div className="space-y-2 p-4">
          <button className="btn btn-outline w-full capitalize">
            <FaGoogle></FaGoogle> Login with Google
          </button>
          <button className="btn btn-outline w-full capitalize">
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
            href=""
          >
            <FaFacebook></FaFacebook> Facebook
          </a>
          <a className="flex items-center gap-2 border-x py-2 px-3" href="">
            <FaTwitter></FaTwitter> Twitter
          </a>
          <a
            className="flex items-center gap-2 border rounded-b-lg py-2 px-3"
            href=""
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
