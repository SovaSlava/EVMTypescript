import type { txType } from "../transaction"
import type Memory from "../memory";
export function CALLDATACOPY(memory: Memory, tx: txType, stack: bigint[]): bigint[] {

    let memoryOffsetRead = stack[0];
    let calldataOffsetCopy = stack[1];
    let calldataSizeCopy = stack[2];

    let value = 0n;
    let copySize: bigint;
    if (calldataSizeCopy < 64n) {
        copySize = 64n
    }
    else {
        copySize = calldataSizeCopy;
    }
    for (let i = calldataOffsetCopy * 2n; i < copySize + calldataOffsetCopy * 2n; i += 2n) {
        if (tx.data[Number(i + 1n)] != undefined || i <= calldataOffsetCopy + calldataSizeCopy) {
            value = (value << 8n) | BigInt("0x" + tx.data[Number(i)] + tx.data[Number(i + 1n)]);
        }
        else {
            value = (value << 8n) | BigInt("0x" + 0);
        }
    }

    memory.store(memoryOffsetRead, value, 32n);
    stack.shift();
    stack.shift();
    stack.shift();
    return stack;
}