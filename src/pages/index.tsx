import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <h1>Order 66</h1>
    <p>
      We are an X-Wing league located in Saskatoon, Saskatchewan. Our main goal is to grow the X-Wing community in
      Saskatoon and the surrounding areas. The focus is simply on playing and having fun. Many of the existing members
      of the community have been playing for years and are always happy to see and help out new players.
    </p>
    <p>
      There is a casual game night every other Tuesday evening at Dragon's Den Games from 6-9 pm. Dragon's Den
      generously provides us this space for free. This is a great evening to come and watch a game or try out a match if
      you are a new player.
    </p>
    <p>
      If you are interested in joining the league please check out the information page under the league menu option.
      Also check out the links section to find links to the local community facebook pages as well as the official
      Fantasy Flight Games squad builder and game documents.
    </p>
    <p>
      There is hope to one day set up a system to record and comment on casual games, and in the future official
      tournaments. If you have any interest or experience in doing this type of streaming then please let us know.
    </p>
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
    {/*  <Image/>*/}
    {/*</div>*/}
  </Layout>
)

export default IndexPage
