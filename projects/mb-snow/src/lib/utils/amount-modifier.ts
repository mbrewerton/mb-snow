export function modifyAmount(amount: number, width: number): number {
  let mod;
  if (width <= 640)
    mod = 0.5;
  else if (width <= 1024)
    mod = 0.75;
  else if (width <= 1440)
    mod = 1;
  else if (width <= 1920)
    mod = 1.25;
  else if (width <= 2560)
    mod = 1.5;
  else
    mod = 1.75;

  return amount * mod;
}
