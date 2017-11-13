const _ = require('lodash')
const Tile = require('./Tile')

class Wall {
  constructor() {
    this.tiles = this.getTiles()
    this.stacked
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

  shuffleTiles() {
    this.tiles = _.shuffle(this.getTiles())
  }

  stackWall() {
    this.stacked = []
    _.times(4, () => {
      this.stacked.push(this.tiles.splice(0, 34))
    })
  }

}

module.exports = Wall
