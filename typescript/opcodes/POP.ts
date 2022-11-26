export function POP(stack: bigint[]): bigint[] {
    stack.shift();
    return stack;
}