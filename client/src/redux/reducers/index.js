import { userReducer } from "./userReducer";
import { apartmentReducer } from "./apartmentReducer";

import { combineReducers } from "redux";

export default combineReducers({
  user: userReducer,
  apartments: apartmentReducer,
});
