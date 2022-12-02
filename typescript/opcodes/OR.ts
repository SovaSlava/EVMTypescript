export function OR(stack: bigint[]): bigint[] {
    const or: bigint = stack[0] | stack[1];
    stack.shift();
    stack.shift();
    stack.unshift(or);
    return stack;
}