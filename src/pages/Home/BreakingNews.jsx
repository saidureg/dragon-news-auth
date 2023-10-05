import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="bg-[#F3F3F3] py-2 px-2 flex">
      <button className="btn btn-primary">Latest</button>
      <Marquee pauseOnHover="true" speed={100}>
        <Link className="mr-12" to="/">
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
          Aid Package Yet...
        </Link>
        <Link className="mr-12" to="/">
          Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine...
        </Link>
        <Link className="mr-12" to="/">
          Joe Biden announces $3 billion in Ukraine weapons aid...
        </Link>
        <Link to="/">
          America Imported Over $6 Billion in Goods From Russia Since Ukraine
          Invasion...
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
