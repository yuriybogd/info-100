import React from "react"
import "./HistoryList.scss"
import { Accordion, AccordionToggle, Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPercent, faQuestion
} from "@fortawesome/free-solid-svg-icons"

export const HistoryList = ({ statements }) => {
  console.log(statements)

  return (
    <div className="HistoryList">
      {statements.reverse().map(({ date, id, question, percent }) => (
        <Card border="light" key={id}>
          <Card.Header>{date}</Card.Header>
          <Card.Body>
            <Card.Title>
              <div className="percent-icon">
                <FontAwesomeIcon icon={faPercent} />
              </div>
              <div className="percent-text">{percent}</div>
            </Card.Title>
            <Card.Text>
              <div className="question-icon">
                <FontAwesomeIcon icon={faQuestion} />
              </div>
              <div className="question-text">{question}</div>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}
