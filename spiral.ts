// draw.ts

import './types'
import { getRange } from './utils'
import {
  initializeMatrix,
  layerCoverageRatio,
  countSpiralItems,
  countLayers,
} from './utils'




/**
 * Draw a spiral in a matrix by calculating the position of line segments
 * in an x,y coordinate system and translating then translating the position of items 
 * such that the origin is in the top left for printing
 * @param maxValue The largest value and last numer of the spiral sequence
 */
export function generateSpiral(maxValue: number): number[][] {
  let numLayers = countLayers(maxValue)
  let isSkinny = layerCoverageRatio(maxValue, numLayers) < .5 // flag if we have a layer with one vertical segment
  let isShort = layerCoverageRatio(maxValue, numLayers) < .25 // flag if we have a layer without a 
  
  var spiral: number[][] = initializeMatrix(2 * numLayers + 1)
  let [lowerBound, upperBound] = getRange(numLayers)
  const translateRow = (index: number): number => index + ((isShort) ? numLayers-1: numLayers)
  const translateCol = (index: number): number => index + ((isSkinny) ? numLayers-1: numLayers)
  spiral[translateRow(0)][translateCol(0)] = 0
  let nextValue = 1
  var result = { spiral, value: nextValue }
  for(let iLayer=1; iLayer<=numLayers; iLayer++) {
    result = fillLayer(result.spiral, maxValue, result.value, iLayer, translateRow, translateCol)
  }
  return result.spiral
}


/**
 * Iterate through a series that defines a line segment as defined by a position, layer index,
 * and transformation that defines the points on that line segment
 * @param spiral A data structure that defines the spiral
 * @param maxValue The largest value in the spiral series
 * @param position The (x,y) coordinate position of the start of the next line segment to draw
 * @param transform A transformation the defines the line 
 * @param layerIndex The number of layers
 * @param value The next value in the series
 * @param translateRow A transformation that describes the row of the next point on the line segment
 * @param translateCol A transformation that describes the column fo the next point on the line segment
 * @returns A ResultItem defining 
 *  - the spiral with the new line segment 
 *  - the value to begin drawing the next line
 */
export function drawLine(spiral: number[][], 
                  maxValue: number, 
                  position: number[],
                  transform: number[], 
                  layerIndex: number, 
                  value: number,
                  translateRow: (number) => number = (i) => i,
                  translateCol: (number) => number = (i) => i
                ): IResultItem {
    var [lowerBound, upperBound] = getRange(layerIndex)
    var [row, column] = position
    while(value <= maxValue && 
          row <= upperBound && row >= lowerBound &&
          column <= upperBound && column >= lowerBound) {
            
      spiral[translateRow(row)][translateCol(column)] = (value <= maxValue) ? value++ : null
      row += transform[0]
      column += transform[1]
    }
    return { spiral, value }
}

/**
 * Draw the four line segments to complete a new layer
 * @param spiral A data structure that defines the spiral
 * @param maxValue The largest value in the spiral series
 * @param nextValue The value the next layer begins with
 * @param layerIndex The index of the layer to filll
 * @param translateRow A function that translates rows from the center to some other coordinate system
 * @param translateCol A function that translates columns from the center to some other coordinate system
 */
export function fillLayer(spiral: number[][], 
                          maxValue: number, 
                          nextValue: number, 
                          layerIndex: number, 
                          translateRow: (number) => number,
                          translateCol: (number) => number
                        ): IResultItem {
    var [lowerBound, upperBound] = getRange(layerIndex)
    var lowerLayerIndexUpperBound = layerIndex-1
    if(lowerLayerIndexUpperBound < 0) { lowerLayerIndexUpperBound = 0 }
    var result = drawLine(spiral, maxValue, [-lowerLayerIndexUpperBound, upperBound], [1,0], layerIndex, nextValue, translateRow, translateCol)
    result = drawLine(result.spiral, maxValue, [upperBound, lowerLayerIndexUpperBound], [0,-1], layerIndex, result.value, translateRow, translateCol)
    result = drawLine(result.spiral, maxValue, [lowerLayerIndexUpperBound, -upperBound], [-1, 0], layerIndex, result.value, translateRow, translateCol)
    result = drawLine(result.spiral, maxValue, [-upperBound, -lowerLayerIndexUpperBound], [0, 1], layerIndex, result.value, translateRow, translateCol)
    return result
}


enum SegmentType { RightDown = 1, BottomToLeft, LeftUp, TopToRight }

function getLineDefinition(type: SegmentType, layerIndex: number) {
    var [lowerBound, upperBound] = getRange(layerIndex)
    var lowerLayerIndexUpperBound = layerIndex-1
    if(lowerLayerIndexUpperBound < 0) { lowerLayerIndexUpperBound = 0 }

    var position = null
    var transform = null

    switch(type) {
      case SegmentType.RightDown: 
        position = [-lowerLayerIndexUpperBound, upperBound] //top right
        transform = [1,0]
        break
      case SegmentType.BottomToLeft:
        position = [upperBound, lowerLayerIndexUpperBound]
        transform = [0,-1]
        break
      case SegmentType.LeftUp:
        position = [lowerLayerIndexUpperBound, -upperBound]
        transform = [-1, 0]
        break
      case SegmentType.TopToRight:
        position = [-upperBound, -lowerLayerIndexUpperBound]
        transform = [0, 1]
        break
    }
    return { position, transform }
}

// export function fillLayer(spiral: number[][], 
//                           maxValue: number, 
//                           nextValue: number, 
//                           level: number, 
//                           translateRow: (number) => number,
//                           translateCol: (number) => number
//                         ): number {

//     var next = nextValue
//     var line = getLineDefinition("1", level)
//     next = drawLine(spiral, maxValue, [].concat(line.position), [].concat(line.transform), level, next, translateRow, translateCol)
//     line = getLineDefinition("2", level)
//     next = drawLine(spiral, maxValue, [].concat(line.position), [].concat(line.transform), level, next, translateRow, translateCol)
//     line = getLineDefinition("3", level)
//     next = drawLine(spiral, maxValue, [].concat(line.position), [].concat(line.transform), level, next, translateRow, translateCol)
//     line = getLineDefinition("4", level)
//     next = drawLine(spiral, maxValue, [].concat(line.position), [].concat(line.transform), level, next, translateRow, translateCol)
    
//     return next
// }