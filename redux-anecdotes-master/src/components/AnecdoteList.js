import React from 'react'
import { connect } from 'react-redux'

import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = (props) => {


  const handleClick = (anecdote) => {
    return () => {
      props.voteAnecdote(anecdote.id)
      props.setNotification(`you voted ${anecdote.text}`)
      setTimeout(() => props.setNotification(null), 5000)
    }
  }

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

}

const mapStateToProps = (state) => {
  return {
      anecdotes: state.anecdotes
  }
}

export default connect(mapStateToProps, {voteAnecdote, setNotification})(AnecdoteList)