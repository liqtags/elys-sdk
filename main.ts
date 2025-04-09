import client from './packages/sdk/index.ts';
import {
  getDailyTvl,
  getDailyVolume,
  getCurrentLiquidity,
  getWeeklyVolume,
  getCirculatingSupply,
  getMarketCap,
} from './packages/supply/index.ts';

const elysSDK = client.elys; 
const cosmosSDK = client.cosmos; 

export default client;
export {
  elysSDK,
  cosmosSDK,
  getDailyTvl,
  getDailyVolume,
  getCurrentLiquidity,
  getWeeklyVolume,
  getCirculatingSupply,
  getMarketCap,
}