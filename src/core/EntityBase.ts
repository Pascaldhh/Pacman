import Animation from "./Animation.js";
import { Sprite } from "./types/Sprite.js";
import { SpriteFrame } from "./types/SpriteFrame.js";

export default abstract class EntityBase implements Sprite, SpriteFrame  {
  public x: number;
  public y: number;
  public width: number;
  public height: number;

  public sx: number;
  public sy: number;
  public sWidth: number;
  public sHeight: number;

  public assets: HTMLImageElement[];
  public animation: Animation;

  constructor() {
    this.animation = new Animation(this);
  }

  abstract draw(ctx: CanvasRenderingContext2D): void;
  abstract logic(): void;
}