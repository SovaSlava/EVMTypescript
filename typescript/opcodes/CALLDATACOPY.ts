import type { txType } from "../transaction"
import { CALLDATALOAD } from "./CALLDATALOAD";
import { MSTORE } from "./MSTORE";
import type Memory from "../memory";
export function CALLDATACOPY(memory: Memory, tx: txType, stack: bigint[]): bigint[] {

    let memoryOffsetRead = stack[0];
    let calldataOffsetCopy = stack[1];
    let calldataSizeCopy = stack[2];

    let value = 0n;
    // read calldata
    // for (let i = calldataOffsetCopy * 2n; i < 64n + calldataSizeCopy * 2n; i += 2n) {
    for (let i = calldataOffsetCopy * 2n; i < 64n + calldataOffsetCopy * 2n; i += 2n) {
        if (tx.data[Number(i + 1n)] != undefined) {
            value = (value << 8n) | BigInt("0x" + tx.data[Number(i)] + tx.data[Number(i + 1n)]);
        }
        else {
            value = (value << 8n) | BigInt("0x" + 0);
        }
    }

    //  let value1: string = value.toString(16);
    //  while (value1.length != 64) {
    //      value1 = value1 + '0';
    //  }
    //console.log('load value - ' + value.toString(16))
    // memory.store(memoryOffsetRead, value, calldataSizeCopy);
    memory.store(memoryOffsetRead, value, 32n);
    stack.shift();
    stack.shift();
    stack.shift();
    // stack.unshift(BigInt(value));
    return stack;
}