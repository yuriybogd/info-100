import React from "react"
import "./HistoryCards.scss"

export const HistoryCards = ({ statements }) => {
  console.log(statements)

  return (
    <div class="HistoryCards">
      {statements.reverse().map(({ date, id, question, percent }) => (
        <div class="card" key={id}>
          <div class="card__side card__side--back">
            <div class="card__cover">
              <h4 class="card__heading">
                <span class="card__heading-span">{date}</span>
              </h4>
            </div>
            <div class="card__details">
              <p className="question">Вопрос:</p>
              <p className="question-text">{question}</p>
            </div>
          </div>

          <div class="card__side card__side--front">
            <div class="card__theme">
              <div class="card__theme-box">
                <p class="card__title">{percent}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
