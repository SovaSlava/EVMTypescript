import type { blockType } from "../block"
export function COINBASE(block: blockType, stack: bigint[]): bigint[] {
    stack.unshift(BigInt(block.coinbase));
    return stack;
}