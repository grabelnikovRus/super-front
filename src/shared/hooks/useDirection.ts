import { type MutableRefObject, useState } from "react";

import s from "./diretcion.module.scss"

interface UseDirectionType {
    ref: MutableRefObject<HTMLDivElement | null>
}

export const useDirection = ({ ref }: UseDirectionType) => {
  const [vertDirection, setVertDirection] = useState(s.vert_top)
  const [horDirection, setHorDirection] = useState(s.hor_left)

  const setDirection = () => {
    const objRect = ref.current?.getBoundingClientRect()

    if (!objRect) return;

    const top = objRect.top;
    const left = objRect.left

    setVertDirection((window.innerHeight / 2) < top ? s.vert_top : s.vert_bottom)
    setHorDirection((window.innerWidth / 2) <  left ? s.hor_left : s.hor_right) 
  }

  return {
    vertDirection,
    horDirection,
    setDirection
  }
}