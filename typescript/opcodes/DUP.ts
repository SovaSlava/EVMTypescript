export function DUP(opcode: number, stack: bigint[]): bigint[] {
    const dupOpcode = opcode - 0x80;
    stack.unshift(stack[dupOpcode]);
    return stack;
}