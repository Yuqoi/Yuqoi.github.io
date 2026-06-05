---
date: '2026-06-05T22:27:17Z'
draft: false
title: 'University Forum (WP)'

description: "Forum that i made for university (Work in Progress)"

tags:
  - Java
  - Spring boot
  - JWT
  - VueJS
  - CMS
  - Redis
  - Clamav
---

# About the project
Currently this project is still in development. At the moment, I wait for approbation from the university when I transfer schools.

## Problem of today's world
While studying at my current university, I noticed that many students struggled with same problem its communication and collaboration. There wasn't any central "software" / "website" where all students could communicate or interact, share ideas or organize projects. Of course we have **Facebook** but facebook is limited. its only single page and you cant have "groups" or more related topic

## My solution
I began working on a forum for my university. The idea was simple, every student and professor has an account, and the platform is organized by faculties, such as:
- Wydział cybernetyki (Faculty of cybernetics)
- Wydział chemii (Faculty of chemistry)
- etc...

Every student / professor can create "posts" on certain faculities for example: 
- Faculty of cybernetics: "I need people for new project !" **(Look at screenshots at bottom)**

And some students could come and be introduced with people that think like them :smile:

## Why didn't I upload it ?
Unfortunately, due to restrictions at my current university, I couldn't continue to work on this project.
But i didnt leave it like that :relieved:. 

I went to talk to different university and they accepted the request to create them this project :)


## What does it use ?
Everything is **conternized**

- **frontend:** 
    - VueJS (typescript)
- **backend:**
    - Java (Spring boot)
- **DB:**
    - Postgresql 
- **Cloud:** 
    - Azure
- **misc:**
    - When uploading it uses **clamav** to scan images for viruses 
    - uses **redis** for likes / dislikes for posts

## Future
- Synchronize student's accounts with schools database
- Maybe add third party tool for post creation (would rather to use mine)


## Screenshots of the project
**I added black squares** to cover the university logos 

{{< image src="/images/uni_forum1.png" alt="Forum landingpage" class="object-contain w-fit" >}}
{{< image src="/images/uni_forum2.png" alt="Forum homepage" class="object-contain w-fit" >}}
{{< image src="/images/uni_forum3.png" alt="Forum faculity" class="object-contain w-fit" >}}
{{< image src="/images/uni_forum4.png" alt="Forum post" class="object-contain w-fit" >}}