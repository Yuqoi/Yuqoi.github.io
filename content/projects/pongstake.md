---
date: "2026-05-14T23:57:40Z"
draft: false
title: "Pongstake"

description: "Service for getting predictions based on my own ai model"

# github: "https://github.com/yuqoi/flora"
demo: "https://yuqoi.com"

tags:
  - Java
  - Spring boot
  - Docker
  - PostgreSQL
  - Typescript
  - Nextjs
  - Python
  - XGBoost
---

# What does this project even do ?

pongstake is a simple **SaaS** website that predicts ping-pong matches (currently from <ins>**WTT league**</ins>). Simply pick your wanted matches -> pay for the result -> get pdf in mail with the results :)

{{< video src="/videos/pongstake.mp4" class="rounded-none">}}

## Usage

We go to predictions section, fill match deatils and your currency (US or EUR), pay the required amount and wait for email with predictions

## Regarding the used model

I created my own predicting model based on the **XGBoost algorithm** based on <u>1mln+</u> matches correctly selected and refactored. The model contained **~32k players** so thats kinda a lot. The model had **~80% accuracy**

## Future of the project

- Currently im redesigning way of getting data (unfortunately i will keep that as a secret :wink:):
  - make a new model (little bit better than current)
- Automate with **apache airflow** to get new data everyday, so model can learn on new data:
  - of course if there are new matches on current day
- refactor the architecture:
  - current architecture acts as a **"microservice"** which is not bad but thats too much for a little project. I would like to keep everything as a **monolith** for its simplicity and redesign the main backend to be in python rather than spring boot despite my liking to it :heart::kissing_closed_eyes:
- Ship service to any cloud service

