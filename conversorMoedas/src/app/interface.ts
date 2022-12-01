export interface moeda {
  conversao: string,
  maiorValor: string,
  menorValor: string,
  data: string,
  hora?: string
}

export interface infoM{
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
