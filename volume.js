function torusVolume(majorRadius, minorRadius) {
  return (Math.PI * Math.pow(minorRadius, 2)) * (2 * Math.PI * majorRadius);
}

function sphereVolume(radius) {
  return 4 * Math.PI * Math.pow(radius, 3) / 3
}

module.exports = {
  torusVolume,
  sphereVolume
}
