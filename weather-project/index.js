import getArgs from "./helpers/args.js";
import { getIcons, getWeather } from "./service/api.service.js";
import { printError, printHelp, printSuccess, printWeather } from "./service/log.service.js";
import { getKeyValue, saveKeyValue, TOKEN_ID } from "./service/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token doesn't not exist");
    return;
  }
  try {
    await saveKeyValue(TOKEN_ID.token, token);
    printSuccess("Token was saved");
  } catch (error) {
    printError(error.message);
  }
};
const saveCity = async (city) => {
  if (!city.length) {
    printError("city doesn't not exist");
    return;
  }
  try {
    await saveKeyValue(TOKEN_ID.city, city);
    printSuccess("City was saved");
  } catch (error) {
    printError(error.message);
  }
};

const getForcast = async () => {
    try {
        const city=process.env.CITY ??(await getKeyValue(TOKEN_ID.city))
        const resp = await getWeather(city)
        printWeather(resp,getIcons(resp.weather[0].icon))

    } catch (error) {
        if(error?.response?.status==404){
            printError("This is city have not")
        } else if(error?.response?.status==401){
            printError("Invalit token")
        } else{
           printError(error.message)
        }
    }
 
};

const logger = () => {
  const args = getArgs(process.argv);

  if (args.h) {
   return printHelp();
  }
  if (args.s) {
   return saveCity(args.s)
  }
  if (args.t) {
   return saveToken(args.t);
  }
 return getForcast()
};
logger();
