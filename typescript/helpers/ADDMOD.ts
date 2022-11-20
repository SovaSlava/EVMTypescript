export function ADDMOD(stack: bigint[]): bigint[] {
    let sum: bigint = stack[1] + stack[0];
    if (sum > BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)) {
        sum -= BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
    }
    let addmod: bigint;
    if (stack[2] == BigInt(0)) {
        addmod = BigInt(0);
    }
    else {
        addmod = sum % stack[2]
    }

    stack.shift();
    stack.shift();
    stack.shift();
    stack.push(addmod);
    return stack;
}