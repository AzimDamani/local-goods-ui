import React from "react";
import ProductCard from "../../ProductCard/ProductCard";
import "./VendorMainPage.css";
const MainPage = () => {
    return(
        <div className="mainpage">
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