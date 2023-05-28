import { FC, useState } from "react"
import s from "./Counter.module.scss"

export const Counter: FC = () => {
    const [value, setValue] = useState(0)
    return <div>
        <button className={s.btn} onClick={() => setValue((prev) => prev + 1)}>{value}</button>
    </div>
}