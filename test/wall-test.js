const assert = require('assert')
const chai = require('chai'),
  should = chai.should(),
  expect = chai.expect

const Wall = require('../lib/Wall')

describe('Wall', function() {
  describe('#constructor()', () => {
    context("山には", () => {
      const wall = new Wall()
      it("136枚の牌が存在する", () => {
        expect(wall.tiles.length).to.eq(136)
      })

      context("字牌", () => {
        it("28枚の字牌が存在する", () => {
          expect(wall.tiles.filter(n => n.isHonours()).length).to.eq(28)
        })
        it("16枚の風牌が存在する", () => {
          expect(wall.tiles.filter(n => n.isWind()).length).to.eq(16)
        })
        it("12枚の三元牌が存在する", () => {
          expect(wall.tiles.filter(n => n.isDragon()).length).to.eq(12)
        })
        it("4枚の發が存在する", () => {
          expect(wall.tiles.filter(n => n.isDragon() && n.isNum(1)).length).to.eq(4)
        })
      })

      context("数牌", () => {
        it("108枚の数牌が存在する", () => {
          expect(wall.tiles.filter(n => n.isSuits()).length).to.eq(108)
        })
        it("3枚の赤ドラ牌が存在する", () => {
          expect(wall.tiles.filter(n => n.isRedFive()).length).to.eq(3)
        })
        it("36枚の萬子が存在する", () => {
          expect(wall.tiles.filter(n => n.isCharacters()).length).to.eq(36)
        })
        it("4枚の一萬が存在する", () => {
          expect(wall.tiles.filter(n => n.isCharacters() && n.isNum(1)).length).to.eq(4)
        })
        it("36枚の筒子が存在する", () => {
          expect(wall.tiles.filter(n => n.isCircles()).length).to.eq(36)
        })
        it("4枚の五筒が存在する", () => {
          expect(wall.tiles.filter(n => n.isCircles() && n.isNum(5)).length).to.eq(4)
        })
        it("36枚の索子が存在する", () => {
          expect(wall.tiles.filter(n => n.isBamboos()).length).to.eq(36)
        })
        it("4枚の九索が存在する", () => {
          expect(wall.tiles.filter(n => n.isBamboos() && n.isNum(9)).length).to.eq(4)
        })
      })
    })
  })
});
