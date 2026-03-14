export default function SendConsoleMessage(Text: string) {
    console.log(`[${new Date().toLocaleTimeString()}] ${Text}`);
}