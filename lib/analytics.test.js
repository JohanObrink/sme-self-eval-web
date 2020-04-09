import { getPageName } from './analytics';

describe('analytics', () => {
  describe('getPageName', () => {
    it('resolves start page', () => {
      expect(getPageName('/')).toEqual('start');
    });
    it('resolves test page', () => {
      expect(getPageName('/test')).toEqual('test');
    });
    it('resolves test step name', () => {
      expect(getPageName('/test/2')).toEqual('test|steg-2');
    });
    it('resolves report start page', () => {
      expect(getPageName('/report')).toEqual('rapport');
    });
    it('resolves report page', () => {
      expect(getPageName('/report/ABC123')).toEqual('rapport|granska');
    });
  });
});
