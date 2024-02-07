import { useEffect, type ReactNode, cloneElement, type ReactElement } from "react";
import { Overlay } from "../overlay/Overlay";
import { useSpring, animated, config } from "@react-spring/web"
import { useDrag } from "@use-gesture/react"

import s from "./BottomSheet.module.scss";

interface BottomSheetProps {
  children: ReactNode
  trigger: ReactElement
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void
}

export const BottomSheet = ({ 
  children, 
  isOpen, 
  trigger, 
  onClose, 
  onOpen 
}: BottomSheetProps) => {
  const height = window.innerHeight * 0.3
  const [{ y }, api] = useSpring(() => ({ y: height }))

  const open = (canceled: boolean) => {
    api.start({ y: 0, immediate: false, config: canceled ? config.wobbly : config.stiff })
  }
  const close = (velocity = 0) => {
    api.start({ y: height, immediate: false, config: { ...config.stiff, velocity } })
  }

  const bindProps = useDrag(
    ({ last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel, canceled }) => {
      if (oy < -70) cancel()

      if (last) {
        if (oy > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close(vy)
          onClose()
        } else {
          open(canceled)
        } 
      }

      else api.start({ y: oy, immediate: true })
    },
    { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true }
  )

  useEffect(() => {
    if (isOpen) open(false)
  }, [isOpen])

  const onClickOverlay = () => {
    onClose()
    close(0);
  }

  const display = y.to((py) => (py < height ? "block" : "none"))

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClickOverlay();
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  const Bttn = cloneElement(trigger, { onClick: onOpen })

  return (
    <>
      {Bttn}
      <animated.div style={{ display }} className={s.block}>
        <Overlay isOpen={isOpen} onClick={onClickOverlay}/>
        <animated.div
          className={s.block_content}
          style={{  y }}
          {...bindProps()}
        >
          {children}
         </animated.div>
      </animated.div>
    </>
  );
};
