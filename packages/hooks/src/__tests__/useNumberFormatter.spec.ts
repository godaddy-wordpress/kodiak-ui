import { renderHook } from '@testing-library/react-hooks'
import  useNumberFormatter  from '../useNumberFormatter'


describe('useNumberFormatter', () => {
    it('should return formatted number', () => {
     
      const format = renderHook(() => useNumberFormatter(undefined, {
        style: "currency",
        currency: "USD",
      }));
      expect(format.result.current(134)).toBe("$134.00");

      
    })
  })