import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const CardGroup2 = () => {
    const products=[
        {id:1,name:'Laptop Pro',price:12500},
        {id:2,name:'Laptop Crow',price:1200},
        {id:3,name:'Laptop apple',price:30000}
       
    ]
    return (
        <div>
           <CardGroup>
               
           {
       products.map(product=><Card2 product={product} key={product.id}></Card2>)
   }    
               
               </CardGroup> 
        </div>
    );
};

export default CardGroup2;