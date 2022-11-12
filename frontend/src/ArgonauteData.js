import axios from "axios";

const baseURL = "http://localhost:8000";

export async function getArgonautes() {
  try {
    const { data } = await axios.get(`${baseURL}/argonaute`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function addArgonaute(name) {
  try {
    const { data } = await axios.post(`${baseURL}/argonaute/add`, {
      name: name,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
