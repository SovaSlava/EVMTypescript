import type { txType } from "../transaction"
export function CALLDATASIZE(tx: txType, stack: bigint[]): bigint[] {

    let result: bigint;
    if (tx?.data) {
        result = BigInt(tx.data.length / 2)
    }
    else {
        result = BigInt(0x0)
    }
    stack.shift();
    stack.unshift(result);
    return stack;
}