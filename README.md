Repositório do desafio tecnico da MaisTodos

## Especificações da aplicação:

- A aplicação deve ser desenvolvida usando React.
- A aplicação deve usar uma biblioteca de gerenciamento de estado, como o Zustand.
- A aplicação deve usar uma biblioteca de roteamento, como o React Router.
- A aplicação deve usar uma biblioteca de gerenciamento de formulários, como o Formik ou o React Hook Form.
- A aplicação deve usar uma biblioteca de validação de formulários, como o React-hook-form.
- A aplicação deve usar o React-Query para compartilhar dados entre componentes via cache, hidratar os dados, controle de estados com querys, loading, refetch, invalidQueries
- A aplicação deve ter pelo menos um teste unitário para cada componente.
- A aplicação deve ter uma API para obter e atualizar dados de produtos.
- A aplicação deve usar uma biblioteca para realizar pagamentos, como o Stripe.

## Instruções de instalação

Para rodar o projeto antes é necessário instalar as dependências através do comando

```bash
yarn ou npm install
```

Após isso será necessário fazer a instalação de um pacote global do npm que é o

```bash
npm install -g json-server
```

Ease pacote é responsável por subir o servidor local, que é criado a partir do arquivo

```bash
db.json
```

Contido nesse projeto. Então para facilitar, abra uma nova janela do terminal e rode o comando

```bash
json-server --watch -p 4000 db.json
```

Você pode testar usando postman, insomnia ou apenas jogando o endereço na url do seu browser

Agora está permitido iniciar a aplicação através do comando

```bash
yarn start
```

# Observação

Para cadastrar um novo produto e que ele possa ser "comprado" no stripe, é necessário criar novos produtos usando o price_id que é a referencia dentro da plataforma do Stripe para cada produto.
Então basta utilizar estes dados abaixo durante o cadastro de novo produto.

```bash
"id": 3,
"name": "X-Bacon",
"description": "Pão, bife de hambúrguer 90g, 1 fatia de queijo, 2 fatia de bacon, salada e batata.",
"image": "https://fastly.picsum.photos/id/323/500/500.jpg?hmac=b24VENFLL59JsHRUlOIBhRigKfk84EllIDCVfa_alUQ",
"price": 12.5,
"price_id_api": "price_1NR0TtLvJyV6bQCEfpuEc7wY"
```

### Dados fake para preencher o chekout do stripe

```bash
4242 4242 4242 4242  | 02 / 32 | 323 | 23232
```
