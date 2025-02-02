import chalk from 'chalk'
import { generate } from 'random-words'
// Fügen Sie hier die korrekten Imports ein. Verwenden Sie import, nicht require.

const word1 = generate({ exactly: 1, minLength: 11, wordsPerString: 1 })
const word2 = generate({ exactly: 1, minLength: 11, wordsPerString: 1 })
console.log(`The ${chalk.greenBright(word1)} is ${chalk.redBright(word2)}.`)

export const sum = (a, b) => {
  return a + b
}
