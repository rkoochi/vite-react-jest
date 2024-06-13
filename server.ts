import express from 'express'
import path from 'path'

const app = express()
const port = process.env.PORT || 3000

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../build')))

// Handle React routing, return all requests to the React app
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'))
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
