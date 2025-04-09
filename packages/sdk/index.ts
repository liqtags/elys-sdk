import dotenv from 'npm:dotenv';
dotenv.config();
import { elys } from 'npm:elysjs';

const { createRPCQueryClient } = elys.ClientFactory; 
const client = await createRPCQueryClient({ rpcEndpoint: process.env.RPC_URL || 'https://rpc.elys.network' });

export default client;                        