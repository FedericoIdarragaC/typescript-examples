class MockAsync {
  executeSlowFunction(
    complete: (value: string) => void
  ){
    setTimeout(() => {
      complete('completed')
    }, 1000)
  }
}

describe('async test with done', ()=>{
  let returnedValue: string;

  beforeEach((done: jest.DoneCallback)=>{
    let mockAsync = new MockAsync();

    mockAsync.executeSlowFunction((value:string) => {
      returnedValue = value;
      done()
    })
  })

  it('should return value after 1 second', ()=>{
    expect(returnedValue).toEqual('completed')
  })
})