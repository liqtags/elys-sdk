import * as fs from 'node:fs'
import axios from 'npm:axios'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

interface AirdropResponse {
  atomStaking?: string
  cadet?: string
  nftHolder?: string
  governor?: string
}

interface WalletData {
  address: string
  amount: number
}

async function checkAirdropElysCoin(walletAddress: string) {
  try {
    const url = 'https://rest.elys.network/chain'
    const response = await axios.post(url, {
      type: 'module',
      module: 'elys.commitment.airDrop',
      data: {
        address: walletAddress
      }
    })

    if (response.data) {
      const item = response.data as AirdropResponse
      const atomStaking = parseFloat(item.atomStaking || '0') / 1_000_000
      const cadet = parseFloat(item.cadet || '0') / 1_000_000
      const nftHolder = parseFloat(item.nftHolder || '0') / 1_000_000
      const governor = parseFloat(item.governor || '0') / 1_000_000

      const totalForUser = atomStaking + cadet + nftHolder + governor
      
      const walletData: WalletData = {
        address: walletAddress,
        amount: totalForUser
      }

      console.log(`Wallet: ${walletAddress}`)
      console.log(`Total Airdrop Amount: ${totalForUser.toFixed(2)} Elys`)
      console.log('Breakdown:')
      console.log(`- Atom Staking: ${atomStaking.toFixed(2)} Elys`)
      console.log(`- Cadet: ${cadet.toFixed(2)} Elys`)
      console.log(`- NFT Holder: ${nftHolder.toFixed(2)} Elys`)
      console.log(`- Governor: ${governor.toFixed(2)} Elys`)

      // Save to JSON file
      fs.writeFileSync('elys-wallet.json', JSON.stringify(walletData, null, 2))
      console.log('Results saved to elys-wallet.json')

    } else {
      console.error(`Error: Unable to fetch balance for wallet ${walletAddress}`)
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      console.error(`User not found for wallet: ${walletAddress}`)
    } else {
      console.error(`Error fetching data for wallet ${walletAddress}:`, error instanceof Error ? error.message : 'Unknown error')
    }
  }
}

checkAirdropElysCoin('your-wallet-address-here');