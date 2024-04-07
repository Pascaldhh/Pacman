import Rectangle from "../core/Rectangle.js";
import { DrawableEntity } from "../core/types/Entity.js";

export default class Tile extends Rectangle implements DrawableEntity {
  private image: string;
  
  draw(): void {
    
  }
}