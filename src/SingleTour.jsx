import React, { useState } from "react";

function SingleTour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='image' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}{" "}
          <button onClick={() => setReadMore(!readMore)} className='btn-info'>
            {readMore ? "Show less" : "Show more"}
          </button>
        </p>
        <button type='button' onClick={() => removeTour(id)} className='btn'>
          Remove Tour
        </button>
      </div>
    </article>
  );
}

export default SingleTour;
