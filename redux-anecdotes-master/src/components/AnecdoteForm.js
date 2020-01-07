import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const addAnecdote = async event => {
      event.preventDefault()
      const text = event.target.anecdote.value
      event.target.anecdote.value = ''
      props.createAnecdote(text)
      props.setNotification(`you added ${text}`)
      setTimeout(() => props.setNotification(null), 5000)
  }

  return (
    <form onSubmit={addAnecdote}>
      <div><input name="anecdote" /></div>
      <button>create</button>
    </form>
  )
}




export default connect(null, { createAnecdote, setNotification })(AnecdoteForm)