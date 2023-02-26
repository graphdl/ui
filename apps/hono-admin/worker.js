import { Hono } from 'hono'
import { html } from 'hono/html'
// import { Layout } from './html'
// import { jsx } from 'hono/jsx'
// import { Admin } from 'ui'

const app = new Hono()

app.get('*', (c) => c.html(
  html`<!DOCTYPE html>
    <h1>Hello! ${username}!</h1>`
))

export default app