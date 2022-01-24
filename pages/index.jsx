/** @jsx h */
import { h } from "server";
import Layout from "./_layout.tsx";

export default function () {
  return (
    <Layout>
      <header class="my-8">
        <h1 class="text-5xl text-center">DRM</h1>
      </header>
      <main class="max-w-5xl mx-auto flex flex-col">
        <section class="text-right">
          <a href="/devs/new" class="btn btn-primary">Add New</a>
        </section>
        <section class="">
          <h2 class="text-2xl text-center mb-8">Find Developer</h2>
          <div class="flex items-center justify-center">
            <form class="form">
              <div class="form-control">
                <input name="q" class="input input-bordered" type="text">
                </input>
              </div>
              <div class="mt-8 text-center">
                <button class="btn btn-primary">Search</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}
