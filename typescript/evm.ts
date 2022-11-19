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
      case 0x60: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x61: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x62: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x63: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x64: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x65: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x66: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x67: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x68: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x69: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x6A: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x6B: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x6C: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x6D: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x6E: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x6F: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x70: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x71: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x72: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x73: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x74: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x75: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x76: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x77: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x78: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x79: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x7A: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x7B: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x7C: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x7D: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x7E: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x7F: [argSize, stack] = helpers.PUSH(opcode, pc, code, stack); break;
      case 0x50: stack = helpers.POP(stack); break;
    }





    if (argSize == 0) {
      pc++
    }
    else {
      pc += argSize + 1;
    }
    console.log('now stack - ' + stack.toString())
  }

  return { success: true, stack };
}
