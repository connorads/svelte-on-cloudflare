---
title: Svelte on Cloudflare
sub_title: Tips and guide
authors: 
 - Mark Ridge
 - Connor Adams
---
Agenda 
---
<!-- incremental_lists: true -->
<!-- list_item_newlines: 3 -->
- Why Cloudflare?
- Demo
- Living with Cloudflare - good and bad
<!-- end_slide -->

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
What do you host SvelteKit on?
<!-- end_slide -->
Sveltekit Hosting - there are many options!
---
<!-- end_slide -->
Sveltekit Hosting - there are many options!
---
<!-- alignment: center -->
![image:width:100%](images/mash-1.png)
<!-- end_slide -->
Sveltekit Hosting - there are many options!
---
<!-- alignment: center -->
![image:width:100%](images/mash-2.png)
<!-- end_slide -->
Sveltekit Hosting - there are many options!
---
<!-- alignment: center -->
![image:width:100%](images/mash-3.png)
<!-- end_slide -->
Sveltekit Hosting - there are many options!
---
<!-- alignment: center -->
![image:width:100%](images/mash-4.png)
<!-- end_slide -->
Sveltekit Hosting - there are many options!
---
<!-- alignment: center -->
![image:width:100%](images/cloudflare-logo.png)
<!-- end_slide -->
Sveltekit Hosting - there are many options!
---
<!-- alignment: center -->
![image:width:100%](images/cloudflare-why.png)
<!-- end_slide -->
![image:width:40%](images/cloudflare-logo.png)
<!-- alignment: center -->
<!-- column_layout: [1, 1] -->
<!-- column: 0 -->
<!-- pause -->
✅ Official adapter
<!-- pause -->
<!-- column: 1 -->
✅ Already using Cloudflare for DNS, Bot protection
<!-- end_slide -->
<!-- jump_to_middle -->
Demo time!
---
<!-- end_slide -->
Counter app demo
---
![image:width:100%](images/qr-deployment.png)
<!-- end_slide -->
<!-- jump_to_middle -->
Life in the Cloud - what has flared up?
---
<!-- end_slide -->
Pages vs Workers
---
> [!note]
> TLDR: Two different ways of hosting Sveltekit on Cloudflare -> use Workers
<!-- incremental_lists: true -->
<!-- list_item_newlines: 2 -->

Why? Workers
- have full observability
- has a vite plugin for better local development
- make it easier to add Durable Objects
- have Cron triggers
- recommended by Cloudflare over Pages
<!-- pause -->
> [!important]
> Why care?  
> Cloudflare is still evolving
<!-- end_slide -->
<!-- jump_to_middle -->
> [!WARNING]  
> Cloudflare with Sveltekit can feel like a lonely world.
<!-- end_slide -->
Preview deployments
---
![image:width:100%](images/previews.png)
<!-- end_slide -->
Preview deployments
---
![image:width:100%](images/testing-1,2,3,4.jpg)
<!-- end_slide -->
Can only see environment variables for latest build
---
![image:width:100%](images/active-deployment.png)
<!-- end_slide -->
Can only see environment variables for latest build
---
![image:width:100%](images/env-vars.png)
> [!note]
> If you don't have this problem, let us know
<!-- end_slide -->
Conclusion - give it a go
---
<!-- pause -->
<!-- incremental_lists: true -->
💡 What Cloudflare offers 
<!-- new_line -->

<!-- pause -->
💡 How you get started 
<!-- new_line -->

<!-- pause -->
💡 Some of the drawbacks

<!-- pause -->
<!-- jump_to_middle -->
<!-- new_lines: 3 -->
> [!warning]
> This is not necessarily the best place to host SvelteKit. 
> Give it a go!
<!-- end_slide -->
Questions?
---
<!-- column_layout: [1, 1] -->
<!-- column: 0 -->
<!-- jump_to_middle -->
Demo code repo
---

<!-- column: 1 -->


![image:width:100%](images/qr-repo.png)