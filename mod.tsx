/** @jsx h */
import { h, jsx, serve } from "server";
import Index from "./pages/index.jsx";
import DevNew from "./pages/devs/new.jsx";
import devs from "./api/devs/index.jsx";
import search from './api/devs/search.jsx';

serve({
  "/": () => jsx(<Index />),
  "/devs/new": () => jsx(<DevNew />),
  "/api/devs": devs,
  '/api/devs/search': search
});
