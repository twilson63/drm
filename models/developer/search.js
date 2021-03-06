import * as R from 'ramda'
import { Task } from 'lib/task.js'

const { of } = Task

export const search = ({query}) => criteria =>
  of(criteria)
    .chain(query)
    .map(x => (console.log(x), x))
    .map(R.prop('matches'))
