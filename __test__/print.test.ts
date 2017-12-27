import { 
    printSpiral, 
} from '../print'
import {spiral} from '../mocks'

describe("outputs a spiral", () => {

    it("creates a properly formed string", () => {
        const input = spiral["8"]
        const numWidth = 1
        const expected = 
`678
501
432`
        expect(printSpiral(input, numWidth)).toEqual(expected)
    })
})