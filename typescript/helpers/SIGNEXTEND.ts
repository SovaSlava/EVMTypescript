export function SIGNEXTEND(stack: bigint[]): bigint[] {
    let signextend: bigint;
    let signedN = BigInt.asIntN(8, BigInt(stack[1]));
    let sign = Math.sign(Number(signedN.toString().slice(0, 2))) == -1 ? 1 : 0;
    let m = 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff;
    let o = 0x0000000000000000000000000000000000000000000000000000000000000000;
    let res;
    if (sign == 1) {
        let res1 = (BigInt(m) << BigInt(8) | stack[1]).toString(16);
        //res = res1.slice(res1.length - 32, res1.length)
    }
    else {
        res = BigInt(o) | stack[1];
    }
    console.log(Math.sign(sign))
    console.log('res - ' + res.toString(16))
    stack.shift();
    stack.shift();
    stack.push(res);
    return stack;
}