import adjectives from './data/adjectives.js'
import nouns from './data/nouns.js'

export function generate_name(maxNum = 0, separator = ' ') {
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
    const noun = nouns[Math.floor(Math.random() * nouns.length)]
    const randomNumber = Math.floor(Math.random() * maxNum + 1)

    return maxNum
    ? [adjective, noun, randomNumber].join(separator)
    : [adjective, noun].join(separator)
}
