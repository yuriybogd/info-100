import React from "react"
import "./HistoryList.scss"
import { Accordion, AccordionToggle, Card } from "react-bootstrap"

export const HistoryList = ({ statements }) => {


  return (
    <Accordion defaultActiveKey="0">
      {statements.reverse().map(({ date, id, question }, index) => (
        <Card key={id}>
          <Accordion.Toggle as={Card.Header} eventKey={index}>
            <span className="question">{question}</span>
            <span className="question-date">{date}</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={index}>
            <Card.Body>"Здесь будет инфа о процентах"</Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  )
}
