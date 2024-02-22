# Whatsapp Group Manager

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md) [![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

## Problem
A few years ago, while talking to a friend about digital marketing issues and running campaigns, an interesting need emerged that was not noticed at first.

Imagine that you will be running a marketing campaign to sell your new digital course and, to do so, you want to create a WhatsApp group with all your leads or customers to, for example, share content and send future products. Pretty simple, right?

The fact is that WhatsApp groups have a limit of members, so it is necessary to create several groups, normally named so that they present the numbers, for example: DevExample Course #1, DevExample Course #2 ... DevExample Course # N.

This makes it impossible to leave the link to access the group in the campaign advertisement, for example, as within seconds a group can fill up and then the link must be replaced by the next group.


## Solution
Thinking about this problem, we came up with the idea of ​​creating a system where we can simply register a reasonable number of invitation links for WhatsApp groups and then generate a customized URL to access these groups.

As a result, as soon as a group fills up, the customer is redirected to the next one, the person responsible for the campaign simply needs to create a sufficient number of groups so that everything works optimally.

If during the process you realize that groups will be missing, simply add more links and they will be used as soon as the previous ones are full.

## TODO
- [ ] Criar fluxo de login/logout
- [ ] Criar diagrama do sistema

## Running the project

### docker-compose

```bash
$ docker-compose up -d
```

* Para acompanhar os logs da aplicação rode:

```bash
$ docker compose logs wgm_server -f
```


### Starting the server

###### ⚠️ Don't forget to create the .env file with your credentials needed to run the program

```bash
$ cd server
$ npm i
$ npm run dev
```

-> Run with docker

```bash
$ cd server
$ npm i
$ npm run build
$ docker build -t wgm:1.0.0 . 
$ docker run -p 8080:8080 wgm:1.0.0
```

### Running tests

```bash
$ cd server || cd webserver
$ npm i
$ npm run test
```

### Starting the front-end

```bash
$ cd website
$ npm i
$ npm start
```