import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../Shoe.json';

export default function ProductItem() {
    const { id } = useParams();
    const shoe = Shoes[id]
    return (

        <div class="Container">

            <h1>SHOE DETAILS</h1>
            <h2 className="name" >{shoe.name}</h2>
            <img src={shoe.img}  height="500px" alt={id}/>

        </div>
    )
} 
