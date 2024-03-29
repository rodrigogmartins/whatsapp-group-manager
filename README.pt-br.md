# Whatsapp Group Manager

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md) [![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

## Problema
Há alguns anos atrás enquanto conversava com um amigo sobre questões de marketing digital e a realização de campanhas sorgiu uma necessidade interessante que não foi observada em um primeiro momento.

Imagine que você estará realizando uma campanha de marketing para vender o seu novo curso digital e, para isso, deseja criar um grupo de whatsapp com todos os seus leads ou clientes para, por exemplo, compartilhar conteúdos e enviar produtos futuros. Bem simples não?

O fato é que os grupos de whatsapp possuem um limite de integrantes, portanto é necessário realizar a criação de diversos grupos, normalmente nomeados de forma que apresentem os números, exemplo: Curso DevExemplo #1, Curso DevExemplo #2 ... Curso DevExemplo #N. 

Com isso, fica impossível deixar o link para acesso ao grupo no anúncio da campanha, por exemplo, pois em segundos um grupo pode lotar e então o link deverá ser substituído pelo próximo grupo.


## Solução
Pensando nesse problema, surgiu a ideia de criar um sistema onde podemos cadastrar de forma simples uma quantidade razoável de link de convite para grupos de whatsapp e então gerar uma URL customizada de acesso a esses grupos.

Com isso assim que um grupo lota, o cliente é redirecionado para o próximo, bastanto o responsável pela campanha criar uma quantidade suficiente de grupos para que tudo funciona da melhor forma.

Caso durante o processo tenha-se a noção de que irão faltar grupos, basta adicionar mais links que eles passarão a ser utilizados assim que os anteriores forem lotados.


## Rodando o projeto


### docker-compose

```bash
$ docker-compose up -d
```

* Para acompanhar os logs da aplicação rode:

```bash
$ docker compose logs wgm_server -f
```


### Como inicializar o servidor

###### ⚠️ Não esqueça de criar o arquivo .env com suas credenciais necessárias para rodar o programa

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

### Como rodar os testes

```bash
$ cd server || cd webserver
$ npm i
$ npm run test
```

### Como inicializar o front-end

```bash
$ cd website
$ npm i
$ npm start
```

## Acessando o pgAdmin

1. Após rodar o docker-compose, em seu navegador, acesse **http://localhost:9000**
2. Clique em adicionar servidor, de um nome para o servidor
3. Na aba **Conexão**, informe o seguintes dados:
  * host: db
  * username: admin@user.com
  * senha: 123456
4. Após acessar, selecione o banco de dados **wgm**, onde estarão as tabelas da aplicação