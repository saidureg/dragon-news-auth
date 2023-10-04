import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, image_url, details } = news;
  return (
    <div className="card bg-base-100 shadow-xl space-y-2 mb-5">
      <figure>
        <img src={image_url} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}{" "}
            <Link className="text-blue-600 font-bold" to={`/news/${_id}`}>
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

export default NewsCard;
