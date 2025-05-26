/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../scss/home.scss";
import { useNavigate } from "react-router-dom";
import { setSelectedDetail } from "../../redux/slice/detailSlice";

function Wishllst() {
  const { likes } = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (item) => {
    dispatch(setSelectedDetail(item));
    navigate(`/detail/${item.id}`);
  };
  return (
    <div className="container-likes">
      <div className="cards">
        {likes.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="" onClick={() => handleClick(item)} />
            <div className="card-content">
              <h2 className="title">{item.title}</h2>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishllst;
