// redux-anecdotes/src/components/AnecdoteForm.jsx
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.querySelector('input').value
    event.target.querySelector('input').value = ''

    dispatch(createAnecdote(content))

    dispatch(setNotification(`Created new anecdote "${content}"`, 5))
  }

  return (
    <div>
      <h2>Create a new anecdote</h2>
      <form onSubmit={addAnecdote}>
        <div><input /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
