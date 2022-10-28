import React, { useState } from "react";
import '../styles/productInfo.css';
import ProductDetails from "./ProductDetails.js";
import ProductOptions from "./ProductOptions.js";

const ProductInfo = () => {
    return (
        <div className="envoltura envolturaInfo col-md-6" id="productInfo" style={{paddingLeft:"8vw"}}>
            <ProductDetails/>
            <ProductOptions/>
        </div>
    );
}

export default ProductInfo;