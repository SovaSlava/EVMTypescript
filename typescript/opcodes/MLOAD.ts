import type Memory from "../memory";
export function MLOAD(memory: Memory, stack: bigint[]): bigint[] {
    const offset: bigint = stack[0];
    let result = memory.load(offset);

    // const argSize = opcode - 0x60 + 1;
    // const argSliceArr = code.slice(pc + 1, pc + 1 + argSize);
    // let Buf = Buffer.from(argSliceArr);
    //stack.unshift(BigInt('0x' + Buf.toString('hex')));
    stack.unshift(result)
    return stack;
}