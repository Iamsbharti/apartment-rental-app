import {
  ADD_APARTMENT,
  ADD_APARTMENT_ERROR,
  GET_ALL_APARTMENT,
  GET_ALL_APARTMENT_ERROR,
} from "./actionType";
import * as apis from "../../apis/apartmentApis";

export function addApartmentAction(userInfo) {
  return async (dispatch) => {
    let addApartmentResponse = await apis.addApartmentApi(userInfo);
    console.log("addApartmentResponse action", addApartmentResponse);
    const { error } = addApartmentResponse;
    error
      ? dispatch({ type: ADD_APARTMENT_ERROR, addApartmentResponse })
      : dispatch({ type: ADD_APARTMENT, addApartmentResponse });

    // dispatch error
    if (!error) {
      console.error("add apartment error");
    }
  };
}

export function getAllApartmentAction() {
  return async (dispatch) => {
    let getApartmentResponse = await apis.getAllApartments();
    console.log("get all ApartmentResponse action", getApartmentResponse);
    const { error } = getApartmentResponse;
    error
      ? dispatch({ type: GET_ALL_APARTMENT_ERROR, getApartmentResponse })
      : dispatch({ type: GET_ALL_APARTMENT, getApartmentResponse });

    // dispatch error
    if (!error) {
      console.error("get apartment error");
    }
  };
}
