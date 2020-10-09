import { renderHook } from '@testing-library/react-hooks'
import { useNumberFormatter } from '../useNumberFormatter'


describe('useNumberFormatter', () => {
    it('should return formatted number', () => {
     
      const value = renderHook(() => useNumberFormatter(134, 'ja-JP', 'JPY', 'currency'))
      expect(value.result.current).toBe("￥134");

      const value2 = renderHook(() => useNumberFormatter(5030, 'en-US', 'USD', 'currency'))
      expect(value2.result.current).toBe("$5,030.00");

      const value3 = renderHook(() => useNumberFormatter(150.23, 'de-DE', 'EUR', 'currency'))
      expect(value3.result.current).toBe("150,23\xa0€");

    })
  })