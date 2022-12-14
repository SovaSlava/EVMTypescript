export function NOT(stack: bigint[]): bigint[] {
    let max = BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)
    let not = max - -~stack[0];
    stack.shift();
    stack.unshift(not);
    return stack;
}