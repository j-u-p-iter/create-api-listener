import { createApiListener } from '../';

describe('createApiListener', () => {
  let response: { [key: string]: number };
  let apiCall: () => Promise<any>;

  beforeAll(() => {
    response = { data: 5 };

    apiCall = () => new Promise(resolve => {
      setTimeout(() => resolve(response), 2000);
    });
  });

  describe('when we get necessary response', () => {
    it('should be resolved with response', async () => {
      const callback = (response: any) => response.data === 5;

      const apiListener = createApiListener(apiCall, callback);

      const result = await apiListener();
      const expected = response;

      expect(result).toBe(expected);
    });
  });

  describe('when we don`t get necessary response', () => {
    it('should be resolved with last response after time runs out', async () => {
      const callback = (response: any) => response.data === 4;

      const apiListener = createApiListener(apiCall, callback, 0, 3000);

      const result = await apiListener();
      const expected = response;

      expect(result).toBe(expected);
    });
  });
});
