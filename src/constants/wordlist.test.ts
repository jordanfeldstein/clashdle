import { fail } from 'assert'

import { WORDS } from './wordlist'

    expect(WORDS.length).toEqual(uniqueWords.length)

    if (uniqueWords.length !== WORDS.length) {
      uniqueWords.forEach((w) => {
        const ww = WORDS.filter((x) => x === w)
        if (ww.length > 1) {
          fail(`The word ${w} is not unique.`)
        }
      })
    }
  })
})
