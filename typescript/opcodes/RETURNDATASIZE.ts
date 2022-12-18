export function RETURNDATASIZE(stack: bigint[], returnDataSize: bigint): bigint[] {
    stack.unshift(returnDataSize / 2n);
    return stack;
}