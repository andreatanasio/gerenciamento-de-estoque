export const baseUrl = 'https://ideacao-backend-8ea0b764c21a.herokuapp.com/api/';



export const baseUrlClientes = baseUrl + 'eletro-clientes';
export const baseUrlEstoque = baseUrl + 'eletro-produtos';
export const baseUrlItems = baseUrl + 'eletro-itens-venda';
export const baseUrlCategorias = baseUrl + 'eletro-categorias';
export const baseUrlVendas = baseUrl + 'eletro-vendas';

export const getParametersVendasPadrao = '?sort=data:desc&populate=*';

export const ERRO_SERVIDOR = 'Erro na comunicação com o servidor!';
export const ERRO_PRODUTO_ITEM_VENDA = 'Este produto ja foi adicionado a esta venda!';
export const MSG_CAMPOS_OBRIGATORIOS = 'É necessário preencher os campos!';
export const MSG_VENDA_CADASTRO_SUCESSO = 'Venda cadastrada com sucesso!';