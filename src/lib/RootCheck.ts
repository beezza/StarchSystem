export default function (): boolean {
    if (process.getuid == undefined) {
        return false
    }

    return process.getuid() == 0;



}