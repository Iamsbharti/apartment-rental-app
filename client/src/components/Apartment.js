import React, { useEffect, useState } from "react";
import "../css/apartment.css";
import Button from "@mui/material/Button";
import { getAllApartmentAction } from "../redux/actions/apartmentAction";
import { connect } from "react-redux";

const Apartment = ({ getAllApartmentAction, apartments, user }) => {
  const [apartmentList, setApartmentList] = useState([]);

  useEffect(() => {
    getAllApartmentAction();
  }, []);

  useEffect(() => {
    setApartmentList(apartments);
  }, [apartments]);

  return (
    <>
      <div className="apartments">
        {apartmentList.length > 0 &&
          apartmentList.map((apartment, index) => (
            <div className="apartment-post-card" id={index}>
              <p className="name">{apartment.name}</p>
              <hr />
              <p>
                Address : <span>{apartment.address}</span>
              </p>
              <p>
                Monthly Rent: <span>{apartment.rent}</span>
              </p>
              <p>
                Security Deposit: <span>{apartment.deposit}</span>
              </p>
              <p>
                Owner: <span>{apartment.owner}</span>
              </p>
              <p>
                Rooms: <span>{apartment.rooms}</span>
              </p>
              <p>
                Size: <span>{apartment.size} sq Ft.</span>
              </p>
              <div className="apartment-post-status">
                <Button variant="contained">Interested ?</Button>
                <p>56 People Interested</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
const mapStateToProps = ({ user, apartments }) => {
  console.log("map state to props: add apartment", user, apartments);
  return {
    user,
    apartments,
  };
};
const mapActionToProps = { getAllApartmentAction };
export default connect(mapStateToProps, mapActionToProps)(Apartment);
