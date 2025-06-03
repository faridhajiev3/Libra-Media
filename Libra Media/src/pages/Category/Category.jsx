import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../scss/home.scss";
import { getCategory } from "../../redux/slice/categorySlice";
import { NavLink } from "react-router-dom";

function Category() {
  const dispatch = useDispatch();
  const { itemsCategory, status } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategory())
  }, [dispatch])
  console.log(itemsCategory)
  return (
    <div>
      <div className="filter-item">
        <NavLink to="/filter">Filter</NavLink>
      </div>

      <div className="cards">
        {status === "loading" ? (
          <p className="loading-text">Loading...</p>
        ) : status === "failed" ? (
          <p className="error-text">Kateqoriyaları əldə etmək alınmadı. Yenidən cəhd edin.</p>
        )
          : (
            itemsCategory.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="image-container">
                  <img src={item.img} alt="clothes" />
                </div>
                <div className="item-details">
                  <h3>{item.category}</h3>
                </div>
              </div>
            ))
          )}
      </div>
    </div>
  );
}

export default Category; 
