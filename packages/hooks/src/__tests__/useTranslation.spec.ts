import { renderHook, act } from '@testing-library/react-hooks'
import { useTranslation } from '../useTranslation'

describe('translation service', () => {
  it('should return text string from t', async () => {
    const { result } = renderHook(() => useTranslation())

    let translatedText = ''
    act(() => {
      translatedText = result.current.t('translated text')
    })

    expect(translatedText).toEqual('translated text')
  })
})
