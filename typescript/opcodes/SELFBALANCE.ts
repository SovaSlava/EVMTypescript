import type { txType } from "../transaction"
export function SELFBALANCE(state, stack: bigint[], tx: txType): bigint[] {
    let balance: bigint;
    balance = (state[tx.to.toString()]).balance;
    stack.unshift(BigInt(balance));
    return stack;
}