export function MUL(stack: bigint[]): bigint[] {
    let mul: bigint;
    if (stack[1] == BigInt(0) || stack[0] == BigInt(0)) {
        mul = BigInt(0);
    }
    else {
        mul = stack[0] * stack[1];
    }
    if (mul > BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)) {
        mul %= BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
    }
    stack.shift();
    stack.shift();
    stack.unshift(mul);
    return stack;
}