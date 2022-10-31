import React, {useState} from "react";
import toast from "react-hot-toast";
import '../styles/productOptions.css';
import { Toaster } from 'react-hot-toast';
import { map } from 'lodash';

function formatNumber(number) {
    return new Intl.NumberFormat("EN-US", {
        style: 'currency',
        currency: 'USD',
    }).format(number);
}

const ProductOptions = (props) => {
    const {productJSON} = props;
    const [counter, setCounter] =  useState(1);
    const colores = Array.from(new Set(map(productJSON.variants, objeto => objeto.option1)));
    let tallas = {};
    let price = productJSON.price;
    price = price.toString().substring(0, price.toString().length - 2);
    let descripcion = productJSON.description;
    for(let indice in colores)
    {
        const color = colores[indice];
        tallas[color] = map(productJSON.variants, objeto => {if(objeto.option1 == color) return objeto.option2;});
        tallas[color] = tallas[color].filter(function( element ) {
            return element !== undefined;
         });
    }
    const [colorSeleccionado, setColorSeleccionado] =  useState(colores[0]);
    return(
        <div className="productOptions">
            <Toaster/>
            <form >
                {/*SELECT COLOR*/}
                <div className="optionSection productColor">
                    <p className="parrafo">Color:</p>
                    {map(colores, color => {
                        return (
                            <label for={color} key={color}>
                                <input type="radio" name="selector" id={color} onClick={evento => setColorSeleccionado(evento.target.id)}/>
                                <span className="inputColor" style={{backgroundColor: color.toLowerCase()}}/>
                            </label>
                        );
                    })}
                </div>
                {/*SELECT SIZE*/}
                <div className="optionSection productSize fila">
                    <p className="parrafo">Size:</p>
                    <div className="opcionesTalla">
                        {map(tallas[colorSeleccionado], talla => {
                            return (
                            <label for={talla} key={talla}>
                                <input type="radio" name="size" id={talla}/>
                                <span id="inputTalla">{talla}</span>
                            </label>
                        );
                        })}
                    </div>
                </div>
                {/*SELECT AMOUNT*/}
                <div className="totalPrice fila" style={{height:"50px"}}>
                    <div className="amountProducts fila">
                        <p className="parrafo" onClick={() => setCounter((prevCount) => prevCount > 1 ? prevCount - 1 : 1)}>-</p>
                        <p className="parrafo">{counter}</p>
                        <p className="parrafo" onClick={() => setCounter((prevCount) => prevCount + 1)}>+</p>
                    </div>
                    <div className="totalAmount fila">
                        <a style={{marginTop:"0.08rem"}} className="vinculo">Total price:</a>
                        <a id="totalNumber" className="vinculo"
                            style={{
                                color: "black",
                                fontSize: "0.9rem",
                            }}>
                            {formatNumber(counter * price)}
                        </a>
                    </div>
                </div>
                {/*SUBMIT FORM*/}
                <div className="buttons">
                    <span className="submitButtons favorite col-50" onClick={() => toast.success(`${productJSON.title} was added to list.`)}>Add to favourite</span>
                    <span className="submitButtons cart col-50" onClick={() => toast.success(`${productJSON.title} was added to cart.`)}>Add to cart</span>
                </div>
                <p className="productDescription parrafo">
                    <div dangerouslySetInnerHTML={{__html: descripcion}}/>
                </p>
            </form>
        </div>
    )
}

export default ProductOptions;