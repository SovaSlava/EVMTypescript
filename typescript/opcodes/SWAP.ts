export function SWAP(opcode: number, stack: bigint[]): bigint[] {
    const swapOpcode: number = opcode - 0x90 + 1;
    [stack[0], stack[swapOpcode]] = [stack[swapOpcode], stack[0]]
    return stack;
}