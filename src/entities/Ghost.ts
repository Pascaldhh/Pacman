import EntityBase from "../core/EntityBase.js";

export default class Ghost extends EntityBase {
  logic(): void {
    throw new Error("Method not implemented.");
  }
  draw(ctx: CanvasRenderingContext2D): void {
    throw new Error("Method not implemented.");
  }
}