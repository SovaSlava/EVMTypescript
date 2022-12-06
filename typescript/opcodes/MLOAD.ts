import type Memory from "../memory";
export function MLOAD(memory: Memory, stack: bigint[]): bigint[] {
    const offset: bigint = stack[0];
    let result: bigint = memory.load(offset);
    stack.shift();
    stack.unshift(result)
    return stack;
}