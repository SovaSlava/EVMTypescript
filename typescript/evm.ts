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

export default function evm(code: Uint8Array) {
  let pc = 0;
  let stack: any = [];
  while (pc < code.length) {
    const opcode = code[pc];
    let argSize: number = 0;
    // PUSHXX
    if (opcode >= 0x60 && opcode <= 0x7F) {
      argSize = opcode - 0x60 + 1;
      const argSliceArr = code.slice(pc + 1, pc + 1 + argSize);
      const argArr = argSliceArr.filter(function (el) { if (el != 0) return el; })
      let hiBuf = Buffer.from(argArr);

      stack.push(BigInt('0x' + hiBuf.toString('hex')));

    }

    if (opcode == 0x00) {
      break;
    }

    if (argSize == 0) {
      pc++
    }
    else {
      pc += argSize + 1;
    }

  }

  return { success: true, stack };
}
