export function EQ(stack: bigint[]): bigint[] {
    let eq: bigint;
    if (stack[0] == stack[1]) {
        eq = BigInt(1);
    }
    else {
        eq = BigInt(0);
    }
    stack.shift();
    stack.shift();
    stack.unshift(eq);
    return stack;
}