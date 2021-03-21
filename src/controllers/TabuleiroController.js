export default class TabuleiroController {
  constructor() {
    this.tabuleiro = null
    this.novoTabuleiro = null
    this.numeroLinhasTabuleiro = 0
    this.numeroColunasTabuleiro = 0

    this.timer = null
    this.tick = 1000 // 1 segundo
    this.segundosTimer = 0
  }

  get pausado() {
    return !this.timer
  }

  gerarTabuleiro(linhas, colunas) {
    console.log('gerar', linhas, colunas)
    this.iniciarTabuleiro(linhas, colunas)
    this.resetClick()
  }

  playPauseClick() {
    console.log('playPauseClick')
    if(!this.pausado) {
      this._clearTimer()
      return
    }

    this._startTimer()
  }

  resetClick() {
    console.log('resetClick')
    this._clearTimer()
    this.segundosTimer = 0
  }

  selecionarLoaf() {
    console.log('selecionarLoaf')
  }

  selecionarPulsar() {
    console.log('selecionarPulsar')
  }

  selecionarGlider() {
    console.log('selecionarGlider')
  }

  cellClick(linha, coluna) {
    console.log('cellClick', linha, coluna)
    this.tabuleiro.toogleCell(linha, coluna)
  }

  iniciarTabuleiro(linhas, colunas) {
    console.log('iniciarTabuleiro')
    this.tabuleiro = new Tabuleiro().init(linhas, colunas)
    this.numeroLinhasTabuleiro = linhas
    this.numeroColunasTabuleiro = colunas
  }

  _clearTimer() {
    clearInterval(this.timer)
    this.timer = null
  }

  _startTimer() {
    this.timer = setInterval(() => {
      this.segundosTimer++
      console.log('segundosTimer', this.segundosTimer)
    }, this.tick)
  }

}

class Tabuleiro {
  constructor() {
    this.linhas = null
    this.numeroLinhas = 0
    this.numeroColunas = 0
  }

  init(numeroLinhas, numeroColunas) {
    this.numeroLinhas = numeroLinhas
    this.numeroColunas = numeroColunas
    
    const linhasTabuleiro = []

    for (let linha = 0; linha < numeroLinhas; linha++) {
      const novaLinha = []
      for (let coluna = 0; coluna < numeroColunas; coluna++) {
        novaLinha.push(false)
      }
      linhasTabuleiro.push(novaLinha)
    }

    this.linhas = linhasTabuleiro

    return this
  }

  toogleCell(linha, coluna) {
    this.linhas[linha][coluna] = !this.linhas[linha][coluna]
  }
}