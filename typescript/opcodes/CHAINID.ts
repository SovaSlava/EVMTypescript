import type { blockType } from "../block"
export function CHAINID(block: blockType, stack: bigint[]): bigint[] {
    stack.unshift(BigInt(block.chainid));
    return stack;
}