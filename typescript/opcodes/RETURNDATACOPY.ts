import type Memory from "../memory";

export function RETURNDATACOPY(stack: bigint[], memory: Memory, returnData: bigint): bigint[] {
    let memoryOffset = stack[0];
    let dataOffsetCopy = stack[1];
    let dataSizeCopy = stack[2];
    stack.shift();
    stack.shift();
    stack.shift();




    let value = 0n;
    if (dataSizeCopy < 32n) {
        dataSizeCopy = 32n
    }

    let data: Uint8Array = new Uint8Array((returnData.toString()?.match(/../g) || []).map((byte) => parseInt(byte, 10)));

    for (let i = dataOffsetCopy; i < dataSizeCopy + dataOffsetCopy; i++) {
        if (i < data.length && i < dataOffsetCopy + dataSizeCopy) {
            console.log('f1 - ' + data[Number(i)] + data[Number(i + 1n)])
            value = (value << 8n) | BigInt(data[Number(i)]);
        }
        else {
            value = (value << 8n) | BigInt(0);
        }
    }
    memory.store(memoryOffset, value, dataSizeCopy);
    return stack;
}