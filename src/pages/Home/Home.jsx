import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNavbar from "../shared/LeftSideNavbar/LeftSideNavbar";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNavbar from "../shared/RightSideNavbar/RightSideNavbar";
import BreakingNews from "./BreakingNews";

const Home = () => {
  const news = useLoaderData();
  console.log(news);

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNavbar></LeftSideNavbar>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-xl">Dragon News Home</h3>
        </div>
        <div>
          <RightSideNavbar></RightSideNavbar>
        </div>
      </div>
    </div>
  );
};

export default Home;
