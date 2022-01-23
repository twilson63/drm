/** @jsx h */
import { h, jsx, serve } from 'server'

serve({
  '/': () => jsx(<html>
    <head>
      <title>DRM</title>
    </head>
    <body>
      <h1>Hello World</h1>
    </body>
  </html>)
})