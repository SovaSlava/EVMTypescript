export function LT(stack: bigint[]): bigint[] {
    let lt: bigint;
    if (stack[0] < stack[1]) {
        lt = BigInt(1);
    }
    else {
        lt = BigInt(0);
    }
    stack.shift();
    stack.shift();
    stack.unshift(lt);
    return stack;
}