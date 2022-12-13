import type { txType } from "../transaction"
export function CODESIZE(code: Uint8Array, stack: bigint[]): bigint[] {
    stack.unshift(BigInt(code.length));
    return stack;
}