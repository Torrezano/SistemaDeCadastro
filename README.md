# SistemaDeCadastro

Sistema onde é possível cadastrar, editar, desativar e listar clientes

É necessário usar "npm start" na pasta "client" e "server" para que o sistema funcione de forma adequada.
Além disso, também é necessário usar o comando "npm install" para intalar todas as dependencias do projeto.

É necessário possuir um servidor MySQL local para a aplicação funcionar corretamente.
A pasta Criar Banco de Dados possue linhas de comando para criar a tabela "cliente".
Caso esteja acontecendo algum problema ao conectar ao banco de dados, verifique as configurações no arquivo:
"server\database\dbconfig.js" e adicione as informações necessárias, como por exemplo:
nome do banco de dados ("database") e senha ("password") .
