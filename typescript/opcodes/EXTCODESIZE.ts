import { stateType } from "../state";
export function EXTCODESIZE(stack: bigint[], state): bigint[] {
    const address = '0x' + stack[0].toString(16);
    stack.shift();
    if (state !== undefined) {
    }
    if (state !== undefined && address in state) {
        stack.unshift(BigInt(state[address].code.bin.length / 2));
    }
    else {
        stack.unshift(0n);
    }
    return stack;
}