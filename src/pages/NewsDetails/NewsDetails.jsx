import { useLoaderData, useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNavbar from "../shared/RightSideNavbar/RightSideNavbar";
import { BsArrowLeft } from "react-icons/bs";
import { PiShoppingBagOpen } from "react-icons/pi";
import editorsInsight1 from "../../assets/editorsInsight1.png";
import editorsInsight2 from "../../assets/editorsInsight2.png";
import editorsInsight3 from "../../assets/editorsInsight3.png";

const NewsDetails = () => {
  const { id } = useParams();
  const newsAll = useLoaderData();
  const findNews = newsAll.find((news) => news._id === id);
  console.log(id);
  console.log(findNews);

  return (
    <div className="mb-12">
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3 p-4">
          <h3 className="text-[#403F3F] text-xl font-semibold mb-3">
            Dragon News
          </h3>
          <div className="border border-[#E7E7E7] p-4 rounded-md">
            <img className="w-full" src={findNews.image_url} alt="" />
            <h3 className="text-[#403F3F] text-2xl font-bold my-3">
              {findNews.title}
            </h3>
            <p className="text-[#706F6F] text-sm">{findNews.details}</p>
            <div>
              <button className="my-3 bg-[#D72050] text-white py-2 px-4 rounded flex items-center gap-2 text-xl font-medium">
                <BsArrowLeft /> All news in this category
              </button>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-[#403F3F] text-2xl font-semibold">
              Editors Insight
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="my-4">
                <img src={editorsInsight1} alt="" />
                <h3 className="my-4">
                  21 The Most Stylish Wedding Guest Dresses For Spring
                </h3>
                <p className="flex items-center gap-2">
                  <PiShoppingBagOpen /> Jan 4, 2022
                </p>
              </div>
              <div className="my-4">
                <img src={editorsInsight2} alt="" />
                <h3 className="my-4">
                  21 The Most Stylish Wedding Guest Dresses For Spring
                </h3>
                <p className="flex items-center gap-2">
                  <PiShoppingBagOpen></PiShoppingBagOpen> Jan 4, 2022
                </p>
              </div>
              <div className="my-4">
                <img src={editorsInsight3} alt="" />
                <h3 className="my-4">
                  21 The Most Stylish Wedding Guest Dresses For Spring
                </h3>
                <p className="flex items-center gap-2">
                  <PiShoppingBagOpen></PiShoppingBagOpen> Jan 4, 2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <RightSideNavbar />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
