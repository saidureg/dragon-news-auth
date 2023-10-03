import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import sideDefaultPic1 from "../../../assets/1.png";
import sideDefaultPic2 from "../../../assets/2.png";
import sideDefaultPic3 from "../../../assets/3.png";
import { PiShoppingBagOpen } from "react-icons/pi";

const LeftSideNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <div className="space-y-4">
        <h3 className="text-2xl">All Category </h3>
        <div className="space-y-4">
          {categories.map((category, idx) => (
            <NavLink
              to={`/categories/${category.id}`}
              className="block px-4"
              key={idx}
            >
              {category.name}{" "}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="p-4">
        <div className="my-4">
          <img src={sideDefaultPic1} alt="" />
          <h3 className="my-4">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h3>
          <div className="flex items-center gap-6">
            <h4>Sports</h4>
            <p className="flex items-center gap-2">
              <PiShoppingBagOpen /> Jan 4, 2022
            </p>
          </div>
        </div>
        <div className="my-4">
          <img src={sideDefaultPic2} alt="" />
          <h3 className="my-4">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h3>
          <div className="flex items-center gap-6">
            <h4>Sports</h4>
            <p className="flex items-center gap-2">
              <PiShoppingBagOpen></PiShoppingBagOpen> Jan 4, 2022
            </p>
          </div>
        </div>
        <div className="my-4">
          <img src={sideDefaultPic3} alt="" />
          <h3 className="my-4">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h3>
          <div className="flex items-center gap-6">
            <h4>Sports</h4>
            <p className="flex items-center gap-2">
              <PiShoppingBagOpen></PiShoppingBagOpen> Jan 4, 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNavbar;
