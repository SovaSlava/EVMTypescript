import type { txType } from "../transaction"
export function ADDRESS(tx: txType, stack: bigint[]): bigint[] {
    stack.unshift(BigInt(tx.to));
    return stack;
}