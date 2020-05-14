import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import "./HistoryList.scss"

export const HistoryList = ({statements}) => {
    console.log(statements)

    return (
      <ListGroup classNames="HistoryList">
        <TransitionGroup className="statements-list">
          {
                statements.map(({question, date, id}) => (
                    <CSSTransition key={id} timeout={500} classNames="item">
                        <ListGroupItem>
                            {question}
                            <span className="date-text">{date}</span>
                        </ListGroupItem>
                    </CSSTransition>
                ))
            }
        </TransitionGroup>
      </ListGroup>
    )
}
