"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch = require("isomorphic-fetch");
function graphql(url, { headers = {}, method = 'POST', token = '', query = '', mutation = '' }) {
    query = !!query ? query : mutation;
    if (!url)
        throw new Error('url required.');
    if (!query)
        throw new Error('query or mutation required');
    return fetch(url, {
        method,
        headers: Object.assign({}, (!!token ? { 'Authorization': `bearer ${token}` } : {}), headers),
        body: JSON.stringify({
            [query.split('{')[0].trim()]: query
        })
    })
        .then(resp => resp.json());
}
exports.default = graphql;
if (module && module.exports) {
    module.exports = graphql;
}
