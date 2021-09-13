import { Events } from "../../events/Events.js";

export class Jogo {
  combinacaoVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  constructor(tabuleiro, botoes, jogador1, jogador2, jogadorAtual) {
    this.tabuleiro = tabuleiro;
    this.botoes = botoes;
    this.jogador1 = jogador1;
    this.jogador2 = jogador2;
    this.jogadorAtual = jogadorAtual;
  }

  verificarVitoria() {
    let mensagem;
    this.combinacaoVitoria.forEach((combinacao) => {
      if (
        this.botoes[combinacao[0]].innerHTML ===
          this.botoes[combinacao[1]].innerHTML &&
        this.botoes[combinacao[1]].innerHTML ===
          this.botoes[combinacao[2]].innerHTML
      ) {
        if (
          this.botoes[combinacao[0]].innerHTML === this.jogador1.tipoJogador
        ) {
          mensagem = `Jogador 1 (${this.jogador1.tipoJogador}) ganhou!!!`;
        } else if (
          this.botoes[combinacao[0]].innerHTML === this.jogador2.tipoJogador
        ) {
          mensagem = `Jogador 2 (${this.jogador2.tipoJogador}) ganhou!!!`;
        }
      }
    });

    if (!mensagem) {
      mensagem = this.verificarEmpate(this.botoes);
    }

    return mensagem;
  }

  verificarEmpate(botoes) {
    let quantidadeBotoesPreenchidos = 0;
    botoes.forEach((botao) => {
      if (botao.innerHTML !== "") {
        quantidadeBotoesPreenchidos += 1;
      }
    });

    if (quantidadeBotoesPreenchidos === 9) {
      return "Ih! Deu velha. Ninguém ganhou!";
    }
  }

  definirCorJogador() {
    if (this.jogadorAtual === this.jogador1.tipoJogador) {
      return "blue";
    } else {
      return "red";
    }
  }
}
