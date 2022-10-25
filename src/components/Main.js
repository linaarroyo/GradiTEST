import React, { Component }from "react";
import '../styles/main.css';
import firstProductImage from "../img/tenis810-01.jpg";
import secondProductImage from "../img/tenis810-02.jpg";
import thirdProductImage from "../img/tenis810-03.jpg";
import fourthProductImage from "../img/tenis810-04.jpg";

class ProductImages extends Component {
    render() {
      return (
        <div className="wrapper">
            <div>
                <img src={firstProductImage} width="810px" height="810px"/>
            </div>
            <div>
                <img src={secondProductImage} width="270px" height="270px"/>
                <img src={thirdProductImage} width="270px" height="270px"/>
                <img src={fourthProductImage} width="270px" height="270px"/>
            </div>
        </div>
      );
    }
  }

  function formatNumber(number) {
    return new Intl.NumberFormat("EN-US", {
        style: 'currency',
        currency: 'USD',
    }).format(number);
  }

  class ProductInfo extends Component {
    render() {
        const brand = "by Nike x ALYX";
        const productTitle = "Free Trainer 3 / MMW";
        let price = 28500;
        let comparePrice = 37000;
        price = price.toString().substring(0, price.toString().length - 2);
        comparePrice = comparePrice.toString().substring(0, comparePrice.toString().length - 2);

        return (
            <div className="wrapper" id="productInfo">
                <a href="/">{brand}</a>
                <p>{productTitle}</p>
                <div>
                    <a id="productPrice">{formatNumber(price)}</a>
                    <a>{formatNumber(comparePrice)}</a>
                </div>
            </div>
        );
    }
  }
     

const ProductNav = () => {
    return (
        <div className="row" id="main">
            <ProductImages/>
            <ProductInfo/>
        </div>
    )
}

export default ProductNav;