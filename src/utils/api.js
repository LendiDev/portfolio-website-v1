import axios from "axios";
import hostname from "../constants/dev";

const api = axios.create({ baseURL: hostname });

export const postContactMe = (formData) => {
  return api.post("/form/send", formData);
};

export const statusCheck = () => {
  return api.get("/status");
};
