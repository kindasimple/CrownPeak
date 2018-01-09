// print.ts Print the string representation of the spiral data structure
import './polyfills' //required for String.prototype.padLeft and ts-jest

/**
 * Convert matrix to a block of text for display
 * @param spiral Matrix representation of spiral
 * @param numCellWith The width of each cell
 */
export function printSpiral(spiral: number[][], numCellWith: number = 3): string {
    let output: string = ""
    let line = ""
    for(let r=0; r<spiral.length; r++) {
      if(line !== "") {
        output += '\n'
      }
      line = ""
      for (var c = 0; c < spiral[0].length; c++) {
          if (spiral[r][c] != null) {
              line += spiral[r][c].toString().padStart(numCellWith)
          } else {
              line += "".padStart(numCellWith)
          }
      }
      if(line !== "") {
          output += line
      }
    }
    return output
  }
  