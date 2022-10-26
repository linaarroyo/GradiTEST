import React, { useState } from "react";
import '../styles/productInfo.css';
import ProductDetails from "./ProductDetails.js";
import ProductOptions from "./ProductOptions.js";
import ProductAmount from "./ProductAmount.js";
import AddCart from "./AddCart";

const ProductInfo = () => {
    return (
        <div className="wrapper" id="productOptions">
            <ProductDetails/>
            <ProductOptions/>
            <ProductAmount/>
            <AddCart/>
        </div>
    );
}

export default ProductInfo;