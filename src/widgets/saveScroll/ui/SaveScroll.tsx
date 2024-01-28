import { useAppDispatch } from "@shared/hooks/useAppDispatch"
import { useThrottle } from "@shared/hooks/useThrottle"
import { type UIEvent, useRef, useLayoutEffect, type ReactNode } from "react"
import { useLocation } from "react-router-dom"
import { scrollActions } from "../model/slice/scrollSlice"
import { useSelector } from "react-redux"
import { getScrollPosition } from "../model/selectors"
import { type StateType } from "@app/providers/storeProvider"

interface SaveScrollProps {
    children: ReactNode
    className: string
}

export const SaveScroll = ({ children, className }: SaveScrollProps) => {
    const { pathname } = useLocation()
    const dispatch = useAppDispatch()
    const ref = useRef<HTMLDivElement | null>(null)
    const position = useSelector((state: StateType) => getScrollPosition(state, pathname))

    const onScroll = useThrottle((e: UIEvent) => {
        dispatch(scrollActions.saveScroll({
            pathname,
            position: e.currentTarget.scrollTop
        }))
    }, 300)

    useLayoutEffect(() => {
        if (ref.current) ref.current.scrollTop = position
    }, [position])

    return (
        <div className={className} onScroll={onScroll} ref={ref}>
            {children}
        </div>
    )
}