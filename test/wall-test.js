const assert = require('assert')
const chai = require('chai'),
  should = chai.should(),
  expect = chai.expect

const Wall = require('../lib/Wall')

describe('Wall', function() {
  describe('#getTiles()', () => {
    context("牌山には", () => {
      const tiles = new Wall().getTiles()
      it("136枚の牌が存在する", () => {
        expect(tiles.length).to.eq(136)
      })

      context("字牌", () => {
        it("28枚の字牌が存在する", () => {
          expect(tiles.filter(n => n.isHonours()).length).to.eq(28)
        })
        it("16枚の風牌が存在する", () => {
          expect(tiles.filter(n => n.isWind()).length).to.eq(16)
        })
        it("12枚の三元牌が存在する", () => {
          expect(tiles.filter(n => n.isDragon()).length).to.eq(12)
        })
        it("4枚の發が存在する", () => {
          expect(tiles.filter(n => n.isDragon() && n.isNum(1)).length).to.eq(4)
        })
      })

      context("数牌", () => {
        it("108枚の数牌が存在する", () => {
          expect(tiles.filter(n => n.isSuits()).length).to.eq(108)
        })
        it("3枚の赤ドラ牌が存在する", () => {
          expect(tiles.filter(n => n.isRedFive()).length).to.eq(3)
        })
        it("36枚の萬子が存在する", () => {
          expect(tiles.filter(n => n.isCharacters()).length).to.eq(36)
        })
        it("4枚の一萬が存在する", () => {
          expect(tiles.filter(n => n.isCharacters() && n.isNum(1)).length).to.eq(4)
        })
        it("36枚の筒子が存在する", () => {
          expect(tiles.filter(n => n.isCircles()).length).to.eq(36)
        })
        it("4枚の五筒が存在する", () => {
          expect(tiles.filter(n => n.isCircles() && n.isNum(5)).length).to.eq(4)
        })
        it("36枚の索子が存在する", () => {
          expect(tiles.filter(n => n.isBamboos()).length).to.eq(36)
        })
        it("4枚の九索が存在する", () => {
          expect(tiles.filter(n => n.isBamboos() && n.isNum(9)).length).to.eq(4)
        })
      })
    })
  })

  describe('#shuffleTiles()', () => {
    const wall = new Wall()
    context("洗牌する時", () => {
      it("場の牌はバラバラにシャッフルされる", () => {
        const tileIds = wall.tiles.map(n => n.id)
        wall.shuffleTiles()
        const shuffledTileIds = wall.tiles.map(n => n.id)
        expect(shuffledTileIds).not.to.eq(tileIds)
      })
    })
  })

  describe('#stackWall()', () => {
    const wall = new Wall()

    beforeEach(()=>{
      wall.shuffleTiles()
      wall.stackWall()
    })

    context("壁牌を積む時", () => {
      it('４つの壁牌が存在する', () => {
        expect(wall.stacked.length).to.eq(4)
      })
      it('それぞれの山に積まれている牌の数は34枚である', () => {
        expect(wall.stacked[0].length).to.eq(34)
        expect(wall.stacked[1].length).to.eq(34)
        expect(wall.stacked[2].length).to.eq(34)
        expect(wall.stacked[3].length).to.eq(34)
      })
      context('開門', () => {
        it('サイコロの目が2の時、南家の前の壁牌の右側から２番目で壁牌を切り離すこと')
        it('サイコロの目が5の時、東家の前の壁牌の右側から5番目で壁牌を切り離すこと')
      })
      context('王牌', () => {
        it('王牌は14枚存在すること')
        it('王牌の開門位置から３番目上段にある牌をドラ表示牌として表にすること')
        it('開門位置から２列の４枚はリャンシャン牌となること')
        it('カンした場合、リャンシャン牌から１枚ツモること')
        it('カンした場合、王牌に１枚補充すること')
      })
    })
  })

});
