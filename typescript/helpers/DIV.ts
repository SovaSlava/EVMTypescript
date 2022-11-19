export function DIV(stack: bigint[]): bigint[] {
    const stackLength: number = stack.length;
    let div: bigint;
    if (stack[stackLength - 1] == BigInt(0)) {
        div = BigInt(0);
    }
    else {
        div = stack[0] / stack[stackLength - 1];
        if (div < 0) {
            div = BigInt(0);
        }
    }
    stack.shift();
    stack.shift();
    stack.push(div);
    return stack;
}