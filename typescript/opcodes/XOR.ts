export function XOR(stack: bigint[]): bigint[] {
    const xor: bigint = stack[0] ^ stack[1];
    stack.shift();
    stack.shift();
    stack.unshift(xor);
    return stack;
}