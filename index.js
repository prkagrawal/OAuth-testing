const express = require('express')
const app = express()

const authRoutes = require('./routes/auth-routes')

const PORT = 3000

// Set up view engine
app.set('view engine', 'ejs')

// set up routes
app.use('/auth' ,authRoutes)

// create home route
app.get('/', (req,res) => {
	res.render('home')
})

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})