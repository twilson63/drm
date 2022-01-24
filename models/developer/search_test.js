import { assert, assertEquals } from 'asserts'
import { Task } from 'lib/task.js'
import { search } from './search.js'


const test = Deno.test

test('search developers', () => {
  const query = () => Task.Resolved({ok: true, docs: [{handle: 'twilson63'}]})
  search({query})('twilson63')
    .fork(
      () => assert(false),
      (docs) => assertEquals(docs[0].handle, 'twilson63')
    )
})