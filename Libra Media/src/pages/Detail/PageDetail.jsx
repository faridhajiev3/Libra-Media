import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar, FaPencilAlt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineRecycling } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../../scss/detail.scss";
import { addToBasket } from "../../redux/slice/basketslice";
import Comments from "../../components/comments";
import ColorSelection from "./ColorSelection";
import SizeSelection from "./SizeSelection";
import ProductDetails from "./ProductDetails";

function PageDetail() {
  const productData = {
    productName:
      "Glowy Super Gel with Advanced Night Ser Kadın Bordo Büzgü Detaylı",
    reviewCount: 144,
    rating: 4,
    questionCount: 285,
    storeName: "Cavidstore",
    colors: [
      { name: "Black", paint: "black" },
      { name: "Green", paint: "green" },
      { name: "Red", paint: "red" },
    ],
    sizes: ["S", "M", "L", "XL"],
    price: 9,
    estimatedDelivery: "20 - 30 January",
  };

  const [selectedColor, setSelectedColor] = useState(
    productData.colors[0]?.name || ""
  );
  const [selectedSize, setSelectedSize] = useState(productData.sizes[0] || "");
  // redux
  const { id } = useParams();
  const { selectedDetail } = useSelector((state) => state.detail);

  const dispatch = useDispatch()

  const handleAddToCart = (item) => {
    dispatch(addToBasket(item))
  }
  console.log(selectedDetail)
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      <div className="product-container">
        <div className="product-content">
          {/* Image */}
          <div className="product-image">
            <div className="image-wrapper">
              <img src={selectedDetail.image} className="image" />
            </div>
          </div>

          {/* Details */}
          <div className="product-details">
            <ProductDetails selectedDetail={selectedDetail}/>

            <div className="store-info">
              <button>
                <FaPencilAlt /> Ask question
              </button>
            </div>

            <ColorSelection selectedColor={selectedColor} productData={productData} setSelectedColor={setSelectedColor}/>

            <SizeSelection selectedSize={selectedSize} productData={productData} setSelectedSize={setSelectedSize}/>

            <div className="shipping-info">
              <div>
                <TbTruckDelivery /> Shipping
              </div>
              <p>Estimated Delivery: 20 - 30 January</p>
              <p className="note">
                *Free flat rate shipping on orders over $25.00
              </p>
            </div>

            <div className="return-policy">
              <div>
                <MdOutlineRecycling /> Free Returns
              </div>
              <p className="note">
                Easy and free return in 7 days from the delivered date
              </p>
            </div>

            <div className="price-cart">
              <h2>${selectedDetail.price}</h2>
              <button onClick={() => handleAddToCart(selectedDetail)}>Add To Cart</button>
            </div>
          </div>
        </div>
        <div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default PageDetail;
