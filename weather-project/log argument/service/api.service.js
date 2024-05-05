import https from "https";
import { getKeyValue, TOKEN_ID } from "./storage.service.js";
import axios from "axios";
const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_ID.token);
  if (!token) {
    throw new Error("Api doen't not exist -t [API_KEY] for saving token");
  }
//axios version
const {data}=await axios.get("https://api.openweathermap.org/data/2.5/weather",{
    params:{
        q:city,
        appid:token,
        lang:"en",
        units:"metric"
    }
})

return data

};


export { getWeather };






















// node version 
//   const url=new URL("https://api.openweathermap.org/data/2.5/weather")
//   url.searchParams.append("q", city);
//   url.searchParams.append("appid", token);
//   url.searchParams.append("lang", "en");
//   url.searchParams.append("units", "metric");

//   https.get(url, (response) => {
//     let res = "";
//     response.on("data", (chunk) => {
//       res += chunk;
//     });
//     response.on("end", () => {
//       console.log(res);
//     });
//   });