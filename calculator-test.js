it("matches objects with the expect key/value pairs", function() {
  expect(setupIntialValues).toEqual(jasmine.objectContaining({
    amount: 10000
  }));
  expect(setupIntialValues).toEqual(jasmine.objectContaining({
    years: 10
  }));
  expect(setupIntialValues).toEqual(jasmine.objectContaining({
    rate: 4.5
  }));
});
//dev ref list
  //jasmine object help
  //https://stackoverflow.com/questions/31528200/jasmine-test-for-object-properties
  