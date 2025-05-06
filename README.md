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

## 📌 Conclusão

A entrega foi concluída com sucesso, atendendo aos requisitos principais da prova e indo além com melhorias significativas em funcionalidade, experiência do usuário e segurança. O **MiniDevBlog** está pronto para uso e demonstra domínio das tecnologias propostas.
