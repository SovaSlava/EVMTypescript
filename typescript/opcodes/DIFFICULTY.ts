import type { blockType } from "../block"
export function DIFFICULTY(block: blockType, stack: bigint[]): bigint[] {
    stack.unshift(BigInt(block.difficulty));
    return stack;
}