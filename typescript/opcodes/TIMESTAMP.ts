import type { blockType } from "../block"
export function TIMESTAMP(block: blockType, stack: bigint[]): bigint[] {
    stack.unshift(BigInt(block.timestamp));
    return stack;
}