import {
  createClient,
  dedupExchange,
  cacheExchange,
  ssrExchange,
  fetchExchange
} from 'urql';

import 'isomorphic-unfetch';
import cookie from 'js-cookie'
import { getAccessToken } from 'lib/accessToken'
// import { fetchExchange } from './customFetchExchange'

let urqlClient = null;
let ssrCache = null;

const getToken = () => {
  let token = null;
  if (typeof document !== 'undefined') {
    token = cookie.get('rfs')
  }
  return token
}



export default function initUrqlClient(initialState: any, serverAccessToken: string) {
  // Create a new client for every server-side rendered request to reset its state
  // for each rendered page
  // Reuse the client on the client-side however
  const isServer = typeof window === 'undefined';
  if (isServer || !urqlClient) {
    ssrCache = ssrExchange({ initialState });

    urqlClient = createClient({
      url: 'http://localhost:4000/graphql',
      // Active suspense mode on the server-side
      suspense: isServer,
      fetchOptions: () => {
        return {
          headers: {
            authorization: `bearer ${serverAccessToken}`
          },
          credentials: 'include'
        }
      },
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
    });
  }

  // Return both the cache and the client
  return [urqlClient, ssrCache];
}