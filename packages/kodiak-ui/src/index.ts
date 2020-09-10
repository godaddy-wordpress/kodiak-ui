import themeDefault from './theme-default'

type CreateDesignSystemOptions = {
  breakpoints: any
  space: any
}

type CreateDesignSystemReturn = {
  theme: any
}

export function createDesignSystem(
  options: CreateDesignSystemOptions,
): CreateDesignSystemReturn {
  const theme = {
    ...themeDefault,
    ...options,
  }
  return {
    theme,
  }
}
