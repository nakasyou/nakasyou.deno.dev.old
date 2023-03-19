import { serve } from 'https://deno.land/std/http/server.ts'
import * as hono from "npm:hono";
import { jsx } from "npm:hono/jsx";
import indexPage from "./components/index.tsx";

const app = new hono.Hono()

app.get('/', (c) => c.html(indexPage))

serve(app.fetch)
