export function SIGNEXTEND(stack: bigint[]): bigint[] {
    let res: bigint;
    let size: number = Math.ceil(stack[1].toString(2).length / 8) * 8;
    if (BigInt.asIntN(size, BigInt(stack[1])).toString()[0] == '-') {
        // negative
        let value: string = stack[1].toString(16);
        while (value.length != 64) {
            value += 'ff';
        }
        res = BigInt(`0x${value}`);
    }
    else {
        res = BigInt(stack[1]);
    }
    stack.shift();
    stack.shift();
    stack.push(res);
    return stack;
}