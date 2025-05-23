import React, { useEffect } from "react";
import "../../scss/home.scss";
import NewCollection from "../../components/NewCollection";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slice/productSlice";
import Products from "../../components/Products";
import Check from "../../components/Check";

function Home() {
  const dispatch = useDispatch();

  const { items, status } = useSelector((state) => state.products);
  const { empty } = useSelector((state) => state.search);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(empty.toLowerCase())
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log(items);
  return (
    <div className="container-slider">
      <NewCollection />
      <div className="cards">
        {status === "loading" ? (
          <p className="loading-text">Loading...</p>
        ) : (
          filteredItems.map((item) => <Products key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
}

export default Home;
