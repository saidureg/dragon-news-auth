import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BsBookmark, BsShare, BsFillEyeFill } from "react-icons/bs";

const NewsCard = ({ news }) => {
  const { _id, title, image_url, details, rating, total_view, author } = news;

  return (
    <div>
      <div className="bg-[#F3F3F3] flex justify-between items-center p-4 rounded-t-lg">
        <div className="flex items-center gap-4">
          <img
            className="w-[50px] rounded-full"
            src={author.img}
            alt={author.name}
          />
          <div>
            <h4>{author.name} </h4>
            <p>{author.published_date} </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span>
            <BsBookmark></BsBookmark>
          </span>
          <span>
            <BsShare />
          </span>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl space-y-1 mb-5 p-4">
        <h2 className="card-title">{title}</h2>
        <figure>
          <img src={image_url} alt="" />
        </figure>
        <div className="card-body">
          {details.length > 230 ? (
            <p>
              {details.slice(0, 230)}
              <Link
                className="text-blue-600 font-bold block"
                to={`/news/${_id}`}
              >
                Read More...
              </Link>{" "}
            </p>
          ) : (
            <p>{details} </p>
          )}
          {/* rating */}
          <div className="flex items-center justify-between mt-3 border-t border-[#E7E7E7]">
            <div className="rating rating-md items-center mt-3">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <span className="ml-4 text-[#706F6F]">{rating.number}</span>
            </div>

            <p className="flex items-center justify-end gap-2 text-[#706F6F] font-medium mt-3">
              <BsFillEyeFill /> {total_view ? `${total_view}` : "No view"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object,
};

export default NewsCard;
