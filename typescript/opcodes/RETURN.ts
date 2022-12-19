import type Memory from "../memory";
export function RETURN(stack: bigint[], memory: Memory): bigint {
    let memoryOffset = stack[0];
    let dataLen = stack[1];

    // let data = memory.load(memoryOffset, dataLen).toString(16);
    let data = memory.load(memoryOffset, dataLen)
    stack.shift()
    stack.shift()
    return data;
}