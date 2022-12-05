import type Memory from "../memory";
export function MLOAD(memory: Memory, stack: bigint[]): bigint[] {
    const offset: bigint = stack[0];
    let result = memory.load(offset);
    console.log('mload - ' + result)
    stack.shift();
    stack.unshift(result)
    return stack;
}