import React, { useState } from "react";
import '../styles/productInfo.css';
import ProductDetails from "./ProductDetails.js";
import ProductOptions from "./ProductOptions.js";

const ProductInfo = () => {
    return (
        <div className="envoltura" id="productOptions">
            <ProductDetails/>
            <ProductOptions/>
        </div>
    );
}

export default ProductInfo;