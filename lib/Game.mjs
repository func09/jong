import _ from 'lodash'
import sleep from 'sleep'
import Wall from '../models/Wall'

class Game {
  constructor(players) {
    this.players = players
    this.wall = new Wall()
    // this.wall = this.shuffleTiles()

    // プレイヤーは4人
    if (this.players.length != 4) {
      throw Error("Bad players count")
    }
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
