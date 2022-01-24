/** @jsx h */
import { h, json, jsx } from "server";
import hyper from "lib/hyper.js";
import { Task } from "lib/task.js";
import { create } from "models/developer/create.js";

const add = (data) => Task.fromPromise(hyper.data.add)(data);
const index = (data) => Task.fromPromise(hyper.search.add)(data.id, data);
const toJSON = (req) => Task.fromPromise(req.json.bind(req))();
const of = Task.of;
//const log = x => (console.log(x), x)

export default (req) =>
  of(req)
    .chain(toJSON)
    .chain(create({add, index}))
    .map((result) => result.ok 
      ? jsx(
        <div>
          <h2 class="text-3xl">Success!</h2>
          <a class="underline" href="/">Return to Home</a>
        </div>,
        { status: 201 }
        ) 
      : jsx(
        <div>
          <h2 class="text-3xl">Server Error!</h2>
        </div>, 
        { status: 500 }
      ) 
    )
    .toPromise()
    .catch((e) => (
      console.log(e),
      jsx(
        <div>
          <h2 class="text-3xl">Error!</h2>
          <p>{JSON.stringify(e.issues)}</p>
        </div>,
        { status: 501 },
      )
    ));
