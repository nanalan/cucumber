// Mock webservice

const express = require('express')
const app = express()

app.get('/:op/:a/:b', (req, res) => {
  let a = parseFloat(req.params.a)
  let b = parseFloat(req.params.b)
  let op = req.params.op

  if (op === 'add') {
    res.json(a + b)
  } else if (op === 'div') {
    res.json(a / b)
  } else {
    res.status(406).json(`Unknown operation "${op}"`)
  }
})

app.listen(8000)
