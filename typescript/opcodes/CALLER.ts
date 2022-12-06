import type { txType } from "../transaction"
export function CALLER(tx: txType, stack: bigint[]): bigint[] {
    stack.unshift(BigInt(tx.from));
    return stack;
}