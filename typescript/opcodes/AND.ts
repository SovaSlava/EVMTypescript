export function AND(stack: bigint[]): bigint[] {
    let and: bigint;
    and = stack[0] & stack[1];
    stack.shift();
    stack.shift();
    stack.push(and);
    return stack;
}