import { serve } from 'https://deno.land/std/http/server.ts'
import { Hono } from 'npm:hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello Deno!'))

serve(app.fetch)
