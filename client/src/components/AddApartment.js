import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/apartment.css";
import { useHistory } from "react-router-dom";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { addApartmentAction } from "../redux/actions/apartmentAction";
import { connect } from "react-redux";

const AddApartment = ({ addApartmentAction, apartments, user }) => {
  console.log("user ::", user);
  let history = useHistory();
  const [name, setName] = useState("");
  const [owner, SetOwner] = useState("");
  const [size, setSize] = useState("");
  const [rooms, setRooms] = useState("");
  const [address, setAddress] = useState("");
  const [rent, setRent] = useState("");
  const [deposit, setDeposit] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "size":
        setSize(value);
        break;
      case "rooms":
        setRooms(value);
        break;
      case "rent":
        setRent(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "deposit":
        setDeposit(value);
        break;
      default:
    }
  };
  const handleClearForm = () => {
    setAddress("");
    setDeposit("");
    setRooms("");
    setRent("");
    setSize("");
  };
  const handleAddApartment = async () => {
    console.log("Handle add apartment");
    let aprtmentDetails = {
      owner: user.userId,
      name,
      address,
      rent,
      deposit,
      size,
      rooms,
    };
    console.log("add::", aprtmentDetails);
    addApartmentAction(aprtmentDetails);
  };
  return (
    <>
      <div className="addApartment">
        <p className="welcome_text">Add A Apartment</p>
        <Box
          className="register"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "40ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Enter Apartment Name"
            variant="outlined"
            name="name"
            onChange={handleChange}
            value={name}
          />
          <TextField
            label="Size"
            variant="outlined"
            name="size"
            onChange={handleChange}
            value={size}
          />
          <TextField
            label="Rooms"
            variant="outlined"
            name="rooms"
            onChange={handleChange}
            value={rooms}
          />
        </Box>
        <Box
          className="register"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "40ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextareaAutosize
            aria-label="minimum height"
            minRows={2}
            placeholder="Address"
            style={{ width: 450 }}
            label="Address"
            name="address"
            onChange={handleChange}
            value={address}
          />
          <TextField
            label="Monthlty Rent"
            variant="outlined"
            name="rent"
            onChange={handleChange}
            value={rent}
          />
          <TextField
            label="Security Deposit"
            variant="outlined"
            name="deposit"
            onChange={handleChange}
            value={deposit}
          />
        </Box>
        <Box
          className="register2"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "40ch" },
          }}
          noValidate
          autoComplete="off"
          style={{ marginLeft: "70px" }}
        >
          <Button
            variant="contained"
            onClick={handleAddApartment}
            disabled={
              name && size && rooms && address && deposit && rent ? false : true
            }
          >
            Add
          </Button>
          <Button
            variant="contained"
            onClick={handleClearForm}
            disabled={
              name || size || rooms || address || deposit || rent ? false : true
            }
          >
            Clear
          </Button>
          <Button
            variant="contained"
            onClick={() => history.push("/")}
            disabled={
              name || size || rooms || address || deposit || rent ? false : true
            }
          >
            Cancel
          </Button>
          <br />
        </Box>
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
const mapActionToProps = { addApartmentAction };
export default connect(mapStateToProps, mapActionToProps)(AddApartment);
