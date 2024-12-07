export const fromBinary = (binary: string) => {
    const matches = binary.match(/.{8}/g) ?? [];
    return matches
        .map(byte => String.fromCharCode(parseInt(byte, 2)))
        .join('');
}