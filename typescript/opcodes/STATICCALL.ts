import { blockType } from "../block";
import evm from "../evm"
import { hexStringToUint8Array } from "../evm.test"
import Memory from "../memory";
import { txType } from "../transaction";
export function STATICCALL(stack: bigint[], state, tx: txType, block: blockType, memory: Memory): [bigint[], bigint, bigint] {
    const address = '0x' + stack[1].toString(16);
    let code: Uint8Array;
    if (state !== undefined && address.toString() in state) {
        code = hexStringToUint8Array(state[address.toString()].code.bin);

        tx["from"] = tx.to;
        const callResult = evm(code, tx, block, state, false)
        let returndata: string = callResult.return;
        memory.store(stack[4], BigInt(`0x${callResult.return}`), stack[5])
        stack.shift();
        stack.shift();
        stack.shift();
        stack.shift();
        stack.shift();
        stack.shift();
        stack.shift();
        stack.unshift(BigInt(callResult.success))
        return [stack, BigInt(callResult.return.length), BigInt('0x' + returndata)];
    }
    else {
        return [stack, 0n, 0n];
    }
}