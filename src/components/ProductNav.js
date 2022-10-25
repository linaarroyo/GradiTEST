import React from "react";
import '../styles/productNav.css';

const ProductNav = () => {
    const productSection = "Catalog";
    const productSubSection = "Sneakers";
    const currentProduct = "Free Trainer 3 / MMW";

    return (
        <div className="navWrapper">
            <nav id="navElements">
                <a href="/">{productSection}</a>
                <a>/</a>
                <a href="/">{productSubSection}</a>
                <a>/</a>
                <a href="/" className="currentProduct">{currentProduct}</a>
            </nav>
        </div>
    )
}

export default ProductNav;