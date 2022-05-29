import {
  ADD_APARTMENT,
  ADD_APARTMENT_ERROR,
  GET_ALL_APARTMENT,
} from "../actions/actionType";
import { apartments } from "../defaultStore";

export function apartmentReducer(_apartment = apartments, action) {
  console.log("apartment reducer::", action);
  switch (action.type) {
    case ADD_APARTMENT:
      const { error, message, status, data } = action.addApartmentResponse;
      return {
        ..._apartment,
        data,
      };

    case ADD_APARTMENT_ERROR:
      return {
        ...action.addApartmentResponse,
        error: true,
      };
    case GET_ALL_APARTMENT:
      return action.getApartmentResponse;
    default:
      return _apartment;
  }
}
