import gql from 'graphql-tag'

export const SEARCH_REPOSITORIES = gql`
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

export const ADD_STAR = gql`
    mutation addStar($input: AddStarInput!) {
        addStar(input: $input) {
            starrable {
                id
                viewerHasStarred
            }
        }
    }
`

export const REMOVE_STAR = gql`
    mutation removeStar($input: RemoveStarInput!) {
        removeStar(input: $input) {
            starrable {
                id
                viewerHasStarred
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

