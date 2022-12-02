export function SLT(stack: bigint[]): bigint[] {
    let slt: bigint;
    const size0: number = Math.ceil(stack[0].toString(2).length / 8) * 8;
    const size1: number = Math.ceil(stack[1].toString(2).length / 8) * 8;
    const value0: bigint = BigInt.asIntN(size0, BigInt(stack[0]));
    const value1: bigint = BigInt.asIntN(size1, BigInt(stack[1]));
    if (value0 < value1) {
        slt = BigInt(1);
    }
    else {
        slt = BigInt(0);
    }
    stack.shift();
    stack.shift();
    stack.unshift(slt);
    return stack;
}