# Trilha JS Developer - Pokedex

## Estrutura do Projeto

- **index.html**: Página Inicial

  - Estrutura base, estilos e scripts.
  - Apresenta um cabeçalho, campo de pesquisa e seção de listagem de Pokémon.

- **view.html**: Detalhes do Pokémon
  - Estrutura para exibição detalhada de um Pokémon.
  - Apresenta informações específicas do Pokémon e um botão de retorno.

## Funcionalidades Principais

### `viewPokemon.js`

- Recuperação de detalhes do Pokémon.
- Utilização da PokeAPI para buscar e atualizar informações na página.
- Gerenciamento de erros exibindo mensagens para o usuário.

### `searchPokemon.js`

- Implementação da pesquisa de Pokémon.
- Filtragem e exibição de Pokémon correspondentes ao termo de pesquisa.
- Tratamento de erros durante a pesquisa.

### `listPokemon.js`

- Listagem de Pokémon na página principal.
- Paginação para navegar entre os Pokémon disponíveis.
- Carregamento e exibição de Pokémon da PokeAPI.

### `fetchData.js`

- Função genérica para requisições assíncronas via `fetch`.
- Tratamento de erros de resposta, exibindo mensagens apropriadas.

### `pokePreviewCard.js`

- Criação de cards de visualização para Pokémon.
- Geração de estrutura com informações e link para detalhes do Pokémon.
- Exportação da classe para uso em outros arquivos.

## Estruturação da Documentação

- Detalhamento de cada arquivo e suas funcionalidades principais.
- Descrição clara sobre o propósito e a contribuição de cada script.
- Foco na funcionalidade central de cada arquivo e como ela contribui para a aplicação.
