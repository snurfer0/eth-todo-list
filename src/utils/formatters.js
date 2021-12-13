export const formatWalletAddress = address => {
    if (address) return `${address.substring(0, 4)}...${address.slice(-4)}`
    return null
}
