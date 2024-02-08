import { ReactNode, createContext, useEffect, useMemo, useRef, useState } from "react";

type SpringType = typeof import("@react-spring/web");
type GestureType = typeof import("@use-gesture/react");

export interface AnimationType {
    Spring?: SpringType
    Gesture?: GestureType
    load: boolean
}

interface AnimationProviderProps {
    children: ReactNode
}

export const AnimationLib = createContext<AnimationType>({
    load: false
})

const fetchLib = async () => await Promise.all([
    import("@react-spring/web"), import("@use-gesture/react")
])

export const AnimationProvider = ({ children }: AnimationProviderProps) => {
    const [load, setLoad] = useState(false)
    const spring = useRef<SpringType | undefined>()
    const gesture = useRef<GestureType | undefined>()

    const value = useMemo(() => ({
        Spring: spring.current,
        Gesture: gesture.current,
        load
    }), [load])

    useEffect(() => {
        fetchLib().then(([springLib, gestureLib]) => {
            spring.current = springLib
            gesture.current = gestureLib
            setLoad(true)
        })
    }, [])

    return (
        <AnimationLib.Provider value={value}>
            {children}
        </AnimationLib.Provider>
    )
};
