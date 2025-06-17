import axios from "axios";

export async function Get(url, body ) {
  
  try {
    let res = await axios.post(`${process.env.NEXT_APP_BASE_URL}${url}`, body);

    return await res.data;
  } catch (err) {
    return -1;
  }
}
