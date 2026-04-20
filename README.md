# 📸 Instagram Clone Web

Este projeto foca na recriação da interface de usuário da plataforma, oferecendo uma experiência interativa que inclui feed, modal de postagens e uma caixa de mensagens (Direct) flutuante. 


## ✨ Funcionalidades

* **Tema Escuro e Claro:** Alternância suave entre temas utilizando CSS Custom Properties (Variáveis CSS) controladas por estado no React.
* **Feed Interativo:** Postagens com suporte a múltiplas imagens (carrossel), contagem de curtidas e botões de interação.
* **Modal de Detalhes:** Ao clicar para ver os comentários, um modal responsivo se abre exibindo a foto em destaque, legenda completa e área de comentários.
* **Direct Flutuante:** Uma janela pop-up no canto inferior da tela que simula a caixa de entrada de mensagens do Instagram.
* **Ícones Dinâmicos:** Integração com a biblioteca Lucide React, garantindo que todos os ícones se adaptem automaticamente ao tema atual.

## 🛠️ Tecnologias Utilizadas

* **React** 
* **Vite**
* **CSS3**
* **Lucide React**
* **Vercel**

## ⚙️ Como Rodar o Projeto

### Local

```bash
npm install
npm run dev
```
### GitHub Pages:

```bash 
npm install gh-pages --save-dev
```

### Adicionar no package.json:
```bash
"homepage": "https://seu-usuario.github.io/nome-do-repo",
```

### Scripts:
```bash
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
### Rodar:
```bash
npm run deploy
```
