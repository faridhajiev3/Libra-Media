import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../scss/home.scss";
import { useNavigate } from "react-router-dom";
import { setSelectedDetail } from "../../redux/slice/detailSlice";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { setWishList } from "../../redux/slice/wishlistSlice";

function Wishllst() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { likes } = useSelector((state) => state.wishlist);

  const handleClick = (item) => {
    dispatch(setSelectedDetail(item));
    navigate(`/detail/${item.id}`);
  };

  const isLiked = likes.some((like) => like.id === item.id);
  return (
    <div className="container-likes">
      <div className="cards">
        {likes.map((item) => (
          <div className="cart-item">
            <div className="image-container" onClick={() => handleClick(item)}>
              <img src={item.image} />
            </div>
            <div className="heart-icon">
              {isLiked ? (
                <IoMdHeart
                  className="heart-full"
                  onClick={() => dispatch(setWishList(item))}
                />
              ) : (
                <IoMdHeartEmpty
                  className="heart-empty"
                  onClick={() => dispatch(setWishList(item))}
                />
              )}
            </div>
            <div className="item-details">
              <h3>{item.title}</h3>
              <p className="price">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishllst;
