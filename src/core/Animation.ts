import { SpriteFrame } from "./types/SpriteFrame.js";

type AnimationProps = {key: string, frames: SpriteFrame[]};

export default class Animation {
  private currentFrame: number;
  private animations: AnimationProps[];

  private active?: AnimationProps;
  private entityFrame: SpriteFrame;

  constructor(activeFrame: SpriteFrame) {
    this.currentFrame = 0;
    this.animations = [];
    this.entityFrame = activeFrame;
  }

  public create(name: string, animations: SpriteFrame[]): void {
    if(this.animations.some(e => e.key === name)) throw new Error("Duplicated animation");
    this.animations.push({key: name, frames: animations});
  }

  public set(name: string): void {
    this.active = this.animations.find(e => e.key === name);
  }

  public use(): void {
    if(!this.active) return;
  
    if(this.currentFrame >= this.active.frames.length) this.currentFrame = 0;

    const frame = this.active.frames[this.currentFrame];
    this.entityFrame.sx = frame.sx;
    this.entityFrame.sy = frame.sy;
    this.entityFrame.sWidth = frame.sWidth;
    this.entityFrame.sHeight = frame.sHeight;
    this.currentFrame++;
  }
}