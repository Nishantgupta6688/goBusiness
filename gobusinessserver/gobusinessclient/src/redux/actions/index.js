import axios from "axios";
import { GET_SALES } from "./types";

export const login = (data, history) => {
  axios
    .post("/api/login", data)
    .then((response) => {
      if (response.data) {
        localStorage.setItem("firm", JSON.stringify(response.data));
        history.push('/');
      }
      
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 401) {
          history.push("/wrongPassword");
        }
      }
    });
};

export const logout = (history) => {
  localStorage.removeItem("firm");
  history.push("/");
};

export const submitFirm = async (data) => {
  await axios.post("/api/register", data).then(console.log("data saved"));
};

export const submitSalesData = (data, history) => {
  try {
    axios.post("/api/addSales", data);
    window.alert("Added sucessfully");
    history.push("/");
  } catch (err) {
    console.log("error");
  }
};

export const previewSalesData = (id) => async (dispatch) => {
  const res = await axios.post("/api/getSales", { id });
  dispatch({ type: GET_SALES, payload: res.data });
};
