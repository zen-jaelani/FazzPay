import axios from "../../utils/axios";

export const transfer = (data) => {
  return {
    type: "TRANSFER",
    payload: axios.post(`transaction/transfer`, data),
  };
};

export const topup = (data) => {
  return {
    type: "TOPUP",
    payload: axios.post(`transaction/top-up`, data),
  };
};

export const histoy = ({ page, limit, filter } = {}) => {
  return {
    type: "HISTORY",
    payload: axios.get(
      `transaction/history?page=${page}&limit=${limit}&filter=${filter}`
    ),
  };
};
