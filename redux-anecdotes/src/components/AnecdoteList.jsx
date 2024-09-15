import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector((state) => state.filter)

  const filteredAnecdotes = anecdotes.filter((anecdote) => 
    anecdote.content.toLowerCase().includes(filter.toLowerCase()))
  const dispatch = useDispatch()
  const sortedAnecdotes = filteredAnecdotes.slice().sort((a, b) => b.votes-a.votes)


  return (
    <div>

      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => {
               dispatch(vote(anecdote.id)), dispatch(setNotification(`you voted '${anecdote.content}'`))
            }}>
                vote</button>
          </div>
        </div>
        )}
      </div>
    )
  }


export default AnecdoteList
