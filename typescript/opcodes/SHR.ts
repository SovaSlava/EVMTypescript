export function SHR(stack: bigint[]): bigint[] {
    let max = BigInt(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)
    let shr: bigint;
    if (stack[0] > 0xff) {
        shr = BigInt(0);
    }
    else {
        shr = (stack[1] >> stack[0]) % max;
    }
    stack.shift();
    stack.shift();
    stack.unshift(shr);
    return stack;
}