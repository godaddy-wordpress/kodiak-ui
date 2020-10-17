import { renderHook } from '@testing-library/react-hooks'
import  useNumberFormatter  from '../useNumberFormatter'


describe('useNumberFormatter', () => {
    it('should return formatted number', () => {
     
      const format = renderHook(() => useNumberFormatter(undefined, {
        style: "currency",
        currency: "USD",
      }));
      expect(format.result.current(134)).toBe("$134.00");

      const format2 = renderHook(() => useNumberFormatter("de-DE", {
        style: "currency",
        currency: "EUR",
      }));
      expect(format2.result.current(225.25)).toBe("225,25\xa0€");

      const format3 = renderHook(() => useNumberFormatter("ja-JP", {
        style: "currency",
        currency: "JPY",
      }));
      expect(format3.result.current(5832.0)).toBe("￥5,832");

      const format4 = renderHook(() => useNumberFormatter("en-IN", {
        maximumSignificantDigits: 3
      }));
      expect(format4.result.current(123456.789)).toBe("1,23,000");
    })
  })