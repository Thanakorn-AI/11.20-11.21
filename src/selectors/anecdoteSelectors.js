// src/selectors/anecdoteSelectors.js
import { createSelector } from 'reselect'

// Input selectors (get raw state slices)
const getAnecdotes = state => state.anecdotes
const getFilter = state => state.filter

// Memoized selector for filtered and sorted anecdotes
export const getFilteredAnecdotes = createSelector(
  [getAnecdotes, getFilter],
  (anecdotes, filter) => {
    return [...anecdotes]
      .sort((a, b) => b.votes - a.votes)
      .filter(anecdote =>
        filter === 'ALL' || anecdote.content.toLowerCase().includes(filter.toLowerCase())
      )
  }
)
