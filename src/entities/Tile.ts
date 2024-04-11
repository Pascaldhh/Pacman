import Rectangle from "../core/Rectangle.js";
import { DrawableEntity } from "../core/types/Entity.js";

export default class Tile extends Rectangle implements DrawableEntity {
  public assets: HTMLImageElement[];
  public image: HTMLImageElement;
  
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image, 0, 0, 25, 25, this.x, this.y, this.width, this.height);
  }
}