class Counter {
  count: number = 0;
  increment(): void {
    this.count++;
  }
}

describe('counter', ()=>{
  let counter: Counter;

  beforeAll(()=>{
    counter = new Counter();
  });

  beforeEach(()=>{
    counter.count = 0;
  })

  afterEach(()=>{
    console.log(`counter.count = ${counter.count}`)
  })

  it("should increment", () => {
    counter.increment();
    expect(counter.count).toEqual(1);
  });
    it("should increment twice", () => {
    counter.increment();
    counter.increment();
    expect(counter.count).toEqual(2);
  });
})