import gql from 'graphql-tag'

export const SEARCH_REPOSITORYS = gql`
    query searchRepositorys($first: Int, $after: String, $last: Int, $before: String, $query: String!) {
        search(first: $first, after: $after, before: $before, last: $last, query: $query, type: REPOSITORY) {
            repositoryCount
            pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
            }
            edges{
            cursor
            node {
                ... on Repository {
                id
                name
                url
                stargazers {
                    totalCount
                }
                viewerHasStarred
                }
            }
            }
        }
    }
`

export const ME = gql`
  query me { 
    user(login: "so-heee") { 
      name
      avatarUrl
    }
  }
`

