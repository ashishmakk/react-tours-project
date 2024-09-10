import React from "react";
import SingleTour from "./SingleTour";

function Tours({ tours, removeTour }) {
  return (
    <section>
      <h1>tours</h1>
      <div className="tours">
        {tours.map((item) => {
          return <SingleTour key={item.id} {...item} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
}

export default Tours;
