export interface moeda {
  conversao: string,
  maiorValor: string,
  menorValor: string,
  data: string
}

export interface info{
  result: {
    infoMoeda: {
      moedaBruta: {
        conversao: string,
        maiorValor: string,
        menorValor: string,
        data: string
      },
      moedaConv: {
        conversao: string,
        maiorValor: string,
        menorValor: string,
        data: string
      }
    }
  }
}
