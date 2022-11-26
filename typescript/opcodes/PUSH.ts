export function PUSH(opcode: number, pc: number, code: Uint8Array, stack: bigint[]): [number, bigint[]] {
    const argSize = opcode - 0x60 + 1;
    const argSliceArr = code.slice(pc + 1, pc + 1 + argSize);
    let Buf = Buffer.from(argSliceArr);
    stack.unshift(BigInt('0x' + Buf.toString('hex')));
    return [argSize, stack];
}