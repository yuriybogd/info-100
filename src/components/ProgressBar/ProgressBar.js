import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "./ProgressBar.scss"
import { easeQuadInOut } from "d3-ease"
import { AnimatedProgressProvider } from "./AnimatedProgressProvider"

export const ProgressBar = ({percent}) => {
  // TODO:
  // Здесь буду алгоритмы проверки значения

  return (
    <div className="Progressbar">
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={percent}
        duration={2}
        easingFunction={easeQuadInOut}
        repeat
      >
        {(value) => {
          const roundedValue = Math.round(value)
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: "butt",
                pathColor: `#24221c`,
                textColor: "#24221c",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
          )
        }}
      </AnimatedProgressProvider>
    </div>
  )
}
