import EntityBase from "../core/EntityBase.js";

export default class Pacman extends EntityBase {
  private image: HTMLImageElement;
  private animationSpeed: number;

  constructor(x: number, y: number, w: number, h: number) {
    super();
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;

    this.animationSpeed = 150;

    this.image = new Image();
    this.image.src = "./assets/images/pacman-sprites.png";

    this.animation.create("init", 0, [{ sx: 40, sy: 0, sWidth: 20, sHeight: 20 }]);
    this.animation.create("left", this.animationSpeed, [{ sx: 0, sy: 0, sWidth: 20, sHeight: 20 }, { sx: 20, sy: 0, sWidth: 20, sHeight: 20 }]);
    this.animation.create("right", this.animationSpeed, [{ sx: 0, sy: 20, sWidth: 20, sHeight: 20 }, { sx: 20, sy: 20, sWidth: 20, sHeight: 20 }]);
    this.animation.create("top", this.animationSpeed, [{ sx: 0, sy: 40, sWidth: 20, sHeight: 20 }, { sx: 20, sy: 40, sWidth: 20, sHeight: 20 }]);
    this.animation.create("bottom", this.animationSpeed, [{ sx: 0, sy: 60, sWidth: 20, sHeight: 20 }, { sx: 20, sy: 60, sWidth: 20, sHeight: 20 }]);

    this.animation.set("right");

    this.assets = [this.image];
  }

  logic(): void {
    throw new Error("Method not implemented.");
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.animation.use();

    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.x, this.y, this.width, this.height);
  }
}