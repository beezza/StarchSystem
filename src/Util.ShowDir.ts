import {readdirSync} from "fs";
import ConsoleColors from "./lib/ConsoleColors";

const args: string[] = process.argv.slice(2)


if (args.length < 1) {
    console.log("Error: You have to provide directory/folder name.")

    process.exit(1)
}

for (const item of readdirSync(args[0], {withFileTypes: true})) {
    if (item.isDirectory()) {
        console.log(`${ConsoleColors.BLUE}${item.name}${ConsoleColors.RESET}          [${ConsoleColors.BLUE}DIRECTORY${ConsoleColors.RESET}]`)
    }else if (item.isSymbolicLink()) {
        console.log(`${item.name}          [${ConsoleColors.WHITE}LINK${ConsoleColors.RESET}]`)
    }
    else {
        console.log(item.name)
    }
}