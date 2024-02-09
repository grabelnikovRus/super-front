import { 
  useEffect, 
  type ReactNode, 
  cloneElement, 
  type ReactElement, 
  useContext 
} from "react";
import { Overlay } from "../overlay/Overlay";
import { 
  AnimationLib, 
  AnimationProvider, 
  AnimationType 
} from "../../helpers/components/AnimationProvider";
import { Loader } from "../loader/Loader";

import s from "./BottomSheet.module.scss";

interface BottomSheetProps {
  children: ReactNode
  trigger: ReactElement
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void
}

const BottomSheet = ({ 
  children, 
  isOpen, 
  trigger, 
  onClose, 
  onOpen 
}: BottomSheetProps) => {
  const { 
    Spring: { useSpring, config, animated }, 
    Gesture: { useDrag }
  } = useContext(AnimationLib) as Required<AnimationType>;

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
    <div>
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
    </div>
  );
};

const BottomSheetAsync = (props: BottomSheetProps) => {
  const { load } = useContext(AnimationLib)

  if (!load) return <Loader />

  return <BottomSheet {...props}/>
}

export const BottomSheetProvider = (props: BottomSheetProps) => (
  <AnimationProvider><BottomSheetAsync {...props} /></AnimationProvider>
);
