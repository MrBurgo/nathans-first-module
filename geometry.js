// Geometry stuff

function torusVolume(majorRadius, minorRadius) {
  return (Math.PI * Math.pow(minorRadius, 2)) * (2 * Math.PI * majorRadius);
}

console.log(torusVolume(4,3))
