export function SUB(stack: bigint[]): bigint[] {
    let sub: bigint = stack[0] - stack[1];
    if (sub < 0) {
        sub += BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
    }
    stack.shift();
    stack.shift();
    stack.unshift(sub);
    return stack;
}