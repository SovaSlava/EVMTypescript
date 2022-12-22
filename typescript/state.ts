export type stateType = Record<string, stateRecord>;
type stateRecord = {
    balance: bigint,
    nonce: bigint,
    code: { "bin": string }
}