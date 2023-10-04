import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NewsCard = ({ news }) => {
  const { _id, title, image_url, details } = news;
  return (
    <div className="card bg-base-100 shadow-xl space-y-2 mb-5 p-4">
      <h2 className="card-title">{title}</h2>
      <figure>
        <img src={image_url} alt="" />
      </figure>
      <div className="card-body">
        {details.length > 230 ? (
          <p>
            {details.slice(0, 230)}
            <Link className="text-blue-600 font-bold block" to={`/news/${_id}`}>
              Read More...
            </Link>{" "}
          </p>
        ) : (
          <p>{details} </p>
        )}
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object,
};

export default NewsCard;
