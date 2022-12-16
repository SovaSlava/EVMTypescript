import EVMStorage from "../storage";

export function SLOAD(evmStorage: EVMStorage, stack: bigint[], selfAddress: string) {
    let storageSlot = stack[0];
    let result = evmStorage.sload(selfAddress, Number(storageSlot));
    stack.shift();
    stack.shift();
    stack.unshift(result);
}