import React from "react";
import SingleTour from "./SingleTour";

function Tours({ tours }) {
  return (
    <section>
      <h2>tours</h2>
      <div>
        {tours.map((item) => {
          return <SingleTour key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default Tours;
