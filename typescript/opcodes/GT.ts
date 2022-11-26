export function GT(stack: bigint[]): bigint[] {
    let gt: bigint;
    if (stack[0] > stack[1]) {
        gt = BigInt(1);
    }
    else {
        gt = BigInt(0);
    }
    stack.shift();
    stack.shift();
    stack.push(gt);
    return stack;
}