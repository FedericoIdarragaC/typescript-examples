test('should be false', ()=>{
  expect(false).toBeFalsy()
})

describe('a group of tests', () => {
  test('first test', ()=>{
    expect('a string').toEqual('a string')
  })
  it('second test', ()=>{
    expect('123').not.toEqual('abc')
  })
  xit('third test', ()=>{
    //skipped
  })
})