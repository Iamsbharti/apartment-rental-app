import baseUrl from "./apiUtils";
import axios from "axios";
import { toast } from "react-toastify";
import history from "../library/history";
export const addApartmentApi = async ({
  owner,
  name,
  address,
  rent,
  deposit,
  size,
  rooms,
}) => {
  console.log("addapartment apicall::", owner);
  try {
    let response = await axios.post(`${baseUrl}/api/v1/apartment/add`, {
      owner,
      name,
      address,
      rent,
      deposit,
      size,
      rooms,
    });
    console.log("add apartment-res::", response.data);
    toast.success(response.message);
    history.push("/apartment");
    localStorage.setItem("user", JSON.stringify(response.data.data));
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const getAllApartments = async () => {
  console.log("get all apartments:");
  try {
    let response = await axios.get(`${baseUrl}/api/v1/apartment/get/all`);
    console.log("get all ::", response.data);
    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};
