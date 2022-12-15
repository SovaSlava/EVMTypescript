import type Memory from "../memory";
export function CODECOPY(memory: Memory, code: Uint8Array, stack: bigint[]): bigint[] {

    let memoryOffsetStore = stack[0];
    let codeOffsetCopy = stack[1];
    let codeSizeCopy = stack[2];

    let value = 0n;
    let copySize: bigint;
    if (codeSizeCopy < 32n) {
        copySize = 32n
    }
    else {
        copySize = codeSizeCopy;
    }
    for (let i = codeOffsetCopy; i < copySize + codeOffsetCopy; i += 1n) {
        if (i < code.length && i < codeOffsetCopy + codeSizeCopy) {
            value = (value << 8n) | BigInt(code[Number(i)]);
        }
        else {
            value = (value << 8n) | BigInt(0);
        }
    }
    memory.store(memoryOffsetStore, value, 32n);
    stack.shift();
    stack.shift();
    stack.shift();
    return stack;
}