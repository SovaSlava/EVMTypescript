import type Memory from "../memory";
export function REVERT(stack: bigint[], memory: Memory): [bigint, boolean] {
    let memoryOffset = stack[0];
    let dataLen = stack[1];

    let data = memory.load(memoryOffset, dataLen);
    stack.shift()
    stack.shift()
    return [data, false];
}