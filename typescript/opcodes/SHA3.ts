import { utils } from "ethers"
import { hexStringToUint8Array } from "../evm.test"
import type Memory from "../memory";
export function SHA3(memory: Memory, stack: bigint[]): bigint[] {
    let data: bigint = memory.load(stack[0], stack[1])
    let result: string = utils.keccak256(hexStringToUint8Array(data.toString(16)))

    stack.shift();
    stack.shift();
    stack.unshift(BigInt(result));
    return stack;
}