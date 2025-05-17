import React from 'react'
import { CiStar } from "react-icons/ci";

function ProductDetails({selectedDetail}) {
    return (
        <div className="product-title">
            <h1>{selectedDetail.title}</h1>
            <div className="reviews">
                <div className="stars">
                    <CiStar className="star empty" />
                    <CiStar className="star empty" />
                    <CiStar className="star empty" />
                </div>
                <span>144 Reviews</span>
                <span>285 Q&A</span>
            </div>
        </div>
    )
}

export default ProductDetails