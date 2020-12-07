# @mbrewerton/mb-snow

### About
**mb-snow** is an Angular 10 module for adding a snowfall effect to your Angular applications.

It's customisable and extremely easy to use.

### Usage
- Install **mb-snow** with npm: `npm i @mbrewerton/mb-snow`.
- Import the `MbSnowModule` in your `<name>.module.ts`.
- Add the `<mb-snow></mb-snow>` component to any component in your application.

You can overwrite the following default values by passing them into the component:
- `minRadius` default: **1.5**
  - The smallest size of snowflakes.
- `maxRadius` default: **3**
  - The largest size of snowflakes.
- `minVelocity` default: **0.75**
  - Used as the lowest value for the snowflake velocity calculations.
- `maxVelocity` default: **1.5**
  - Used as the highest value for the snowflake velocity calculations.
- `sway` default: **true**
  - Whether snowflakes should "sway" or fall straight down.
- `swayOffset` default: **5**
  - The "offset" used to calculate potential sway. A higher value means higher potential sway on the X axis.
- `autoStart` default: **true**
  - Whether the snowflakes should start falling on start. **Note: There is currently no other way to initialise the snowflakes**
- `amount` default: **250**
  - The amount used to calculate the number of snowflakes based on screen estate. A higher value means higher potential of snowflakes being created. Lower screen sizes will see less snowflakes.
- `forceAmount` default: **false**
  - Forces the amount of snowflakes to be exactly what is passed to `[amount]` - or its default.
- `zIndex` default: **1**
  - The `z-index` of the snowflake canvas.
