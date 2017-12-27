"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const print_1 = require("../print");
const mocks_1 = require("../mocks");
describe("outputs a spiral", () => {
    it("creates a properly formed string", () => {
        const input = mocks_1.spiral["8"];
        const numWidth = 1;
        const expected = `678
501
432`;
        expect(print_1.printSpiral(input, numWidth)).toEqual(expected);
    });
});
//# sourceMappingURL=print.test.js.map