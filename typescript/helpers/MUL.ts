export function MUL(stack: bigint[]): bigint[] {
    const stackLength: number = stack.length;
    let mul: bigint = stack[0] * stack[stack.length - 1];
    if (mul > BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)) {
        mul -= BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
    }
    stack.shift();
    stack.shift();
    stack.push(mul);
    return stack;
}