from datetime import datetime
import re, requests, sys

def atualizar(apiUrl="http://localhost:8081/municipios/add-infectados", secretariaUrl="http://ti.saude.rs.gov.br/covid19/" ):

  try:
    s = requests.get(secretariaUrl)
  except NameError:
    print(NameError)


  body = re.search(r'<body>((?s).*)<\/body>',s.text).group()
  io = re.findall(r'<td>(.*?)</td>', body)

  io.remove("")



  for j in range(0, len(io)):
    if(io[j] == ''):
            io[j] = 0

  mps=re.findall(r'<td style="text-align:left">[\d]+\.<b> (.*?)</b></td>',body)
  lista = []
  for mp, i in zip(mps, range(0,len(mps)+1)):
    j = 3*i
    d = {}
    d['cidade'] = mp

    if(i == 0):
        d["numero_infectados"] = io[i]
        d["numero_obitos"] = io[i+1]
    else:
        d["numero_infectados"] = io[j]
        d["numero_obitos"] = io[j+1]

    d["data"] = datetime.today().strftime('%Y-%m-%d')
    lista.append(d)



  # A cidades[0] tem o números de infectados -> numero_infectados[0] pelo formato do arquivo html
  for d in lista:
    try:
      requests.post(apiUrl, json=d)

    except NameError:
      print("error")

  return(s.status_code,"Status Secretaria da Saude");


def main():

  # apiUrl = sys.argv[1]
  print(atualizar())



if (__name__ == "__main__"):
    main()

