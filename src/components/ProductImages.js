import React from "react";
import '../styles/productImages.css';
import firstProductImage from "../img/tenis810-01.jpg";
import secondProductImage from "../img/tenis810-02.jpg";
import thirdProductImage from "../img/tenis810-03.jpg";
import fourthProductImage from "../img/tenis810-04.jpg";
import ImgCarousel  from "./ImgCarousel";

const ProductImages = (props) => {
    const {productJSON} = props;
    return (
    <div className="col-50">
        <div className="envoltura envolturaImgs escritorio bloque canaleta">
            <div>
                <img src={productJSON.images[0]} width="600px" height="600px"/>
            </div>
            <div>
                <img src={productJSON.images[1]} width="180px" height="180px"/>
                <img src={productJSON.images[2]} width="180px" height="180px"/>
                <img src={productJSON.images[3]} width="180px" height="180px"/>
            </div>
        </div>
        <div className="envoltura movil bloque canaleta">
            <ImgCarousel productJSON = {productJSON}/>
        </div>
    </div>
    )
}

export default ProductImages;