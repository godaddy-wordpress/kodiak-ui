import * as React from 'react'

type CreateStateDispatchContextArgs<StateType, ActionType> = {
  reducer: React.Reducer<StateType, ActionType>
}

type StateDispatchProviderProps<StateType> = React.PropsWithChildren<{
  initialState: StateType
}>

type CreateStateDispatchContextReturn<StateType, ActionType> = {
  useDispatch: () => {
    dispatch: React.Dispatch<ActionType>
  }
  useContextState: () => StateType
  StateDispatchProvider: (
    props: StateDispatchProviderProps<StateType>,
  ) => React.ReactElement
}

export function createStateDispatchContext<StateType, ActionType>({
  reducer,
}: CreateStateDispatchContextArgs<
  StateType,
  ActionType
>): CreateStateDispatchContextReturn<StateType, ActionType> {
  const defaultDispatch: React.Dispatch<ActionType> = () => undefined // for defaults only

  /**----------------------------------------------------
  /* Setup context and provider
  /*--------------------------------------------------**/

  const StateContext = React.createContext<StateType | undefined>(undefined)
  const DispatchContext = React.createContext({ dispatch: defaultDispatch })

  function StateDispatchProvider({
    children,
    initialState,
  }: StateDispatchProviderProps<StateType>) {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={{ dispatch }}>
          {children}
        </DispatchContext.Provider>
      </StateContext.Provider>
    )
  }

  /**----------------------------------------------------
  /* Setup useState
  /*--------------------------------------------------**/
  function useContextState() {
    const context = React.useContext(StateContext)

    if (context === undefined) {
      throw new Error(`Must be used within the corresponding provider`)
    }

    return context
  }

  /**----------------------------------------------------
  /* Setup useContextProvider
  /*--------------------------------------------------**/
  function useDispatch(): { dispatch: React.Dispatch<ActionType> } {
    const context = React.useContext(DispatchContext)

    if (context === undefined) {
      throw new Error(`Must be used within the corresponding provider`)
    }

    return { dispatch: context.dispatch }
  }

  return {
    useContextState,
    useDispatch,
    StateDispatchProvider,
  }
}
