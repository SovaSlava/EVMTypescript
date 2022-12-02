export function DIV(stack: bigint[]): bigint[] {
    let div: bigint;
    if (stack[1] == BigInt(0)) {
        div = BigInt(0);
    }
    else {
        div = stack[0] / stack[1];
        if (div < 0) {
            div = BigInt(0);
        }
    }
    stack.shift();
    stack.shift();
    stack.unshift(div);
    return stack;
}