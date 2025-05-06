import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedDetail } from "../redux/slice/detailSlice";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { setWishList } from "../redux/slice/wishlistSlice";

function Products({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { likes } = useSelector((state) => state.wishlist);

  const handleClick = (item) => {
    dispatch(setSelectedDetail(item));
    navigate(`/detail/${item.id}`);
  };

  const isLiked = likes.some((like) => like.id === item.id);
  return (
    <div className="card" key={item.id}>
      <img src={item.image} alt="" onClick={() => handleClick(item)} />
      <div className="card-content">
        <h2 className="title">{item.title}</h2>
        <p>{item.price}</p>
        <div>
          {isLiked ? (
            <IoMdHeart className="heart-full" onClick={() => dispatch(setWishList(item))} />
          ) : (
            <IoMdHeartEmpty className="heart-empty" onClick={() => dispatch(setWishList(item))} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
