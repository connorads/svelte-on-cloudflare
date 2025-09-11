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
- Intro to hosting with Cloudflare
- Demo
- Living with Cloudflare - some drawbacks
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
<!-- jump_to_middle -->
2 years ago...
---
<!-- end_slide -->
![image:width:100%](images/triver-demo.gif)
<!-- end_slide -->
![image:width:40%](images/cloudflare-logo.png)
<!-- alignment: center -->
<!-- column_layout: [1, 1] -->
<!-- column: 0 -->
<!-- pause -->
✅ Official adapter
<!-- pause -->
<!-- column: 1 -->
✅ Already using Cloudflare
<!-- end_slide -->
<!-- jump_to_middle -->
Demo time!
---
<!-- end_slide -->
<!-- jump_to_middle -->
Life in the Cloud - what has flared up?
---
<!-- end_slide -->
Pages vs Workers
---
<!-- alignment: center -->
<!-- column_layout: [10, 1, 10] -->
<!-- column: 0 -->
Pages
***
❌ Early all in one offering
<!-- new_line -->
❌ Only real-time logs
<!-- new_line -->
❌ Limited flexibility
<!-- column: 2 -->
Workers
***
✅ Serverless platform, now host apps
<!-- new_line -->
✅ Logs with logpush
<!-- new_line -->
✅ Durable Objects, Cron triggers
<!-- pause -->
<!-- reset_layout -->
<!-- alignment: center -->
<!-- new_lines: 1 -->
> [!warning]
> Cloudflare now advise starting with workers. There is also a migration guide (and an llm prompt)!
<!-- end_slide -->
Preview deployments
---
![image:width:80%](images/previews.png)
<!-- end_slide -->
Preview deployments
---
![image:width:80%](images/testing-1,2,3,4.jpg)
<!-- end_slide -->
Env strangeness
---
![image:width:100%](images/active-deployment.png)
<!-- end_slide -->
Env strangeness
---
![image:width:100%](images/env-vars.png)
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
<!-- jump_to_middle -->
Questions?
---