const _ = require('lodash')

const Types = [{
  name: '萬',
  type: 'characters',
  labels: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
}, {
  name: '筒',
  type: 'circles',
  labels: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
}, {
  name: '索',
  type: 'bamboos',
  labels: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
}, {
  name: '風',
  type: 'winds',
  labels: ['東', '南', '西', '北']
}, {
  name: '三元',
  type: 'dragons',
  labels: ['白', '發', '中']
}]

class Tile {
  constructor(id, type, num, variation) {
    this.id = id
    this.num = num + 1
    this.type = type.type
    this.label = `${type.labels[num]}${type.name}`
    this.code = [this.num, type.type].join('-')

    if (variation == 0 && this.num == 5 && !["winds", "dragons"].includes(type.type)) {
      this.label = `赤${this.label}`
      this.code = this.code + "-dora"
    }

    if (["winds", "dragons"].includes(type.type)) {
      this.label = type.labels[num]
    }
  }

  isRedFive() {
    return this.isSuits() && this.code.match(/dora$/)
  }

  isWind() {
    return ['winds'].includes(this.type)
  }

  isDragon() {
    return ['dragons'].includes(this.type)
  }

  isHonours() {
    return ['winds', 'dragons'].includes(this.type)
  }

  isSuits() {
    return !['winds', 'dragons'].includes(this.type)
  }

  isCharacters() {
    return this.isSuits() && this.type == 'characters'
  }

  isCircles() {
    return this.isSuits() && this.type == 'circles'
  }

  isBamboos() {
    return this.isSuits() && this.type == 'bamboos'
  }

  isNum(num) {
    return this.num == num
  }
}

Tile.Types = Types

module.exports = Tile
