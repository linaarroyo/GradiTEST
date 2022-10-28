import React, { Component} from "react";
import '../styles/main.css';
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";

const Main = () => {
    return (
        <div className="container">
            <div className="row gx-1">
                <ProductImages/>
                <ProductInfo/>
            </div>
        </div>
    )
}

export default Main;