import { hexStringToUint8Array } from "./evm.test"
export default class Memory {

    private data: Uint8Array;
    size: bigint;

    constructor() {
        this.data = new Uint8Array(1024 * 1024);
        this.size = 0n;
    }

    store(offset: bigint, value: bigint, size: bigint) {
        if (size == 32n) {
            for (let i = 0n; i < size; i++) {
                this.data[Number(offset + i)] = Number((value >> ((32n - i - 1n) * 8n)) & 0xffn);
            }
            let memoryAffected = offset + 32n;
            if (this.size < memoryAffected) {
                this.size = memoryAffected;
            }
        }
        else {
            this.data[Number(offset)] = Number(value);
            if (this.size < offset) {
                this.size = offset + BigInt(1);
            }
        }
    }

    load(offset: bigint, size: bigint = 32n): bigint {
        let memoryOffset = offset + size;
        let memoryAffected = memoryOffset % size == 0n ? size : memoryOffset - (memoryOffset % size) + size
        if (this.size < memoryAffected) {
            this.size = memoryAffected;
        }
        let value = 0n;
        for (let i = 0n; i < size; i++) {
            value = (value << 8n) | BigInt(this.data[Number(offset + i)]);
        }
        return value;
    }
}