/** @jsx h */
import { h } from "server";
import Layout from "../_layout.tsx";

export default () => (
  <Layout>
    <header class="my-8 text-center">
      <h1 class="text-5xl">DRM - New Developer</h1>
    </header>
    <main class="max-w-5xl mx-auto">
      <h2>Add New Developer</h2>
      <div id="error"></div>
      <form
        hx-post="/api/devs"
        hx-ext="json-enc"
        _="on htmx:beforeSwap if detail.xhr.status is 501 set detail.target to #error then set detail.shouldSwap to true"
      >
        <div class="form-control">
          <label class="label" for="handle">
            <span class="label-text">Handle</span>
          </label>
          <input
            class="input input-bordered"
            type="text"
            id="handle"
            name="handle"
            required
          />
        </div>
        <div class="form-control">
          <label class="label" for="fullname">
            <span class="label-text">Fullname</span>
          </label>
          <input
            id="fullname"
            name="fullname"
            class="input input-bordered"
            type="text"
          />
        </div>
        <div class="form-control">
          <label class="label" for="bio">
            <span class="label-text">Bio</span>
          </label>
          <textarea id="bio" name="bio" class="textarea h24 textarea-bordered">
          </textarea>
        </div>
        <div class="mt-8 flex items-center justify-center">
          <button class="btn btn-primary mr-16">Submit</button>
          <a class="btn" role="button" href="/">Cancel</a>
        </div>
      </form>
    </main>
  </Layout>
);
