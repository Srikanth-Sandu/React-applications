import React from "react";

function Card(props) {
    return <div className="card">
            <img className="pimage" src={props.prod.image} />
            <h6 className="ptitle">{props.prod.title}</h6>
            <h4 className="pprice">Price:Rs.{props.prod.price}</h4>
            <button className="pbtn" onClick={() => { props.cart(props.prod) }}>Add to Cart</button>
            
        </div>
}
export default Card;