"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
describe("Spiral Properties", () => {
    it("Counts layers in a series", () => {
        const targetValue = 8;
        const actual = 1;
        expect(utils_1.countLayers(targetValue)).toEqual(actual);
    });
    it("Calculates a complete spiral as a geometric series", () => {
        expect(utils_1.countSpiralItems(1)).toEqual(8);
        expect(utils_1.countSpiralItems(2)).toEqual(24);
        expect(utils_1.countSpiralItems(3)).toEqual(48);
    });
    it("Calculates coefficents for a number", () => {
        expect(utils_1.seriesSum(4)).toBe(10);
    });
    it("Calculates coefficents for a number", () => {
        expect(utils_1.seriesSum(4)).toBe(10);
        expect(utils_1.seriesSum(3)).toBe(6);
        expect(utils_1.seriesSum(2)).toBe(3);
        expect(utils_1.seriesSum(1)).toBe(1);
    });
});
//# sourceMappingURL=utils.test.js.map