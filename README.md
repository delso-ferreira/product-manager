<h1>API RESTful de Gerenciamento de Vendas 🏪 🛍️</h1>

Este é o repositório do projeto desenvolvido durante o curso da escola de programação da Trybe. Neste projeto, foi criada uma API RESTful para o gerenciamento de vendas, com a capacidade de criar, visualizar, deletar e atualizar produtos e vendas. A arquitetura em camadas foi utilizada para organizar o código e torná-lo de fácil manutenção e mais escalável. Além disso, o banco de dados MySQL foi empregado para a gestão dos dados.

<h2>Habilidades Desenvolvidas</h2>

Durante o desenvolvimento deste projeto, algumas habilidades foram trabalhadas e aprimoradas, incluindo:

▶️Interagir com um banco de dados relacional MySQL: Foram implementados mecanismos para interagir com o banco de dados, incluindo a criação de tabelas, inserção, atualização, exclusão e consulta de registros utilizando o Sequelize.

▶️Implementar uma API utilizando arquitetura em camadas: A aplicação foi organizada em camadas, seguindo as melhores práticas de desenvolvimento de software. Isso inclui a separação de responsabilidades entre as camadas de controle, serviços e modelos.

▶️Criar validações para os dados recebidos pela API: Foram adicionadas validações para garantir que os dados fornecidos à API sejam consistentes e estejam de acordo com as regras de negócios definidas.

▶️Escrever testes para APIs: Foram criados testes automatizados para garantir o correto funcionamento dos endpoints da API para verificar se as funcionalidades estão se comportando como esperado.

<h2>Tecnologias Utilizadas</h2>

▶️Node.js
▶️Express
▶️MySQL
▶️Sequelize (ORM) 

<h2>Como Usar</h2>

Para executar este projeto em sua máquina local, siga as etapas abaixo:

Clone este repositório:
```
Copy code
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

Instale as dependências:
```
bash
Copy code
cd nome-do-repositorio
npm install
```

Configure o banco de dados MySQL com as credenciais necessárias.

Execute o Docker Compose para subir os serviços de backend e banco de dados:
``` 
bash
Copy code
docker-compose up -d --build
```

Acesse o terminal do docker:
``` 
bash
Copy code
docker exec -it store_manager bash
```

Inicie o servidor:
```
bash
Copy code
npm run dev
```

A API estará disponível em http://localhost:3000. Você pode usar uma ferramenta como o Postman ou o Insomnia para testar os endpoints da API.

Testes
Para executar os testes, você pode usar os seguintes comandos dentro do docker:
```
Copy code
npm run test:mocha     # roda os testes do mocha
npm run test:coverage  # roda os testes e mostra a cobertura geral
npm run test:mutation  # roda os testes e mostra a cobertura de mutações
```
Isso executará os testes automatizados para verificar a funcionalidade dos endpoints da API.

Contribuições
Se você encontrar algum problema, desejar melhorar o projeto ou contribuir de alguma forma, sinta-se à vontade para criar problemas (issues) ou enviar solicitações de pull (pull requests).

Obrigado por visitar este repositório!
