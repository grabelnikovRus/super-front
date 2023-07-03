import { profileReducer } from "@entities/profile"
import { useReducerManager } from "@shared/hooks/useReducerManager"
import { type FC } from "react"

const reducers = { profile: profileReducer }
export const ProfilePage: FC = () => {
  useReducerManager(reducers);

  return (
    <div>
      Профиль
    </div>
  )
}
