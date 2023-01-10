class MyCallbackClass {
  executeCallback(
    value: string,
    callbackFn: (value: string) => null
  ) {
    console.log(`executeCallback invoking callbackFn`);
    callbackFn(value);
  }
}

it("should mock callback function", () => {
  let mock = jest.fn();

  let myCallbackClass = new MyCallbackClass();
  myCallbackClass.executeCallback('test', mock);

  expect(mock).toHaveBeenCalled()
});