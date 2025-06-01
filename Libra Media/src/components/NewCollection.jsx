import React from "react";
import collection from "../assets/world1.png";

function NewCollection() {
  return (
    <div className="roww"> 
      <div className="eng">
        <div className="mostly">
          <div className="port">
            <h1>New Collection</h1>
            <h4>Discount 50% for the first transaction</h4>
            <button>Shop Now</button>
          </div>
          <div className="image-person">
            <img src={collection} alt="Women's Collection" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCollection;
