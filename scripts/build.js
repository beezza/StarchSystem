const {readdirSync} = require("fs")
const chp = require("child_process")


for (const file of readdirSync(`dist`)) {
    if (!file.endsWith(".js")) {
        console.log(`Ignoring ${file}...`)
    }else {
        console.log(`Building ${file}...`)
        chp.execSync(`node_modules/.bin/pkg -t node16 dist/${file} -o bin/${file.replace(".js", "")}`)
    }

}
