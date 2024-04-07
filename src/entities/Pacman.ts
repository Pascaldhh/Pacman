import Rectangle from "../core/Rectangle.js";
import { EntityBase } from "../core/types/Entity.js";

export default class Pacman extends Rectangle implements EntityBase {
  assets: HTMLImageElement[];
  private image: HTMLImageElement;
  private imageReady: boolean;

  constructor() {
    super();
    this.image = new Image();
    this.image.src = "./assets/images/pacman-sprites.png";
    
    this.assets = [this.image];
  }

  logic(): void {
    throw new Error("Method not implemented.");
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "red";
    ctx.drawImage(this.image, 50, 50, 150, 150);
  }
}