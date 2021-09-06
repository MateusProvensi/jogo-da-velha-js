import { Utils } from "../util/Util.js";

export class Events {
  static definirEventoBotao(botoes, jogo) {
    botoes.forEach((button) => {
      button.onclick = (e) => {
        e.preventDefault();

        if (button.innerHTML !== "") {
          alert("Este campo já foi escolhido, escolha outro");
          return;
        }

        button.style.color = jogo.definirCorJogador();

        button.innerHTML = jogo.jogadorAtual;
    
        const mensagem = jogo.verificarVitoria();

        if (mensagem) {
          alert(mensagem);
          Events.definirEventoBotaoPadrao(botoes);
        }
    
        jogo.jogadorAtual = Utils.proximoJogador(jogo.jogadorAtual, jogo.jogador1, jogo.jogador2);
      };
    });
  }

  static definirEventoBotaoPadrao(botoes) {
    botoes.forEach((button) => {
      button.onclick = (e) => {
        e.preventDefault();
      };
    });
  }
}
