import { gliderPreset } from '@/presets/glider'

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
    this.iniciarTabuleiro(linhas, colunas)
    this.resetClick()
  }

  playPauseClick() {
    console.log('playPauseClick', JSON.stringify(this.tabuleiro))
    if(!this.pausado) {
      this._clearTimer()
      return
    }

    this._startTimer()
  }

  resetClick() {
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
    this.tabuleiro = new Tabuleiro().set(gliderPreset)
    this.numeroLinhasTabuleiro = this.tabuleiro.numeroLinhas
    this.numeroColunasTabuleiro = this.tabuleiro.numeroColunas
    this.resetClick()
  }

  cellClick(linha, coluna) {
    console.log('cellClick', linha, coluna)
    this.tabuleiro.toogleCell(linha, coluna)
  }

  iniciarTabuleiro(linhas, colunas) {
    this.tabuleiro = new Tabuleiro().init(linhas, colunas)
    this.numeroLinhasTabuleiro = this.tabuleiro
    this.numeroColunasTabuleiro = this.tabuleiro
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
    const vivo = true
    const morto = false

    const estadoAtual = this.tabuleiro.getCell(linha, coluna)
    const adjacentesVivos = adjacentes.filter(estado => estado === vivo)

    if(estadoAtual == vivo) {
      // Regra 1 underpopulation
      if(adjacentesVivos.length < 2) {
        return morto
      }
      // Regra 2 next generation
      if(adjacentesVivos.length === 2 || adjacentesVivos.length === 3) {
        return vivo
      }
      // Regra 3 overpopulation
      if(adjacentesVivos.length> 3) {
        return morto
      }
    }
    // Regra 4 reproduction
    if(adjacentesVivos.length == 3) {
      return vivo
    }

    return morto
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

  set(preset) {
    this.numeroLinhas = preset.numeroLinhas
    this.numeroColunas = preset.numeroColunas
    this.linhas = preset.linhas

    // const linhasTabuleiro = []
    // for (let linha = 0; linha < this.numeroLinhas; linha++) {
    //   const novaLinha = []
    //   for (let coluna = 0; coluna < this.numeroColunas; coluna++) {
    //     novaLinha.push(false)
    //   }
    //   linhasTabuleiro.push(novaLinha)
    // }

    // // Copiar novo tabuleiro para velho
    // for (let linha = 0; linha < this.numeroLinhas; linha++) {
    //   for (let coluna = 0; coluna < this.numeroColunas; coluna++) {
    //     linhasTabuleiro[linha][coluna] = preset.linhas[linha][coluna]
    //   }
    // }

    // this.linhas = linhasTabuleiro

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
      // Se é um valor na 'borda' do tabuleiro, considera como morto
      return false
    }
    return this.linhas[linha][coluna]
  }
}