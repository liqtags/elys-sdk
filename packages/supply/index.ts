import axios from 'npm:axios';

const getDailyTvl = async () => {
    const response = await axios.get('https://supply.elys.network/stats/daily-tvl');
    return response.data;
}

const getDailyVolume = async () => {
    const response = await axios.get('https://supply.elys.network/stats/daily-volume');
    return response.data;
}

const getCurrentLiquidity = async () => {
    const response = await axios.get('https://supply.elys.network/stats/current-liquidity');
    return response.data;
}

const getWeeklyVolume = async () => {
    const response = await axios.get('https://supply.elys.network/stats/weekly-volume');
    return response.data;
}

const getCirculatingSupply = async () => {
    const response = await axios.get('https://supply.elys.network/circulating-supply');
    return response.data;
}

const getMarketCap = async () => {
    const response = await axios.get('https://pricing.elys.network/oracle/market-cap?symbols=AKT,ATOM,AXL,EDEN,EDEN+BOOST,ELYS,KAVA,NTRN,OM,OSMO,SAGA,SCRT,TIA,USDC,XION');
    return response.data;
}

export {
    getDailyTvl,
    getDailyVolume,
    getCurrentLiquidity,
    getWeeklyVolume,
    getCirculatingSupply,
    getMarketCap,
}