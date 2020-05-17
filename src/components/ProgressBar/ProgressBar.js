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
        duration={4}
        easingFunction={easeQuadInOut}
        repeat
      >
        {(value) => {
          const roundedValue = Math.round(value)
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              
              /* This is important to include, because if you're fully managing the
        animation yourself import AnimatedProgressProvider from './AnimatedProgressProvider';
, you'll want to disable thimport GradientSVG from './GradientSVG';
e CSS animation. */
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // Text size
                // textSize: "25px",

                // How long animation takes to go from one percentage to another, in seconds
                // pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `#493240`,
                textColor: "#3f2b96",
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
