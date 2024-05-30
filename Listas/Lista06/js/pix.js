const pixTransacao = {
  chavePix: "11985843382",
  valorTransferencia: 100.0,
  dataTransacao: "2024-05-30T15:49:01",
  descricaoPagamento: "Compra online",
  pagador: {
    nome: "Iuris",
    documento_CPF: "123.456.789-00",
  },
  recebedor: {
    nome: "Loja XPTO",
    documento_CNPJ: "12.345.678/0001-90",
  },
  historicoTransacoes: [
    {
      data: "2024-05-28T10:30:00",
      valor: 50.0,
      descricao: "Transferência para amigo",
    },
    {
      data: "2024-05-29T14:15:00",
      valor: 30.0,
      descricao: "Pagamento de conta",
    },
  ],
};

console.log(pixTransacao);
