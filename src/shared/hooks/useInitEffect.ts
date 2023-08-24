import { useEffect } from "react";

export const useInitEffect = (cb: () => void, array: any[] = []) => {
  useEffect(() => {
    if (_PROJECT_ === "frontend") {
      cb();
    }
  }, array);
};
