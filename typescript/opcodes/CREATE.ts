import type Memory from "../memory";
import type { txType } from "../transaction";
import type { stateType } from "../state";
import type { blockType } from "../block";
import evm from "../evm"
import { hexStringToUint8Array } from "../evm.test";
import { ethers } from "ethers";
export function CREATE(stack: bigint[], memory: Memory, tx: txType, block: blockType, state: stateType): [bigint[], typeof state] {
    let newBalance = stack[0];
    let newAddress = BigInt(ethers.utils.getContractAddress({ from: tx.to.toString(16), nonce: (state[tx.to.toString(16)]).nonce }));
    let memoryOffset = stack[1];
    let codeSize = stack[2];
    let returndata: string;
    if (codeSize != 0n) {
        const constructorCode = memory.load(memoryOffset, codeSize);
        tx.to = newAddress;
        const callResult = evm(hexStringToUint8Array(constructorCode.toString(16)), tx, block, state, true)
        if (callResult.success != false) {
            returndata = callResult.return;
            state['0x' + newAddress.toString(16)] = { "balance": newBalance, "nonce": 0n, "code": { "bin": returndata } }
        }
        else {
            newAddress = 0n;
        }
    }
    else {
        state['0x' + newAddress.toString(16)] = { "balance": newBalance, "nonce": 0n, "code": { "bin": '' } }
    }
    stack.shift();
    stack.shift();
    stack.shift();
    stack.unshift(newAddress)

    return [stack, state];
}