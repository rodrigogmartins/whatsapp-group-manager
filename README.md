# Group Manager

## Problema
Há alguns anos atrás enquanto conversava com um amigo sobre questões de marketing digital e a realização de campanhas sorgiu uma necessidade interessante que não foi observada em um primeiro momento.

Imagine que você estará realizando uma campanha de marketing para vender o seu novo curso digital e, para isso, deseja criar um grupo de whatsapp com todos os seus leads ou clientes para, por exemplo, compartilhar conteúdos e enviar produtos futuros. Bem simples não?

O fato é que os grupos de whatsapp possuem um limite de integrantes, portanto é necessário realizar a criação de diversos grupos, normalmente nomeados de forma que apresentem os números, exemplo: Curso DevExemplo #1, Curso DevExemplo #2 ... Curso DevExemplo #N. 

Com isso, fica impossível deixar o link para acesso ao grupo no anúncio da campanha, por exemplo, pois em segundos um grupo pode lotar e então o link deverá ser substituído pelo próximo grupo.


## Solução
Pensando nesse problema, surgiu a ideia de criar um sistema onde podemos cadastrar de forma simples uma quantidade razoável de link de convite para grupos de whatsapp e então gerar uma URL customizada de acesso a esses grupos.

Com isso assim que um grupo lota, o cliente é redirecionado para o próximo, bastanto o responsável pela campanha criar uma quantidade suficiente de grupos para que tudo funciona da melhor forma.

Caso durante o processo tenha-se a noção de que irão faltar grupos, basta adicionar mais links que eles passarão a ser utilizados assim que os anteriores forem lotados.

## TODO
- [ ] Garantir o funcionamento do front-end (Validar se falta algo)
- [ ] Rodar a stack toda com docker-compose
- [ ] Criar diagrama do sistema
- [ ] Deploy na AWS
- [ ] Github actions
- [ ] Garantir alta disponibilidade e resiliência a múltiplas chamadas / segundo
- [ ] Teste de carga (???) - Se sim, realizar os testes e colocar print dos resultados
- [ ] Testes de integração (back-end)
- [ ] Testes de front-end (se necessário)
- [ ] README em inglês

(Olhar elastic bean stalk)

## Rodando o projeto


### Rodando com docker-compose

```bash
$ cd server
$ npm i
$ npm run build
$ docker build -t wgm:0.0.0 .
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

### Como inicializar o front-end

###### ⚠️ Não esqueça de criar o arquivo .env com suas credenciais necessárias para rodar o programa
```bash
$ cd website
$ npm i
$ npm start
```

### Como rodar os testes

```bash
$ cd server || cd webserver
$ npm i
$ npm run test
```