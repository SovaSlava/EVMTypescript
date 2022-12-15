export function BALANCE(state, stack: bigint[]): bigint[] {
    let balance: bigint;
    if (state === undefined || !state.hasOwnProperty('0x' + stack[0].toString(16))) {
        balance = 0n;
    }
    else {
        balance = (state['0x' + stack[0].toString(16)]).balance;
    }
    stack.shift();
    stack.unshift(BigInt(balance));
    return stack;
}