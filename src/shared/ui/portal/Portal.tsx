import { type ReactNode, type FC } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: ReactNode
  container?: HTMLElement;
}

export const Portal: FC<PortalProps> = ({ children, container }) => {
  return container ? ReactDOM.createPortal(children, container) : <>{children}</>;
};
