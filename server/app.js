const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())


app.get('/test', (req, res) => {
  res.send({model: '奥迪q7 尊享版', carId: '川A '})
})


app.listen(8081, () => {
  console.log('[service start at] >Local: http://127.0.0.1:8081')
})