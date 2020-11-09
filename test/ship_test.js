const expect = require('chai').expect

describe('checkForShip', () => {
  const checkForShip = require('../game_logic/ship_methods').checkForShip
  it('should correct report no ship at a given players coordinate', () => {
    expect(checkForShip(player, [9, 9])).to.be.false
    player = {
      ships: [
        {
          locations: [[9, 9]],
        },
      ],
    }
    expect(checkForShip(player, [0, 0])).to.be.false
  })

  it('should correctly report a ship located at the given coordinates', () => {
    player = {
      ships: [
        {
          locations: [[0, 0]],
        },
      ],
    }
    expect(checkForShip(player, [0, 0])).to.be.true
  })

  it('should handle ships located at more than one coordinate', () => {
    player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
        },
      ],
    }
    expect(checkForShip(player, [0, 1])).to.be.true
    expect(checkForShip(player, [0, 0])).to.be.true
    expect(checkForShip(player, [9, 9])).to.be.false
  })

  it('should handle checking multiple ships', () => {
    player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
        },
        {
          locations: [
            [1, 0],
            [1, 1],
          ],
        },
        {
          locations: [
            [2, 0],
            [2, 1],
            [2, 2],
            [2, 3],
          ],
        },
      ],
    }
    expect(checkForShip(player, [0, 1])).to.be.true
    expect(checkForShip(player, [0, 0])).to.be.true
    expect(checkForShip(player, [1, 0])).to.be.true
    expect(checkForShip(player, [1, 1])).to.be.true
    expect(checkForShip(player, [2, 3])).to.be.true
    expect(checkForShip(player, [9, 9])).to.be.false
  })
})

describe('damageShip', () => {
  const damageShip = require('../game_logic/ship_methods').damageShip
  it('should register damage on a given at a given location', () => {
    const ship = {
      location: [[0, 0]],
      damage: [],
    }
  })
})
