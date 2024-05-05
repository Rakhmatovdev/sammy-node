

import express from 'express'
const app = express()
const PORT =process.env.PORT || 7777

app.listen(PORT, () => console.log(`Example app listening on PORT: ${PORT}!`))

app.get('/', (req, res) => res.send('Hello World!'))