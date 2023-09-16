Está é uma pequena aplicação seguindo o padrão das APIs REST onde o usuário pode salvar suas músicas mais escutadas no momento,
e ao enjoar delas rapidamente pode ser feita a renovação da lista removendo todas as músicas.

Para iniciar a aplicação primeiramente certifique-se de instalar as dependendências através do comando "npm i" no terminal,
tendo isto feito, utilize os script "npm run dev" para rodar a aplicação localmente e o script "npm run build" para tranpilar o código para .js se desejar. 

ROTAS:

GET "/songs" : 
Apenas retorna todas as músicas salvas.

POST "/songs" : 
Aceita apenas bodys no formato: {artist:"Artista", title:"Título", album:"Álbum"}.
Salva as informações da música no banco de dados

PUT "/songs/:id" :
Aceita apenas bodys no mesmo formato: {artist:"Artista", title:"Título", album:"Álbum"}
Atualiza as informações da música com o id passado nos parâmetros da rota.

DELETE "/songs" :
Limpa completamente as informações no banco de dados, reiniciando a lista.

Autor:Breno Curvello dos Santos Breves

`Git: https://github.com/brenobreves`
