import adjectives from './data/adjectives.js'
import nouns from './data/nouns.js'

export function generate_name(maxNum = 0) {
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
    const noun = nouns[Math.floor(Math.random() * nouns.length)]

    return maxNum 
    ? `${adjective} ${noun}${Math.floor(Math.random() * maxNum + 1)}`
    : `${adjective} ${noun}`
}
