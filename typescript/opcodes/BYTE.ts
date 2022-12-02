export function BYTE(stack: bigint[]): bigint[] {
    let max = BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)
    let byte: bigint;
    if (stack[0] > BigInt(32)) {
        byte = BigInt(0);
    }
    else {
        let value1: string = stack[1].toString(16);
        while (value1.length != 64) {
            value1 = '0' + value1;
        }
        let substrPlace = Number(stack[0] << BigInt(1));
        byte = BigInt(`0x${value1.substring(substrPlace, substrPlace + 2)}`)
    }
    stack.shift();
    stack.shift();
    stack.unshift(byte);
    return stack;
}