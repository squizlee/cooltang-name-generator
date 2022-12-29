import { generate_name } from './main.js'
import adjectives from './data/adjectives.js'
import nouns from './data/nouns.js'

it('should use an adjective and a noun from the selected data.', () => {
  const name = generate_name()
  const adjective = name.split(' ')[0]
  const noun = name.split(' ')[1]
  
  expect(adjectives).toContain(adjective)
  expect(nouns).toContain(noun)
})

it('should create a random number from 1 to the maxNum argument provided.', () => {
  const maxNum = 5
  const name = generate_name(maxNum)
  const randomNumber = + name.split(' ')[2]

  expect(randomNumber).toBeGreaterThanOrEqual(1)
  expect(randomNumber).toBeLessThanOrEqual(maxNum)
})

it('should create three names separated by the same separator.', () => {
  const separator = '-'
  const name = generate_name(5, separator)

  expect(name.split(separator).length).toBe(3)
})

