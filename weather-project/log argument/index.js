import getArgs from "./helpers/args.js";
import { getWeather } from "./service/api.service.js";
import { printError, printHelp, printSuccess } from "./service/log.service.js";
import { saveKeyValue, TOKEN_ID } from "./service/storage.service.js";

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

const getForcast = async () => {
    try {
        const resp =await getWeather(process.env.CITY ?? "uzbekistan");
        console.log(resp); 

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
    //help
    printHelp();
  }
  if (args.s) {
    //save sity
  }
  if (args.t) {
    // save token
    saveToken(args.t);
  }
  getForcast()
};
logger();
