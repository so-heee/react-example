import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'
import{ Query } from 'react-apollo'
import Client from './client'

const ME = gql`
  query me { 
    user(login: "so-heee") { 
      name
      avatarUrl
    }
  }
`

class App extends Component {
  render() {
    return (
      <ApolloProvider client={Client}>
        <div>Hello, GraphQL</div>
        <Query query={ME}>
          {
            ({ loading, error, data}) => {
              if (loading) return 'Loading...'
              if (error) return `Error!: ${error.message}`

              return <div>{data.user.name}</div>
            }
          }
        </Query>
      </ApolloProvider>
    )
  }
}

export default App
