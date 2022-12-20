import EVMStorage from "../storage";
import { txType } from "../transaction";

export function SSTORE(evmStorage: EVMStorage, stack: bigint[], tx: txType) {
    let storageSlot = stack[0];
    let data = stack[1];
    evmStorage.store(tx.to, Number(storageSlot), data);
    stack.shift();
    stack.shift();
}