import { utils } from "ethers"
import { hexStringToUint8Array } from "../evm.test"
export function EXTCODEHASH(stack: bigint[], state): bigint[] {
    const address = '0x' + stack[0].toString(16);
    stack.shift();
    if (state !== undefined && address in state) {
        let hash = utils.keccak256(hexStringToUint8Array(state[address].code.bin))
        stack.unshift(BigInt(hash));
    }
    else {
        stack.unshift(0n);
    }
    return stack;
}