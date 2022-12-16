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
import Memory from './memory'
import type { txType } from "./transaction"
import type { blockType } from "./block"
import EVMStorage from "./storage"
import type { stateType } from "./state"
export default function evm(code: Uint8Array, tx: txType, block: blockType, state: stateType) {
  let pc: number = 0;
  let stack: bigint[] = [];
  let memory: Memory = new Memory();
  let success: boolean = true;
  let evmStorage: EVMStorage = new EVMStorage();
  const selfAddress: string = "0x1e79b045dc29eae9fdc69673c9dcd7c53e5e159d";
  while (pc < code.length) {
    const opcode = code[pc];
    let argSize: number = 0;

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
      case 0x1a: stack = opcodes.BYTE(stack); break;
      case 0x1b: stack = opcodes.SHL(stack); break;
      case 0x1c: stack = opcodes.SHR(stack); break;
      case 0x1d: stack = opcodes.SAR(stack); break;
      case 0x80:
      case 0x81:
      case 0x82:
      case 0x83:
      case 0x84:
      case 0x85:
      case 0x86:
      case 0x87:
      case 0x88:
      case 0x89:
      case 0x8A:
      case 0x8B:
      case 0x8C:
      case 0x8D:
      case 0x8E:
      case 0x8F: stack = opcodes.DUP(opcode, stack); break;
      case 0x90:
      case 0x91:
      case 0x92:
      case 0x93:
      case 0x94:
      case 0x95:
      case 0x96:
      case 0x97:
      case 0x98:
      case 0x99:
      case 0x90:
      case 0x9A:
      case 0x9B:
      case 0x9C:
      case 0x9D:
      case 0x9E:
      case 0x9F: stack = opcodes.SWAP(opcode, stack); break;
      case 0xFE: success = opcodes.INVALID(); break;
      case 0x58: stack = opcodes.PC(pc, stack); break;
      case 0x5A: stack = opcodes.GAS(stack); break;
      case 0x56: [pc, stack, success] = opcodes.JUMP(pc, stack, code); break;
      case 0x57: [pc, stack, success] = opcodes.JUMPI(pc, stack, code); break;
      case 0x5B: opcodes.JUMPDEST(); break;
      case 0x51: stack = opcodes.MLOAD(memory, stack); break;
      case 0x52: stack = opcodes.MSTORE(memory, stack); break;
      case 0x53: stack = opcodes.MSTORE8(memory, stack); break;
      case 0x59: stack = opcodes.MSIZE(memory, stack); break;
      case 0x20: stack = opcodes.SHA3(memory, stack); break;
      case 0x30: stack = opcodes.ADDRESS(tx, stack); break;
      case 0x33: stack = opcodes.CALLER(tx, stack); break;
      case 0x32: stack = opcodes.ORIGIN(tx, stack); break;
      case 0x3a: stack = opcodes.GASPRICE(tx, stack); break;
      case 0x48: stack = opcodes.BASEFEE(block, stack); break;
      case 0x41: stack = opcodes.COINBASE(block, stack); break;
      case 0x42: stack = opcodes.TIMESTAMP(block, stack); break;
      case 0x43: stack = opcodes.NUMBER(block, stack); break;
      case 0x44: stack = opcodes.DIFFICULTY(block, stack); break;
      case 0x45: stack = opcodes.GASLIMIT(block, stack); break;
      case 0x46: stack = opcodes.CHAINID(block, stack); break;
      case 0x31: stack = opcodes.BALANCE(state, stack); break;
      case 0x34: stack = opcodes.CALLVALUE(tx, stack); break;
      case 0x35: stack = opcodes.CALLDATALOAD(tx, stack); break;
      case 0x36: stack = opcodes.CALLDATASIZE(tx, stack); break;
      case 0x37: stack = opcodes.CALLDATACOPY(memory, tx, stack); break;
      case 0x38: stack = opcodes.CODESIZE(code, stack); break;
      case 0x39: stack = opcodes.CODECOPY(memory, code, stack); break;
      case 0x3b: stack = opcodes.EXTCODESIZE(stack, state); break;
      case 0x3c: memory = opcodes.EXTCODECOPY(stack, state, memory); break;
      case 0x3f: stack = opcodes.EXTCODEHASH(stack, state); break;
      case 0x47: stack = opcodes.SELFBALANCE(state, stack, tx); break;
      case 0x55: opcodes.SSTORE(evmStorage, stack, selfAddress); break;
      case 0x54: opcodes.SLOAD(evmStorage, stack, selfAddress); break;
    }





    if (argSize == 0) {
      pc++
    }
    else {
      pc += argSize + 1;
    }
    // console.log('now stack - ' + stack.toString())
  }
  return { success: success, stack };
}
