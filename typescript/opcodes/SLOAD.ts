import EVMStorage from "../storage";
import { txType } from "../transaction";

export function SLOAD(evmStorage: EVMStorage, stack: bigint[], tx: txType) {
    let storageSlot = stack[0];
    let result = evmStorage.sload(tx.to, Number(storageSlot));
    stack.shift();
    stack.unshift(result);
}