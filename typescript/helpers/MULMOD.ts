export function MULMOD(stack: bigint[]): bigint[] {
    let mul: bigint;
    if (stack[2] == BigInt(0) || stack[1] == BigInt(0) || stack[0] == BigInt(0)) {
        mul = BigInt(0)
    }
    else {
        mul = (stack[0] * stack[1]) % stack[2];
    }
    stack.shift();
    stack.shift();
    stack.shift();
    stack.push(mul);
    return stack;
}