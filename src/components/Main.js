import React, { Component} from "react";
import '../styles/main.css';
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";

const Main = () => {
    return (
        <div className="fila">
            <ProductImages/>
            <ProductInfo/>
        </div>
    )
}

export default Main;