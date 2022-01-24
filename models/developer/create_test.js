import { create } from "./create.js";
import { Task } from "lib/task.js";
import { assert } from "asserts";

const test = Deno.test;

const dev = {
  handle: "foo",
  fullname: "Foo Bar",
  bio: "A developer",
};

const badDev = {
  handle: "foo",
  bio: "A bad developer",
};

test("create dev record", () => {
  const add = () => Task.Resolved({ ok: true });
  const index = () => Task.Resolved({ ok: true });

  create({ add, index })(dev)
    .fork(
      () => assert(false),
      () => assert(true),
    );
});

test("cant create dev record", () => {
  const add = () => Task.Resolved({ ok: true });
  const index = () => Task.Resolved({ ok: true });

  create({ add, index })(badDev)
    .fork(
      () => assert(true),
      () => assert(false),
    );
});

test("error with adding dev", () => {
  const add = () => Task.Rejected({ ok: false });
  const index = () => Task.Resolved({ ok: true });

  create({ add, index })(dev)
    .fork(
      () => assert(true),
      () => assert(false),
    );
});

test("error with indexing dev", () => {
  const add = () => Task.Resolved({ ok: true });
  const index = () => Task.Rejected({ ok: false });

  create({ add, index })(dev)
    .fork(
      () => assert(true),
      () => assert(false),
    );
});
