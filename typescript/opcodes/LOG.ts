import type { txLog } from "../logs"
import type Memory from "../memory";
import { txType } from "../transaction";
export function LOG(stack: bigint[], memory: Memory, logs: txLog[], tx: txType, opcode: number): [txLog[], bigint[]] {

    let memoryOffset = stack[0];
    let dataLen = stack[1];

    let newLog: txLog = {
        "address": tx.to,
        "data": memory.load(memoryOffset, dataLen).toString(16),
        topics: []
    };

    const topicsLen = opcode - 0xa0;
    for (let i = 0; i < topicsLen; i++) {
        newLog.topics.push(`0x${stack[i + 2].toString(16)}`);
    }
    logs.push(newLog)
    stack.shift()
    stack.shift()
    return [logs, stack];
}