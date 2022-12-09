import type { txType } from "../transaction"
export function CALLVALUE(tx: txType, stack: bigint[]): bigint[] {
    stack.unshift(BigInt(tx.value));
    return stack;
}