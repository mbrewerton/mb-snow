export function random(min, max) {
  var randomDelta = max - min;
  return max === min ?
    min :
    (Math.random() * randomDelta) + min;
}
