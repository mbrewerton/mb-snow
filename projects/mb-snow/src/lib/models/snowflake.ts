import {random, velocity} from '../utils';

export class Snowflake {
  private get colour(): number {
    return random(240, 255);
  }

  private baseVelocity: velocity;
  private baseSway: number;
  private readonly opacity: number;
  radius: number;
  velocity: velocity;
  x: number;
  y: number;
  fill: string;
  sway: number;

  constructor(x: number,
              y: number,
              radius: number,
              velocity: velocity,
              swayAmount: number) {
    this.x = x;
    this.y = y;
    this.baseVelocity = {...velocity}
    this.velocity = velocity;
    this.radius = radius;
    this.opacity = random(0.5, 1);
    this.fill = `rgba(${this.colour}, ${this.colour}, ${this.colour}, ${this.opacity})`;
    this.sway = random(swayAmount / 2, swayAmount * Math.PI);
    this.baseSway = this.sway;
  }

  reset(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.velocity.y = this.baseVelocity.y;
    this.velocity.x = this.baseVelocity.x;
    this.sway = random(0, this.baseSway * Math.PI);
  }

  calculateSway() {
    this.velocity.x = this.velocity.x * random(-1, 1);
    const sway = (0.3 * Math.cos(this.sway += .025) * (this.radius * 0.5) * (this.sway * 0.25)) + this.velocity.x * 0.1;
    return this.x + sway;
  }
}
