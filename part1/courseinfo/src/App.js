import React from 'react'

const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
} 

// Exercise 1.2 was not worded appropriately to understand what the task actually needed.

const Content = (props) => {  
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Part = (props) => {
    return(
    <>
      <p>{props.part} {props.exercises}</p>
    </>
    )
  }
  return(
    <div>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </div>
  )
} 

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
} 

const App = () => {
  const course = 'Half Stack application development'

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total="31" />
    </div>
  )
}

export default App