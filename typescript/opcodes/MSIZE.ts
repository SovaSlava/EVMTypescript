import type Memory from "../memory";
export function MSIZE(memory: Memory, stack: bigint[]): bigint[] {
    let result = memory.size;
    stack.unshift(result)
    return stack;
}