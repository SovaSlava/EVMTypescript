import EVMStorage from "../storage";

export function SSTORE(evmStorage: EVMStorage, stack: bigint[], selfAddress: string) {
    let storageSlot = stack[0];
    let data = stack[1];
    evmStorage.store(selfAddress, Number(storageSlot), data);
    stack.shift();
    stack.shift();
}