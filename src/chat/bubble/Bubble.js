import React from 'react'
import Answer from './Answer'
import Question from './Question'

const Bubble = ({ children, direction }) => {
  if (direction === 'ANSWER') {
    return (
      <Answer>
        {children}
      </Answer>
    )
  }

  return (
    <Question>
      {children}
    </Question>
  )
}

export default Bubble
