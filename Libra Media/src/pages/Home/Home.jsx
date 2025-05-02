import React, { useEffect } from "react";
import "../../scss/home.scss";
import NewCollection from "../../components/NewCollection";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slice/productSlice";
import Products from "../../components/Products";

function Home() {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log(items);
  return (
    <div className="container-slider">
      <NewCollection />
      <div className="cards">
        {items.map((item) => (
          <Products key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
