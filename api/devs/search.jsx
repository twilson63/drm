/** @jsx h */
import { h, jsx, json } from 'server'
import { search } from 'models/developer/search.js'
import { Task } from 'lib/task.js'
import * as R from 'ramda'
import hyper from 'lib/hyper.js'

const { of } = Task 
const toURL = R.compose(x => new URL(x), R.prop('url'))
const toSearchParams = R.compose(x => new URLSearchParams(x), R.prop('search'))
const getParam = param => x => x.has(param) ? Task.Resolved(x.get(param)) : Task.Rejected({ok: false, message: 'search param q is required!'})
const query = (...args) => Task.fromPromise(hyper.search.query)(...args)
const log = x => (console.log(x), x)
const li = (doc) => <li>{doc.handle}</li>

export default req => 
  of(req)
    .map(toURL)
    .map(toSearchParams)
    .chain(getParam('q'))
    .chain(search({query}))
    .map(docs => jsx(<div>{R.map(li, docs)}</div>))
    .toPromise()
    .catch(e => jsx(<div>ERROR: {e.message}</div>))