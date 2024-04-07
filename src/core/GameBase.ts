import Render from "./Render.js";

export default abstract class GameBase {
  protected render: Render;
  protected fps: number;

  constructor(fps: number) {
    this.fps = fps;
    this.render = new Render();

    this.startup();
  }

  protected startup(): void {
    this.events();
    this.start();
    this.draw();

    setInterval(this.update.bind(this), 1000/this.fps);
  }
    
  /**
   * Runs only one time
   */  
  abstract start(): void;

  /**
   * Runs every second x amount of times.
   * Specified in the variable updatesEachSecond.
   */
  abstract update(): void;

  /**
   * Runs only one time
   * Register all canvases
   */  
  abstract draw(): void;

  /**
   * Contains all global eventlisteners
   */
  abstract events(): void;
}