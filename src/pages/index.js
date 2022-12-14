import * as React from "react"
import Header from "../components/header.js"

const IndexPage = () => {
    return (
      <div>
          <Header/>
          <h1>Gatsby Blog Site</h1>
      </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
