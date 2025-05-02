import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedDetail } from "../redux/slice/detailSlice";

function Products({ item }) {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleClick =(item)=>{
    dispatch(setSelectedDetail(item));
    navigate(`/detail/${item.id}`)
  }
  return (
    <div className="card" key={item.id}>
      <img src={item.image} alt="" />
      <div className="card-content">
        <h2 className="title">{item.title}</h2>
        <p>{item.price}</p>
        <button onClick={()=> handleClick(item)} className="btn">Ətraflı Bax</button>
      </div>
    </div>
  );
}

export default Products;
