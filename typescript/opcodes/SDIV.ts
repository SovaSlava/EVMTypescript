export function SDIV(stack: bigint[]): bigint[] {
    let sdiv: bigint;
    const size0: number = Math.ceil(stack[0].toString(2).length / 8) * 8;
    const size1: number = Math.ceil(stack[1].toString(2).length / 8) * 8;

    if (stack[1] == BigInt(0)) {
        sdiv = BigInt(0);
    }
    else {
        const value0: bigint = BigInt.asIntN(size0, BigInt(stack[0]));
        const value1: bigint = BigInt.asIntN(size1, BigInt(stack[1]));
        sdiv = value0 / value1;
        sdiv = size0 > size1 ? BigInt.asUintN(size0, sdiv) : BigInt.asUintN(size1, sdiv)
    }
    stack.shift();
    stack.shift();
    stack.unshift(sdiv);
    return stack;
}