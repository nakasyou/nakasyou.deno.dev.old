import { serve } from 'https://deno.land/std/http/server.ts'
import { Hono } from 'https://deno.land/x/hono/mod.ts'

const app = new Hono()

app.get('/',ctx=>{
  ctx.text("hello!")
})

serve(app.fetch)
