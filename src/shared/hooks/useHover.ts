import { useCallback, useState } from "react"

type UseHoverType = [
    boolean,
    {
        onMouseLeave: () => void
        onMouseEnter: () => void
    }
]

export const useHover = (): UseHoverType => {
    const [isHover, setIsHover] = useState(false)

    const onMouseLeave = useCallback(() => { setIsHover(false); }, [setIsHover])

    const onMouseEnter = useCallback(() => { setIsHover(true); }, [setIsHover])

    return [
        isHover,
        {
            onMouseLeave,
            onMouseEnter
        }
    ]
}