"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spiral_1 = require("../spiral");
const mocks_1 = require("../mocks");
describe("generates a spiral", () => {
    it("draws a layer 1 downwards vertical", () => {
        const expected = [[null, null, null], [null, 0, 1], [null, null, 2]];
        var spiral = [[null, null, null], [null, 0, null], [null, null, null]];
        const maxValue = 8;
        const layer = 1;
        const [lowerBound, upperBound] = [-layer, layer];
        const lowerLayerUpperBound = layer - 1;
        const transform = [1, 0];
        let next = 1;
        spiral_1.drawLine(spiral, maxValue, [-lowerLayerUpperBound, upperBound], transform, layer, next, (i) => i + layer, (i) => i + layer);
        expect(spiral).toEqual(expected);
    });
    it("draws a layer 1 leftwards horizontal", () => {
        const expected = [[null, null, null], [null, 0, null], [4, 3, null]];
        var spiral = [[null, null, null], [null, 0, null], [null, null, null]];
        const maxValue = 8;
        const layer = 1;
        const [lowerBound, upperBound] = [-layer, layer];
        const lowerLayerUpperBound = layer - 1;
        const transform = [0, -1];
        const next = 3;
        spiral_1.drawLine(spiral, maxValue, [upperBound, lowerLayerUpperBound], transform, layer, next, (i) => i + layer, (i) => i + layer);
        expect(spiral).toEqual(expected);
    });
    it("makes a three layer spiral", () => {
        const input = 8;
        const expected = mocks_1.spiral["8"];
        expect(spiral_1.generateSpiral(input)).toEqual(expected);
    });
});
//# sourceMappingURL=spiral.test.js.map