const fs = require('fs-extra')

async function writeToFile (path, fileName, content) {
  let file = `./${path}/${fileName}.md`
  await fs.outputFile(file, content)
  console.log('Wrote to file:', file)
}

module.exports = writeToFile
