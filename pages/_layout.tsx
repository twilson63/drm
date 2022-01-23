/** @jsx h */
import { h } from "server"
import type { JSX } from 'server'

interface Props {
  children?: JSX.Element | JSX.Element[]
}

export default function ({children} : Props) {
  return (
<html>
  <head>
    <meta charSet="utf-8" />
    <title>DRM</title>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@1.25.0/dist/full.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css" rel="stylesheet" type="text/css" />
    <script src="https://unpkg.com/htmx.org@1.6.1"></script>
    <script src="https://unpkg.com/htmx.org/dist/ext/json-enc.js"></script>
  </head>
  <body>
    {children}
  </body>
</html>    
  )
}