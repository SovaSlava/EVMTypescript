import type Memory from "../memory";
export function MSIZE(memory: Memory, stack: bigint[]): bigint[] {
    let result = memory.size;
    console.log('msize file result - ' + result)
    stack.unshift(result)
    return stack;
}