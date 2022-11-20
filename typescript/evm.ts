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
import * as helpers from "./helpers/opcodes"
export default function evm(code: Uint8Array) {
  let pc = 0;
  let stack: bigint[] = [];
  while (pc < code.length) {
    const opcode = code[pc];
    let argSize: number = 0;
    // PUSHXX

    switch (opcode) {
      case 0x00: pc = helpers.STOP(pc, code); break;
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
      case 0x7F: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x50: stack = helpers.POP(stack); break;
      case 0x01: stack = helpers.ADD(stack); break;
      case 0x02: stack = helpers.MUL(stack); break;
      case 0x03: stack = helpers.SUB(stack); break;
      case 0x04: stack = helpers.DIV(stack); break;
      case 0x06: stack = helpers.MOD(stack); break;
      case 0x08: stack = helpers.ADDMOD(stack); break;
      case 0x09: stack = helpers.MULMOD(stack); break;
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
