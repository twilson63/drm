import { Task } from "lib/task.js";
import { Dev } from "./schema.js";
import * as R from "ramda";

const validate = (x) => Task.fromPromise(Dev.parseAsync.bind(Dev))(x);
const generateId = R.over(
  R.lensProp("_id"),
  () => `dev-${crypto.randomUUID()}`,
);

/**
 * @param {Dev} dev 
 */
const renameIdentifier = (dev) =>
  R.fromPairs(R.map(
    R.ifElse(
      R.compose(R.equals("_id"), R.head),
      ([_k, v]) => ["id", v],
      R.identity,
    ),
    R.toPairs(dev),
  ));

/**
 * @param {Services} services
 */
export const create = ({ add, index }) =>
  /**
   * @param {Record<string, any>} data
   */
  (data) =>
    Task.of(data)
      .map(generateId)
      .map(x => (console.log(x), x))
      .chain(validate)
      .chain((dev) =>
        add(dev)
          // add handle and full name to search index
          .chain((result) => index(renameIdentifier(dev)).map(() => result))
      );
