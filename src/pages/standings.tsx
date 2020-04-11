import React from "react"
import SEO from "../components/seo"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import { StandingsTable } from "../components/StandingsTable"

export const query = graphql`
  query {
    allPlayer {
      edges {
        node {
          id
          first
          last
          childrenGame {
            id
            playerOne
            playerOneScore
            playerTwo
            playerTwoScore
            date
          }
        }
      }
    }
  }
`

export default ({ data: { allPlayer } }: PageProps<StandingsQuery>) => (
  <Layout>
    <SEO title="Standings" />
    <div>
      <h1>Standings</h1>
      <StandingsTable players={allPlayer.edges} />
    </div>
  </Layout>
)
