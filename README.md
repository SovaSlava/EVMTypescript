[
  {
    "name": "STOP",
    "hint": "",
    "code": {
      "asm": "STOP",
      "bin": "00"
    },
    "expect": {
      "success": true,
      "stack": []
    }
  },
  {
    "name": "PUSH",
    "hint": "Read \"Program Counter\" section of the course learning materials for an example on how to parse the bytecode",
    "code": {
      "asm": "PUSH1 1",
      "bin": "6001"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "PUSH2",
    "hint": "PUSH2 reads the next 2 bytes, don't forget to properly increment PC",
    "code": {
      "asm": "PUSH2 0x1122",
      "bin": "611122"
    },
    "expect": {
      "stack": [
        "0x1122"
      ],
      "success": true
    }
  },
  {
    "name": "PUSH4",
    "hint": "PUSH2 reads the next 4 bytes",
    "code": {
      "asm": "PUSH4 0x112233",
      "bin": "6300112233"
    },
    "expect": {
      "stack": [
        "0x112233"
      ],
      "success": true
    }
  },
  {
    "name": "PUSH6",
    "hint": "PUSH6 reads the next 6 bytes. Can you implement all PUSH1...PUSH32 using the same code?",
    "code": {
      "asm": "PUSH6 0x112233445566",
      "bin": "65112233445566"
    },
    "expect": {
      "stack": [
        "0x112233445566"
      ],
      "success": true
    }
  },
  {
    "name": "PUSH10",
    "hint": "SIZE = OPCODE - PUSH1 + 1, then transform take the next SIZE bytes, PC += SIZE",
    "code": {
      "asm": "PUSH10 0x112233445566778899aa",
      "bin": "69112233445566778899aa"
    },
    "expect": {
      "stack": [
        "0x112233445566778899aa"
      ],
      "success": true
    }
  },
  {
    "name": "PUSH11",
    "hint": "SIZE = OPCODE - PUSH1 + 1, program.slice(pc + 1, pc + 1 + size)",
    "code": {
      "asm": "PUSH11 0x112233445566778899aabb",
      "bin": "6a112233445566778899aabb"
    },
    "expect": {
      "stack": [
        "0x112233445566778899aabb"
      ],
      "success": true
    }
  },
  {
    "name": "PUSH32",
    "hint": "PUSH32 reads the next 32 bytes (256 bits)",
    "code": {
      "asm": "PUSH32 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      "bin": "7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    },
    "expect": {
      "stack": [
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      ],
      "success": true
    }
  },
  {
    "name": "PUSH (twice)",
    "hint": "Note the order of items on the stack. The tests expect the top of the stack to be the first element",
    "code": {
      "asm": "PUSH1 1\nPUSH1 2",
      "bin": "60016002"
    },
    "expect": {
      "stack": [
        "0x2",
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "POP",
    "hint": "POP removes the top item from the stack and discards it",
    "code": {
      "asm": "PUSH1 1\nPUSH1 2\nPOP",
      "bin": "6001600250"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "STOP (midway)",
    "hint": "Note that the `PUSH1 2` didn't execute because the program stops after STOP opcode",
    "code": {
      "asm": "PUSH1 1\nSTOP\nPUSH1 2",
      "bin": "6001006002"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "ADD",
    "hint": "ADD takes the first 2 items from the stack, adds them together and pushes the result",
    "code": {
      "asm": "PUSH1 0x01\nPUSH1 0x02\nADD",
      "bin": "6001600201"
    },
    "expect": {
      "stack": [
        "0x3"
      ],
      "success": true
    }
  },
  {
    "name": "ADD (overflow)",
    "hint": "EVM operates with uint256, if you add 2 to the max possible value it overflows and wraps around",
    "code": {
      "asm": "PUSH32 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nPUSH1 0x02\nADD",
      "bin": "7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600201"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "MUL",
    "code": {
      "asm": "PUSH1 0x02\nPUSH1 0x03\nMUL",
      "bin": "6002600302"
    },
    "expect": {
      "stack": [
        "0x6"
      ],
      "success": true
    },
    "hint": ""
  },
  {
    "name": "MUL (overflow)",
    "hint": "All math is performed with implicit [mod 2^256]",
    "code": {
      "asm": "PUSH32 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nPUSH1 0x02\nMUL",
      "bin": "7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600202"
    },
    "expect": {
      "stack": [
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe"
      ],
      "success": true
    }
  },
  {
    "name": "SUB",
    "hint": "SUB takes the first element from the stack and subtracts the second element from the stack",
    "code": {
      "asm": "PUSH1 0x02\nPUSH1 0x03\nSUB",
      "bin": "6002600303"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "SUB (underflow)",
    "hint": "Underflow works the same way as overflow, 3 - 2 wraps around and results in MAX_UINT256",
    "code": {
      "asm": "PUSH1 0x03\nPUSH1 0x02\nSUB",
      "bin": "6003600203"
    },
    "expect": {
      "stack": [
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      ],
      "success": true
    }
  },
  {
    "name": "DIV",
    "hint": "DIV takes the first element from the stack and divides it by the second element from the stack",
    "code": {
      "asm": "PUSH1 0x02\nPUSH1 0x06\nDIV",
      "bin": "6002600604"
    },
    "expect": {
      "stack": [
        "0x3"
      ],
      "success": true
    }
  },
  {
    "name": "DIV (whole)",
    "hint": "Fraction part of the division is discarded",
    "code": {
      "asm": "PUSH1 0x06\nPUSH1 0x02\nDIV",
      "bin": "6006600204"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "DIV (by zero)",
    "hint": "In EVM you can divide by zero! Modern Solidity protects from this by adding instructions that check for zero",
    "code": {
      "asm": "PUSH1 0x00\nPUSH1 0x02\nDIV",
      "bin": "6000600204"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "MOD",
    "hint": "10 mod 3 = 1",
    "code": {
      "asm": "PUSH1 3\nPUSH1 10\nMOD",
      "bin": "6003600a06"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "MOD (by larger number)",
    "hint": "5 mod 17 = 5",
    "code": {
      "asm": "PUSH1 17\nPUSH1 5\nMOD",
      "bin": "6011600506"
    },
    "expect": {
      "stack": [
        "0x5"
      ],
      "success": true
    }
  },
  {
    "name": "MOD (by zero)",
    "hint": "In EVM you can divide by zero! Modern Solidity protects from this by adding instructions that check for zero",
    "code": {
      "asm": "PUSH1 0\nPUSH1 2\nMOD",
      "bin": "6000600206"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "ADDMOD",
    "hint": "10 + 10 mod 8 = 4",
    "code": {
      "asm": "PUSH1 8\nPUSH1 10\nPUSH1 10\nADDMOD",
      "bin": "6008600a600a08"
    },
    "expect": {
      "stack": [
        "0x4"
      ],
      "success": true
    }
  },
  {
    "name": "ADDMOD (wrapped)",
    "code": {
      "asm": "PUSH1 2\nPUSH1 2\nPUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\nADDMOD",
      "bin": "600260027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff08"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    },
    "hint": ""
  },
  {
    "name": "MULMOD",
    "hint": "10 * 10 mod 8 = 4",
    "code": {
      "asm": "PUSH1 8\nPUSH1 10\nPUSH1 10\nMULMOD",
      "bin": "6008600a600a09"
    },
    "expect": {
      "stack": [
        "0x4"
      ],
      "success": true
    }
  },
  {
    "name": "MULMOD (wrapped)",
    "code": {
      "asm": "PUSH1 12\nPUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\nPUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\nMULMOD",
      "bin": "600c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff09"
    },
    "expect": {
      "stack": [
        "0x9"
      ],
      "success": true
    },
    "hint": ""
  },
  {
    "name": "EXP",
    "code": {
      "asm": "PUSH1 2\nPUSH1 10\nEXP",
      "bin": "6002600a0a"
    },
    "expect": {
      "stack": [
        "0x64"
      ],
      "success": true
    },
    "hint": ""
  },
  {
    "name": "SIGNEXTEND (positive)",
    "hint": "Read \"Negative Numbers\" section of the course learning materials. SIGNEXTEND has no effect on \"positive\" numbers",
    "code": {
      "asm": "PUSH1 0x7F\nPUSH1 0\nSIGNEXTEND",
      "bin": "607f60000b"
    },
    "expect": {
      "stack": [
        "0x7f"
      ],
      "success": true
    }
  },
  {
    "name": "SIGNEXTEND (negative)",
    "hint": "Read \"Negative Numbers\" section of the course learning materials. The first bit of 0xFF is 1, so it is a negative number and needs to be padded by 1s in front",
    "code": {
      "asm": "PUSH1 0xFF\nPUSH1 0\nSIGNEXTEND",
      "bin": "60ff60000b"
    },
    "expect": {
      "stack": [
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      ],
      "success": true
    }
  },
  {
    "name": "SDIV",
    "hint": "Read \"Negative Numbers\" section of the course learning materials. SDIV works like DIV for \"positive\" numbers",
    "code": {
      "asm": "PUSH1 10\nPUSH1 10\nSDIV",
      "bin": "600a600a05"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "SDIV (negative)",
    "hint": "Read \"Negative Numbers\" section of the course learning materials. -2 / -1 = 2",
    "code": {
      "asm": "PUSH32 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nPUSH32 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe\nSDIV",
      "bin": "7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe05"
    },
    "expect": {
      "stack": [
        "0x2"
      ],
      "success": true
    }
  },
  {
    "name": "SDIV (mix of negative and positive)",
    "hint": "Read \"Negative Numbers\" section of the course learning materials. 10 / -2 = -5",
    "code": {
      "asm": "PUSH32 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe\nPUSH1 10\nSDIV",
      "bin": "7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe600a05"
    },
    "expect": {
      "stack": [
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb"
      ],
      "success": true
    }
  },
  {
    "name": "SMOD",
    "hint": "Read \"Negative Numbers\" section of the course learning materials. SMOD works like MOD for \"positive\" numbers",
    "code": {
      "asm": "PUSH1 3\nPUSH1 10\nSMOD",
      "bin": "6003600a07"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "SMOD (negative)",
    "hint": "Read \"Negative Numbers\" section of the course learning materials. -10 mod -3 = -1",
    "code": {
      "asm": "PUSH32 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd\nPUSH32 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8\nSMOD",
      "bin": "7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff807"
    },
    "expect": {
      "stack": [
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe"
      ],
      "success": true
    }
  },
  {
    "name": "SDIV (by zero)",
    "hint": "In EVM you can divide by zero",
    "code": {
      "asm": "PUSH1 0x00\nPUSH32 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd\nSDIV",
      "bin": "60007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd05"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "SMOD (by zero)",
    "hint": "In EVM you can divide by zero",
    "code": {
      "asm": "PUSH1 0x00\nPUSH32 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd\nSMOD",
      "bin": "60007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd07"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "LT",
    "hint": "9 < 10 = true (1)",
    "code": {
      "asm": "PUSH1 10\nPUSH1 9\nLT",
      "bin": "600a600910"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "LT (equal)",
    "hint": "10 < 10 = false (0)",
    "code": {
      "asm": "PUSH1 10\nPUSH1 10\nLT",
      "bin": "600a600a10"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "LT (greater)",
    "hint": "11 < 10 = false (0)",
    "code": {
      "asm": "PUSH1 10\nPUSH1 11\nLT",
      "bin": "600a600b10"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "GT",
    "hint": "10 > 9 = true (1)",
    "code": {
      "asm": "PUSH1 9\nPUSH1 10\nGT",
      "bin": "6009600a11"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "GT (equal)",
    "hint": "10 > 10 = false (0)",
    "code": {
      "asm": "PUSH1 10\nPUSH1 10\nGT",
      "bin": "600a600a11"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "GT (less)",
    "hint": "10 > 11 = false (0)",
    "code": {
      "asm": "PUSH1 11\nPUSH1 10\nGT",
      "bin": "600b600a11"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "SLT",
    "hint": "Same as LT but treats arguments as signed numbers. -1 < 0 = true (1)",
    "code": {
      "asm": "PUSH1 0\nPUSH32 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nSLT",
      "bin": "60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff12"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "SLT (equal)",
    "hint": "Same as LT but treats arguments as signed numbers. -1 < -1 = false (0)",
    "code": {
      "asm": "PUSH32 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nPUSH32 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nSLT",
      "bin": "7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff12"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "SLT (greater)",
    "hint": "Same as LT but treats arguments as signed numbers. -1 < -1 = false (0)",
    "code": {
      "asm": "PUSH32 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nPUSH1 0\nSLT",
      "bin": "7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600012"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "SGT",
    "hint": "Same as GT but treats arguments as signed numbers. No effect on \"positive\" numbers: 10 > 9 = true (1)",
    "code": {
      "asm": "PUSH1 9\nPUSH1 10\nSGT",
      "bin": "6009600a13"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "SGT (equal)",
    "hint": "Same as GT but treats arguments as signed numbers. -2 > -2 = false (0)",
    "code": {
      "asm": "PUSH32 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe\nPUSH32 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe\nSGT",
      "bin": "7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe13"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "SGT (greater)",
    "hint": "Same as GT but treats arguments as signed numbers. -2 > -3 = true (1)",
    "code": {
      "asm": "PUSH32 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd\nPUSH32 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe\nSGT",
      "bin": "7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe13"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "EQ",
    "hint": "10 == 10 = true (1)",
    "code": {
      "asm": "PUSH1 10\nPUSH1 10\nEQ",
      "bin": "600a600a14"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "EQ (not equal)",
    "hint": "10 == 9 = false (0)",
    "code": {
      "asm": "PUSH1 9\nPUSH1 10\nEQ",
      "bin": "6009600a14"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "ISZERO (not zero)",
    "hint": "If the top element on the stack is not zero, pushes 0",
    "code": {
      "asm": "PUSH1 9\nISZERO",
      "bin": "600915"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "ISZERO (zero)",
    "hint": "If the top element on the stack is zero, pushes 1",
    "code": {
      "asm": "PUSH1 0\nISZERO",
      "bin": "600015"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "NOT",
    "hint": "Bitwise NOT operation, flips every bit 1->0, 0->1",
    "code": {
      "asm": "PUSH1 0x0f\nNOT",
      "bin": "600f19"
    },
    "expect": {
      "stack": [
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0"
      ],
      "success": true
    }
  },
  {
    "name": "AND",
    "hint": "Bitwise AND operation of the top 2 items on the stack",
    "code": {
      "asm": "PUSH1 0xe\nPUSH1 0x3\nAND",
      "bin": "600e600316"
    },
    "expect": {
      "stack": [
        "0x2"
      ],
      "success": true
    }
  },
  {
    "name": "OR",
    "hint": "Bitwise OR operation of the top 2 items on the stack",
    "code": {
      "asm": "PUSH1 0xe\nPUSH1 0x3\nOR",
      "bin": "600e600317"
    },
    "expect": {
      "stack": [
        "0xf"
      ],
      "success": true
    }
  },
  {
    "name": "XOR",
    "hint": "Bitwise XOR operation of the top 2 items on the stack",
    "code": {
      "asm": "PUSH1 0xf0\nPUSH1 0x0f\nXOR",
      "bin": "60f0600f18"
    },
    "expect": {
      "stack": [
        "0xff"
      ],
      "success": true
    }
  },
  {
    "name": "SHL",
    "hint": "Bitwise shift left, 1 << 1 = 2",
    "code": {
      "asm": "PUSH1 1\nPUSH1 1\nSHL",
      "bin": "600160011b"
    },
    "expect": {
      "stack": [
        "0x2"
      ],
      "success": true
    }
  },
  {
    "name": "SHL (discards)",
    "hint": "Bits that end up outside MAX_UINT256 are discarded",
    "code": {
      "asm": "PUSH32 0xFF00000000000000000000000000000000000000000000000000000000000000\nPUSH1 4\nSHL",
      "bin": "7fff0000000000000000000000000000000000000000000000000000000000000060041b"
    },
    "expect": {
      "stack": [
        "0xf000000000000000000000000000000000000000000000000000000000000000"
      ],
      "success": true
    }
  },
  {
    "name": "SHL (too large)",
    "hint": "When shift amount is too large, returns zero",
    "code": {
      "asm": "PUSH1 1\nPUSH4 0xFFFFFFFF\nSHL",
      "bin": "600163ffffffff1b"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "SHR",
    "hint": "Bitwise shift right, 2 >> 1 = 1",
    "code": {
      "asm": "PUSH1 2\nPUSH1 1\nSHR",
      "bin": "600260011c"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "SHR (discards)",
    "hint": "Bits that end up outside are discarded",
    "code": {
      "asm": "PUSH1 0xFF\nPUSH1 4\nSHR",
      "bin": "60ff60041c"
    },
    "expect": {
      "stack": [
        "0xf"
      ],
      "success": true
    }
  },
  {
    "name": "SHR (too large)",
    "hint": "When shift amount is too large, returns zero",
    "code": {
      "asm": "PUSH1 1\nPUSH4 0xFFFFFFFF\nSHR",
      "bin": "600163ffffffff1c"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "SAR",
    "hint": "Like SHR but treats the argument as signed number. No effect on \"positive\" numbers, 2 >> 1 = 1",
    "code": {
      "asm": "PUSH1 2\nPUSH1 1\nSAR",
      "bin": "600260011d"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "SAR (fills 1s)",
    "hint": "Note that unlike SHR, it fills the empty space with 1s",
    "code": {
      "asm": "PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00\nPUSH1 4\nSAR",
      "bin": "7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0060041d"
    },
    "expect": {
      "stack": [
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0"
      ],
      "success": true
    }
  },
  {
    "name": "SAR (too large)",
    "hint": "When shift amount is too large and the first bit is 1, fills the whole number with 1s",
    "code": {
      "asm": "PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00\nPUSH4 0xFFFFFFFF\nSAR",
      "bin": "7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0063ffffffff1d"
    },
    "expect": {
      "stack": [
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      ],
      "success": true
    }
  },
  {
    "name": "SAR (positive, too large)",
    "hint": "When shift amount is too large and the first bit is 0, fills the whole number with 0s",
    "code": {
      "asm": "PUSH32 0x0FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00\nPUSH4 0xFFFFFFFF\nSAR",
      "bin": "7f0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0063ffffffff1d"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "BYTE",
    "hint": "The value on the stack is treated as 32 bytes, take 31st (counting from the most significant one)",
    "code": {
      "asm": "PUSH1 0xff\nPUSH1 31\nBYTE",
      "bin": "60ff601f1a"
    },
    "expect": {
      "stack": [
        "0xff"
      ],
      "success": true
    }
  },
  {
    "name": "BYTE (30th)",
    "hint": "The value on the stack is treated as 32 bytes, take 30st (counting from the most significant one)",
    "code": {
      "asm": "PUSH2 0xff00\nPUSH1 30\nBYTE",
      "bin": "61ff00601e1a"
    },
    "expect": {
      "stack": [
        "0xff"
      ],
      "success": true
    }
  },
  {
    "name": "BYTE (29th)",
    "hint": "Try to generalize your code to work with any argument",
    "code": {
      "asm": "PUSH3 0xff0000\nPUSH1 29\nBYTE",
      "bin": "62ff0000601d1a"
    },
    "expect": {
      "stack": [
        "0xff"
      ],
      "success": true
    }
  },
  {
    "name": "BYTE (out of range)",
    "hint": "Treat other elements as zeros",
    "code": {
      "asm": "PUSH32 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nPUSH1 42\nBYTE",
      "bin": "7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602a1a"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "DUP1",
    "hint": "Duplicate the first element from the stack and push it onto the stack",
    "code": {
      "asm": "PUSH1 1\nDUP1\nADD",
      "bin": "60018001"
    },
    "expect": {
      "stack": [
        "0x2"
      ],
      "success": true
    }
  },
  {
    "name": "DUP3",
    "hint": "Duplicate the 3rd element from the stack and push it onto the stack",
    "code": {
      "asm": "PUSH1 1\nPUSH1 2\nPUSH1 3\nDUP3",
      "bin": "60016002600382"
    },
    "expect": {
      "stack": [
        "0x1",
        "0x3",
        "0x2",
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "DUP5",
    "hint": "Try to implement your code to handle any DUP1...DUP16",
    "code": {
      "asm": "PUSH1 1\nPUSH1 2\nPUSH1 3\nPUSH1 4\nPUSH1 5\nDUP5",
      "bin": "6001600260036004600584"
    },
    "expect": {
      "stack": [
        "0x1",
        "0x5",
        "0x4",
        "0x3",
        "0x2",
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "DUP8",
    "hint": "No seriously try to implement your code to handle any DUP1...DUP16 generically. You can do OPCODE - DUP1 + 1 to learn which item to take from the stack",
    "code": {
      "asm": "PUSH1 1\nPUSH1 2\nPUSH1 3\nPUSH1 4\nPUSH1 5\nPUSH1 6\nPUSH1 7\nPUSH1 8\nDUP8",
      "bin": "6001600260036004600560066007600887"
    },
    "expect": {
      "stack": [
        "0x1",
        "0x8",
        "0x7",
        "0x6",
        "0x5",
        "0x4",
        "0x3",
        "0x2",
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "SWAP",
    "hint": "Swap the top item from the stack with the 1st one after that",
    "code": {
      "asm": "PUSH1 1\nPUSH1 2\nSWAP1",
      "bin": "6001600290"
    },
    "expect": {
      "stack": [
        "0x1",
        "0x2"
      ],
      "success": true
    }
  },
  {
    "name": "SWAP3",
    "hint": "Swap the top item from the stack with the 3rd one after that",
    "code": {
      "asm": "PUSH1 1\nPUSH1 2\nPUSH1 3\nPUSH1 4\nSWAP3",
      "bin": "600160026003600492"
    },
    "expect": {
      "stack": [
        "0x1",
        "0x3",
        "0x2",
        "0x4"
      ],
      "success": true
    }
  },
  {
    "name": "SWAP5",
    "hint": "Swap the top item from the stack with the 5th one after that. Try to implement SWAP1..SWAP16 with the same code",
    "code": {
      "asm": "PUSH1 1\nPUSH1 2\nPUSH1 3\nPUSH1 4\nPUSH1 5\nPUSH1 6\nSWAP5",
      "bin": "60016002600360046005600694"
    },
    "expect": {
      "stack": [
        "0x1",
        "0x5",
        "0x4",
        "0x3",
        "0x2",
        "0x6"
      ],
      "success": true
    }
  },
  {
    "name": "SWAP7",
    "hint": "No seriously try to implement your code to handle any SWAP1...SWAP16 generically. You can do OPCODE - SWAP1 + 2 to learn which item to take from the stack",
    "code": {
      "asm": "PUSH1 1\nPUSH1 2\nPUSH1 3\nPUSH1 4\nPUSH1 5\nPUSH1 6\nPUSH1 7\nPUSH1 8\nSWAP7",
      "bin": "6001600260036004600560066007600896"
    },
    "expect": {
      "stack": [
        "0x1",
        "0x7",
        "0x6",
        "0x5",
        "0x4",
        "0x3",
        "0x2",
        "0x8"
      ],
      "success": true
    }
  },
  {
    "name": "INVALID",
    "hint": "Invalid instruction. Note that your code is expected to return success = false, not throw exceptions",
    "code": {
      "asm": "INVALID",
      "bin": "fe"
    },
    "expect": {
      "success": false,
      "stack": []
    }
  },
  {
    "name": "PC",
    "hint": "Read \"Program Counter\" section of the course learning materials",
    "code": {
      "asm": "PC",
      "bin": "58"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "PC (more code)",
    "hint": "`PUSH1 0` is counted as 2 bytes (even though it is a single instruction)",
    "code": {
      "asm": "PUSH1 0\nPOP\nPC",
      "bin": "60005058"
    },
    "expect": {
      "stack": [
        "0x3"
      ],
      "success": true
    }
  },
  {
    "name": "GAS",
    "hint": "In this version of the tests, GAS is not supported yet and is always expected to return MAX_UINT256",
    "code": {
      "asm": "GAS",
      "bin": "5a"
    },
    "expect": {
      "stack": [
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      ],
      "success": true
    }
  },
  {
    "name": "JUMP",
    "hint": "Set the Program Counter (PC) to the top value from the stack",
    "code": {
      "asm": "PUSH1 5\nJUMP\nPUSH1 1\nJUMPDEST\nPUSH1 2",
      "bin": "60055660015b6002"
    },
    "expect": {
      "stack": [
        "0x2"
      ],
      "success": true
    }
  },
  {
    "name": "JUMP (not JUMPDEST)",
    "hint": "Offset 4 is not a valid JUMPDEST instruction",
    "code": {
      "asm": "PUSH1 3\nJUMP\nPUSH1 1",
      "bin": "6003566001"
    },
    "expect": {
      "success": false,
      "stack": []
    }
  },
  {
    "name": "JUMP (bad instruction boundry)",
    "hint": "See \"9.4.3. Jump Destination Validity\" of the Yellow Paper https://ethereum.github.io/yellowpaper/paper.pdf",
    "code": {
      "asm": "PUSH1 4\nJUMP\nPUSH1 0x5b\nPUSH1 0xff",
      "bin": "600456605b60ff"
    },
    "expect": {
      "success": false,
      "stack": []
    }
  },
  {
    "name": "JUMPI (no jump)",
    "hint": "Conditional JUMP, second argument is 0, not jumping",
    "code": {
      "asm": "PUSH1 0\nPUSH1 7\nJUMPI\nPUSH1 1\nJUMPDEST\nPUSH1 2\nPOP",
      "bin": "600060075760015b600250"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "JUMPI (jump)",
    "hint": "Conditional JUMP, second argument is not 0, jumping",
    "code": {
      "asm": "PUSH1 1\nPUSH1 7\nJUMPI\nPUSH1 1\nJUMPDEST\nPUSH1 2",
      "bin": "600160075760015b6002"
    },
    "expect": {
      "stack": [
        "0x2"
      ],
      "success": true
    }
  },
  {
    "name": "MSTORE",
    "hint": "Read \"Memory\" section of the course learning materials before implementing memory opcodes",
    "code": {
      "asm": "PUSH32 0x0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\nPUSH1 0\nMSTORE\nPUSH1 0\nMLOAD",
      "bin": "7f0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20600052600051"
    },
    "expect": {
      "stack": [
        "0x102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20"
      ],
      "success": true
    }
  },
  {
    "name": "MSTORE (tail)",
    "hint": "MLOAD starts from byte offset 31 and picks up the last byte (0x20), the rest of the memory is 00",
    "code": {
      "asm": "PUSH32 0x0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20\nPUSH1 0\nMSTORE\nPUSH1 31\nMLOAD",
      "bin": "7f0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20600052601f51"
    },
    "expect": {
      "stack": [
        "0x2000000000000000000000000000000000000000000000000000000000000000"
      ],
      "success": true
    }
  },
  {
    "name": "MSTORE8",
    "hint": "Store a single byte at the given offset",
    "code": {
      "asm": "PUSH1 0xff\nPUSH1 31\nMSTORE8\nPUSH1 0\nMLOAD",
      "bin": "60ff601f53600051"
    },
    "expect": {
      "stack": [
        "0xff"
      ],
      "success": true
    }
  },
  {
    "name": "MSIZE",
    "hint": "No memory has been accessed, so the memory size is 0",
    "code": {
      "asm": "MSIZE",
      "bin": "59"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "MSIZE (0x20)",
    "hint": "The first 32-byte section has been accessed, so the memory size is 32 (0x20)",
    "code": {
      "asm": "PUSH1 0\nMLOAD\nPOP\nMSIZE",
      "bin": "6000515059"
    },
    "expect": {
      "stack": [
        "0x20"
      ],
      "success": true
    }
  },
  {
    "name": "MSIZE (0x60)",
    "hint": "Memory is measured in 32-byte chunks",
    "code": {
      "asm": "PUSH1 0x39\nMLOAD\nPOP\nMSIZE",
      "bin": "6039515059"
    },
    "expect": {
      "stack": [
        "0x60"
      ],
      "success": true
    }
  },
  {
    "name": "MSIZE (after MSTORE8)",
    "hint": "Any opcode touching memory should update MSIZE, including the future ones. Implement memory access in a way that automatically updates MSIZE no matter which opcode used it",
    "code": {
      "asm": "PUSH1 0xff\nPUSH1 0xff\nMSTORE8\nMSIZE",
      "bin": "60ff60ff5359"
    },
    "expect": {
      "stack": [
        "0x100"
      ],
      "success": true
    }
  },
  {
    "name": "SHA3",
    "hint": "Use an existing library for your programming language. Note that even though the opcode is called SHA3, the algorythm used is keccak256",
    "code": {
      "asm": "PUSH32 0xffffffff00000000000000000000000000000000000000000000000000000000\nPUSH1 0\nMSTORE\nPUSH1 4\nPUSH1 0\nSHA3",
      "bin": "7fffffffff000000000000000000000000000000000000000000000000000000006000526004600020"
    },
    "expect": {
      "stack": [
        "0x29045a592007d0c246ef02c2223570da9522d0cf0f73282c79a1bc8f0bb2c238"
      ],
      "success": true
    }
  },
  {
    "name": "ADDRESS",
    "hint": "Read \"Transaction\" section of the course learning materials. Change your evm function parameters list to include transaction data",
    "tx": {
      "to": "0x1000000000000000000000000000000000000aaa"
    },
    "code": {
      "asm": "ADDRESS",
      "bin": "30"
    },
    "expect": {
      "stack": [
        "0x1000000000000000000000000000000000000aaa"
      ],
      "success": true
    }
  },
  {
    "name": "CALLER",
    "hint": "Solidity calls this msg.sender",
    "tx": {
      "from": "0x1e79b045dc29eae9fdc69673c9dcd7c53e5e159d"
    },
    "code": {
      "asm": "CALLER",
      "bin": "33"
    },
    "expect": {
      "stack": [
        "0x1e79b045dc29eae9fdc69673c9dcd7c53e5e159d"
      ],
      "success": true
    }
  },
  {
    "name": "ORIGIN",
    "hint": "Solidity calls this tx.origin",
    "tx": {
      "origin": "0x1337"
    },
    "code": {
      "asm": "ORIGIN",
      "bin": "32"
    },
    "expect": {
      "stack": [
        "0x1337"
      ],
      "success": true
    }
  },
  {
    "name": "GASPRICE",
    "tx": {
      "gasprice": "0x99"
    },
    "code": {
      "asm": "GASPRICE",
      "bin": "3a"
    },
    "expect": {
      "stack": [
        "0x99"
      ],
      "success": true
    },
    "hint": ""
  },
  {
    "name": "BASEFEE",
    "block": {
      "basefee": "0x1"
    },
    "code": {
      "asm": "BASEFEE",
      "bin": "48"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    },
    "hint": ""
  },
  {
    "name": "COINBASE",
    "hint": "Do not hardcode these numbers, pull them from the test cases",
    "block": {
      "coinbase": "0x777"
    },
    "code": {
      "asm": "COINBASE",
      "bin": "41"
    },
    "expect": {
      "stack": [
        "0x777"
      ],
      "success": true
    }
  },
  {
    "name": "COINBASE (different one)",
    "hint": "Do not hardcode these numbers, pull them from the test cases",
    "block": {
      "coinbase": "0x888"
    },
    "code": {
      "asm": "COINBASE",
      "bin": "41"
    },
    "expect": {
      "stack": [
        "0x888"
      ],
      "success": true
    }
  },
  {
    "name": "TIMESTAMP",
    "hint": "Solidity calls this block.timestamp",
    "block": {
      "timestamp": "0xe4e1c1"
    },
    "code": {
      "asm": "TIMESTAMP",
      "bin": "42"
    },
    "expect": {
      "stack": [
        "0xe4e1c1"
      ],
      "success": true
    }
  },
  {
    "name": "NUMBER",
    "hint": "Solidity calls this block.number",
    "block": {
      "number": "0x1000001"
    },
    "code": {
      "asm": "NUMBER",
      "bin": "43"
    },
    "expect": {
      "stack": [
        "0x1000001"
      ],
      "success": true
    }
  },
  {
    "name": "DIFFICULTY",
    "hint": "Also known as PREVRANDAO, not used in these test cases yet",
    "block": {
      "difficulty": "0x20000"
    },
    "code": {
      "asm": "DIFFICULTY",
      "bin": "44"
    },
    "expect": {
      "stack": [
        "0x20000"
      ],
      "success": true
    }
  },
  {
    "name": "GASLIMIT",
    "block": {
      "gaslimit": "0xffffffffffff"
    },
    "code": {
      "asm": "GASLIMIT",
      "bin": "45"
    },
    "expect": {
      "stack": [
        "0xffffffffffff"
      ],
      "success": true
    },
    "hint": ""
  },
  {
    "name": "CHAINID",
    "block": {
      "chainid": "0x1"
    },
    "code": {
      "asm": "CHAINID",
      "bin": "46"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    },
    "hint": ""
  },
  {
    "name": "BLOCKHASH",
    "hint": "Not used in this test suite, can return 0",
    "code": {
      "asm": "PUSH1 0\nBLOCKHASH",
      "bin": "600040"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "BALANCE",
    "hint": "Read \"State\" section of the course learning materials. Modify your evm function to take state as one of the arguments, or turn it into a class",
    "state": {
      "0x1e79b045dc29eae9fdc69673c9dcd7c53e5e159d": {
        "balance": "0x100"
      }
    },
    "code": {
      "asm": "PUSH20 0x1e79b045dc29eae9fdc69673c9dcd7c53e5e159d\nBALANCE",
      "bin": "731e79b045dc29eae9fdc69673c9dcd7c53e5e159d31"
    },
    "expect": {
      "stack": [
        "0x100"
      ],
      "success": true
    }
  },
  {
    "name": "BALANCE (empty)",
    "hint": "Balance of accounts not present in state is zero",
    "code": {
      "asm": "PUSH20 0xaf69610ea9ddc95883f97a6a3171d52165b69b03\nBALANCE",
      "bin": "73af69610ea9ddc95883f97a6a3171d52165b69b0331"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "CALLVALUE",
    "hint": "Read \"Calls\" section of the course learning materials. Solidity calls this msg.value, it is amount of wei sent as part of this transaction",
    "tx": {
      "value": "0x1000"
    },
    "code": {
      "asm": "CALLVALUE",
      "bin": "34"
    },
    "expect": {
      "stack": [
        "0x1000"
      ],
      "success": true
    }
  },
  {
    "name": "CALLDATALOAD",
    "hint": "Read \"Calls\" section of the course learning materials. Calldata is an array of bytes sent to the evm function",
    "tx": {
      "data": "000102030405060708090a0b0c0d0e0f00112233445566778899aabbccddeeff"
    },
    "code": {
      "asm": "PUSH1 0\nCALLDATALOAD",
      "bin": "600035"
    },
    "expect": {
      "stack": [
        "0x102030405060708090a0b0c0d0e0f00112233445566778899aabbccddeeff"
      ],
      "success": true
    }
  },
  {
    "name": "CALLDATALOAD (tail)",
    "hint": "Overflow bytes filled with zeros",
    "tx": {
      "data": "000102030405060708090a0b0c0d0e0f00112233445566778899aabbccddeeff"
    },
    "code": {
      "asm": "PUSH1 31\nCALLDATALOAD",
      "bin": "601f35"
    },
    "expect": {
      "stack": [
        "0xff00000000000000000000000000000000000000000000000000000000000000"
      ],
      "success": true
    }
  },
  {
    "name": "CALLDATASIZE",
    "hint": "Size (in bytes) of calldata buffer",
    "tx": {
      "data": "000102030405060708090a0b0c0d0e0f00112233445566778899aabbccddeeff"
    },
    "code": {
      "asm": "CALLDATASIZE",
      "bin": "36"
    },
    "expect": {
      "stack": [
        "0x20"
      ],
      "success": true
    }
  },
  {
    "name": "CALLDATASIZE (no data)",
    "code": {
      "asm": "CALLDATASIZE",
      "bin": "36"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    },
    "hint": ""
  },
  {
    "name": "CALLDATACOPY",
    "hint": "Copy 32-byte chunk of calldata into memory. Do not forget to update MSIZE after CALLDATACOPY",
    "tx": {
      "data": "000102030405060708090a0b0c0d0e0f00112233445566778899aabbccddeeff"
    },
    "code": {
      "asm": "PUSH1 32\nPUSH1 0\nPUSH1 0\nCALLDATACOPY\nPUSH1 0\nMLOAD",
      "bin": "60206000600037600051"
    },
    "expect": {
      "stack": [
        "0x102030405060708090a0b0c0d0e0f00112233445566778899aabbccddeeff"
      ],
      "success": true
    }
  },
  {
    "name": "CALLDATACOPY (tail)",
    "hint": "Overflow bytes filled with zeros",
    "tx": {
      "data": "000102030405060708090a0b0c0d0e0f00112233445566778899aabbccddeeff"
    },
    "code": {
      "asm": "PUSH1 1\nPUSH1 31\nPUSH1 0\nCALLDATACOPY\nPUSH1 0\nMLOAD",
      "bin": "6001601f600037600051"
    },
    "expect": {
      "stack": [
        "0xff00000000000000000000000000000000000000000000000000000000000000"
      ],
      "success": true
    }
  },
  {
    "name": "CODESIZE (small)",
    "hint": "Size of the bytecode running in the current context",
    "code": {
      "asm": "CODESIZE",
      "bin": "38"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "CODESIZE",
    "code": {
      "asm": "PUSH20 0\nPOP\nCODESIZE",
      "bin": "7300000000000000000000000000000000000000005038"
    },
    "expect": {
      "stack": [
        "0x17"
      ],
      "success": true
    },
    "hint": ""
  },
  {
    "name": "CODECOPY",
    "hint": "Copy your own code into memory. Implementing quines in EVM is really easy",
    "code": {
      "asm": "PUSH1 32\nPUSH1 0\nPUSH1 0\nCODECOPY\nPUSH1 0\nMLOAD",
      "bin": "60206000600039600051"
    },
    "expect": {
      "stack": [
        "0x6020600060003960005100000000000000000000000000000000000000000000"
      ],
      "success": true
    }
  },
  {
    "name": "CODECOPY (tail)",
    "hint": "Overflow bytes filled with zeros",
    "code": {
      "asm": "PUSH32 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nPOP\nPUSH1 2\nPUSH1 32\nPUSH1 0\nCODECOPY\nPUSH1 0\nMLOAD",
      "bin": "7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5060026020600039600051"
    },
    "expect": {
      "stack": [
        "0xff50000000000000000000000000000000000000000000000000000000000000"
      ],
      "success": true
    }
  },
  {
    "name": "EXTCODESIZE (empty)",
    "code": {
      "asm": "PUSH20 0x1e79b045dc29eae9fdc69673c9dcd7c53e5e159d\nEXTCODESIZE",
      "bin": "731e79b045dc29eae9fdc69673c9dcd7c53e5e159d3b"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    },
    "hint": ""
  },
  {
    "name": "EXTCODESIZE",
    "hint": "Read \"State\" section of the course learning materials",
    "state": {
      "0x1000000000000000000000000000000000000aaa": {
        "code": {
          "asm": "PUSH1 1",
          "bin": "6001"
        }
      }
    },
    "code": {
      "asm": "PUSH20 0x1000000000000000000000000000000000000aaa\nEXTCODESIZE",
      "bin": "731000000000000000000000000000000000000aaa3b"
    },
    "expect": {
      "stack": [
        "0x2"
      ],
      "success": true
    }
  },
  {
    "name": "EXTCODECOPY",
    "state": {
      "0x1000000000000000000000000000000000000aaa": {
        "code": {
          "asm": null,
          "bin": "6001"
        }
      }
    },
    "code": {
      "asm": "PUSH1 32\nPUSH1 0\nPUSH1 0\nPUSH20 0x1000000000000000000000000000000000000aaa\nEXTCODECOPY\nPUSH1 0\nMLOAD",
      "bin": "602060006000731000000000000000000000000000000000000aaa3c600051"
    },
    "expect": {
      "stack": [
        "0x6001000000000000000000000000000000000000000000000000000000000000"
      ],
      "success": true
    },
    "hint": ""
  },
  {
    "name": "EXTCODEHASH",
    "hint": "Use the same library you used for SHA3 opcode",
    "state": {
      "0x1000000000000000000000000000000000000aaa": {
        "code": {
          "asm": null,
          "bin": "FFFFFFFF"
        }
      }
    },
    "code": {
      "asm": "PUSH20 0x1000000000000000000000000000000000000aaa\nEXTCODEHASH",
      "bin": "731000000000000000000000000000000000000aaa3f"
    },
    "expect": {
      "stack": [
        "0x29045a592007d0c246ef02c2223570da9522d0cf0f73282c79a1bc8f0bb2c238"
      ],
      "success": true
    }
  },
  {
    "name": "EXTCODEHASH (empty)",
    "code": {
      "asm": "PUSH20 0x1000000000000000000000000000000000000aaa\nEXTCODEHASH",
      "bin": "731000000000000000000000000000000000000aaa3f"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    },
    "hint": ""
  },
  {
    "name": "SELFBALANCE",
    "tx": {
      "to": "0x1e79b045dc29eae9fdc69673c9dcd7c53e5e159d"
    },
    "state": {
      "0x1e79b045dc29eae9fdc69673c9dcd7c53e5e159d": {
        "balance": "0x200"
      }
    },
    "code": {
      "asm": "SELFBALANCE",
      "bin": "47"
    },
    "expect": {
      "stack": [
        "0x200"
      ],
      "success": true
    },
    "hint": ""
  },
  {
    "name": "SSTORE",
    "hint": "Read \"Storage\" section of the course learning materials",
    "code": {
      "asm": "PUSH1 1\nPUSH1 0\nSSTORE\nPUSH1 0\nSLOAD",
      "bin": "6001600055600054"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "SSTORE (non-zero location)",
    "code": {
      "asm": "PUSH1 2\nPUSH4 0x98fe5c2c\nSSTORE\nPUSH4 0x98fe5c2c\nSLOAD",
      "bin": "60026398fe5c2c556398fe5c2c54"
    },
    "expect": {
      "stack": [
        "0x2"
      ],
      "success": true
    },
    "hint": ""
  },
  {
    "name": "SLOAD (empty)",
    "hint": "All storage is initialized to zeros",
    "code": {
      "asm": "PUSH1 0xff\nSLOAD",
      "bin": "60ff54"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "LOG0",
    "hint": "Make evm function return array of logs, modify the testing code to assert that the logs match",
    "tx": {
      "to": "0x1000000000000000000000000000000000000001"
    },
    "code": {
      "asm": "PUSH1 0xaa\nPUSH1 0\nMSTORE\nPUSH1 1\nPUSH1 31\nLOG0",
      "bin": "60aa6000526001601fa0"
    },
    "expect": {
      "logs": [
        {
          "address": "0x1000000000000000000000000000000000000001",
          "data": "aa",
          "topics": []
        }
      ],
      "success": true
    }
  },
  {
    "name": "LOG1",
    "hint": "Make evm function return array of logs, modify the testing code to assert that the logs match",
    "tx": {
      "to": "0x1000000000000000000000000000000000000001"
    },
    "code": {
      "asm": "PUSH1 0xbb\nPUSH1 0\nMSTORE\nPUSH32 0x1111111111111111111111111111111111111111111111111111111111111111\nPUSH1 1\nPUSH1 31\nLOG1",
      "bin": "60bb6000527f11111111111111111111111111111111111111111111111111111111111111116001601fa1"
    },
    "expect": {
      "logs": [
        {
          "address": "0x1000000000000000000000000000000000000001",
          "data": "bb",
          "topics": [
            "0x1111111111111111111111111111111111111111111111111111111111111111"
          ]
        }
      ],
      "success": true
    }
  },
  {
    "name": "LOG2",
    "hint": "Use the same code to handle LOG1...LOG4 opcodes",
    "tx": {
      "to": "0x1000000000000000000000000000000000000001"
    },
    "code": {
      "asm": "PUSH1 0xcc\nPUSH1 0\nMSTORE\nPUSH32 0x1111111111111111111111111111111111111111111111111111111111111111\nPUSH32 0x2222222222222222222222222222222222222222222222222222222222222222\nPUSH1 1\nPUSH1 31\nLOG2",
      "bin": "60cc6000527f11111111111111111111111111111111111111111111111111111111111111117f22222222222222222222222222222222222222222222222222222222222222226001601fa2"
    },
    "expect": {
      "logs": [
        {
          "address": "0x1000000000000000000000000000000000000001",
          "data": "cc",
          "topics": [
            "0x2222222222222222222222222222222222222222222222222222222222222222",
            "0x1111111111111111111111111111111111111111111111111111111111111111"
          ]
        }
      ],
      "success": true
    }
  },
  {
    "name": "LOG3",
    "hint": "N = OPCODE - LOG0, pop N items from the stack as topics",
    "tx": {
      "to": "0x1000000000000000000000000000000000000001"
    },
    "code": {
      "asm": "PUSH1 0xdd\nPUSH1 0\nMSTORE\nPUSH32 0x1111111111111111111111111111111111111111111111111111111111111111\nPUSH32 0x2222222222222222222222222222222222222222222222222222222222222222\nPUSH32 0x3333333333333333333333333333333333333333333333333333333333333333\nPUSH1 1\nPUSH1 31\nLOG3",
      "bin": "60dd6000527f11111111111111111111111111111111111111111111111111111111111111117f22222222222222222222222222222222222222222222222222222222222222227f33333333333333333333333333333333333333333333333333333333333333336001601fa3"
    },
    "expect": {
      "logs": [
        {
          "address": "0x1000000000000000000000000000000000000001",
          "data": "dd",
          "topics": [
            "0x3333333333333333333333333333333333333333333333333333333333333333",
            "0x2222222222222222222222222222222222222222222222222222222222222222",
            "0x1111111111111111111111111111111111111111111111111111111111111111"
          ]
        }
      ],
      "success": true
    }
  },
  {
    "name": "LOG4",
    "hint": "Refactoring code is always a good idea. Your code will become cleaner, and the tests will catch if something breaks",
    "tx": {
      "to": "0x1000000000000000000000000000000000000001"
    },
    "code": {
      "asm": "PUSH1 0xee\nPUSH1 0\nMSTORE\nPUSH32 0x1111111111111111111111111111111111111111111111111111111111111111\nPUSH32 0x2222222222222222222222222222222222222222222222222222222222222222\nPUSH32 0x3333333333333333333333333333333333333333333333333333333333333333\nPUSH32 0x4444444444444444444444444444444444444444444444444444444444444444\nPUSH1 1\nPUSH1 31\nLOG4",
      "bin": "60ee6000527f11111111111111111111111111111111111111111111111111111111111111117f22222222222222222222222222222222222222222222222222222222222222227f33333333333333333333333333333333333333333333333333333333333333337f44444444444444444444444444444444444444444444444444444444444444446001601fa4"
    },
    "expect": {
      "logs": [
        {
          "address": "0x1000000000000000000000000000000000000001",
          "data": "ee",
          "topics": [
            "0x4444444444444444444444444444444444444444444444444444444444444444",
            "0x3333333333333333333333333333333333333333333333333333333333333333",
            "0x2222222222222222222222222222222222222222222222222222222222222222",
            "0x1111111111111111111111111111111111111111111111111111111111111111"
          ]
        }
      ],
      "success": true
    }
  },
  {
    "name": "RETURN",
    "hint": "Read \"Calls and Returns\" section of the course learning materials",
    "code": {
      "asm": "PUSH1 0xA2\nPUSH1 0\nMSTORE\nPUSH1 1\nPUSH1 31\nRETURN",
      "bin": "60a26000526001601ff3"
    },
    "expect": {
      "success": true,
      "return": "a2"
    }
  },
  {
    "name": "REVERT",
    "hint": "Note that this test expects `success` to be false",
    "code": {
      "asm": "PUSH1 0xF1\nPUSH1 0\nMSTORE\nPUSH1 1\nPUSH1 31\nREVERT",
      "bin": "60f16000526001601ffd"
    },
    "expect": {
      "success": false,
      "return": "f1"
    }
  },
  {
    "name": "CALL",
    "hint": "Read \"Calls and Returns\" section of the course learning materials. Recursively call evm function from itself when handing this opcode",
    "state": {
      "0x1000000000000000000000000000000000000c42": {
        "code": {
          "asm": "PUSH1 0x42\nPUSH1 0\nMSTORE\nPUSH1 1\nPUSH1 31\nRETURN",
          "bin": "60426000526001601ff3"
        }
      }
    },
    "code": {
      "asm": "PUSH1 1\nPUSH1 31\nPUSH1 0\nPUSH1 0\nPUSH1 0\nPUSH20 0x1000000000000000000000000000000000000c42\nPUSH1 0\nCALL\nPUSH1 0\nMLOAD",
      "bin": "6001601f600060006000731000000000000000000000000000000000000c426000f1600051"
    },
    "expect": {
      "stack": [
        "0x42",
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "CALL (returns address)",
    "hint": "In the inner context, the CALLER is the contract we are sending the initial transaction to",
    "tx": {
      "to": "0x1000000000000000000000000000000000000aaa"
    },
    "state": {
      "0x1000000000000000000000000000000000000c42": {
        "code": {
          "asm": "CALLER\nPUSH1 0\nMSTORE\nPUSH1 32\nPUSH1 0\nRETURN",
          "bin": "3360005260206000f3"
        }
      }
    },
    "code": {
      "asm": "PUSH1 32\nPUSH1 0\nPUSH1 0\nPUSH1 0\nPUSH1 0\nPUSH20 0x1000000000000000000000000000000000000c42\nPUSH1 0\nCALL\nPUSH1 0\nMLOAD",
      "bin": "60206000600060006000731000000000000000000000000000000000000c426000f1600051"
    },
    "expect": {
      "stack": [
        "0x1000000000000000000000000000000000000aaa",
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "CALL (reverts)",
    "hint": "Reverts can also return data",
    "state": {
      "0x1000000000000000000000000000000000000c42": {
        "code": {
          "asm": "PUSH1 0x42\nPUSH1 0\nMSTORE\nPUSH1 1\nPUSH1 31\nREVERT",
          "bin": "60426000526001601ffd"
        }
      }
    },
    "code": {
      "asm": "PUSH1 1\nPUSH1 31\nPUSH1 0\nPUSH1 0\nPUSH1 0\nPUSH20 0x1000000000000000000000000000000000000c42\nPUSH1 0\nCALL\nPUSH1 0\nMLOAD",
      "bin": "6001601f600060006000731000000000000000000000000000000000000c426000f1600051"
    },
    "expect": {
      "stack": [
        "0x42",
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "RETURNDATASIZE (empty)",
    "code": {
      "asm": "RETURNDATASIZE",
      "bin": "3d"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    },
    "hint": ""
  },
  {
    "name": "RETURNDATASIZE",
    "state": {
      "0x1000000000000000000000000000000000000c42": {
        "code": {
          "asm": "PUSH1 0x42\nPUSH1 0\nMSTORE\nPUSH1 1\nPUSH1 31\nRETURN",
          "bin": "60426000526001601ff3"
        }
      }
    },
    "code": {
      "asm": "PUSH1 0\nPUSH1 0\nPUSH1 0\nPUSH1 0\nPUSH1 0\nPUSH20 0x1000000000000000000000000000000000000c42\nPUSH1 0\nCALL\nPOP\nRETURNDATASIZE",
      "bin": "60006000600060006000731000000000000000000000000000000000000c426000f1503d"
    },
    "expect": {
      "stack": [
        "0x1"
      ],
      "success": true
    },
    "hint": ""
  },
  {
    "name": "RETURNDATACOPY",
    "state": {
      "0x1000000000000000000000000000000000000c42": {
        "code": {
          "asm": "PUSH1 0x42\nPUSH1 0\nMSTORE\nPUSH1 1\nPUSH1 31\nRETURN",
          "bin": "60426000526001601ff3"
        }
      }
    },
    "code": {
      "asm": "PUSH1 1\nPUSH1 31\nPUSH1 0\nPUSH1 0\nPUSH1 0\nPUSH20 0x1000000000000000000000000000000000000c42\nPUSH1 0\nCALL\nPOP\nPUSH1 1\nPUSH1 0\nPUSH1 0xff\nRETURNDATACOPY\nPUSH1 0xff\nMLOAD",
      "bin": "6001601f600060006000731000000000000000000000000000000000000c426000f1506001600060ff3e60ff51"
    },
    "expect": {
      "stack": [
        "0x4200000000000000000000000000000000000000000000000000000000000000"
      ],
      "success": true
    },
    "hint": ""
  },
  {
    "name": "DELEGATECALL",
    "hint": "Like CALL, but keep the transaction data (from, origin, address) and use the code from the other account",
    "tx": {
      "to": "0x1000000000000000000000000000000000000aaa"
    },
    "state": {
      "0xdddddddddddddddddddddddddddddddddddddddd": {
        "code": {
          "asm": "ADDRESS\nPUSH1 0\nSSTORE",
          "bin": "30600055"
        }
      }
    },
    "code": {
      "asm": "PUSH1 0\nDUP1\nDUP1\nDUP1\nPUSH20 0xdddddddddddddddddddddddddddddddddddddddd\nGAS\nDELEGATECALL\nPUSH1 0\nSLOAD",
      "bin": "600080808073dddddddddddddddddddddddddddddddddddddddd5af4600054"
    },
    "expect": {
      "stack": [
        "0x1000000000000000000000000000000000000aaa",
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "STATICCALL",
    "hint": "Like CALL, but disable state modifications",
    "state": {
      "0x1000000000000000000000000000000000000c42": {
        "code": {
          "asm": "PUSH1 0x42\nPUSH1 0\nMSTORE\nPUSH1 1\nPUSH1 31\nRETURN",
          "bin": "60426000526001601ff3"
        }
      }
    },
    "code": {
      "asm": "PUSH1 1\nPUSH1 31\nPUSH1 0\nPUSH1 0\nPUSH20 0x1000000000000000000000000000000000000c42\nPUSH1 0\nSTATICCALL\nPUSH1 0\nMLOAD",
      "bin": "6001601f60006000731000000000000000000000000000000000000c426000fa600051"
    },
    "expect": {
      "stack": [
        "0x42",
        "0x1"
      ],
      "success": true
    }
  },
  {
    "name": "STATICCALL (reverts on write)",
    "hint": "Use a flag to tell the evm function whenever the context is writeable (CALL) or not (STATICCALL)",
    "state": {
      "0x1000000000000000000000000000000000000c42": {
        "code": {
          "asm": "PUSH1 0x42\nPUSH1 0\nSSTORE",
          "bin": "6042600055"
        }
      }
    },
    "code": {
      "asm": "PUSH1 1\nPUSH1 31\nPUSH1 0\nPUSH1 0\nPUSH20 0x1000000000000000000000000000000000000c42\nPUSH1 0\nSTATICCALL",
      "bin": "6001601f60006000731000000000000000000000000000000000000c426000fa"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "CREATE (empty)",
    "hint": "Read \"Creating new contracts\" section of the course learning materials. This code creates a new empty account with balance 9",
    "tx": {
      "to": "0x9bbfed6889322e016e0a02ee459d306fc19545d8"
    },
    "code": {
      "asm": "PUSH1 0\nPUSH1 0\nPUSH1 9\nCREATE\nBALANCE",
      "bin": "600060006009f031"
    },
    "expect": {
      "stack": [
        "0x9"
      ],
      "success": true
    }
  },
  {
    "name": "CREATE (with 4x FF)",
    "hint": "Read \"Creating new contracts\" section of the course learning materials. CALL with the given code, store the returned bytes as new contracts bytecode",
    "tx": {
      "to": "0x9bbfed6889322e016e0a02ee459d306fc19545d8"
    },
    "code": {
      "asm": "PUSH1 32\nPUSH1 0\nPUSH1 0\nPUSH13 0x63FFFFFFFF6000526004601CF3\nPUSH1 0\nMSTORE\nPUSH1 13\nPUSH1 19\nPUSH1 0\nCREATE\nEXTCODECOPY\nPUSH1 0\nMLOAD",
      "bin": "6020600060006c63ffffffff6000526004601cf3600052600d60136000f03c600051"
    },
    "expect": {
      "stack": [
        "0xffffffff00000000000000000000000000000000000000000000000000000000"
      ],
      "success": true
    }
  },
  {
    "name": "CREATE (reverts)",
    "hint": "No address when constructor code reverts",
    "tx": {
      "to": "0x9bbfed6889322e016e0a02ee459d306fc19545d8"
    },
    "code": {
      "asm": "PUSH13 0x63FFFFFFFF6000526004601CFD\nPUSH1 0\nMSTORE\nPUSH1 13\nPUSH1 19\nPUSH1 0\nCREATE",
      "bin": "6c63ffffffff6000526004601cfd600052600d60136000f0"
    },
    "expect": {
      "stack": [
        "0x0"
      ],
      "success": true
    }
  },
  {
    "name": "SELFDESTRUCT",
    "hint": "Note that for simplicity, this opcode should delete the account from the state. In the real EVM this happens only after the transaction has been processed, but that would overcomplicate these tests",
    "state": {
      "0xdead00000000000000000000000000000000dead": {
        "balance": "0x7",
        "code": {
          "asm": "PUSH20 0xa1c300000000000000000000000000000000a1c3\nSELFDESTRUCT",
          "bin": "73a1c300000000000000000000000000000000a1c3ff"
        }
      }
    },
    "code": {
      "asm": "PUSH1 0\nDUP1\nDUP1\nDUP1\nDUP1\nPUSH20 0xdead00000000000000000000000000000000dead\nGAS\nCALL\nPOP\nPUSH20 0xa1c300000000000000000000000000000000a1c3\nBALANCE\nPUSH20 0xdead00000000000000000000000000000000dead\nEXTCODESIZE",
      "bin": "60008080808073dead00000000000000000000000000000000dead5af15073a1c300000000000000000000000000000000a1c33173dead00000000000000000000000000000000dead3b"
    },
    "expect": {
      "stack": [
        "0x0",
        "0x7"
      ],
      "success": true
    }
  }
]