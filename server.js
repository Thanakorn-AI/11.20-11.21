// 11.20-11.21/server.js
import jsonServer from 'json-server'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({
  static: join(__dirname, 'dist') // Serve the Vite-built frontend
})

// Prepare for Render deployment
const PORT = process.env.PORT || 3001

// Validator middleware
const validator = (request, response, next) => {
  const { content } = request.body
  if (request.method === 'POST' && (!content || content.length < 5)) {
    return response.status(400).json({
      error: 'too short anecdote, must have length 5 or more'
    })
  } else {
    next()
  }
}

// Ensure db.json exists
if (!fs.existsSync('db.json')) {
  const initialData = {
    "anecdotes": [
      {
        "content": "If it hurts, do it more often",
        "id": "47145",
        "votes": 0
      },
      {
        "content": "Adding manpower to a late software project makes it later!",
        "id": "21149",
        "votes": 0
      },
      {
        "content": "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "id": "69581",
        "votes": 0
      },
      {
        "content": "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "id": "36975",
        "votes": 0
      },
      {
        "content": "Premature optimization is the root of all evil.",
        "id": "25170",
        "votes": 0
      },
      {
        "content": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "id": "98312",
        "votes": 0
      }
    ]
  }
  fs.writeFileSync('db.json', JSON.stringify(initialData, null, 2))
}

// Configure routes
server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(validator)

// Use API routes under /api
server.use('/api', router)

// For all other routes, serve the frontend
server.use('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

// Start server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})