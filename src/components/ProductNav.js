import React from "react";
import '../styles/productNav.css';

const ProductNav = () => {
    const productSection = "Catalog";
    const productSubSection = "Sneakers";
    const currentProduct = "Free Trainer 3 / MMW";

    return (
        <div className="navWrapper">
            <nav id="navElements">
                <a href="/" id="navegable" className="vinculo">{productSection}</a>
                <a className="vinculo">/</a>
                <a href="/" id="navegable" className="vinculo">{productSubSection}</a>
                <a className="vinculo">/</a>
                <a href="/" id="navegable" className="vinculo" style={{color:"black"}}>{currentProduct}</a>
            </nav>
        </div>
    )
}

export default ProductNav;