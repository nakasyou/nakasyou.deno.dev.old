import { serve } from 'https://deno.land/std/http/server.ts'
import * as hono from "https://deno.land/x/hono@v3.1.0/mod.ts";

const app = new hono.Hono()

app.get('/', (c) => c.text('Hello Deno!'))

serve(app.fetch)
