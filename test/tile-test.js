const assert = require('assert')
const chai = require('chai')
  , should = chai.should()
  , expect = chai.expect

const Tile = require('../lib/Tile')

describe('Tile', function() {
  describe('#constructor()', () => {
    context("萬子", () => {
      it("1番目の牌は「一萬」のラベルであるべき", () => {
        const tile = new Tile(1, Tile.Types[0], 0, 0)
        expect(tile.label).to.eq("一萬")
        expect(tile.code).to.eq("1-characters")
      })
    })
    context("筒子", () => {
      it("5番目の牌は「五筒赤」のラベルであるべき", () => {
        const tile = new Tile(1, Tile.Types[1], 4, 0)
        expect(tile.label).to.eq("赤五筒")
        expect(tile.code).to.eq("5-dots-dora")
      })
    })
    context("索子", () => {
      it("9番目の牌は「九索」のラベルであるべき", () => {
        const tile = new Tile(1, Tile.Types[2], 8, 0)
        expect(tile.label).to.eq("九索")
        expect(tile.code).to.eq("9-bamboos")
      })
    })

    context("風牌", () => {
      it("１番目は「東」のラベルである", () => {
        const tile = new Tile(1, Tile.Types[3], 0, 0)
        expect(tile.label).to.eq("東")
        expect(tile.code).to.eq("1-winds")
      })
    })

    context("三元牌", () => {
      it("１番目は「白」のラベルである", () => {
        const tile = new Tile(1, Tile.Types[4], 0, 0)
        expect(tile.label).to.eq("白")
        expect(tile.code).to.eq("1-dragons")
      })
    })
  })
});
