## DESAFIO AU

### Explicação da solução e justificativas de uso das bibliotecas
Foi desenvolvido uma solução do tipo API.

---

    Na pasta api tem os arquivos referentes a inicialização da API e rotas de requisição.
    na pasta api/model temos os arquivos referentes a classe Restaurants e suas devidas funções.
    Na pasta api/tests temos os arquivos referentes aos testes unitários dos métodos da classe Restaurants.

---

A biblioteca **express** foi utilizada para a criação da API, pois é uma biblioteca de fácil utilização e que permite a criação de rotas de requisição, além de ser muito utilizada no meio dos desenvovedores NodeJS.

---

Foi utilizado a linguagem base **typescript** para a criação da API, pois é uma linguagem que permite a tipagem de variáveis, o que facilita a manutenção do código e a leitura do mesmo.

---

Foi utilizado o framework **Jest** para a criação dos testes unitários, pois é um framework que permite a criação de testes unitários de forma simples e rápida.

---

Foi utilizado o **docker** para conteinerização da API e do front-end, pois é uma ferramenta que permite a criação de containers de forma simples e rápida, além de ser uma ferramenta muito utilizada no meio DevOps. O Docker permite criar e configurar ambientes isolados para a execução de aplicações, facilitando a criação de ambientes de desenvolvimento, testes e produção.

Em conjunto ao docker foi utilizado o **docker-compose** para a criação de um arquivo de configuração que permite a criação de múltiplos containers de forma simples e rápida.

---

Utilizei o **yarn** para a instalação das dependências do projeto, pois é um gerenciador de pacotes que tem um desempenho melhor que o npm, consegue resolver conflitos entre pacotes que o npm não consegue. Além disso, o yarn permite a criação de scripts para a execução de comandos, o que facilita a execução de comandos de forma simples e rápida.

---

O padrão de organização de código utilizado foi o **MVC**, pois é um padrão de organização de código que permite a separação de responsabilidades, facilitando a manutenção do código e a leitura do mesmo.

---

#### Instalação de dependencias utilizadas no desafio
    - yarn add typescript ts-node -d ts-node-dev @types/node // instalando dependencias de desenvolvimento para o typescript em conjunto com node
    - yarn add body-parser // para receber os dados do body e transformar em json
    - yarn add dotenv --dev @types/dotenv // para utilizar as variaveis de ambiente no arquivo .env
    - yarn add express --dev @types/express // Para utilizar o express na criação de rotas para a API
    - yarn add csv-parse --dev @types/csv-parse // para ler o arquivo csv
    - yarn add cors --dev @types/cors // para permitir o acesso a API de qualquer origem
    - yarn tsc --init // inicializa as configurações do typescript
    - yarn add --dev ts-jest @jest/globals // para utilizar o jest para testes unitários
    - yarn ts-jest config:init // inicializa as configurações do jest

#### inicialização da API
    - yarn ts-node ./api/server.ts

#### inicialização da FRONT
    - yarn ts-node ./front/server.ts


#### Testes unitários de funções
    - yarn add --dev ts-jest @jest/globals // para utilizar o jest para testes unitários
    - yarn ts-jest config:init // inicializa as configurações do jest
    - yarn test // executa os testes unitários
    - yarn jest // executa os testes unitários


#### Links para documentação das dependencias utilizadas
    - https://csv.js.org/parse/
    - https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
    - https://www.typescriptlang.org/
    - https://jestjs.io/docs/getting-started#using-typescript
    - https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-2


#### exemplo de requisição na api
    curl --location --request POST '0.0.0.0:9090/time/verification' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "fileName": "restaurant-hours.csv",
        "timeForVerification": 2300
    }'


    POST - 0.0.0.0:9090/time/verification
    {
        "fileName": "restaurant-hours.csv",
        "timeForVerification": 2300
    }


#### Arquitetura do docker para duas aplicações (front e back)
Na arquitetura do docker temos dois containers api_desafio_au e front_desafio_au

O container api_desafio_au é responsável por rodar a API em nodejs com typescript e a biblioteca express para criar as rotas da API

O container front_desafio_au é responsável por rodar o front com a biblioteca express para servir o front de um arquivo html estático


#### Descrição dos comandos do yarn
    - yarn server // inicializa a api
    - yarn front // inicializa o front end


## Comandos docker para rodar o projeto
Precisa ter o docker e docker-compose instalado na Computador para rodar esse projeto.

    Versões usadas:

    - Docker version 20.10.21, build baeda1f82a
    - Docker Compose version 2.12.2

    - docker-compose up // inicializa os dois containers (api e front)

    - acessa a api em http://localhost:9090/restaurants
    - acessa o front em http://localhost:9000


#### Funções de testes unitários com jest
  No arquivo api/tests/restaurant.test.ts

    - testa se a função getRestaurants retorna um array de restaurantes
    - testa se a função getRestaurants retorna um array de restaurantes com o tamanho correto
    - testa se a função getOpenRestaurants retorna um array de restaurantes abertos no horário informado


