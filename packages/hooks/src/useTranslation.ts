// Simple proxy function as a placeholder for react-i18next
// until we need the entire translation library this provides a way to
// start wrapping our texts
export function t(stringToTranslate: string) {
  return stringToTranslate
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useTranslation(scope?: string) {
  return {
    t,
  }
}
