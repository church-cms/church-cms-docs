import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  use,
  useEffect,
  useState,
} from 'react'
import { flushSync } from 'react-dom'

import { useBrowserNativeTransitions } from './browser-native'

const ViewTransitionsContext = createContext<
  Dispatch<SetStateAction<(() => void) | null>>
  // biome-ignore lint/suspicious/noEmptyBlockStatements: intentional
>(() => () => {})

export function useSetFinishViewTransition() {
  return use(ViewTransitionsContext)
}

export function ViewTransitions({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const [finishViewTransition, setFinishViewTransition] = useState<(() => void) | null>(null)

  useEffect(() => {
    if (finishViewTransition) {
      setTimeout(() => {
        flushSync(() => {
          finishViewTransition()
          setFinishViewTransition(null)
        })
      }, 0)
    }
  }, [finishViewTransition])

  useBrowserNativeTransitions()

  return (
    <ViewTransitionsContext.Provider value={setFinishViewTransition}>
      {children}
    </ViewTransitionsContext.Provider>
  )
}
