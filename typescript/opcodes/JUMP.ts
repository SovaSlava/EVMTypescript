export function JUMP(pc: number, stack: bigint[]): number {
    pc = Number(stack[0]);
    return pc;
}