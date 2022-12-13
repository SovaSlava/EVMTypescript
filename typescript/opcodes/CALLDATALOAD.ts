import type { txType } from "../transaction"
export function CALLDATALOAD(tx: txType, stack: bigint[]): bigint[] {

    let value = 0n;

    for (let i = stack[0] * 2n; i < 64n + stack[0] * 2n; i = i + 2n) {
        if (tx.data[Number(i + 1n)] != undefined) {
            value = (value << 8n) | BigInt("0x" + tx.data[Number(i)] + tx.data[Number(i + 1n)]);
        }
        else {
            value = (value << 8n) | BigInt("0x" + 0);
        }
    }
    stack.shift();
    stack.unshift(BigInt(value));
    return stack;
}