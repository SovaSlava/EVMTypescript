import type Memory from "../memory";
import { hexStringToUint8Array } from "../evm.test"
export function RETURNDATACOPY(stack: bigint[], memory: Memory, returnData: string): bigint[] {
    console.log('returnData - ' + returnData.toString(16))
    let memoryOffset = stack[0];
    let dataOffsetCopy = stack[1];
    let dataSizeCopy = stack[2];
    stack.shift();
    stack.shift();
    stack.shift();

    let data: Uint8Array = hexStringToUint8Array('0x' + returnData);
    // let data = new Uint8Array((returnData.match(/../g) || []).map((byte) => (byte)))

    console.log('match r - ' + returnData.match(/../g))
    console.log('utf8 data - ' + data)

    let value = 0n;
    if (dataSizeCopy < 32n) {
        dataSizeCopy = 32n
    }
    // else {
    //     dataSizeCopy = dataSizeCopy;
    // }

    for (let i = dataOffsetCopy; i < dataSizeCopy * 2n + dataOffsetCopy; i += 2n) {
        if (i < data.length && i < dataOffsetCopy + dataSizeCopy) {
            value = (value << 8n) | BigInt('0x' + data[Number(i)] + data[Number(i + 1n)]);
        }
        else {
            value = (value << 8n) | BigInt(0);
        }
    }
    console.log('RETURNDATACOPY value - ' + value.toString(16))
    memory.store(memoryOffset, value, dataSizeCopy);
    return stack;
}