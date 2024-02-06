import { useEffect, useState } from "react"

export const useDevice = () => {
    const [isMobile, setIsMobile] = useState(false)
    
    const setBreakpoint = () => {
        setIsMobile(window.matchMedia("(pointer: coarse)").matches)
    }

    useEffect(() => {
        setBreakpoint()
        
        window.addEventListener("resize", setBreakpoint)

        return () => {
            window.removeEventListener("resize", setBreakpoint)
        }
    }, [])

    return isMobile;
}
