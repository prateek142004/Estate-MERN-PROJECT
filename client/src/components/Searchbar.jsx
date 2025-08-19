import React, { useState } from "react";
import "../style/searchbar.scss";
import { Link } from "react-router-dom";

const type = ["buy", "rent"];

const Searchbar = () => {
  const [query, setquery] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const switchType = (val) => {
    setquery((prev) => ({ ...prev, type: val }));
  };

  const handlechange = (e) => {
    setquery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="searchbar">
      <div className="type">
        {type.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form >
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handlechange}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000}
          placeholder="Min Price"
          onChange={handlechange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000}
          placeholder="Max Price"
          onChange={handlechange}
        />
        <Link
          to={`/list?type=${query.type}&city=${query.city}&minprice=${query.minPrice}&maxprice=${query.maxPrice}`}
        >
          <button>
            <img src="/search.png" alt="" />
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Searchbar;
