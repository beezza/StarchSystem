import * as chp from "child_process";
import RootCheck from "./lib/RootCheck";
import ThrowError from "./lib/ThrowError";


const args = process.argv.slice(2)


if (!RootCheck()) {
    ThrowError("NO_ROOT_ACCESS", __filename)
}

if (args.length < 1) {
    console.log("Error: You have to provide command.")

    process.exit(1)
}

switch (args[0]) {
    case "update":
        process.chdir("/StarchSystem")


        break
}
