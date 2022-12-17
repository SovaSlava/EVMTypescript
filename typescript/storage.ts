export default class EVMStorage {

    private storage: Record<string, Record<number, bigint>>;

    constructor() {
        this.storage = {};
    }

    store(address: string, slot: number, value: bigint) {
        this.storage[address] = { [slot]: value };
    }

    sload(address: string, slot: number): bigint {
        if (address in this.storage && slot in this.storage[address]) {
            return this.storage[address][slot];
        }
        else {
            return 0n;
        }
    }
}