import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import{ Query } from 'react-apollo'
import Client from './client'
import { SEARCH_REPOSITORYS } from './graphql'

const PER_PAGE = 5
const DEFAULT_STATE = {
  first: PER_PAGE,
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

  goPrevious(search) {
    this.setState({
      first: null,
      after: null,
      last: PER_PAGE,
      before: search.pageInfo.startCursor
    })
  }

  goNext(search) {
    this.setState({
      first: PER_PAGE,
      after: search.pageInfo.endCursor,
      last: null,
      before: null
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

              const search = data.search
              const repositoryCount = search.repositoryCount
              const repositoryUnit = repositoryCount === 1 ? 'Repository' : 'Repositories'
              const title = `GitHub Repositories Search Result - ${repositoryCount} ${repositoryUnit}`
              return (
                <React.Fragment>
                  <h2>{ title }</h2>
                  <ul>
                    {
                      search.edges.map(edge => {
                        const node = edge.node
                        return (
                          <li key={node.id}>
                            <a href={node.url} target="_brank" rel="noopener noreferror">{node.name}</a>
                          </li>
                        )
                      })
                    }
                  </ul>

                  {
                    search.pageInfo.hasPreviousPage === true ?
                    <button
                      onClick={this.goPrevious.bind(this, search)}
                    >
                      Previous
                    </button>
                    :
                    null
                  }

                  {
                    search.pageInfo.hasNextPage === true ?
                    <button
                      onClick={this.goNext.bind(this, search)}
                    >
                      Next
                    </button>
                    :
                    null
                  }

                </React.Fragment>
              )
            }
          }
        </Query>
      </ApolloProvider>
    )
  }
}

export default App
