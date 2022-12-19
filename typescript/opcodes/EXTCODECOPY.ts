import type Memory from "../memory";
export function EXTCODECOPY(stack: bigint[], state, memory: Memory) {
    const address = '0x' + stack[0].toString(16);
    let memoryOffset = stack[1];
    let codeOffsetCopy = stack[2];
    let codeSizeCopy = stack[3];
    stack.shift();
    stack.shift();
    stack.shift();
    stack.shift();

    let code: Uint8Array;

    if (state !== undefined && address in state) {
        code = state[address].code.bin;
    }
    else {
        code = new Uint8Array();
    }
    let value = 0n;
    let copySize: bigint;
    if (codeSizeCopy < 32n) {
        copySize = 32n
    }
    else {
        copySize = codeSizeCopy;
    }
    for (let i = codeOffsetCopy; i < copySize * 2n + codeOffsetCopy; i += 2n) {
        if (i < code.length && i < codeOffsetCopy + codeSizeCopy) {
            value = (value << 8n) | BigInt('0x' + code[Number(i)] + code[Number(i + 1n)]);
        }
        else {
            value = (value << 8n) | BigInt(0);
        }
    }

    memory.store(memoryOffset, value, copySize);


}