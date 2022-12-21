import type Memory from "../memory";
import type { txType } from "../transaction";
import type { stateType } from "../state";
export function CREATE(stack: bigint[], memory: Memory, tx: txType, state: stateType = {}): [bigint[], typeof state] {
    let newBalance = stack[0];
    let newAddress = "0x";
    let contractState: stateType;

    state[newAddress] = { "balance": newBalance, "nonce": 0n, "code": new Uint8Array(0) }

    stack.shift();
    stack.shift();
    stack.shift();
    stack.unshift(newAddress)
    return [stack, state];
}