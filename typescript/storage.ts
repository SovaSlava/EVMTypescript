export default class EVMStorage {

    private storage: Record<string, Record<number, bigint>>;

    constructor() {
        this.storage = {};
    }

    store(address: bigint, slot: number, value: bigint) {
        let storageAddress: string = address.toString(16);
        this.storage[storageAddress] = { [slot]: value };
    }

    sload(address: bigint, slot: number): bigint {
        let storageAddress: string = address.toString(16);
        if (storageAddress in this.storage && slot in this.storage[storageAddress]) {
            return this.storage[storageAddress][slot];
        }
        else {
            return 0n;
        }
    }
}