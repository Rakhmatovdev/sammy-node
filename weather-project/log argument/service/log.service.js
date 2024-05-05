import chalk from "chalk";
import dedent from "dedent-js";

const printError =(err)=>{
    console.log(chalk.white.bgRed('ERROR')+" "+err);
}

const printSuccess=(message)=>{
    console.log(chalk.white.bgGreen("SUCCESS")+" "+message);
}

const printHelp=()=>{
    console.log(dedent`
    ${chalk.bgCyan("HELP")}
    -s [CITY] for install city
    -h for help
    -t [API_KEY] for saving token
    `);
}

export  {
    printError,printSuccess,printHelp
}