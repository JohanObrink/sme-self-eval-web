import { form } from './data';

describe('data/form', () => {
  describe('form', () => {
    it('exists', () => {
      expect(form).toBeDefined();
    });
    it('contains steps', () => {
      expect(form.steps).toBeInstanceOf(Array);
    });
  });
});
