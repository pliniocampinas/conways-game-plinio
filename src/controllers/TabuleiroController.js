export default class TabuleiroController {
  constructor() {
    this.tabuleiro = null
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
      this._nextTick()
    }, this.tick)
  }

  _nextTick() {
    // Calcular novo tabuleiro
    const linhasTabuleiro = []

    for (let linha = 0; linha < this.tabuleiro?.numeroLinhas; linha++) {
      const novaLinha = []
      for (let coluna = 0; coluna < this.tabuleiro?.numeroColunas; coluna++) {
        novaLinha.push(this._proximoEstado(linha, coluna))
      }
      linhasTabuleiro.push(novaLinha)
    }

    // Copiar novo tabuleiro para velho
    for (let linha = 0; linha < this.tabuleiro?.numeroLinhas; linha++) {
      const novaLinha = []
      for (let coluna = 0; coluna < this.tabuleiro?.numeroColunas; coluna++) {
        this.tabuleiro.setCell(linha, coluna, linhasTabuleiro[linha][coluna])
      }
      linhasTabuleiro.push(novaLinha)
    }

    this.segundosTimer++
    console.log('_nextTick segundosTimer', this.segundosTimer)
  }

  _proximoEstado(linha, coluna) {
    const adjacentes = [
      this.tabuleiro.getCell(linha+1, coluna+1),
      this.tabuleiro.getCell(linha+1, coluna),
      this.tabuleiro.getCell(linha+1, coluna-1),
      this.tabuleiro.getCell(linha, coluna+1),
      this.tabuleiro.getCell(linha, coluna-1),
      this.tabuleiro.getCell(linha-1, coluna+1),
      this.tabuleiro.getCell(linha-1, coluna),
      this.tabuleiro.getCell(linha-1, coluna-1),
    ]

    console.log('adjacentes', adjacentes)

    return !this.tabuleiro.linhas[linha][coluna]
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

  setCell(linha, coluna, value) {
    this.linhas[linha][coluna] = value
  }

  getCell(linha, coluna) {
    let linhaPossivel = linha > 0 && linha < this.numeroLinhas
    let colunaPossivel = coluna > 0 && coluna < this.numeroColunas
    if(!linhaPossivel || !colunaPossivel) {
      return false
    }
    return this.tabuleiro.linhas[linha][coluna]
  }

  // getCelu
}