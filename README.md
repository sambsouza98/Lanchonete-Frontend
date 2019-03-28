# Lanchonete

Repositório criado para execução de teste técnico em Node.Js

Instruçoes para execução:

Para iniciar o projeto é necessário executar o comando 'npm install' na pasta raiz raiz do projeto. Após as instalações acabarem, é necessário rodar o comando 'nodemon index.js' também na pasta raiz do backend. O servidor irá se inicializar na porta 8080. Para executar o front é necessário executar também o 'npm install', mas agora na pasta raiz do frontend. Após as instalações acabarem é necessário rodar o comando 'npm start'. O frontend irá se inicializar na porta 3000. 

Descrição:

Somos uma startup do ramo de alimentos e precisamos de uma aplicação web para gerir nosso negócio. Nossa especialidade é a venda de lanches, de modo que alguns lanches são opções de cardápio e outros podem conter ingredientes personalizados.
A seguir, apresentamos a lista de ingredientes disponíveis:

INGREDIENTE / VALOR

Alface / R$ 0.40
Bacon / R$ 2,00
Hambúrguer de carne / R$ 3,00
Ovo / R$ 0,80
Queijo / R$ 1,50

Segue as opções de cardápio e seus respectivos ingredientes:

LANCHE / INGREDIENTES

X-Bacon / Bacon, hambúrguer de carne e queijo
X-Burger / Hambúrguer de carne e queijo
X-Egg / Ovo, hambúrguer de carne e queijo
X-Egg Bacon / Ovo, bacon, hambúrguer de carne e queijo

O valor de cada opção do cardápio é dado pela soma dos ingredientes que compõem o lanche. Além destas opções, o cliente pode personalizar seu lanche e escolher os ingredientes que desejar. Nesse caso, o preço do lanche também será calculado pela soma dos ingredientes.


Existe uma exceção à regra para o cálculo de preço, quando o lanche pertencer à uma promoção. A seguir, apresentamos a lista de promoções e suas respectivas regras de negócio:


PROMOÇÃO / REGRA DE NEGÓCIO

Light / Se o lanche tem alface e não tem bacon, ganha 10% de desconto.
Muita carne / A cada 3 porções de carne o cliente só paga 2. Se o lanche tiver 6 porções, ocliente pagará 4. Assim por diante...
Muito queijo / A cada 3 porções de queijo o cliente só paga 2. Se o lanche tiver 6 porções, ocliente pagará 4. Assim por diante...
Inflação / Os valores dos ingredientes são alterados com frequência e não gastaríamos que isso influenciasse nos testes automatizados.

CRITÉRIOS DE COMPLETUDE

O projeto deve ser entregue atendendo aos seguintes critérios

Server-side:
Deve ser desenvolvido em NodeJS com npm ou yarn (usar última versão LTS)
Deve implementar uma API RESTFUL.
Deve possuir testes automatizados para os seguintes pontos:
Valor dos lanches de cardápio
Regra para cálculo de preço e promoções
Chamadas para a API (pode utilizar stubs / mocks para separar a camada da API da camada de implementação)
Não é necessário se preocupar com a autenticação dos usuários.
Não é necessário persistir os dados em um banco, pode fazer armazenamento em memória.

Client-side:
Deve ser deployável desacoplado do Server-side
Pode ser feito com páginas estáticas (HTML, CSS, JS e JQuery), Bootstrap, Angular e/ou React.
Se escolher alguma tecnologia diferente das descritas acima, favor justificar o motivo.

ENTREGÁVEIS

Você deve entregar um conjunto de artefatos, de acordo com o nível de complexidade que achar melhor. A seguir, os níveis de complexidade e seus respectivos entregáveis:


Fácil:
Código no GitHub ou GitLab;
Implementação dos requisitos;
Instruções para executar.
Pelo menos 5 testes desenvolvidos passando, cobrindo diversos pedaços do código.

Médio:
Tudo da complexidade fácil mais:
Relatório de justificativas para escolha do design de código;
Cobertura de testes de pelo menos 80% do código.

Difícil:
Tudo da complexidade média mais:
Testes automatizados executados por algum modelo de integração contínua;
Ambiente virtualizado em Docker com scripts para execução do projeto ou deployado em algum servidor na nuvem.

