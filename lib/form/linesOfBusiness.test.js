import { getList } from './linesOfBusiness'

describe('form/linesOfBusiness', () => {
  describe('#getList', () => {
    it('returns an Array', () => {
      expect(getList()).toBeInstanceOf(Array)
    })
    it('returns DropDown compatible items', () => {
      expect(getList()[0]).toEqual({
        label: expect.any(String),
        value: expect.any(String)
      })
    })
    it('sorts the list alphabetically', () => {
      const list = getList()
      expect(list[0].label < list[1].label).toBe(true)
      expect(list[10].label < list[11].label).toBe(true)
      expect(list[20].label < list[21].label).toBe(true)
      expect(list[30].label < list[31].label).toBe(true)
      expect(list[40].label < list[41].label).toBe(true)
      expect(list[50].label < list[51].label).toBe(true)
      expect(list[60].label < list[61].label).toBe(true)
      expect(list[70].label < list[71].label).toBe(true)
      expect(list[80].label < list[81].label).toBe(true)
    })
  })
})
