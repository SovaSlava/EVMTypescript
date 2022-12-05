import type Memory from "../memory";
export function MSTORE(memory: Memory, stack: bigint[]): bigint[] {
    const offset: bigint = stack[0];
    memory.store(offset, stack[1]);
    stack.shift()
    stack.shift()
    return stack;
}