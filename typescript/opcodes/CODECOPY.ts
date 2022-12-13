import type Memory from "../memory";
export function CODECOPY(memory: Memory, code: Uint8Array, stack: bigint[]): bigint[] {

    let memoryOffsetStore = stack[0];
    let calldataOffsetCopy = stack[1];
    let calldataSizeCopy = stack[2];

    let value = 0n;
    let copySize: bigint;
    if (calldataSizeCopy < 32n) {
        copySize = 32n
    }
    else {
        copySize = calldataSizeCopy;
    }
    for (let i = calldataOffsetCopy; i < copySize + calldataOffsetCopy; i += 1n) {
        if (i < code.length && i < calldataOffsetCopy + calldataSizeCopy) {
            value = (value << 8n) | BigInt(code[Number(i)]);
        }
        else {
            value = (value << 8n) | BigInt(0);
        }
    }
    memory.store(memoryOffsetStore, value, 32n);
    stack.shift();
    stack.shift();
    stack.shift();
    return stack;
}