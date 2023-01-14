import ConsoleColors from "./ConsoleColors";

export default function (message: string, at: string) {
    console.log(`${ConsoleColors.RED}!An Error Occurred!${ConsoleColors.RESET}`)
    console.log(`${ConsoleColors.RED} ERROR_MESSAGE${ConsoleColors.RESET} -> ${message}`)
    console.log(`${ConsoleColors.YELLOW}At${ConsoleColors.RESET} -> ${ConsoleColors.RED}${at}${ConsoleColors.RESET}`)
    console.log(`${ConsoleColors.YELLOW}Time${ConsoleColors.RESET} -> ${new Date()}`)

    console.log(`${ConsoleColors.BLUE}This process was crashed for critical error!${ConsoleColors.RESET}`)

    process.exit(5)
}
