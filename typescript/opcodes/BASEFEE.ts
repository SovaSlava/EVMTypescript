import type { blockType } from "../block"
export function BASEFEE(block: blockType, stack: bigint[]): bigint[] {
    stack.unshift(BigInt(block.basefee));
    return stack;
}