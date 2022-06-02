const fs = require('fs/promises')
const express = require('express')
const cors = require('cors')
const _ = require('lodash')
const { v4: uuid } = require('uuid')

const app = express()
const port = 3004

app.get('/', (req: any, res: { send: (arg0: string) => void }) => {
	console.log('Heloo world!')
	res.send('Hello from data-validation')
})

app.listen(port, () => {
	console.log(`data-validation listening at http://localhost:${port}`)
})
