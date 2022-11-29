export function SAR(stack: bigint[]): bigint[] {
    let max = BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)
    let sar: bigint;
    const size: number = Math.ceil(stack[1].toString(2).length / 8) * 8;
    if (BigInt.asIntN(size, BigInt(stack[1])).toString()[0] == '-') {
        if (stack[0] > 0xff) {
            sar = max - BigInt(1);
        }
        else {
            // negative
            let value: string = ((stack[1] >> stack[0]) % max).toString(16);
            while (value.length != 64) {
                value = 'f' + value;
            }
            sar = BigInt(`0x${value}`);
        }
    }
    else {
        if (stack[0] > 0xff) {
            sar = BigInt(0);
        }
        else {
            sar = (stack[1] >> stack[0]) % max;
        }
    }

    stack.shift();
    stack.shift();
    stack.push(sar);
    return stack;
}