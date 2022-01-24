/** @jsx h */
import { h, jsx, serve } from "server";
import Index from "./pages/index.jsx";
import DevNew from "./pages/devs/new.jsx";
import devs from "./api/devs/index.jsx";

serve({
  "/": () => jsx(<Index />),
  "/devs/new": () => jsx(<DevNew />),
  "/api/devs": devs,
});
