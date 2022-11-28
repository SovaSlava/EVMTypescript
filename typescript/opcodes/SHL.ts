export function SHL(stack: bigint[]): bigint[] {
    let max = BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)
    let shl: bigint;
    if (stack[0] > 0xff) {
        shl = BigInt(0);
    }
    else {
        shl = (stack[1] << stack[0]) % max;
    }
    stack.shift();
    stack.shift();
    stack.push(shl);
    return stack;
}