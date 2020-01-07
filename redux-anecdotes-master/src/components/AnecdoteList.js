import React from 'react'
import { connect } from 'react-redux'

import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = (props) => {


  const handleClick = (anecdote) => {
    return () => {
      props.dispatch(vote(anecdote.id))
      props.dispatch(setNotification(`you voted ${anecdote.text}`))
      setTimeout(() => props.dispatch(setNotification(null)), 5000)
    }
  }

  console.log('Here again')

  if (typeof props.anecdotes !== 'undefined') {

  return (
    <div>
    {props.anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.text}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={handleClick(anecdote)}>vote</button>
        </div>
      </div>
    )}
    </div>
  )
  } else {

  return (
    <br></br>
  )
  }
}

const mapStateToProps = (state) => {
  return {
      anecdotes: state.anecdotes
  }
}

export default connect(mapStateToProps)(AnecdoteList)