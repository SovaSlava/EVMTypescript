import { blockType } from "../block";
import evm from "../evm"
import { hexStringToUint8Array } from "../evm.test"
import Memory from "../memory";
import { txType } from "../transaction";
import { INVALID } from "./INVALID";
export function CALL(stack: bigint[], state, tx: txType, block: blockType, memory: Memory): [bigint[], Memory] {
    const address = '0x' + stack[1].toString(16);
    let code: Uint8Array;
    if (state !== undefined && address.toString() in state) {
        code = hexStringToUint8Array(state[address.toString()].code.bin);

        const callResult = evm(code, tx, block, state)
        memory.store(stack[5], BigInt('0x' + callResult.return), stack[6])
        stack.shift();
        stack.shift();
        stack.shift();
        stack.shift();
        stack.shift();
        stack.shift();
        stack.shift();
        stack.unshift(1n)
        return [stack, memory];
    }
    else {
        return [stack, memory];
    }
}