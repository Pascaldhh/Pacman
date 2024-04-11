import GameBase from "./core/GameBase.js";
import { RenderMode } from "./core/Render.js";
import Ghost from "./entities/Ghost.js";
import Map from "./Map.js";
import Pacman from "./entities/Pacman.js";
import { Time } from "./core/Time.js";

export default class Game extends GameBase {
  private pacman: Pacman;
  private ghosts: Ghost[];
  private map: Map;

  constructor() {
    super(60);    
  }

  start(): void {
    this.pacman = new Pacman(50, 50, 50, 50);
    this.ghosts = [new Ghost(), new Ghost(), new Ghost(), new Ghost()];
    this.map = new Map();
  }

  update(): void {}
  draw(): void {}

  registerRenders(): void {
    this.render.create("map", RenderMode.Once, []);
    this.render.create("moveable", RenderMode.EachFrame, [this.pacman]);
  }

  events(): void {

  }
}