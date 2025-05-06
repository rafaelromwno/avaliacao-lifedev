# 📘 Avaliação Técnica 1 - Desenvolvimento Web III

## Contexto da Atividade

Esta avaliação teve como objetivo a construção de um **Mini DevBlog** utilizando **React**, **Firebase** **Authentication** e **Deploy Automatizado**, consolidando os conhecimentos em rotas, autenticação, estados globais, integração contínua e boas práticas de desenvolvimento.

A base da aplicação foi estruturada a partir do repositório fornecido pelo docente:

> 🔗 [Repositório Inicial - avaliacao-lifedev](https://github.com/victoricoma/avaliacao-lifedev)
> 
> 🔗 [Referência de Estrutura - dw3_react_minidevblog](https://github.com/victoricoma/dw3_react_minidevblog)

---

## 👨🏽‍💻 Etapas Realizadas

 1. Preparação do Ambiente
		
	 - [x] Fork do repositório
	 - [x] Criada a branch de entrega:  
`avaliacaodw-rafaelromwno`

 2. Implementação das Rotas com `react-router-dom`


### Rotas públicas

| Rota                | Função                          | Proteção       |
|--|--|--|
| `/`                 | Página Inicial                  | Acesso público |
| `/about`            | Sobre o site                    | Acesso público |
| `/login`            | Página de login                 | Acesso público |
| `/recuperar-senha`  | Recuperação de senha            | Acesso público |
| `/register`         | Página de Registro              | Acesso público |
| `/search`           | Pesquisa de publicações         | Acesso público |
| `*`                 | Não Encontrado (Erro 404)       | Acesso público |

### Rotas protegidas

| Rota                | Função                          | Proteção        |
|--|--|--|
| `/dashboard`        | Listagem de posts               | Acesso protegido|
| `/post/:id`         | Visualização individual de post | Acesso protegido|
| `/post/edit/:id`    | Edição de post                  | Acesso protegido|
| `/post/new`         | Criação de novo post            | Acesso protegido|



 3. Dashboard (`Dashboard.jsx`)
 
	 - [x] Página que lista todas as postagens
	 - [x] Cada card exibe: Título,  Autor e  Link para visualização completa
	 - [x] Dados obtidos via Firebase com `useEffect` e `useState`

 4. Criação de Postagem (`CreatePost.jsx`)

	 - [x] Formulário para criação de publicação
	 - [x] Botão de **Criar** que persiste dados no Firebase
	 - [x] Redirecionamento para **home** após a criação

 5. Autenticação com Firebase

	 - [x] Login com **Firebase Authentication - Email/Senha**
	 - [x] Estado global gerenciado via `AuthContext`
	 - [x] Sessão mantida com `onAuthStateChanged`

 6. Proteção de Rotas

	 - [x] Implementado `PrivateRoute` para rotas protegidas
	 - [x] Redirecionamento automático para `/login` quando **não autenticado**

 7. Menu Condicional
 
 	 - [x] Exibe **Entrar**, **Registrar** e **Sobre** se usuário **não autenticado**
	 - [x] Exibe **Dashboard**, **Novo Post**,  **Sobre**, **Sair** se **autenticado**


## 🌟 Melhorias Extras Implementadas

| Recurso | Descrição |
|--|--|
| 📝 **CRUD completo de postagens** | Implementação de **edição** e **exclusão** de postagens, além da **criação** e **leitura** |
|🔐 **Recuperação de senha**| Usuário pode **recuperar o acesso** via email com Firebase Authentication |
| 🔍 **Busca por tags** | Sistema de **filtro** permite localizar postagens com base em palavras-chave ou tags
| 📱 **Responsividade aprimorada** | Interface adaptada para uma experiência fluida em **dispositivos móveis** |
| 🔑 **Autenticação via Google** | Integração completa com **OAuth do Google** para login seguro e rápido |
| 🎨 Aprimoramento da Identidade Visual | Desenvolvimento de um **logotipo** fictício para a página |
| 🚔 Monitoramento de rotas inválidas | Tratamento de **erro 404** (Rota não encontrada)|

## 🚀 Deploy e Integração Contínua

-   Deploy automático configurado com **Firebase Hosting**
    
-   Publicação a cada push na branch principal (**main**)
    
-   Análise de segurança com **GitHub Actions + CodeQL**
    

> 🔗 [Link do sistema publicado](https://avaliacaodw-rafaelromwno-9a249.web.app)  
> 🔗 [Branch de entrega no GitHub](https://github.com/rafaelromwno/avaliacao-lifedev/tree/avaliacaodw-rafaelromwno)

## 🛠️ Tecnologias Utilizadas

-   React
-   React Router DOM
-   Firebase Authentication + Firestore + Hosting
-   GitHub Actions + CodeQL

## 📊 Avaliação Esperada

-   ✅ Organização de código
    
-   ✅ Funcionamento completo das rotas e autenticação
    
-   ✅ Dashboard funcional com listagem dinâmica
    
-   ✅ CRUD completo das postagens
    
-   ✅ Deploy público funcional
    
-   ✅ Funcionalidades extras e refinamentos técnicos

## 🖼 Prints de Evidência

### 1. Criando uma conta

  _**Descrição:**_ Tela de cadastro de novo usuário com email e senha, demonstrando o fluxo de criação de conta no sistema.

https://github.com/user-attachments/assets/525518f9-e811-4a1c-85ca-9b809aedabb0

### 2. Entrando na conta

_**Descrição:**_ Tela de login utilizando credenciais previamente cadastradas, com autenticação bem-sucedida.

https://github.com/user-attachments/assets/483f9bb9-d2d2-433a-a6e2-f03c2020730d

### 3 Saindo da conta

_**Descrição:**_ Demonstração do processo de logout, finalizando a sessão do usuário.

https://github.com/user-attachments/assets/ca9903c4-4457-49a0-afcf-4a2a1af02a68

### 4. Recuperando a senha da conta

_**Descrição:**_ Fluxo de recuperação de senha, com envio de email para redefinição.

https://github.com/user-attachments/assets/0cc84338-46d2-4348-a137-75b2ead8bf37

### 5. Email de Recuperação

_**Descrição:**_ Visualização do email de recuperação recebido na caixa de entrada, com link de redefinição de senha.

![email](https://github.com/user-attachments/assets/8ddb1b5f-23d3-4661-b1e6-bdb53a1d30e4)

### 6. Criando e Visualizando uma publicação

_**Descrição:**_ Formulário preenchido para nova publicação, com título, imagem, descrição e tags, seguido da confirmação de envio.

https://github.com/user-attachments/assets/e5153412-061b-42b1-83c7-53290572112e

### 7. Editando uma publicação

_**Descrição:**_ Tela de edição de uma publicação existente, com campos sendo atualizados.

https://github.com/user-attachments/assets/e259e13d-ff67-4676-992b-880ab655cb85

### 9. Excluindo uma publicação

_**Descrição:**_ Ação de remoção de uma publicação bem-sucedida.

https://github.com/user-attachments/assets/46a3278f-dfba-4f04-9d8b-b296695ee9ae

### 10. Pesquisando uma publicação pela tag

_**Descrição:**_ Utilização do campo de busca para localizar publicações por tag específica.

https://github.com/user-attachments/assets/889e2fc6-9c2b-4482-a693-09bcbeeac403

### 11. Entrando com o google

_**Descrição:**_ Processo de autenticação alternativa via conta Google, com confirmação de login bem-sucedido.

https://github.com/user-attachments/assets/fbeed079-7ff5-49e7-bdbc-ea364cb5570b

**Obs.:** O pop-up não é monitorado pelo software de gravação de tela, segue abaixo a imagem do pop-up:

![login-google-popup](https://github.com/user-attachments/assets/13a9e8b8-3b81-4f6a-b2e2-d2b5dced006d)


### 12. Visão no Firebase

_**Descrição:**_ Painel do Firebase mostrando o usuário criado/autenticado na aba de autenticação, evidenciando integração com backend.

![firebase](https://github.com/user-attachments/assets/73eafc03-2ef7-484e-b073-f3626c22f3b3)

### 13. Testando rotas protegidas

_**Descrição:**_ Tentativa de acesso a rotas que exigem autenticação sem estar logado, redirecionando para login.

https://github.com/user-attachments/assets/1f21e346-2dbf-46d3-95c9-8f96364d93ae

### 14. Digitando uma rota inexistente (Forçar erro 404)

_**Descrição:**_ Navegação para uma URL inexistente no sistema, resultando em página de erro 404 personalizada.


## 📌 Conclusão

A entrega foi concluída com sucesso, atendendo aos requisitos principais da prova e indo além com melhorias significativas em funcionalidade, experiência do usuário e segurança. O **MiniDevBlog** está pronto para uso e demonstra domínio das tecnologias propostas.
