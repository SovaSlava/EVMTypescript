export function ADD(stack: bigint[]): bigint[] {
    const stackLength: number = stack.length;
    let sum: bigint = stack[stackLength - 1] + stack[stackLength - 2];
    if (sum > BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)) {
        sum -= BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
    }
    stack.shift();
    stack.shift();
    stack.push(sum);
    return stack;
}