import { generateSpiral } from './spiral'
import { printSpiral } from './print'

// handle parameters passed from commandline and output spiral
if (require.main === module) {
    const maxValue = parseInt(process.argv[2], 10) || 8
    let spiral = generateSpiral(maxValue)
    let digits = maxValue.toString().length + 1
    let output = printSpiral(spiral, digits)
    console.log(output)
}

