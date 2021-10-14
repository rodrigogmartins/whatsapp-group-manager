import { HashAdapter } from '@/app/adapters'

test('Generate Hash from Empty', async () => {
  const hash = await HashAdapter.generate('')

  expect(hash).not.toEqual('')
})

test('Generate Hash from string', async () => {
  const hash = await HashAdapter.generate('MyHash')

  expect(hash).not.toEqual('hash')
})

test('Compare Hash with empty string', async () => {
  const isValidPassword = await HashAdapter.compare('', 'Myp4$$word')

  expect(isValidPassword).toEqual(false)
})

test('Compare a string with empty Hash', async () => {
  const isValidPassword = await HashAdapter.compare('MyHash', '')

  expect(isValidPassword).toEqual(false)
})

test('Compare a invalid Hash', async () => {
  const isValidPassword = await HashAdapter.compare('MyHash', 'Myp4$$word')

  expect(isValidPassword).toEqual(false)
})

test('Compare a valid Hash', async () => {
  const isValidPassword = await HashAdapter.compare(
    'MyHash',
    '$2b$10$a9EmPi2WkhMltRAeZeU4BuU0nqqMcWV4TL1TjbUdguKEssCdsEQLi'
  )

  expect(isValidPassword).toEqual(true)
})
