// src/services/anecdoteService.js
import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
    const object = { content, votes: 0 } // Match your anecdote structure
    const response = await axios.post(baseUrl, object)
    return response.data
  }
  
const update = async (id, updatedAnecdote) => {
const response = await axios.put(`${baseUrl}/${id}`, updatedAnecdote)
return response.data
}

  export default { getAll, createNew, update }
