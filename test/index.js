const graphql = require('../dist')
require('dotenv').config()

let params = {
  query: `query {
    viewer {
      login
    }
  }`,
  token: process.env.TOKEN
}

graphql('https://api.github.com/graphql', params).then(resp => {
  console.log(resp)
})

