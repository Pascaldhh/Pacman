import { DrawableEntity } from "./core/types/Entity.js";
import Tile from "./entities/Tile.js";

// default 28 x 31
export default class Map implements DrawableEntity {
  private tiles: Tile[];
  private tileImage: HTMLImageElement;
  public assets: HTMLImageElement[];

  constructor() {
    this.tiles = [];
    this.tileImage = new Image();
    this.tileImage.src = "./assets/images/tiles-sprites.png";

    this.assets = [this.tileImage];
  }

  draw(ctx: CanvasRenderingContext2D): void {
    throw new Error("Method not implemented.");
  }

  async generate(): Promise<void> {
    const response = await fetch("./assets/default-map.json");
    const tileCodes: number[][] = await response.json();

    for(let i = 0; i < tileCodes.length; i++) {
      for(let j = 0; j < tileCodes[i].length; j++) {
        
      }
    }
  }
}