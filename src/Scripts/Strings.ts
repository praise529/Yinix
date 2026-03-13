export function PadStart(Text: string, NumOfDigits: number = 2, Placeholder: string = "0") {
    return Text.padStart(NumOfDigits, Placeholder);
}