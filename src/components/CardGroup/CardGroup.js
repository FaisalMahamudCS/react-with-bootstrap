import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products=[
        {id:1,name:'Laptop Pro',price:12500},
        {id:2,name:'Laptop Crow',price:1200},
        {id:3,name:'Laptop apple',price:30000}
       
    ]
    return (
        <div>
        <h2>This is my cards</h2>
   {
       products.map(product=><Card product={product} key={product.id}></Card>)
   }
    
        </div>
    );
};

export default CardGroup;