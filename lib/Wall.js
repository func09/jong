const _ = require('lodash')
const Tile = require('./Tile')

class Wall {
  constructor() {
    this.tiles = this.getTiles()
  }

  getTiles() {
    let id = 0
    const tiles = []

    for (let type of Tile.Types) {
      _.times(type.labels.length, (n) => {
        _.times(4, (m) => {
          tiles.push(new Tile(id++, type, n, m))
        })
      })
    }

    return tiles
  }
}

module.exports = Wall
