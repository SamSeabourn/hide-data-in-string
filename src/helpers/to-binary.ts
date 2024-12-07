export const toBinary = (str: string) => {
    return Array.from(str)
        .map(char => {
            const binary = char.charCodeAt(0).toString(2);
            return '0'.repeat(8 - binary.length) + binary;
        })
        .join('');
}