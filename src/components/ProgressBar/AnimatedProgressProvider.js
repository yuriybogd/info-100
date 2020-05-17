import React, { useState, useEffect } from "react"
import { Animate } from "react-move"

export const AnimatedProgressProvider = (props) => {
  const [state, setState] = useState({ isAnimated: false })
  const defaultProps = { valueStart: 0 }

  useEffect(() => {
    let interval = null
    if (props.repeat) {
      interval = window.setInterval(() => {
        setState({
          isAnimated: !state.isAnimated,
        })
      }, props.duration * 1000)
    } else {
      setState({
        isAnimated: !state.isAnimated,
      })
    }
    return () => {
      window.clearInterval(interval)
    }
  }, [])

  return (
    <Animate
      start={() => ({
        value: defaultProps.valueStart,
      })}
      update={() => ({
        value: [state.isAnimated ? props.valueEnd : props.valueStart],
        timing: {
          duration: props.duration * 1000,
          ease: props.easingFunction,
        },
      })}
    >
      {({ value }) => props.children(value)}
    </Animate>
  )
}
