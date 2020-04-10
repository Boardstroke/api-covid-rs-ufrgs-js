# API COVID-19 RS 😷 <h1>

  API para centralizar as principais e mais atualizadas informações sobre a covid-19 no estado do RS, respondendo requisões com arquivos json compativel com várias linguangens, Python, Julia, R

# Uso no python 🐍 <h2>

  Com o objetivo de ser fácil de manipular para uso junto ao jupyter, uma simples instrução de como obter os principais dados da API usando a biblioteca `requests`

  1. Instalar a biblioteca requests:

  Requests é uma biblioteca compressível de protocolos HTTP, sua documentação pode ser encontrada [Documentação](https://requests.readthedocs.io/en/master/). Para instalar rode no seu terminal o comando `pip install requests`

  2. GET:

  Para obter a lista de informações obtidas até agora pela API através do python os seguintes comandos:

  ```python

    import requests as r

    mps = r.get("https://c1fc1897.ngrok.io/municipios/index").json()

  ```

  O formato do response no momento é uma lista de dicionários, cada dicionário representa um municipios contendo importantes informação para a modelagem do grafo. Os indices estão ordenandos da mais populosa para a menos populosa;

  3. Trabalhar com os dados:

  Response é um lista onde cada elemento é um dicionário municipio. Esse dicionário tem as seguintes keys:

  * nome -> String: contendo o nome da cidade
  * pop_senso_2010 -> Inteiro: População medida pelo senso 2010
  * pop_est_2019 -> Inteiro: População estimada da cidade 2019
  * Location -> Dicionário: Latitude Longitude da cidade
  * Distancias -> Lista: Com a lista das 166 cidades com mais de 10 mil habitantes com a distância rodoviária, em metros.
  * Infectados -> Lista de dicionários: Uma lista atualizada diariamente, com os infectados de cada cidade, número de óbitos e data em que aquela data

  * (Em produção) Onibus -> Lista contendo as quantidade de onibus interurbanos que saem do múnicipio

  # Exemplo: <h4>

  ```python
    mps[0]["nome"]  # Cidade do indice 0 -> Porto Alegre, RS, Brazil
  ```
  ```python
    mps[0]["pop_senso_2010"] # População de Porto Alegre em 2010 -> 1450555
  ```
  ```python
    mps[0]["pop_est_2019"] # População estimada de Porto Alegre em 2019 ->	1 483 771
  ```

  ```python
    mps[0]["Location"] # Coord geográficas da cidade de Porto Alegre

    # {
      # 'id': 1,
      # 'lat': -30.0346471,
      # 'lng': -51.2176584,
      # 'createdAt': '2020-04-03T05:05:03.526Z',
      # 'updatedAt': '2020-04-03T05:05:03.526Z',
      # 'MunicipioId': 1
    # }
    ```

    ```python
    mps[0]["Distancias"][1] # distancia Porto a Alegre -> Caxias do sul

    # {'id': 2,
    # 'dest': 'Caxias do Sul, RS, Brazil',
    # 'dist': 128183,
    # 'createdAt': '2020-04-03T05:54:19.409Z',
    # 'updatedAt': '2020-04-03T05:54:19.409Z',
    # 'MunicipioId': 1}
    # }
  ```

  ```python
    mps[0]["Infectados"][-1] # Valor mais recente de pessoas infectadas em Porto Alegre

    # "id": 355,
    # "numero_infectados": 303,
    # "numero_obitos": 6,
    # "data": "2020-04-09",
    # "createdAt": "2020-04-10T02:15:08.163Z",
    # "updatedAt": "2020-04-10T02:15:08.163Z",
    # "MunicipioId": 1

  ```


  Existe uma varidade de coisas a serem feitas, devido ao curto tempo não consegui melhorar, ou ter tempo pra pensar na maneira otima para estrutura dos dados ou em implementar mais funcionalidades. Uma lista de coisas a serem melhoradas a longo prazo

  * [✔️] Adicionar os dados dos números de infectados nas cidades
  * [✔️] Melhorar a estrutura dos dados do lista Distancia
  * [❌] Adicionar as linhas de onibus interurbanos entre as cidades
  * [❌] Criar protocolos de segurança para que usuário posso add mudanças ou remover, quando necessário, aos dados na API
  * [❌] Determinar quais dados são essencias e criar protocolos de buscas para otimizar as requisões

  E outras sugestões são sempre bem-vindas 😃