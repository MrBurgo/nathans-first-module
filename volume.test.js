const { expect } = require('chai');
const { sphereVolume, torusVolume } = require('./volume');

describe('Canary test', () => {
  it('expects true to be true', () => {
    expect(true).to.eql(true);
  })
})

describe('volume test', () => {
  it('calculates sphere volume correctly', () => {
    expect(sphereVolume(1)).to.eql(4.1887902047863905)
  })

  it('calculates torus volume correctly', () => {
    expect(torusVolume(4, 3)).to.eql(710.6115168784338)
  })
})
