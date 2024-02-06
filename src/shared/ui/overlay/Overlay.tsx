import { classNames as cn} from "../../helpers/lib"
import s from "./Overlay.module.scss"

interface OverlayProps {
    onClick: () => void
    isOpen: boolean
}

export const Overlay = ({ onClick, isOpen }: OverlayProps) => (
    <div onClick={onClick} className={cn(s.overlay, { [s.overlay__open]: isOpen })} />
)
