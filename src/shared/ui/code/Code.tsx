import { useCallback, type FC } from "react";
import { classNames } from "@shared/helpers/lib"
import { Button } from "../button/Button";
import Copy from "@shared/assest/icon/copy.svg"

import s from "./Code.module.scss";

interface CodeProps {
  text: string
}

export const Code: FC<CodeProps> = ({ text }) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <div className={classNames(s.code)}>
      <Button className={s.code_copy} onClick={onCopy}><Copy /></Button>
      <pre>
        <code>
          {text}
        </code>
      </pre>
    </div>
  )
}
