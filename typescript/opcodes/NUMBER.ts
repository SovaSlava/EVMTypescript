import type { blockType } from "../block"
export function NUMBER(block: blockType, stack: bigint[]): bigint[] {
    stack.unshift(BigInt(block.number));
    return stack;
}