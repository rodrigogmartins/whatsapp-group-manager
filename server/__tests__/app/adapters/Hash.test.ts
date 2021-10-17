import { HashAdapter } from '@/app/adapters'

describe('Hash Adapter Test', () => {
  describe('Generate Hash', () => {
    it('should generate hash from Empty', async () => {
      const hash = await HashAdapter.generate('')

      expect(hash).not.toEqual('')
    })

    it('should generate hash from string', async () => {
      const hash = await HashAdapter.generate('MyHash')

      expect(hash).not.toEqual('hash')
    })
  })

  describe('Compare Hash', () => {
    describe('should return FALSE', () => {
      it('when compare hash with empty string', async () => {
        const isValidPassword = await HashAdapter.compare('', 'Myp4$$word')

        expect(isValidPassword).toEqual(false)
      })

      it('when compare a string with empty Hash', async () => {
        const isValidPassword = await HashAdapter.compare('MyHash', '')

        expect(isValidPassword).toEqual(false)
      })

      it('when compare a invalid Hash', async () => {
        const isValidPassword = await HashAdapter.compare(
          'MyHash',
          'Myp4$$word'
        )

        expect(isValidPassword).toEqual(false)
      })
    })

    describe('should return TRUE', () => {
      it('when compare a valid Hash', async () => {
        const isValidPassword = await HashAdapter.compare(
          'MyHash',
          '$2b$10$a9EmPi2WkhMltRAeZeU4BuU0nqqMcWV4TL1TjbUdguKEssCdsEQLi'
        )

        expect(isValidPassword).toEqual(true)
      })
    })
  })
})
