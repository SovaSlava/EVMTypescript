export function POP(stack: bigint[]) {
    stack.shift();
    return stack;
}