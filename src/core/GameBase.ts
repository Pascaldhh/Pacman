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
    this.registerRenders();

    requestAnimationFrame(this.loop.bind(this));
  }
    
  private loop(): void {
    this.update();
    this.draw();
    this.render.drawEachFrame();
    requestAnimationFrame(this.loop.bind(this));
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
   * Runs every frame
   */
  abstract draw(): void;

  /**
   * Runs only one time
   * Useable to register all canvases
   */  
  abstract registerRenders(): void;

  /**
   * Contains all global eventlisteners
   */
  abstract events(): void;
}