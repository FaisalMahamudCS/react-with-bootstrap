import React from 'react';

const Card = (props) => {
    const {name,price}=props.product;
    return (
      
           <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
    
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
      </div>
    </div>
</div>
</div>        
    );
};

export default Card;