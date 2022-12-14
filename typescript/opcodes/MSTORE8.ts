import type Memory from "../memory";
export function MSTORE8(memory: Memory, stack: bigint[]): bigint[] {

    memory.store(stack[0], stack[1], 1n);

    stack.shift()
    stack.shift()
    return stack;
}