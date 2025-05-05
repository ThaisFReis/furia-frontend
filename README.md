# Projeto HYPE MODE

Este é um projeto desenvolvido para proporcionar uma experiência interativa, permitindo aos usuários participar de enquetes ao vivo, reagir com emotes e visualizar um chat ao vivo durante eventos, como partidas de esports. A aplicação também contém um quiz, o FanDNA Quiz, para determinar o perfil dos usuários baseado nas suas respostas.

## Funcionalidades

### 1. **FanDNA Quiz**

O FanDNA Quiz é um teste interativo onde os usuários respondem perguntas e, ao final, recebem uma análise de seu perfil de fã baseado em suas respostas. As respostas afetam diretamente os resultados finais.

- **Tipos de perfis**: Estratégico, Competitivo, Fiel, Analítico, Apaixonado.
- **Funcionalidade**:
  - O quiz avança automaticamente para a próxima pergunta ao selecionar uma opção.
  - Ao final, o usuário vê o resultado e pode reiniciar o quiz.

### 2. **Hype Mode**

O Hype Mode oferece aos usuários uma experiência interativa com uma enquete ao vivo, reações via emotes e um chat ao vivo. Os usuários podem votar em opções e reagir em tempo real durante eventos.

#### Funcionalidades:

- **Enquete ao vivo**: Os usuários podem votar em uma pergunta relacionada ao evento, e os resultados são atualizados em tempo real.
- **Emotes**: Os usuários podem reagir usando emotes, como "Hype", "GG", "Love", entre outros. Cada emote tem um contador que reflete o número de vezes que foi usado.
- **Chat ao vivo**: Uma seção de mensagens ao vivo onde os usuários podem ver o que outros estão dizendo durante o evento.

## Estrutura do Código

### 1. **FanDNA Quiz (`FanDNAQuiz`)**

- Utiliza o estado para controlar a pergunta atual, as pontuações e o estado de finalização do quiz.
- As respostas do usuário alteram a pontuação em várias categorias (estratégico, competitivo, etc.).
- Após o término do quiz, os resultados são exibidos e o usuário pode reiniciar o quiz.

### 2. **Hype Mode (`HypeMode`)**

- **Enquete**: O usuário pode votar nas opções fornecidas. Após o voto, os resultados são atualizados.
- **Emotes**: Permite que os usuários interajam com reações em tempo real, e os contadores de emotes são atualizados com base nas interações.
- **Chat ao vivo**: Mensagens geradas dinamicamente são adicionadas ao chat a cada 3 segundos para manter o conteúdo atualizado.

### Componentes Utilizados:

- `QuizQuestion`: Exibe a pergunta atual do quiz.
- `QuizResult`: Exibe os resultados do quiz após a conclusão.
- `Progress`: Componente de barra de progresso usado para mostrar a porcentagem de votos de cada opção na enquete.

## Tecnologias Utilizadas

- **React**: Para criação da interface interativa.
- **Lucide React**: Ícones utilizados para emotes e interações.
- **Tailwind CSS**: Para a estilização dos componentes e layout responsivo.
- **useState, useEffect**: Para gerenciamento de estado e efeitos colaterais (como atualizações do chat ao vivo).

## Instruções de Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/hype-mode.git
   ```

2. Instale as dependências:

   ```bash
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   yarn dev
   ```
