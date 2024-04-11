import { Canvas } from "./Canvas.js";
import EntityBase from "./EntityBase.js";

export const RenderMode = {
  Once: 0,
  EachFrame: 1
} as const;
type Mode = (typeof RenderMode)[keyof typeof RenderMode];

type RenderCombo = { canvas: Canvas, objects: EntityBase[] };

export default class Render {
  public drawableEachFrame: RenderCombo[] = [];

  public create(id: string, mode: Mode, objects: EntityBase[]): void {
    const canvas = Canvas.create(id);
    switch(mode) {
      case RenderMode.Once:
        this.draw(canvas, objects, false);
        break;
      case RenderMode.EachFrame:
        this.drawableEachFrame.push({ canvas, objects });
        break;
    }
  }

  public drawEachFrame() {
    this.drawableEachFrame.forEach(drawable => this.draw(drawable.canvas, drawable.objects, true));
  }

  private draw(canvas: Canvas, objects: EntityBase[], drawScheduled: boolean): void {
    canvas.clear();
    objects.forEach(object => {
      Promise.all(object.assets
        .filter(img => !img.complete)
        .map(img => new Promise(resolve => { img.onload = img.onerror = resolve; })))
        .then(() => object.draw(canvas.ctx));
    });
  }
}