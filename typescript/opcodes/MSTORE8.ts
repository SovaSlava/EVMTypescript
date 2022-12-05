import type Memory from "../memory";
export function MSTORE8(memory: Memory, stack: bigint[]): bigint[] {
    const offset: bigint = stack[0];
    memory.store(offset, stack[1], 1n);
    stack.shift()
    stack.shift()
    return stack;
}