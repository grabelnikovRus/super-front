import { useCallback, useEffect, useRef } from "react";

export function useThrottle<T>(cb: (...args: T[]) => void, delay: number) {
    const isCall = useRef(false)
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        return () => {
            if (timer.current) clearTimeout(timer.current)
        }
    }, [])

    return useCallback((...args: T[]) => {
        if (isCall.current) return
        /* eslint n/no-callback-literal: "off" */
        cb(...args);
        isCall.current = true

        timer.current = setTimeout(() => {
            isCall.current = false
        }, delay)
    }, [cb, delay])
}