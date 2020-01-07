import anecdoteService from '../services/anecdotes'

export const vote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const createAnecdote = (text) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(text)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const voteAnecdote = (id) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update(id)
    dispatch({
      type: 'VOTE_ANECDOTE',
      data: {id, updatedAnecdote: updatedAnecdote}
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToVote = state.find(n => n.id === id)
      const votedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote : votedAnecdote)
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    case 'INIT_ANECDOTES':
      return state.concat(action.data)
    case 'VOTE_ANECDOTE':
      return state.map(anecdote => 
        anecdote.id === action.data.id
        ? action.data.updatedAnecdote
        : anecdote
      )
    default:
      return state
  }
}

export default anecdoteReducer