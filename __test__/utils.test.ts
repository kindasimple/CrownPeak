import {
    countLayers,
    countSpiralItems,
    layerCoverageRatio,
    seriesSum,
} from '../utils'
import {spiral} from '../mocks'


describe("Spiral Properties", () => {
    it("Counts layers in a series", () => {
        const targetValue = 8
        const actual = 1

        expect(countLayers(targetValue)).toEqual(actual)
    })

    it("Calculates a complete spiral as a geometric series", () => {
        expect(countSpiralItems(1)).toEqual(8)
        expect(countSpiralItems(2)).toEqual(24)
        expect(countSpiralItems(3)).toEqual(48)
    })

    it("Calculates coefficents for a number", () => {
        expect(seriesSum(4)).toBe(10)
    })

    it("Calculates coefficents for a number", () => {
        expect(seriesSum(4)).toBe(10)
        expect(seriesSum(3)).toBe(6)
        expect(seriesSum(2)).toBe(3)
        expect(seriesSum(1)).toBe(1)
    })
})