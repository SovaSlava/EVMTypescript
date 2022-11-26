export function EXP(stack: bigint[]): bigint[] {
    let exp: bigint;
    if (stack[1] == BigInt(0) || stack[0] == BigInt(0)) {
        exp = BigInt(0);
    }
    else {
        exp = BigInt(Math.pow(Number(stack[0]), Number(stack[1])));
    }
    if (exp > BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)) {
        exp %= BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
    }
    stack.shift();
    stack.shift();
    stack.push(exp);
    return stack;
}