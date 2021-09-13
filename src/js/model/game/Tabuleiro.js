import { Utils } from "../../util/Util.js";

export class Tabuleiro {
  constructor() {
    this.elemento = Utils.criarNovoElemento("div");
    this.elemento.style.display = "flex";
    this.elemento.style.flexWrap = "wrap";
    this.elemento.style.height = "600px";
    this.elemento.style.width = "600px";
    this.elemento.style.backgroundColor = "black";

    this.elemento.style.padding = "12.5px";
  }

  render(tagBody) {
    const containerTabuleiro = Utils.criarNovoElemento("main");
    containerTabuleiro.style.display = "flex";
    containerTabuleiro.style.justifyContent = "center";

    containerTabuleiro.appendChild(this.elemento);
    tagBody.appendChild(containerTabuleiro);
  }

  desenharBotao(botoes) {
    botoes.forEach((botao, i) => {
      botao.id = `${i}`;

      this.elemento.appendChild(botao);
    });
  }
}
