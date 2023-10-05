import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNavbar from "../shared/LeftSideNavbar/LeftSideNavbar";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNavbar from "../shared/RightSideNavbar/RightSideNavbar";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";
import { useState } from "react";

const Home = () => {
  const news = useLoaderData();
  const [isShow, setIsShow] = useState(false);

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
          {isShow ? (
            <>
              {news.slice(0, news.length).map((aNews, idx, array) => (
                <NewsCard key={idx} newsArr={array} news={aNews}></NewsCard>
              ))}
            </>
          ) : (
            <>
              {news.slice(0, 2).map((aNews, idx, array) => (
                <NewsCard key={idx} newsArr={array} news={aNews}></NewsCard>
              ))}
            </>
          )}

          {isShow ? (
            ""
          ) : (
            <span className="flex justify-center my-3">
              <button
                onClick={() => setIsShow(!isShow)}
                className="btn btn-primary"
              >
                Show All News
              </button>
            </span>
          )}
        </div>
        <div>
          <RightSideNavbar></RightSideNavbar>
        </div>
      </div>
    </div>
  );
};

export default Home;
