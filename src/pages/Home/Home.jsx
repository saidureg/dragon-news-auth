import Header from "../shared/Header/Header";
import LeftSideNavbar from "../shared/LeftSideNavbar/LeftSideNavbar";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNavbar from "../shared/RightSideNavbar/RightSideNavbar";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNavbar></LeftSideNavbar>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-6xl">Home content coming soon....</h3>
        </div>
        <div>
          <RightSideNavbar></RightSideNavbar>
        </div>
      </div>
    </div>
  );
};

export default Home;
