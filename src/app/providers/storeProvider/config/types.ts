import { type CounterShema } from "@entities/counter";
import { type LoginSchema } from "@feature/authByUser";
import { type store } from "../ui/StoreProvider";
import { type UserSchema } from "@entities/user";

export interface StateType {
  counter: CounterShema
  login?: LoginSchema
  user: UserSchema
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
