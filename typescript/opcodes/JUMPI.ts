export function JUMPI(pc: number, stack: bigint[], code: Uint8Array): [number, bigint[], boolean] {
    let success: boolean = true;
    if (code[Number(stack[0])].toString(16) == '5b' && Number(stack[0]) < code.length) {
        console.log('y');
        for (let i = Number(stack[0]) - 1; i >= 0; i--) {
            if (Number(code[i]) > 0x5F && Number(code[i]) < 0x80) {
                let argSize: number = Number(code[i]) - 0x60 + 1;
                if ((i + argSize) == Number(stack[0])) {
                    success = false;
                    break;
                }
            }
        }
        if (success) {
            if (stack[1] > 0) {
                console.log('b 0');
                pc = Number(stack[0]);
            }
        }
    }
    else {
        success = false;
    }
    if (success != true) {
        pc = code.length;
    }
    stack.shift();
    stack.shift();
    return [pc, stack, success];
}