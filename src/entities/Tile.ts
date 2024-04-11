import EntityBase from "../core/EntityBase.js";

export default class Tile extends EntityBase   {
  public image: HTMLImageElement;
  
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image, 0, 0, 25, 25, this.x, this.y, this.width, this.height);
  }

  logic(): void {
    throw new Error("Method not implemented.");
  }
}