import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from './../Shoe.json';
function Product() {

    return (
     
        <div>
            <h1 className="shoestore">Welcome to Shoe Store</h1>
            <div className="productContainer">
                {Object.keys(Shoes).map(keyName=>{
                    const shoe = Shoes[keyName];
                    console.log(shoe);
                    return (
                        <Link key={keyName} 
                            className="link" 
                            to={`/product/${keyName}`}>
                                
                                <img src={shoe.img} height={150} alt="shoe" />
                                <h4  >{shoe.name}</h4>
                    </Link>)
                })}
            </div>
        </div>
     
    );
}

export default Product;