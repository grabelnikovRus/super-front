import { useCallback, useEffect, useRef } from "react"

export function useDebounce<T>(fn: (...args: T[]) => void, delay: number) {
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        return () => {
            if (timer.current) clearTimeout(timer.current)
        }
    }, [])

    return useCallback((...args: T[]) => {
        if(timer.current) clearTimeout(timer.current);

        timer.current = setTimeout(() => {
           fn(...args);
        }, delay)
    }, [fn, delay])
}
