---
title: Svelte on Cloudflare
sub_title: Tips and guide
authors: 
 - Mark Ridge
 - Connor Adams
---

Who are we
---

<!-- column_layout: [1, 1] -->
<!-- column: 0 -->
<!-- alignment: center -->
Connor Adams
![image:width:100%](images/connorads.jpg)
Staff Engineer @ TRIVER LTD
<!-- column: 1 -->
Mark Ridge
![image:width:100%](images/mark-profile.jpeg)
Software Engineer @ TRIVER LTD
<!-- end_slide -->

Poll time
---
<!-- jump_to_middle -->
<!-- alignment: center -->
What do you host SvelteKit on? (1 minute)
<!-- end_slide -->
Options (Vercel etc - just images) #TODO: Set for tv on day
---
<!-- alignment: center -->
<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
Vercel  
![image:width:40%](images/vercel-logo.png)
<!-- column: 1 -->
Netlify  
![image:width:40%](images/netlify-logo-square.png)
<!-- alignment: center -->
<!-- new_lines: 4 -->
<!-- column_layout: [1, 1] -->
<!-- column: 0 -->
Amplify  
![image:width:40%](images/aws-amplify.png)
<!-- column: 1 -->
<!-- pause -->
Cloudflare  
![image:width:40%](images/cloudflare-logo.png)
<!-- end_slide -->
Options (Vercel etc - pro cons -> cloudflare on last column)
---
<!-- end_slide -->
Context - why are we using Cloudflare (1 minute)
---
 - We needed to add frontend to our stack
 - Been using svelte internally
 - We use cloudflare (maybe show screenshot of integrations-frontend)
<!-- end_slide -->
What is cloudflare like as dev ex (demo with cli)
---

Covering:
 - Boot with cli (2 minutes)
 - Intro to svelte adapter (1 minute)

 TODO APP?
 - Go through wrangler (1 minute)
 - Show previews (2 minutes)
 - Observability (see logs, log push etc) (1 minute)
 - Kv prototyping maybe
 - Bonus with d1 or durable objects
<!-- end_slide -->
Drawbacks - Pages vs Workers (1 minute)
---
<!-- end_slide -->
Drawbacks - some wierdness with envs
---
<!-- end_slide -->
Conclusion - give it a go (1 minute)
---
<!-- end_slide -->
Questions?
---
Prep:
 - Pricing
 - Why
---