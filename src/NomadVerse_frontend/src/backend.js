import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as helloMotokoBackendIdl } from '../../declarations/hello-motoko-backend/hello-motoko-backend.did.js';

const agent = new HttpAgent();
const helloMotokoBackend = Actor.createActor(helloMotokoBackendIdl, {
  agent,
  canisterId: process.env.REACT_APP_HELLO_MOTOKO_BACKEND_CANISTER_ID,
});

export async function fetchData() {
  const data = await helloMotokoBackend.getData();
  console.log(data);
  return data;
}