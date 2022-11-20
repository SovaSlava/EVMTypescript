export function MUL(stack: bigint[]): bigint[] {
    let mul: bigint = stack[0] * stack[1];
    if (mul > BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)) {
        mul -= BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
    }
    stack.shift();
    stack.shift();
    stack.push(mul);
    return stack;
}