import { renderHook } from '@testing-library/react-hooks'
import { useSubscribe, publish } from '../useSubscribe'

describe('useSubscribe', () => {
  const key = 'key1'
  it('should receive messages from publish', () => {
    const handlerSpy = jest.fn()

    renderHook(() =>
      useSubscribe(
        {
          key,
          handler: handlerSpy,
        },
        [],
      ),
    )

    publish(key, 'a message')

    expect(handlerSpy).toBeCalledWith('a message')
    expect(handlerSpy).toBeCalledTimes(1)

    // Sending to something we're not listening to
    publish('not the key', 'a message')
    expect(handlerSpy).toBeCalledTimes(1)

    // Send an object
    publish(key, { messageType: 'SOME_ACTION' })
    expect(handlerSpy).toBeCalledWith({ messageType: 'SOME_ACTION' })
    expect(handlerSpy).toBeCalledTimes(2)
  })
})
