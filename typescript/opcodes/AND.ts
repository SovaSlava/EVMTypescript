export function AND(stack: bigint[]): bigint[] {
    const and: bigint = stack[0] & stack[1];
    stack.shift();
    stack.shift();
    stack.push(and);
    return stack;
}