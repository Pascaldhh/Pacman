import Rectangle from "../core/Rectangle.js";
import { EntityBase } from "../core/types/Entity.js";

export default class Ghost extends Rectangle implements EntityBase {
  logic(): void {
    throw new Error("Method not implemented.");
  }
  draw(ctx: CanvasRenderingContext2D): void {
    throw new Error("Method not implemented.");
  }
}