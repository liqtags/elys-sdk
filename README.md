# Elys SDK
An SDK for Elys Network Built By @liqtags

## Features 
- Client for Cosmos and Elys nodes 
- Get daily volume on Elys
- Get the current liquidity on Elys
- Get the weekly volume
- Get the circulating supply 
- Get the market cap

## Scripts
- Check Elys Airdrop 

## Example
```js
import client from 'jsr:@liquid/elys-sdk' 

import {
  getDailyTvl,
  getDailyVolume,
  getCurrentLiquidity,
  getWeeklyVolume,
  getCirculatingSupply,
  getMarketCap,
} from 'jsr:@liquid/elys-sdk';

const elysSDK = client.elys; 
const cosmosSDK = client.cosmos; 

const balance = await cosmosSDK.bank.v1beta1
    .allBalances({ address: 'elys1addresshere' });

const balances = await elysSDK.exchange.v1beta1
    .exchangeBalances()

const dailyVolume = await getDailyTvl()

```

## Credits
- https://github.com/kwak-labs/elysjs
- https://app.elys.network/
- https://www.npmjs.com/package/axios