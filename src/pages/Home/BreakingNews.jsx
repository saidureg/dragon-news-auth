import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="bg-[#F3F3F3] py-2 px-2 flex">
      <button className="btn btn-primary">Latest</button>
      <Marquee pauseOnHover="true" speed={100}>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link to="/">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
