export function JUMPI(pc: number, stack: bigint[], code: Uint8Array): [number, bigint[], boolean] {
    let success: boolean = true;
    if (code[Number(stack[0])].toString(16) == '5b' && Number(stack[0]) < code.length) {
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
                pc = Number(stack[0]);
            }
            stack.shift();
            stack.shift();
        }
    }
    else {
        success = false;
    }
    if (success != true) {
        stack = []
        pc = code.length;
    }
    return [pc, stack, success];
}