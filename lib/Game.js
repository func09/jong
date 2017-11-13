const _ = require('lodash')
const Wall = require('./Wall')

class Game {
  constructor() {
    this.wall = new Wall()
  }

  // shuffleTiles() {
  //   console.info("Shuffle start...")
  //   return sleep.sleep(1).then(()=>{
  //     this.wall = _.shuffle(Pai.createYama())
  //     console.info("Finish start...")
  //   })
  // }
  //
  // stackingTiles() {
  //
  // }
  //
  // // 配牌
  // serveTiles() {
  //   return new Promise((resolve, reject)=>{
  //     resolve()
  //   })
  //   // return this.yama.splice(0, 13)
  // }

}

module.exports = Game
