import { Time } from "./Time.js";
import { SpriteFrame } from "./types/SpriteFrame.js";

type AnimationProps = {key: string, speed: number, frames: SpriteFrame[]};

export default class Animation {
  private currentFrame: number;
  private animations: AnimationProps[];

  private active?: AnimationProps;
  private entityFrame: SpriteFrame;

  private timeSinceLastUpdate = 0;

  constructor(activeFrame: SpriteFrame) {
    this.currentFrame = 0;
    this.animations = [];
    this.entityFrame = activeFrame;
  }

  public create(name: string, speed: number, animations: SpriteFrame[]): void {
    if(this.animations.some(e => e.key === name)) throw new Error("Duplicated animation");
    this.animations.push({key: name, speed: speed, frames: animations});
  }

  public set(name: string): void {
    this.active = this.animations.find(e => e.key === name);
  }

  public use(): void {
    if(!this.active) return;
    
    this.timeSinceLastUpdate += Time.deltaTime;

    if(this.timeSinceLastUpdate >= this.active.speed / 1000) {
      const frame = this.active.frames[this.currentFrame];
      this.entityFrame.sx = frame.sx;
      this.entityFrame.sy = frame.sy;
      this.entityFrame.sWidth = frame.sWidth;
      this.entityFrame.sHeight = frame.sHeight;
      
      this.currentFrame = (this.currentFrame + 1) % this.active.frames.length;
      this.timeSinceLastUpdate = 0;
    }

  }
}