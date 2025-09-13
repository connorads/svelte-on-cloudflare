# Demo

Some notes to help run the live demo.

## Prep

1. Make sure you're logged into correct account first in browser on [Cloudflare dash](https://dash.cloudflare.com/)
2. Delete the KV and or project
3. `npx wrangler logout`
4. Open example app https://example.sveltelondon.workers.dev/

## Deploy

1. `npm create cloudflare@2.51.4` (`npm create cloudflare@latest` in practice)
2. Folder should be `svelte-london`
3. Deploy yes
4. Take a look at files
    - `wrangler.jsonc`
    - `svelte.config.js`

## Add KV

We're demoing the Cloudflare integrations here not crafting a well built app

- KV is eventually consistent for heavy reads so this isn't a good use case
- No live updates on the frontend

1. `cd svelte-london`
2. `npx wrangler kv namespace create COUNTER_KV` (could also create it in dashboard)
3. Accept adding it to `wrangler.jsonc`
4. Setup types
   `npm run cf-typegen`
   [Cloudflare Adapter Runtime APIs](https://svelte.dev/docs/kit/adapter-cloudflare#Runtime-APIs)
5. Destructure `platform` from [sverdle/+page.server.ts](svelte-london/src/routes/sverdle/+page.server.ts)

## Use KV

1. Add KV using example code
    - `mise run patch` (don't worry about `mise` this just runs a script to patch with `git`)
2. Run locally
3. Deploy
4. Look at project in [Cloudflare dash](https://dash.cloudflare.com/)
5. Look at bindings and logs
