export type txType = {
    to: bigint,
    from: bigint,
    origin: bigint,
    gasprice: bigint,
    value: bigint,
    data: Uint8Array
}