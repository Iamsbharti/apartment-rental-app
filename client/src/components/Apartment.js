import React from "react";
import "../css/apartment.css";
const Apartment = () => {
  return (
    <>
      <div>
        <img
          class="intro"
          src={process.env.PUBLIC_URL + "/city.jpg"}
          alt="apartment"
        ></img>
      </div>
    </>
  );
};

export default Apartment;
