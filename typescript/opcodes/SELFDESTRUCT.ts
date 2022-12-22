import { stateType } from "../state";
import { txType } from "../transaction";
export function SELFDESTRUCT(stack: bigint[], state: stateType, tx: txType): [bigint[], stateType] {
    const ourBalance: bigint = state['0x' + tx.to.toString(16)].balance;
    delete state['0x' + tx.to.toString(16)];
    state['0x' + tx.from.toString(16)].balance = BigInt(state['0x' + tx.from.toString(16)].balance) + BigInt(ourBalance);;
    return [stack, state];
}