import React from "react";
import ProductCard from "../../ProductCard/ProductCard";
import "./CustomerMainPage.css";
import CategoryBar from "../../Categories/CategoryBar";
const MainPage = () => {
    return(
        <div className="mainpage">
            <CategoryBar />
           <div className="mainpage-products">
           <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
           </div>
        </div>
    )
}

export default MainPage;