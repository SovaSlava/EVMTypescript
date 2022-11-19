export function SUB(stack: bigint[]): bigint[] {
    const stackLength: number = stack.length;
    let sub: bigint = stack[0] - stack[stackLength - 1];
    if (sub < 0) {
        sub += BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
    }
    stack.shift();
    stack.shift();
    stack.push(sub);
    return stack;
}