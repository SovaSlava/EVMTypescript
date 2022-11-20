export function ADD(stack: bigint[]): bigint[] {
    const stackLength: number = stack.length;
    let sum: bigint = stack[1] + stack[0];
    if (sum > BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)) {
        sum -= BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
    }
    stack.shift();
    stack.shift();
    stack.push(sum);
    return stack;
}