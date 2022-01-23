/** @jsx h */
import { h, jsx } from 'server'
import hyper from 'lib/hyper.js'
import { z } from 'zod'
import * as R from 'ramda'

const Dev = z.object({
  _id: z.string(),
  handle: z.string(),
  fullname: z.string(),
  bio: z.string()
})

const toJSON = req => req.json.bind(req)()
const validate = x => Dev.parseAsync(x)
const of = Promise.resolve.bind(Promise)

export default (req) => 
  of(req)
    .then(toJSON)
    .then(R.over(R.lensProp('_id'), () => `dev-${crypto.randomUUID()}`))
    .then(validate)
    .then(hyper.data.add) // add to data, TODO add to search index
    .then(() => jsx(
    <div>
      <h2 class="text-3xl">Success!</h2>
      <a class="underline" href="/">Return to Home</a>
    </div>
    ))
    .catch(e => json({issues: e.issues}, { status: 500}))
