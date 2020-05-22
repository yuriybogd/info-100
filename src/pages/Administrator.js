import React from "react"
import { Jumbotron, Button } from "react-bootstrap"
import "./Administrator.scss"

export const Administrator = () => {
  return (
    <div className="Administrator">
      <Jumbotron>
        <h1>Administrator page</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  )
}