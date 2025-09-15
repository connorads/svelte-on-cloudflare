# Demo

Script for a live walk-through of deploying SvelteKit on Cloudflare, then persisting a counter with KV.

## Pre-demo checklist

- Sign in to the correct account on the [Cloudflare dashboard](https://dash.cloudflare.com/)
- Remove any existing demo KV namespaces or projects so names are free
- Run `npx wrangler logout` to show the authentication flow
- Open the deployed reference app <https://example.sveltelondon.workers.dev/> as a preview of the result

## Demo flow

1. Scaffold and deploy a starter SvelteKit project
2. Add Cloudflare KV
3. Add some code that uses this KV

## 1. Scaffold + first deploy

1. `npm create cloudflare@2.51.4` (use `@latest` if you're doing this yourself not for a demo)
2. Choose `svelte-london` as the project folder
3. Accept the initial deploy during the wizard to get a live baseline
4. Show the generated files:
   - `wrangler.jsonc` for account/project bindings
   - `svelte.config.js` to highlight the Cloudflare adapter configuration
5. Visit the project in the [Cloudflare dashboard](https://dash.cloudflare.com/) to confirm the deployment

## 2. Add a KV namespace

Persisting the counter in KV keeps the focus on Cloudflare integrations (Durable Objects would be a better fit, but heavier to explain live).

1. `cd svelte-london`
2. `npx wrangler kv namespace create COUNTER_KV` (or create from the dashboard)
3. Accept Wrangler's prompt to add the binding to `wrangler.jsonc`
4. Generate Cloudflare platform types so `platform.env` is strongly typed:

   ```bash
   npm run cf-typegen
   ```

5. Point out how `platform` is destructured in `src/routes/sverdle/+page.server.ts` and mirror that approach in the counter route

## 3. Use KV in the SvelteKit route

1. Apply the prepared patch that wires up the counter endpoint:

   ```bash
   mise run patch
   ```

   (This copies snippets from the `example` folder. See the [mise demo README](https://github.com/connorads/mise/tree/master/demo) for context on mise.)
2. `npm run dev` and increment the counter to demonstrate the local behaviour
3. `npm run deploy`
4. In the dashboard, inspect:
   - The `COUNTER_KV` binding on the Worker
   - Request logs showing reads and writes

## Wrap-up

- Hopefully this demonstrates that it's possible to deploy a SvelteKit app to Cloudflare and use its developer platform
- Remind the audience KV is eventually consistent and better suited for read-heavy workloads—this demo favours simplicity over architecture
- Highlight that using `<form>` actions would offer progressive enhancement, but REST endpoints keep the live demo focused
- Link to the example project for attendees who want to dig deeper after the session
