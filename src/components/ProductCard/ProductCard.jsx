import React from "react";
import "./ProductCard.css";
const ProductCard = () => {
    return(
        <div className="product-card">
            <img className="product-card-image" src="https://logocreator.io/wp-content/uploads/2024/01/food-logo-ideas-1.jpg" alt="foodiamge" />
            <div className="product-details">
                <p>Title</p>
                <p>descr</p>
                <p>Rs 100</p>
                <button className="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;