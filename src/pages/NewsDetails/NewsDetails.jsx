import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNavbar from "../shared/RightSideNavbar/RightSideNavbar";

const NewsDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h3>NewsDetails</h3>
          <h3>{id} </h3>
        </div>
        <div>
          <RightSideNavbar />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
