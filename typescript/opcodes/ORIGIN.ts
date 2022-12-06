import type { txType } from "../transaction"
export function ORIGIN(tx: txType, stack: bigint[]): bigint[] {
    stack.unshift(BigInt(tx.origin));
    return stack;
}