import React from "react";
import '../styles/productDetails.css';


function formatNumber(number) {
    return new Intl.NumberFormat("EN-US", {
        style: 'currency',
        currency: 'USD',
    }).format(number);
}

const ProductDetails = () => {
    const brand = "by Nike x ALYX";
    const productTitle = "Free Trainer 3 / MMW";
    let price = 28500;
    let comparePrice = 37000;
    price = price.toString().substring(0, price.toString().length - 2);
    comparePrice = comparePrice.toString().substring(0, comparePrice.toString().length - 2);
    
    return (
        <div className="productDetails">
            <a href="/" className="brand">{brand}</a>
            <p className="productTitle parrafo" style={{fontWeight:"bold"}}>{productTitle}</p>
            <div className="fila price">
                <p id="productPrice" className="parrafo">{formatNumber(price)}</p>
                <a className="vinculo comparePrice" style={{marginTop: "0.4rem", textDecoration:"line-through"}}>{formatNumber(comparePrice)}</a>
            </div>
        </div>
    )
}

export default ProductDetails;