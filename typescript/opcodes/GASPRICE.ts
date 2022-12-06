import type { txType } from "../transaction"
export function GASPRICE(tx: txType, stack: bigint[]): bigint[] {
    stack.unshift(BigInt(tx.gasprice));
    return stack;
}