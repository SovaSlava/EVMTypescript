export default class Memory {

    private data: Uint8Array;

    constructor() {
        this.data = new Uint8Array(1024 * 1024);
    }

    store(offset: bigint, value: bigint, size: 1n | 32n) {
        if (size == 32n) {
            for (let i = 0n; i < size; i++) {
                this.data[Number(offset + i)] = Number((value >> ((32n - i - 1n) * 8n)) & 0xffn);
            }
        }
        else {
            this.data[Number(offset)] = Number(value);
        }
    }

    load(offset: bigint) {
        let value = 0n;
        for (let i = 0n; i < 32n; i++) {
            value = (value << 8n) | BigInt(this.data[Number(offset + i)]);
        }
        return value;
    }
}