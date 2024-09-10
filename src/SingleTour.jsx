import React from "react";

function SingleTour({ id, name, info, image, price }) {
  return (
    <article>
      <img src={image} alt={name} className='image' />
      <span >${price}</span>
      <div>
        <h5>{name}</h5>
        <p>{info}</p>
      </div>
    </article>
  );
}

export default SingleTour;
