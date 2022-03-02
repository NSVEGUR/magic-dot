import app from './app'

const port = 4000

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(
    `ready - started server on 0.0.0.0:${port}, url: http://localhost:${port}`,
  )
})
