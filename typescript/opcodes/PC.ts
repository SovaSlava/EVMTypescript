export function PC(pc: number, stack: bigint[]): bigint[] {
    stack.unshift(BigInt(pc));
    return stack;
}