import Rectangle from "../core/Rectangle.js";
import { EntityBase } from "../core/types/Entity.js";

export default class Pacman extends Rectangle implements EntityBase {
  public assets: HTMLImageElement[];
  private image: HTMLImageElement;

  constructor(x: number, y: number, w: number, h: number) {
    super();
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;

    this.image = new Image();
    this.image.src = "./assets/images/pacman-sprites.png";
    this.assets = [this.image];
  }

  logic(): void {
    throw new Error("Method not implemented.");
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(this.image, 0, 0, 25, 25, this.x, this.y, this.width, this.height);
  }
}