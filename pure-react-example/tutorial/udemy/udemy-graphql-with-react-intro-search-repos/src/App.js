import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import{ Query } from 'react-apollo'
import Client from './client'
import { SEARCH_REPOSITORYS } from './graphql'

const DEFAULT_STATE = {
  first: 5,
  after: null,
  before: null,
  last: null,
  query: "フロントエンドエンジニア"
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = DEFAULT_STATE
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      ...DEFAULT_STATE,
      query: event.target.value
    })
  }

  render() {
    const { query, first, last, before, after } = this.state
    console.log({query})
    return (
      <ApolloProvider client={Client}>
        <form>
          <input value={query} onChange={this.handleChange}></input>
        </form>
        <Query 
          query={SEARCH_REPOSITORYS}
          variables={{ query, first, last, before, after}}>
          {
            ({ loading, error, data}) => {
              if (loading) return 'Loading...'
              if (error) return `Error!: ${error.message}`
              console.log(data.search)
              const search = data.search
              const repositoryCount = search.repositoryCount
              const repositoryUnit = repositoryCount === 1 ? 'Repository' : 'Repositories'
              const title = `GitHub Repositories Search Result - ${repositoryCount} ${repositoryUnit}`
              return <h2>{ title }</h2>
            }
          }
        </Query>
      </ApolloProvider>
    )
  }
}

export default App
