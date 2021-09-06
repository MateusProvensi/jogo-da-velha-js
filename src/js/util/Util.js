import { Button } from "../model/game/Button.js";

export class Utils {
  static criarNovoElemento(tagName) {
    const tag = document.createElement(tagName);
    return tag;
  }

  static proximoJogador(jogadorAtual, jogador1, jogador2) {
    return jogadorAtual === jogador1.tipoJogador
      ? jogador2.tipoJogador
      : jogador1.tipoJogador;
  }

  static criarBotoes() {
    const botoes = [];

    for (let i = 0; i < 9; i++) {
      let botao = new Button().elemento;

      switch (i) {
        case 0:
          botao.style.borderWidth = "0px 1px 1px 0px";
          break;

        case 1:
          botao.style.borderWidth = "0px 1px 1px 1px";
          break;

        case 2:
          botao.style.borderWidth = "0px 0px 1px 1px";
          break;

        case 3:
          botao.style.borderWidth = "1px 1px 1px 0px";
          break;

        case 4:
          botao.style.borderWidth = "1px 1px 1px 1px";
          break;

        case 5:
          botao.style.borderWidth = "1px 0px 1px 1px";
          break;

        case 6:
          botao.style.borderWidth = "1px 1px 0px 0px";
          break;

        case 7:
          botao.style.borderWidth = "1px 1px 0px 1px";
          break;

        case 8:
          botao.style.borderWidth = "1px 0px 0px 1px";
          break;

        default:
          break;
      }

      botoes.push(botao);
    }

    return botoes;
  }

  static definirBody(body) {
    body.style.margin = "0px";
    body.style.backgroundColor = "rgb(118, 118, 118)";
  }
}
