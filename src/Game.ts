import GameBase from "./core/GameBase.js";
import { RenderMode } from "./core/Render.js";
import Ghost from "./entities/Ghost.js";
import Map from "./Map.js";
import Pacman from "./entities/Pacman.js";

export default class Game extends GameBase {
  private pacman: Pacman;
  private ghosts: Ghost[];
  private map: Map;

  constructor() {
    super(60);    
  }

  start(): void {
    this.pacman = new Pacman();
    this.ghosts = [new Ghost(), new Ghost(), new Ghost(), new Ghost()];
    this.map = new Map();
  }

  update(): void {
    
  }

  draw(): void {
    this.render.create("map", RenderMode.Once, [this.pacman]);
    this.render.create("moveable", RenderMode.EachFrame, []);
  }

  events(): void {

  }
}