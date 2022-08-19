export function getTimesignatureTopNumberOptions(): number[] {
    let options = [];
    for (let i = 1; i <= 16; i++) {
        options.push(i)
    }
    return options;
}

export const TIME_SIGNATURE_BOTTOM_NUMBER: number[] = [4, 8, 16];