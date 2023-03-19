import { serve } from 'https://deno.land/std/http/server.ts'
import * as hono from "npm:hono";
import { jsx } from "npm:hono/jsx"

const app = new hono.Hono()

app.get('/', (c) => c.text('Hello Deno!'))

serve(app.fetch)
