import React, { useState , useEffect} from "react";
import '../styles/main.css';
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";

const Main = () => {
    const [productJSON, setProductJSON] =  useState(null);
    useEffect(() => {
        fetch("https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js")
        .then((respuesta) => respuesta.json())
        .then((datos) => {
                setProductJSON(datos);
            });
      }, []);
    if(productJSON != null) {
        return (
            <>
                <div className="container">
                    <div className="grilla">
                        <ProductImages productJSON = {productJSON}/>
                        <ProductInfo productJSON = {productJSON}/>
                    </div>
                </div>
            </>
        );
    }  else return <></>;
}

export default Main;