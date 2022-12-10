import type { txType } from "../transaction"
export function CALLDATALOAD(tx: txType, stack: bigint[]): bigint[] {

    let value = 0n;
    for (let i = stack[0] * 2n; i < 64n; i = i + 2n) {
        value = (value << 8n) | BigInt("0x" + tx.data[Number(i)] + tx.data[Number(i + 1n)]);

    }
    let value1 = value.toString(16)
    console.log('v1 length - ' + value1.length)
    if (stack[0] != 0n) {
        while (value1.length != 64) {
            value1 = value1 + '0';
        }
    }
    value = BigInt('0x' + value1)

    stack.shift();
    stack.unshift(BigInt(value));
    return stack;
}