import React from "react";

const CatCard=({name,image,caption})=>{
    return(
        <div className="cat-card">
            <img src={image} alt={name} className="cat-image"></img>
            <h3>{name}</h3>
            <p>{caption}</p>
        </div>
    );
};

export default CatCard;