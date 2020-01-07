import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {

  const addAnecdote = async event => {
      event.preventDefault()
      const text = event.target.anecdote.value
      event.target.anecdote.value = ''
      console.log(`THIS LITTLE SHIT RIGHT HERE: ${text}`)
      const newAnecdote = await anecdoteService.createNew(text)
      props.dispatch(createAnecdote(newAnecdote))
      props.dispatch(setNotification(`you added ${text}`))
      setTimeout(() => props.dispatch(setNotification(null)), 5000)
  }

  return (
    <form onSubmit={addAnecdote}>
      <div><input name="anecdote" /></div>
      <button>create</button>
    </form>
  )
}




export default connect(null)(AnecdoteForm)