# Testes Automatizados com Selenium

Este repositório contém testes automatizados utilizando Selenium para interagir com um site específico e validar suas funcionalidades.

## Objetivo

Desenvolver habilidades práticas na criação e execução de testes automatizados para aplicações web utilizando Selenium.

## Site Escolhido

O site escolhido para os testes é [Shopist](https://shopist.io/).

## Funcionalidades Testadas

1. **Navegação por Categorias:**
   - Navega até a página de sofás clicando no elemento de classe "sofas".
   - Volta à página anterior após navegar para a página de sofás.
   - Navega até a página de cadeiras clicando no elemento de classe "chairs".
   - Assert: Confirma se a navegação para as páginas de sofás e cadeiras é realizada corretamente.

2. **Validação de Mensagem de Erro:**
   - Verifica se há produtos esgotados clicando no elemento de classe "status--red".
   - Fecha o modal de produtos esgotados clicando no botão de classe "modal-button".
   - Assert: Confirma se a validação da mensagem de erro e o fechamento do modal são realizados corretamente.

3. **Adição de Item ao Carrinho:**
   - Navega até a página de cadeiras específica clicando no elemento encontrado pelo XPath.
   - Adiciona a cadeira selecionada ao carrinho clicando no botão de classe "purchase-button".
   - Assert: Confirma se a cadeira é adicionada corretamente ao carrinho.

4. **Remoção de Item do Carrinho:**
   - Acessa o carrinho clicando no elemento de classe "cart".
   - Remove o item do carrinho clicando no botão de classe "remove-button".
   - Assert: Confirma se a cadeira é removida corretamente do carrinho.

5. **Finalização da Compra:**
   - Navega até a página de produtos de cama clicando no elemento de classe "bedding".
   - Seleciona um produto específico de cama clicando no elemento encontrado pelo XPath.
   - Adiciona o produto de cama selecionado ao carrinho clicando no botão de classe "purchase-button".
   - Acessa o carrinho clicando no elemento de classe "cart".
   - Inicia o checkout clicando no botão de classe "checkout".
   - Continua comprando clicando no botão de classe "continue-shopping".
   - Assert: Confirma se a finalização da compra e o retorno ao shopping são realizados corretamente.

## Ferramentas Utilizadas

- Selenium WebDriver
- Mocha (para execução dos testes)
- Chai (para asserções)
- dotenv (para configuração de variáveis de ambiente)

## Instruções de Execução

1. Clone este repositório: 
```
git clone https://github.com/LNunes123/testes-web-Erico.git
```
2. Instale as dependências:
```
npm install
```
3. Execute os testes:
```
npm test
```

## Observações

Este projeto foi desenvolvido como parte de um exercício acadêmico/profissional para prática de testes automatizados com Selenium. Qualquer dúvida ou sugestão, entre em contato.
