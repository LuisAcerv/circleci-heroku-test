const mockRes = require('jest-mock-express').response;

test('Example test', () => {
  const res = mockRes();
  res.status(200).send();
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.send).toHaveBeenCalled();
});
