export function ISZERO(stack: bigint[]): bigint[] {
    let iszero: bigint;
    if (stack[0] == BigInt(0)) {
        iszero = BigInt(1);
    }
    else {
        iszero = BigInt(0);
    }
    stack.shift();
    stack.push(iszero);
    return stack;
}