// util.js helper functions

/** constant that defines the rate of increate of items in layer items as 
 * number of layers increases */
const NUM_SURROUNDING_ITEMS: number = 8

/**
 * The coordinate range for edges of a spiral with the origin in the center at (0,0)
 * @param range The absolute value of the magnitude
 * @returns The range of spiral coordinates with repect to to an origin in the middle
 */
export function getRange(numLayers: number): number[] {
  return [-numLayers, numLayers]
}

/**
 * The number of layers required for a spiral with the given maximum value
 * @param maxValue The maximum value of the series
 * @returns The number of layers in the spiral
 */
export function countLayers(maxValue): number {
  var numLayers=1
  while(maxValue > countSpiralItems(numLayers)) {
    numLayers++
  }
  return numLayers
}

/**
 * Calculate the number of items in a spiral with a complete outer layer
 * (e.g. Sum(8k) for k=1 to k=n)
 * @param numLayers Number of layers in the spiral
 * @returns The number of items in a spiral with a complete outer layer
 */
export function countSpiralItems(numLayers: number): number {
  const coefficientSum = seriesSum(numLayers)
  return coefficientSum * NUM_SURROUNDING_ITEMS
}

/**
 * Calculate the sum of all the coefficients for the layers, (e.g. Sum(k) from k=1 to k=n)
 * @param n Number of terms in the equation
 * @return the sum of all the coefficients for the layers
 */
export function seriesSum(n: number): number{
  return n * ((n+1)/2)
}

/**
 * Determine how much of the outer layer in the spiral matrix will be covered for intelligent printing
 * @param maxValue 
 * @param numLayers The number of layers in the spiral
 * @returns The ratio or items in the outer layer
 */
export function layerCoverageRatio(maxValue: number, numLayers: number = null) {
  let count = numLayers || countLayers(maxValue) // calculate the number of layers in the spiral if not computed
  let numItemsInLayer = NUM_SURROUNDING_ITEMS * count//sumGeometricSeries(count) - sumGeometricSeries(count -1)
  let ratio = (maxValue - countSpiralItems(count-1)) / numItemsInLayer
  return ratio
}

/**
 * Initialize an empty matrix that will define a spiral
 * @param size The size of the matrix that will define the spiral
 * @returns An size x size matrix
 */
export function initializeMatrix(size: number): number[][] {
  var retVal = new Array(size)
  for(let idx=0; idx<retVal.length; idx++) {
    retVal[idx] = new Array(size)
  }
  return retVal
}