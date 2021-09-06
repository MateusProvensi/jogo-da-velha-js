import { Player } from "./model/player/Player.js";
import { Tabuleiro } from "./model/game/Tabuleiro.js";
import { Utils } from "./util/Util.js";
import { Events } from "./events/Events.js";
import { Jogo } from "./model/game/Jogo.js";

const body = document.querySelector("body");
Utils.definirBody(body);

const tabuleiro = new Tabuleiro();
const botoes = Utils.criarBotoes();

const jogador1 = new Player("O");
const jogador2 = new Player("X");

let jogadorAtual = jogador1.tipoJogador;

const jogo = new Jogo(tabuleiro, botoes, jogador1, jogador2, jogadorAtual);

tabuleiro.render(body);
tabuleiro.desenharBotao(botoes);

Events.definirEventoBotao(botoes, jogo);
