Esse projeto foi feito a partir das aulas da Cod3r sobre Next.js & React. 
O intuito era recriar o jogo do Monty Hall, no qual você tem várias portas fechadas e atrás de uma delas existe um presente. Depois de selecionar uma porta, o apresentador do programa abriria uma porta vazia, e depois disso, o jogador precisa escolher qual das portas abrirá para escolher o presente.
Foram feitas duas telas, sendo a primeira responsável por determinar quantas portas e em qual porta o prêmio estará, como pode ser visto abaixo:
<div align="center">
    <img src="https://user-images.githubusercontent.com/50055369/159169879-38b0cb51-2b56-4aaa-95ae-fd482b92f9b8.png">
</div>
Na segunda tela, existe todas as portas determinadas e também com o presente na posição certa:
<div align="center">
    <img src="https://user-images.githubusercontent.com/50055369/159170004-c279f928-7cbf-4819-a0ca-7c2fffb81673.png">
</div>

Foi criado um componente para cada necessidade do programa, como o Presente para criar com CSS um elemento parecido com um presente, a Porta para lidar com os eventos de click, abrindo ou selecionando a porta e renderizando o presente na porta correta, a EntradaNumerica que faz as operações para aumentar ou diminuir a quantidade das portas e em qual estará o presente e, por fim, o Cartao que cria com CSS uns cards (ou retângulos) com o nome do jogo e as perguntas iniciais. 
Além disso, cada componente e cada página criada possui o seu próprio CSS.
Com as rotas dinâmicas do Next, foi possível passar os parametros index.tsx de quantidade de portas e em qual porta da página está o presente na própria URL para ser acessado pela página que renderiza as portas [temPresente].tsx.
## Getting Started

Para utilizar o projeto:
```
$ git clone https://github.com/kcami/Site-pets.git

ou

Na aba do repositório do GitHub, clique no code e depois download ZIP

```

Depois disso, dentro da pasta criada use no terminal:

```bash
npm run dev
# or
yarn dev
```

Assim, pode-se abrir [http://localhost:3000](http://localhost:3000) com o seu browser para ver a página inicial.

## Learn More

Para saber mais sobre Next.js:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
