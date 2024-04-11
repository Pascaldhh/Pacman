import EntityBase from "./core/EntityBase.js";
import Tile from "./entities/Tile.js";

// default 28 x 31
export default class Map extends EntityBase {
  private tiles: Tile[];
  private tileImage: HTMLImageElement;
  public assets: HTMLImageElement[];

  constructor() {
    super();

    this.tiles = [];
    this.tileImage = new Image();
    this.tileImage.src = "./assets/images/tiles-sprites.png";

    this.assets = [this.tileImage];
  }

  async draw(ctx: CanvasRenderingContext2D): Promise<void> {
    ctx.imageSmoothingEnabled = false;

    await this.generate();
    this.tiles.forEach(tile => tile.draw(ctx));
  }

  logic(): void {}

  async generate(): Promise<void> {
    const response = await fetch("./assets/default-map.json");
    const tileCodes: number[][] = await response.json();

    for(let i = 0; i < tileCodes.length; i++) {
      for(let j = 0; j < tileCodes[i].length; j++) {
        this.tiles.push(new Tile(this.tileImage, { sx: 0, sy: 0, sWidth: 8, sHeight: 8, x: j*22, y: i*22, width: 22, height: 22 }));
      }
    }
  }
}