export function GAS(stack: bigint[]): bigint[] {
    stack.unshift(BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) - BigInt(1));
    return stack;
}