import { renderHook, act } from '@testing-library/react-hooks'
import { usePagination } from '../usePagination'

describe('usePagination', () => {
  let callback: () => void

  beforeEach(() => {
    callback = jest.fn()
  })

  it('should return the handler for navigating', () => {
    const { result } = renderHook(() =>
      usePagination({
        numberOfItems: 25,
        pageInfo: {
          endCursor: 'MVT',
          hasNextPage: true,
          hasPreviousPage: true,
          startCursor: 'ABC',
        },
        onPageChange: callback,
      }),
    )

    expect(result.current.handleNavigate).toBeDefined()

    act(() => {
      result.current.handleNavigate({ name: 'next' })
    })

    expect(callback).toHaveBeenCalledWith({
      first: 25,
      after: 'MVT',
    })

    act(() => {
      result.current.handleNavigate({ name: 'prev' })
    })

    expect(callback).toHaveBeenCalledWith({
      last: 25,
      before: 'ABC',
    })

    act(() => {
      result.current.handleNavigate({ name: 'first' })
    })

    expect(callback).toHaveBeenCalledWith({
      first: 25,
    })

    act(() => {
      result.current.handleNavigate({ name: 'last' })
    })

    expect(callback).toHaveBeenCalledWith({
      last: 25,
    })
  })
})
