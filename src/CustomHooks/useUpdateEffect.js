import { useEffect, useRef } from 'react'

export function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true)

  useEffect(() => {
    firstRenderRef.current ? (firstRenderRef.current = false) : callback()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
}
