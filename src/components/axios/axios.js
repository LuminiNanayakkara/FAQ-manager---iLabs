import axios from "axios";

const instance = axios.create({
  baseURL: "https://floating-brook-07767.herokuapp.com",
});

export default instance;
