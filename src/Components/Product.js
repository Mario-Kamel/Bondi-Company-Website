import React from "react";

const Product = ({ name, description, imageUrl }) => {
    // Extract relevant information from the 'product' prop

    return (
        <div className="product">
            <a href={imageUrl}><img src={imageUrl} alt={name} /> </a>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Product;
