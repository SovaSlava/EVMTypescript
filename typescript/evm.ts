/**
 * EVM From Scratch
 * TypeScript template
 *
 * To work on EVM From Scratch in TypeScript:
 *
 * - Install Node.js: https://nodejs.org/en/download/
 * - Go to the `typescript` directory: `cd typescript`
 * - Install dependencies: `yarn` (or `npm install`)
 * - Edit `evm.ts` (this file!), see TODO below
 * - Run `yarn test` (or `npm test`) to run the tests
 * - Use Jest Watch Mode to run tests when files change: `yarn test --watchAll`
 */
import * as opcodes from "./opcodes/index"
export default function evm(code: Uint8Array) {
  let pc = 0;
  let stack: bigint[] = [];
  while (pc < code.length) {
    const opcode = code[pc];
    let argSize: number = 0;
    // PUSHXX

    switch (opcode) {
      case 0x00: pc = opcodes.STOP(pc, code); break;
      case 0x60:
      case 0x61:
      case 0x62:
      case 0x63:
      case 0x64:
      case 0x65:
      case 0x66:
      case 0x67:
      case 0x68:
      case 0x69:
      case 0x6A:
      case 0x6B:
      case 0x6C:
      case 0x6D:
      case 0x6E:
      case 0x6F:
      case 0x70:
      case 0x71:
      case 0x72:
      case 0x73:
      case 0x74:
      case 0x75:
      case 0x76:
      case 0x77:
      case 0x78:
      case 0x79:
      case 0x7A:
      case 0x7B:
      case 0x7C:
      case 0x7D:
      case 0x7E:
      case 0x7F: [argSize, stack] = opcodes.PUSH(opcode, pc, code, stack); break;
      case 0x50: stack = opcodes.POP(stack); break;
      case 0x01: stack = opcodes.ADD(stack); break;
      case 0x02: stack = opcodes.MUL(stack); break;
      case 0x03: stack = opcodes.SUB(stack); break;
      case 0x04: stack = opcodes.DIV(stack); break;
      case 0x06: stack = opcodes.MOD(stack); break;
      case 0x08: stack = opcodes.ADDMOD(stack); break;
      case 0x09: stack = opcodes.MULMOD(stack); break;
      case 0x0a: stack = opcodes.EXP(stack); break;
      case 0x0b: stack = opcodes.SIGNEXTEND(stack); break;
      case 0x05: stack = opcodes.SDIV(stack); break;
      case 0x07: stack = opcodes.SMOD(stack); break;
      case 0x07: stack = opcodes.SMOD(stack); break;
      case 0x10: stack = opcodes.LT(stack); break;
      case 0x11: stack = opcodes.GT(stack); break;
      case 0x12: stack = opcodes.SLT(stack); break;
      case 0x13: stack = opcodes.SGT(stack); break;
      case 0x14: stack = opcodes.EQ(stack); break;
      case 0x15: stack = opcodes.ISZERO(stack); break;
      case 0x16: stack = opcodes.AND(stack); break;
      case 0x17: stack = opcodes.OR(stack); break;
      case 0x18: stack = opcodes.XOR(stack); break;
      case 0x19: stack = opcodes.NOT(stack); break;
      case 0x1b: stack = opcodes.SHL(stack); break;
      case 0x1c: stack = opcodes.SHR(stack); break;
      case 0x1d: stack = opcodes.SAR(stack); break;
    }





    if (argSize == 0) {
      pc++
    }
    else {
      pc += argSize + 1;
    }
    // console.log('now stack - ' + stack.toString())
  }

  return { success: true, stack };
}
