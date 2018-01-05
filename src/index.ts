import * as fetch from 'isomorphic-fetch';

export default function graphql(url, {
  headers = {},
  method = 'POST',  
  token = '',
  query = '',
  mutation = ''
}) : Promise<void> {  
  query = !!query ? query : mutation;
  
  if(!url) throw new Error('url required.')
  if(!query) throw new Error('query or mutation required')

  return fetch(url, {
    method,
    headers: {
      ...(!!token ? { 'Authorization': `bearer ${token}` } : {}),
      ...headers,
    },
    body: JSON.stringify({
      [query.split('{')[0].trim()]: query
    })
  })
  .then(resp => resp.json())
}

if(module && module.exports) {
  module.exports = graphql
}
