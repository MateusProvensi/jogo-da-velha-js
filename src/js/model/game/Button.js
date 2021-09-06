import { Utils } from "../../util/Util.js";

export class Button {
  width = "200px";
  height = "200px";
  fontSize = "100px";

  constructor() {
    this.elemento = Utils.criarNovoElemento("button");
    this.elemento.style.width = this.width;
    this.elemento.style.height = this.height;

    this.elemento.style.fontSize = this.fontSize;
    this.elemento.style.backgroundColor = "black";
  }
}
