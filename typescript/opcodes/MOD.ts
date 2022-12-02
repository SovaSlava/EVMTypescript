export function MOD(stack: bigint[]): bigint[] {
    let mod: bigint;
    if (stack[1] == BigInt(0)) {
        mod = BigInt(0);
    }
    else {
        mod = stack[0] % stack[1]
    }
    stack.shift();
    stack.shift();
    stack.unshift(mod);
    return stack;
}