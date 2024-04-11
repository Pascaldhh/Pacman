import EntityBase from "../core/EntityBase.js";
import { Sprite } from "../core/types/Sprite.js";
import { SpriteFrame } from "../core/types/SpriteFrame.js";

export default class Tile extends EntityBase   {
  public image: HTMLImageElement;
  
  constructor(image: HTMLImageElement, tileData: Sprite & SpriteFrame) {
    super();
    this.image = image;
    
    this.x = tileData.x;
    this.y = tileData.y;
    this.width = tileData.width;
    this.height = tileData.height;

    this.sx = tileData.sx;
    this.sy = tileData.sy;
    this.sWidth = tileData.sWidth;
    this.sHeight = tileData.sHeight;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.x, this.y, this.width, this.height);
  }

  logic(): void {
    throw new Error("Method not implemented.");
  }
}