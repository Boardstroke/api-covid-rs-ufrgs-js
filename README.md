# API COVID-19 RS 😷 <h1>

  API para centralizar as principais e mais atualizadas informações sobre a covid-19 no estado do RS, respondendo requisões com arquivos json compativel com várias linguangens diferentes

# Uso no python 🐍 <h2>

  Com o objetivo de ser fácil de manipular para uso junto ao jupyter, uma simples instrução de como obter os principais dados da API usando a biblioteca `requests`

  1. Instalar a biblioteca requests:

    ...Requests é uma biblioteca compressível de protocolos HTTP, sua documentação pode ser encontrada [Documentação](https://requests.readthedocs.io/en/master/). Para instalar rode no seu terminal o comando `pip install requests`

  2. GET:

    ...Para obter a lista de informações obtidas até agora pela API através do python os seguintes comandos:

    ```python

      import requests

      response = requests.get("https://api-covid-ufrgs.herokuapp.com/municipios/index").json()

    ```

    ...O formato do response no momento é um array de dicionários:

  3. Trabalhar com os dados:

    ...Response é um array onde cada elemento é um dicionário municipio. Esse dicionário tem as seguintes keys:

      * nome -> String: contendo o nome da cidade
      * pop_senso_2010 -> Inteiro: População medida pelo senso 2010
      * pop_est_2019 -> Inteiro: População estimada da cidade 2019
      * Location -> Dicionário: Latitude Longitude da cidade
      * Distancia -> Array: Com a lista das 166 cidades com mais de 10 mil habitantes com a distância rodoviária, em metros.

    # Exemplo: <h4>

    ```python
      response[0]["nome"] # output -> Porto Alegre, RS, Brazil
      response[0]["pop_senso_2010"] # output -> 1450555
      response[0]["Location"]
      # {
        # 'id': 1,
        # 'lat': -30.0346471,
        # 'lng': -51.2176584,
        # 'createdAt': '2020-04-03T05:05:03.526Z',
        # 'updatedAt': '2020-04-03T05:05:03.526Z',
        # 'MunicipioId': 1
      # }
      response[0]["Distancia"] [0]
      # output ->{
      # {'id': 116,
      # 'dest': 'Agudo, RS, Brazil',
      # 'dist': 243244,
      # 'createdAt': '2020-04-03T05:54:19.409Z',
      # 'updatedAt': '2020-04-03T05:54:19.409Z',
      # 'MunicipioId': 1}
      # }



    ```

# A fazer<h2>

  ...Existe uma varidade de coisas a serem feitas, devido ao curto tempo não consegui melhorar, ou ter tempo pra pensar na maneira optimal para estrutura dos dados ou em implementar mais funcionalidades. Uma lista de coisas a serem melhoradas a longo prazo

  * [❌] Adicionar os dados dos números de infectados nas cidades
  * [❌] Melhorar a estrutura dos dados do array Distancia
  * [❌] Criar protocolos de segurança para que usuário posso add mudanças ou remover, quando necessário, aos dados na API

  E outras sugestões são sempre bem-vindas 😃