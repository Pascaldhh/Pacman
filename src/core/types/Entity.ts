export type EntityBase = DrawableEntity & LogicEntity;

export type DrawableEntity = {
  assets: HTMLImageElement[],
  draw(ctx: CanvasRenderingContext2D): void;
}

export type LogicEntity = {
  logic(): void;
}