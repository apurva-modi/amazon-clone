import React from "react";
import StarBorderSharpIcon from "@material-ui/icons/StarBorderSharp";
import StarSharpIcon from "@material-ui/icons/StarSharp";
import "./Product.css";

function Product({ id, title, price, image, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p> {title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarSharpIcon />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="Product Image1"></img>

      <button>Add to basket </button>
    </div>
  );
}

export default Product;
