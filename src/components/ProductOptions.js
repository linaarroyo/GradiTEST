import React, {useState} from "react";
import '../styles/productOptions.css';

function formatNumber(number) {
    return new Intl.NumberFormat("EN-US", {
        style: 'currency',
        currency: 'USD',
    }).format(number);
}
const ProductOptions = () => {
    const [counter, setCounter] =  useState(1);
    const productDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    let price = 285;

    return(
        <div className="productOptions">
            <hr/>
            <form>
                {/*SELECT COLOR*/}
                <div className="optionSection productColor">
                    <p className="parrafo">Color:</p>
                    <label for="red">
                        <input type="radio" name="color" id="red"/>
                        <span className="color-1 inputColor"/>
                    </label>
                    <label for="black">
                        <input type="radio" name="color" id="black"/> 
                        <span className="color-2 inputColor"/>
                    </label>
                    <label for="white">
                        <input type="radio" name="color" id="white"/> 
                        <span className="color-3 inputColor"/>
                    </label>
                </div>
                <hr/>
                {/*SELECT SIZE*/}
                <div className="optionSection productSize">
                    <p className="parrafo">Size:</p>
                    <label for="7">
                        <input type="radio" name="size" id="7"/>
                        <span id="inputTalla">7</span>
                    </label>
                    <label for="7.5">
                        <input type="radio" name="size" id="7.5"/>
                        <span id="inputTalla">7.5</span>
                    </label>
                    <label for="8">
                        <input type="radio" name="size" id="8"/>
                        <span id="inputTalla">8</span>
                    </label>
                </div>
                <hr/>
                <div className="totalPrice fila" style={{height:"50px", display:"flex"}}>
                {/*SELECT AMOUNT*/}
                    <div className="amountProducts fila">
                        <p className="parrafo" onClick={() => setCounter((prevCount) => prevCount - 1)}>-</p>
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
                <div className="fila buttons">
                    <button className="submitButtons favorite">Add to favourite</button>
                    <button className="submitButtons cart">Add to cart</button>
                </div>
                <p className="productDescription parrafo">
                    {productDescription}
                </p>
            </form>
        </div>
    )
}

export default ProductOptions;