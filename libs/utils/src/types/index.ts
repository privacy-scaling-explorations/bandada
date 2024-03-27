// Supported networks: https://docs.ethers.org/v6/api/providers/thirdparty/#InfuraProvider
export type Network = "localhost" | "sepolia"

export type ContractName = "Bandada" | "Semaphore" | "BandadaSemaphore"

export type OnchainBandadaGroup = {
    id: BigInt
    fingerprint: BigInt
}
