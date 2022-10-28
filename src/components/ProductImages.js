import React from "react";
import '../styles/productImages.css';
import firstProductImage from "../img/tenis810-01.jpg";
import secondProductImage from "../img/tenis810-02.jpg";
import thirdProductImage from "../img/tenis810-03.jpg";
import fourthProductImage from "../img/tenis810-04.jpg";
import ImgCarousel  from "./ImgCarousel";

const ProductImages = () => {
    return (
    <>
    <div className="envoltura envolturaImgs escritorio col-md-6">
        <div>
            <img src={firstProductImage} width="810px" height="810px"/>
        </div>
        <div>
            <img src={secondProductImage} width="270px" height="270px"/>
            <img src={thirdProductImage} width="270px" height="270px"/>
            <img src={fourthProductImage} width="270px" height="270px"/>
        </div>
    </div>
    <div className="envoltura movil">
        <ImgCarousel/>
    </div>
    </>
    )
}

export default ProductImages;