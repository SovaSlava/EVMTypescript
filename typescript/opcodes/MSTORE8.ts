import type Memory from "../memory";
export function MSTORE8(memory: Memory, stack: bigint[]): bigint[] {
    // offset: bigint = stack[0];
    console.log('ofster memory8 - ' + stack[0])
    memory.store(stack[0], stack[1], 1n);

    stack.shift()
    stack.shift()
    return stack;
}