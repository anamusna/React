const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('interesting and complicated!'))
app.get('/hello', (req, res) => res.send('thats awesome!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))