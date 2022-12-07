import type { blockType } from "../block"
export function GASLIMIT(block: blockType, stack: bigint[]): bigint[] {
    stack.unshift(BigInt(block.gaslimit));
    return stack;
}