import { AfterViewInit, Component, ElementRef, HostListener, Input } from '@angular/core';
import { Snowflake } from '../models/snowflake';
import {modifyAmount, random} from '../utils';

@Component({
  selector: 'mb-snow',
  templateUrl: './snow.component.html',
  styleUrls: ['./snow.component.scss']
})
export class SnowComponent implements AfterViewInit {
  @Input() minRadius = 1.5;
  @Input() maxRadius = 3;
  @Input() minVelocity = 0.75;
  @Input() maxVelocity = 1.5;
  @Input() sway = true;
  @Input() swayOffset = 5;
  @Input() autoStart = true;
  @Input() amount = 250;
  @Input() forceAmount = false;
  @Input() zIndex = 1;
  canvasElement: HTMLCanvasElement;
  snowFlakes: Snowflake[] = [];
  canvasContext: CanvasRenderingContext2D;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resize();
  }

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.initialiseCanvas();
    const amount = this.forceAmount ? this.amount : modifyAmount(this.amount, this.canvasElement.width);

    if (this.autoStart) {
      this.startSnowfall();
    }

    for (let i = 0; i < amount; i++) {
      this.snowFlakes.push(
        new Snowflake(
          random(0, this.canvasElement.width),
          random(0, this.canvasElement.height),
          random(this.minRadius, this.maxRadius),
          {x: random(this.minVelocity, this.maxVelocity), y: random(this.minVelocity, this.maxVelocity)},
          this.swayOffset
        )
      );
    }
  }

  public startSnowfall() {
    this.canvasContext.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.snowFlakes.forEach((snowFlake) => {
      this.canvasContext.beginPath();
      this.canvasContext.fillStyle = snowFlake.fill;
      this.canvasContext.arc(snowFlake.x, snowFlake.y, snowFlake.radius, 0, 2 * Math.PI);
      this.canvasContext.fill();
      this.canvasContext.closePath();
      snowFlake.y += snowFlake.velocity.y;

      if (this.sway) {
        snowFlake.x = snowFlake.calculateSway();
      }

      if (this.checkSnowFlakeCollision(snowFlake)) {
        snowFlake.reset(random(0, this.canvasElement.width), 0);
      }
    });
    requestAnimationFrame(this.startSnowfall.bind(this));
  }

  private checkSnowFlakeCollision(snowFlake: Snowflake) {
    return snowFlake.y > this.canvasElement.height ||
      snowFlake.x > this.canvasElement.width;
  }
  private resize() {
    const height = this.canvasElement.height;
    const width = this.canvasElement.width;
    const newHeight = this.canvasElement.offsetHeight;
    const newWidth = this.canvasElement.offsetWidth;
    this.canvasElement.height = newHeight;
    this.canvasElement.width = newWidth;
    this.snowFlakes.forEach((snowFlake) => {
      snowFlake.x = snowFlake.x / width * newWidth;
      snowFlake.y = snowFlake.y / height * newHeight;
    });
  }

  private initialiseCanvas() {
    const scale = window.devicePixelRatio;
    this.canvasElement = this.elementRef.nativeElement.querySelector('.mb-snow-canvas');
    this.canvasElement.style.zIndex = 'this.zIndex';
    this.canvasElement.height = this.canvasElement.offsetHeight * scale;
    this.canvasElement.width = this.canvasElement.offsetWidth * scale;
    this.canvasContext = this.canvasElement.getContext('2d');
  }
}
